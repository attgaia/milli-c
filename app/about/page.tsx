import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertCircle, ArrowRight } from "lucide-react"

export const metadata = {
  title: "m-cで分かること | がん超早期発見サービス",
  description: "TMCA技術による1ミリ以下のがん細胞検出と、がんの一生を理解するための詳細な説明をご紹介します。",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">milli-cで分かること</h1>
              <p className="text-xl text-gray-700 mb-8">
                がんは「治療する病気」から「予防できる状態」へ。
                milli-c（ミリシー）はTMCA技術による超早期発見で、あなたの健康をコントロールします。
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-bold">1ミリ以下のがん細胞を検出</span>
                    <br />
                    従来の検査では見つけられなかった超微小ながんの兆候を発見
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-bold">がんの一生を理解</span>
                    <br />
                    がんの発生から進行までの過程を詳細に把握
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-bold">3つのマーカーによる高精度な判定</span>
                    <br />
                    遺伝子、タンパク質、代謝物の複合的な分析で精度を向上
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/image_1mmcancer.webp"
                  width={500}
                  height={500}
                  alt="1ミリ以下のがん細胞イメージ"
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 社会背景 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">なぜこの検査をやるべきなのか</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">がんを取り巻く現状</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold mb-2">がんによる死亡者数の増加</h4>
                    <p className="text-gray-600">
                      日本では2人に1人ががんになり、3人に1人ががんで亡くなる時代。
                      早期発見の重要性が増しています。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold mb-2">治療の負担</h4>
                    <p className="text-gray-600">
                      進行したがんの治療は、身体的・精神的・経済的な負担が大きい。
                      早期発見による予防的アプローチが重要です。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold mb-2">従来の検査の限界</h4>
                    <p className="text-gray-600">
                      一般的な検査では、がんが大きくなってからでないと検出できない。
                      より早期の段階での発見が必要です。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/image_inspection.webp"
                  width={500}
                  height={500}
                  alt="検査の必要性イメージ"
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TMCA詳細説明 */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">TMCAとは？</h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6">がんの一生</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">がんの発生</h4>
                    <p className="text-gray-600">
                      正常な細胞が遺伝子変異を起こし、がん細胞へと変化。
                      この段階ではまだ微小で、従来の検査では検出が困難です。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">微小ながんの成長</h4>
                    <p className="text-gray-600">
                      がん細胞が増殖し、1ミリ以下の微小ながんへと成長。
                      TMCA技術なら、この段階での検出が可能です。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">がんの進行</h4>
                    <p className="text-gray-600">
                      がんが大きくなり、症状が現れ始める。
                      この段階では一般的な検査でも検出可能になりますが、
                      治療の負担が大きくなります。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">TMCA検査の特徴</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-2xl font-bold">1</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">遺伝子マーカー</h4>
                  <p className="text-gray-600">
                    がん関連遺伝子の変異を検出。
                    がんの発生リスクを早期に把握します。
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-2xl font-bold">2</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">タンパク質マーカー</h4>
                  <p className="text-gray-600">
                    がん細胞が産生する特異的なタンパク質を検出。
                    がんの存在を高精度で判定します。
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-2xl font-bold">3</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">代謝物マーカー</h4>
                  <p className="text-gray-600">
                    がん細胞の代謝産物を検出。
                    がんの進行状態を詳細に評価します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">TMCA技術で、がんの超早期発見を</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            1ミリ以下のがん細胞を検出できるTMCA技術で、
            あなたの健康を守りましょう。
          </p>
          <Link href="/process">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              検査の流れを知る
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

