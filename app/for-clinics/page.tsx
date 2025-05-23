'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ForClinicsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    clinicName: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact/clinic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('送信に失敗しました');
      }

      toast.success('お問い合わせを受け付けました');
      setFormData({
        clinicName: '',
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      toast.error('送信中にエラーが発生しました');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-12">
        クリニック様向けサービス
      </h1>

      {/* 募集要項 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">募集要項</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">対象クリニック</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 一般診療を行っている医療機関</li>
              <li>• オンライン予約システムの導入を検討されている</li>
              <li>• 患者様の利便性向上に取り組まれている</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">必要要件</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• インターネット環境</li>
              <li>• パソコンまたはタブレット</li>
              <li>• スタッフの基本的なITリテラシー</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* 導入フロー */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">導入フロー</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="text-2xl font-bold text-primary mb-2">01</div>
            <h3 className="text-xl font-semibold mb-2">お問い合わせ</h3>
            <p className="text-gray-600">
              フォームまたは電話にてお問い合わせください
            </p>
          </Card>

          <Card className="p-6">
            <div className="text-2xl font-bold text-primary mb-2">02</div>
            <h3 className="text-xl font-semibold mb-2">ヒアリング</h3>
            <p className="text-gray-600">
              クリニックの現状とご要望をお伺いします
            </p>
          </Card>

          <Card className="p-6">
            <div className="text-2xl font-bold text-primary mb-2">03</div>
            <h3 className="text-xl font-semibold mb-2">システム導入</h3>
            <p className="text-gray-600">
              最短1週間でシステム導入が可能です
            </p>
          </Card>

          <Card className="p-6">
            <div className="text-2xl font-bold text-primary mb-2">04</div>
            <h3 className="text-xl font-semibold mb-2">運用開始</h3>
            <p className="text-gray-600">
              スタッフ研修後、本格運用を開始します
            </p>
          </Card>
        </div>
      </section>

      {/* メリット */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">導入メリット</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">業務効率化</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 電話対応の削減</li>
              <li>• 予約管理の自動化</li>
              <li>• スタッフの負担軽減</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">患者様の利便性向上</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 24時間予約可能</li>
              <li>• スマートフォンから簡単予約</li>
              <li>• 予約状況のリアルタイム確認</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">収益向上</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• キャンセル率の低下</li>
              <li>• 新規患者の獲得</li>
              <li>• 診療効率の向上</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section>
        <h2 className="text-2xl font-bold mb-6">お問い合わせ・資料請求</h2>
        <Card className="max-w-2xl mx-auto p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="clinicName">クリニック名</Label>
              <Input
                id="clinicName"
                value={formData.clinicName}
                onChange={(e) =>
                  setFormData({ ...formData, clinicName: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label htmlFor="name">お名前</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label htmlFor="email">メールアドレス</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">電話番号</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label htmlFor="message">お問い合わせ内容</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="min-h-[200px]"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? '送信中...' : '資料請求・お問い合わせ'}
            </Button>
          </form>
        </Card>
      </section>
    </div>
  );
}
