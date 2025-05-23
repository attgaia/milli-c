'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

export default function ReservePage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isSpecialClinic, setIsSpecialClinic] = useState(false);

  // 認証チェック
  if (status === 'loading') {
    return <div>読み込み中...</div>;
  }

  if (status === 'unauthenticated') {
    router.push('/login');
    return null;
  }

  const handleReserve = async () => {
    try {
      if (!date && !isSpecialClinic) {
        toast.error('日付を選択するか、特例クリニックにチェックを入れてください');
        return;
      }

      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: date,
          isSpecialClinic,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '予約に失敗しました');
      }

      const data = await response.json();
      
      // Stripe決済ページにリダイレクト
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('決済ページのURLが取得できませんでした');
      }
    } catch (error) {
      console.error('予約エラー:', error);
      toast.error(error instanceof Error ? error.message : '予約処理中にエラーが発生しました');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">予約フォーム</h1>
      
      <Card className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">日時選択</h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>

        <div className="mb-6">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="special-clinic"
              checked={isSpecialClinic}
              onCheckedChange={(checked) => setIsSpecialClinic(checked as boolean)}
            />
            <label
              htmlFor="special-clinic"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              特例クリニック（別途日程調整が必要）
            </label>
          </div>
        </div>

        <Button
          onClick={handleReserve}
          disabled={!date && !isSpecialClinic}
          className="w-full"
        >
          予約する
        </Button>
      </Card>
    </div>
  );
}
