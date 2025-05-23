import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// メール送信用のトランスポーター設定
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const { clinicName, name, email, phone, message } = await request.json();

    // 管理者宛のメール送信
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `[クリニック提携] ${clinicName}様からのお問い合わせ`,
      text: `
クリニック名: ${clinicName}
担当者名: ${name}
メールアドレス: ${email}
電話番号: ${phone}

お問い合わせ内容:
${message}
      `,
    });

    // 自動返信メール送信
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'クリニック提携に関するお問い合わせを受け付けました',
      text: `
${name} 様

クリニック提携に関するお問い合わせありがとうございます。
以下の内容で受け付けました。

クリニック名: ${clinicName}
担当者名: ${name}
メールアドレス: ${email}
電話番号: ${phone}

お問い合わせ内容:
${message}

内容を確認次第、担当者よりご連絡させていただきます。
なお、資料請求いただいた場合は、別途メールにて送付させていただきます。
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('問い合わせエラー:', error);
    return NextResponse.json(
      { error: '問い合わせの送信中にエラーが発生しました' },
      { status: 500 }
    );
  }
} 