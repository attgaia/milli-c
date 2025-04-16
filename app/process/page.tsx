import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Calendar, Users, TestTube, FileCheck, ArrowRight } from "lucide-react"

export const metadata = {
  title: "検査の流れ | milli-c",
  description: "milli-cのがん超早期発見検査の流れと具体的なステップをご紹介します。",
}

export default function ProcessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">検査の流れ</h1>
            <p className="text-xl text-gray-700 mb-8">
              milli-cの検査は、シンプルな4ステップで完了します。
              血液と尿の採取だけで、高精度な超早期がん検査が可能です。
            </p>
          </div>
        </div>
      </section>

      {/* 4ステップの説明 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/4 flex flex-col items-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                        1
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-2xl font-bold mb-4">予約</h3>
                      <p className="text-gray-600 mb-6">
                        WEBフォームまたはお電話にて簡単に予約ができます。ご希望の日時と最寄りの提携クリニックをお選びいただけます。
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <p className="text-gray-700">
                            <span className="font-medium">WEB予約：</span>24時間いつでも予約可能
                          </p>
                        </div>
                        <div className="flex items-start mt-2">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <p className="text-gray-700">
                            <span className="font-medium">電話予約：</span>03-1234-5678（平日9:00〜18:00）
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/4 flex flex-col items-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                        2
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-2xl font-bold mb-4">来院・問診・採血＋尿検査</h3>
                      <p className="text-gray-600 mb-6">
                        予約日時に提携クリニックへご来院ください。簡単な問診の後、血液と尿の採取を行います。
                        所要時間は約30分程度で、身体への負担は最小限です。
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <p className="text-gray-700">
                            <span className="font-medium">持ち物：</span>身分証明書、予約番号（WEB予約の場合）
                          </p>
                        </div>
                        <div className="flex items-start mt-2">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <p className="text-gray-700">
                            <span className="font-medium">服装：</span>採血しやすい服装をお勧めします
                          </p>
                        </div>
                        <div className="flex items-start mt-2">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <p className="text-gray-700">
                            <span className="font-medium">注意事項：</span>検査前日の激しい運動や飲酒は避けてください
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/4 flex flex-col items-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                        <TestTube className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                        3
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-2xl font-bold mb-4">検査・解析（最新ラボ技術）</h3>
                      <p className="text-gray-600 mb-6">
                        採取した検体は、専用の研究施設で最先端の技術を用いて分析されます。
                        遺伝子解析と統計データを組み合わせた高精度な検査が行われます。
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <p className="text-gray-700">
                            <span className="font-medium">技術：</span>次世代シーケンサーによる高精度遺伝子解析
                          </p>
                        </div>
                        <div className="flex items-start mt-2">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <p className="text-gray-700">
                            <span className="font-medium">検査項目：</span>複数のバイオマーカーの総合的解析
                          </p>
                        </div>
                        <div className="flex items-start mt-2">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <p className="text-gray-700">
                            <span className="font-medium">精度：</span>約87.5%の検出率（1mm以下のがん細胞）
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/4 flex flex-col items-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                        <FileCheck className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                        4
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-2xl font-bold mb-4">結果通知（最短6日）</h3>
                      <p className="text-gray-600 mb-6">
                        最短6日で検査結果をお届けします。結果は郵送またはオンラインポータルでご確認いただけます。
                        オプションで専門家によるカウンセリングもご利用いただけます。
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <p className="text-gray-700">
                            <span className="font-medium">結果の受け取り方法：</span>郵送またはオンラインポータル
                          </p>
                        </div>
                        <div className="flex items-start mt-2">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <p className="text-gray-700">
                            <span className="font-medium">レポート内容：</span>9段階のリスク評価と健康アドバイス
                          </p>
                        </div>
                        <div className="flex items-start mt-2">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <p className="text-gray-700">
                            <span className="font-medium">リスク段階別の対応方針：</span>健康維持から専門医への紹介まで
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 結果の受け取り方法 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">結果の受け取り方法</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">郵送での受け取り</h3>
                    <p className="text-gray-600">
                      検査結果を記載した詳細なレポートを、ご自宅または指定の住所へ機密性の高い封筒で郵送いたします。
                      結果は分かりやすい図表と解説で表現されています。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">オンラインポータルでの確認</h3>
                    <p className="text-gray-600">
                      セキュアなオンラインポータルサイトで、いつでもどこでも検査結果を確認できます。
                      過去の検査結果との比較や、健康状態の変化も追跡可能です。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">クリニックでの直接説明</h3>
                    <p className="text-gray-600">
                      提携クリニックにて、医師から直接結果の説明を受けることも可能です。
                      詳細な健康アドバイスや今後の対策についても相談できます。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  width={500}
                  height={500}
                  alt="検査結果レポートイメージ"
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* カウンセリング */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">カウンセリング（有料相談 1万円）</h2>

          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">結果の解釈、健康管理のアドバイス</h3>
                    <p className="text-gray-600 mb-6">
                      検査結果の数値だけでは分かりにくい部分も、専門家が丁寧に解説します。
                      あなたの生活習慣や家族歴を考慮した、具体的な健康管理プランをご提案します。
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">検査結果の詳細な解説と意味</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">生活習慣の改善ポイント</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">定期的な健康チェックの提案</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">必要に応じた専門医の紹介</p>
                      </div>
                    </div>

                    <Button>カウンセリングを予約する</Button>
                  </div>

                  <div className="flex justify-center">
                    <div className="relative w-full max-w-md">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        width={400}
                        height={400}
                        alt="カウンセリングイメージ"
                        className="rounded-xl shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">あなたの健康を守る第一歩を踏み出しましょう</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            milli-cの超早期がん検査で、がんを治療する前に予防する未来へ。
            シンプルな検査で、あなたの健康に大きな安心をもたらします。
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            検査を予約する <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}

