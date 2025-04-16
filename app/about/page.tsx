import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertCircle } from "lucide-react"

export const metadata = {
  title: "milli-cとは？ | がん超早期発見サービス",
  description: "1ミリ以下のがん細胞を検出可能な最先端検査サービス、milli-cの詳細をご紹介します。",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">milli-cとは？</h1>
              <p className="text-xl text-gray-700 mb-8">
                milli-cは、1ミリ以下の微小ながん細胞でも検出可能な、 日本発の最先端がん超早期発見検査サービスです。
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-bold">がんは原因不明の病気ではなく、事前に防げる</span>
                    <br />
                    遺伝子解析と最新のバイオマーカー技術で早期発見
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-bold">1ミリ以下のがん細胞を検出可能</span>
                    <br />
                    従来の検査では見つけられなかった超微小ながんの兆候を発見
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-bold">健康状態を9段階で判定</span>
                    <br />
                    詳細なリスク評価により、個別の予防策の提案が可能
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  width={500}
                  height={500}
                  alt="milli-c検査イメージ"
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 従来のがん検査との違い */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">従来のがん検査との違い</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">一般的な腫瘍マーカー検査</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">1cm以上の腫瘍が必要</p>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">既に症状が出ていることも</p>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">治療中心のアプローチ</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">PET検査</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">5mm以上のがんを検出</p>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">被ばくを伴う</p>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">初期のがん検出に限界あり</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-bold">milli-c</div>
                <h3 className="text-xl font-bold mb-4">超早期がん検査</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <p className="text-gray-700">1mm以下のがん細胞も検出</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <p className="text-gray-700">血液と尿だけで検査可能</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <p className="text-gray-700">予防を重視したアプローチ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">milli-cならではの特長</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">簡単な検査方法</h4>
                  <p className="text-gray-600">
                    血液と尿の採取のみで完了。身体への負担が少なく、短時間で検査が可能です。
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
                  <h4 className="text-lg font-bold mb-2">早期発見によるリスク管理</h4>
                  <p className="text-gray-600">
                    治療ではなく、予防に重点を置いたアプローチで、健康寿命の延伸を目指します。
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
                  <h4 className="text-lg font-bold mb-2">遺伝子解析と統計データ</h4>
                  <p className="text-gray-600">
                    最新の遺伝子解析技術と蓄積された統計データにより、高精度な予測が可能です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* カウンセリング */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-md">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  width={500}
                  height={500}
                  alt="カウンセリングイメージ"
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">カウンセリング(有料相談)</h2>
              <p className="text-xl text-gray-700 mb-6">
                検査結果の解釈や健康管理のアドバイスを専門家から直接受けられます。
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-1">結果の詳細な解説</h3>
                    <p className="text-gray-600">検査結果の数値の意味や、リスク評価について詳しく説明いたします。</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-1">個別の健康管理プラン</h3>
                    <p className="text-gray-600">
                      あなたの生活習慣や家族歴を考慮した、オーダーメイドの健康管理プランをご提案します。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-1">医師・専門家による相談</h3>
                    <p className="text-gray-600">
                      対面またはオンラインで、専門知識を持った医師や健康管理の専門家に直接相談できます。
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">カウンセリング料金</h3>
                  <span className="text-2xl font-bold text-primary">¥10,000</span>
                </div>
                <p className="text-gray-600 mb-6">
                  1回60分の個別カウンセリングで、検査結果の解釈から生活習慣のアドバイスまで幅広くサポートします。
                </p>
                <Button size="lg" className="w-full">
                  カウンセリングを予約する
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">milli-cで健康な未来を手に入れましょう</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            がんを「治療する病気」から「予防できる状態」へ。
            milli-cの超早期検査で、あなたの健康をコントロールしましょう。
          </p>
          <Link href="/process">
            <Button size="lg" className="px-8">
              検査の流れを知る
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

