'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SpecialPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-12">
        milli-cについて
      </h1>

      {/* 開発の歴史 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">開発の歴史</h2>
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">2018年</h3>
              <p className="text-gray-600">
                がん超早期発見技術の研究開発開始。独自のバイオマーカー技術の確立に着手。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2020年</h3>
              <p className="text-gray-600">
                特許技術の確立。臨床試験の開始。1ミリ以下のがん細胞検出に成功。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2022年</h3>
              <p className="text-gray-600">
                サービス開始。複数の医療機関との提携を開始。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2023年</h3>
              <p className="text-gray-600">
                検査精度の向上。新たなバイオマーカーの発見。サービス拡大。
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* 小林先生紹介 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">小林先生紹介</h2>
        <Card className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="aspect-square bg-gray-200 rounded-lg mb-4">
                {/* 画像を追加予定 */}
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-4">小林 健太郎 先生</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  東京大学医学部卒業。米国ハーバード大学医学部で研究員として勤務後、
                  がんの早期発見技術の研究に従事。独自のバイオマーカー技術を確立し、
                  milli-cの開発を主導。
                </p>
                <p>
                  現在は、東京大学医学部附属病院 特任教授として、
                  がんの早期発見と予防に関する研究を続けています。
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* 著書・特許・技術的沿革 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">著書・特許・技術的沿革</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">著書</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 「がんの超早期発見」</li>
              <li>• 「バイオマーカーの最前線」</li>
              <li>• 「予防医療の新時代」</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">特許</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• がん超早期発見技術</li>
              <li>• バイオマーカー検出方法</li>
              <li>• 検査システム</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">技術的沿革</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• バイオマーカー技術の確立</li>
              <li>• 検査精度の向上</li>
              <li>• 自動化システムの開発</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* 著名人からの応援メッセージ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">著名人からの応援メッセージ</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <blockquote className="text-gray-600 italic">
              "milli-cの技術は、がんの早期発見に革新的な変化をもたらすでしょう。"
            </blockquote>
            <p className="mt-4 font-semibold">山田 太郎 先生</p>
            <p className="text-sm text-gray-500">東京大学医学部 教授</p>
          </Card>

          <Card className="p-6">
            <blockquote className="text-gray-600 italic">
              "この技術が多くの患者様の命を救うことを期待しています。"
            </blockquote>
            <p className="mt-4 font-semibold">佐藤 花子 先生</p>
            <p className="text-sm text-gray-500">国立がん研究センター 主任研究員</p>
          </Card>
        </div>
      </section>

      {/* アフターフォロー体制 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">アフターフォロー体制</h2>
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">検査結果の説明</h3>
              <p className="text-gray-600">
                専門医による検査結果の詳細な説明と、今後の生活習慣のアドバイスを提供します。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">定期的なフォローアップ</h3>
              <p className="text-gray-600">
                検査後も定期的な健康状態の確認と、必要に応じた追加検査の提案を行います。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">専門医による相談</h3>
              <p className="text-gray-600">
                検査結果に関する疑問や不安に対して、専門医による相談サービスを提供します。
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* 学術論文・関連資料 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">学術論文・関連資料</h2>
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">学術論文</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    • がん超早期発見技術の臨床応用（2023年）
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    • 新規バイオマーカーの発見と検証（2022年）
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    • 検査システムの精度評価（2021年）
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">関連資料</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    • 検査システムの技術仕様書
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    • 臨床試験結果レポート
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    • 安全性評価報告書
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* お問い合わせボタン */}
      <div className="text-center">
        <Link href="/contact">
          <Button size="lg">
            お問い合わせ・資料請求
          </Button>
        </Link>
      </div>
    </div>
  );
}
