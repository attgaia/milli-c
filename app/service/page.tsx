import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, FileText, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">サービス内容</h1>

      {/* 価格プラン */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">料金プラン</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>基本プラン</CardTitle>
              <CardDescription>標準的な検査項目を含むプラン</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">¥145,000</p>
              <ul className="space-y-2 mb-6">
                <li>• 基本検査項目</li>
                <li>• 標準的な分析</li>
                <li>• 基本的なレポート</li>
              </ul>
              <Button className="w-full">お問い合わせ</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>プレミアムプラン</CardTitle>
              <CardDescription>詳細な分析と追加サービス</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">¥245,000</p>
              <ul className="space-y-2 mb-6">
                <li>• 基本プランの全項目</li>
                <li>• 追加検査項目</li>
                <li>• 詳細な分析レポート</li>
                <li>• 専門家による解説</li>
              </ul>
              <Button className="w-full">お問い合わせ</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 検査の流れ */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">検査から結果までの流れ</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">検査の申し込み</h3>
                <p>お問い合わせフォームまたは電話にて検査の申し込みを行います。必要書類をお送りします。</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">同意書の提出</h3>
                <p>検査の同意書に署名し、返送していただきます。</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">検査キットの送付</h3>
                <p>検査に必要なキットを郵送いたします。</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">検体の採取</h3>
                <p>ご自宅で検体を採取していただきます。</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">5</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">検体の返送</h3>
                <p>採取した検体を指定の方法で返送していただきます。</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">6</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">分析と結果報告</h3>
                <p>検体の分析を行い、結果をレポートとしてお送りします。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 検査結果サンプル */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">検査結果サンプル</h2>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="aspect-[3/4] relative mb-4">
                <Image
                  src="/sample-report.jpg"
                  alt="検査結果サンプル"
                  fill
                  className="object-contain"
                />
              </div>
              <Button className="w-full">
                <Download className="mr-2 h-4 w-4" />
                サンプルレポートをダウンロード
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 検査に関する説明書 */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">検査に関する説明書</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>検査の基本情報</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">報告日数の目安</h3>
                  <p>検体到着後、約2週間で結果をお送りいたします。</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-2">必要な血液量</h3>
                  <p>検査に必要な血液量は約5mlです。</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>同意書</CardTitle>
                <CardDescription>検査実施に関する同意書</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  PDFをダウンロード
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>依頼書</CardTitle>
                <CardDescription>検査依頼に関する書類</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  PDFをダウンロード
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">ご不明な点がございましたら</h2>
        <p className="mb-8">お気軽にお問い合わせください</p>
        <Button size="lg">
          お問い合わせ
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>
    </div>
  );
}
