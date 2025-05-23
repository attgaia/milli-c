import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const { date, isSpecialClinic } = await request.json();

    if (!date && !isSpecialClinic) {
      return NextResponse.json(
        { error: '日付を選択するか、特例クリニックにチェックを入れてください' },
        { status: 400 }
      );
    }

    // 予約を作成
    const reservation = await prisma.reservation.create({
      data: {
        date: date ? new Date(date) : null,
        isSpecialClinic,
        status: 'pending',
      },
    });

    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('Stripeのシークレットキーが設定されていません');
    }

    // Stripe決済セッションを作成
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'jpy',
            product_data: {
              name: isSpecialClinic ? '特例クリニック予約' : '通常予約',
            },
            unit_amount: isSpecialClinic ? 5000 : 3000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/reserve`,
      metadata: {
        reservationId: reservation.id,
      },
    });

    if (!session.url) {
      throw new Error('StripeセッションのURLが生成されませんでした');
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('予約エラーの詳細:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: '予約処理中に予期せぬエラーが発生しました' },
      { status: 500 }
    );
  }
} 