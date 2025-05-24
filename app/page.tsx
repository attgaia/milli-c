'use client';
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dna,
  Calendar,
  TestTube,
  FileCheck,
  Clock,
  Search,
  MapPin,
  CheckCircle,
  Users,
  ChevronRight,
} from "lucide-react"
import { useRef, useEffect } from "react"

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src="/sparkring.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            ステージに上がらない。<br />
            milli-c で見つける未来の安心
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            がん細胞1ミリ以下でも検出可能。<br />
            超早期発見・予防であなたの健康を守る
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserve">
              <Button size="lg" className="bg-primary text-white text-xl font-bold px-10 py-5 rounded-xl border-2 border-white shadow-lg hover:bg-primary/80 hover:brightness-110 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200">
                検査・カウンセリング予約へ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* milli-cとは？ */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">milli-cとは？</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6">超早期がん発見の新技術</h3>
              <p className="text-gray-600 mb-6">
                milli-cは、日本発の最先端技術「TMCA（Tumor Marker Cell Analysis）」を活用し、
                がん細胞が1ミリ以下でも検出可能な超早期がん発見システムです。 
                従来の検査では見つけられなかった微小ながん細胞を、高精度で検出します。
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">87.5%の高精度でがんリスクを判定</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">血液と少量の尿だけで簡単検査</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">最短6日で結果をお届け</p>
                </div>
                
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src="/image_1mmcancer.webp"
                  alt="1ミリ以下のがん細胞イメージ"
                  fill
                  className="object-cover rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">TMCA技術とは？</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Dna className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">遺伝子解析</h4>
                <p className="text-gray-600">がん関連遺伝子の変異を高精度で検出</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TestTube className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">バイオマーカー</h4>
                <p className="text-gray-600">独自のバイオマーカーで微小ながん細胞を特定</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">AI分析</h4>
                <p className="text-gray-600">AIによる高度なデータ分析で精度を向上</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mt-4">
              <Link href="/about">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  詳しく見る
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 検査の流れ */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">検査の流れ</h2>

          <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Calendar className="w-12 h-12 text-white" />, label: "予約", desc: "WEBまたは電話から簡単予約。希望の日時と提携クリニックを選択できます。"
              },
              {
                icon: <Users className="w-12 h-12 text-white" />, label: "来院・検査", desc: "問診後、血液と尿の採取を行います。所要時間約30分の簡単な検査です。"
              },
              {
                icon: <TestTube className="w-12 h-12 text-white" />, label: "解析", desc: "最新の技術で検体を詳細に分析。遺伝子レベルでの検査を実施します。"
              },
              {
                icon: <FileCheck className="w-12 h-12 text-white" />, label: "結果通知", desc: "最短6日で結果をお届け。オプションでカウンセリングも受けられます。"
              },
            ].map((step, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center text-center relative px-2">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-primary text-primary flex items-center justify-center font-bold mb-2">{idx+1}</div>
                <h3 className="text-xl font-bold mb-3">{step.label}</h3>
                <div className="w-full border-b border-blue-100 mb-3" />
                <p className="text-gray-600 mb-2 min-h-[48px]">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/flow">
              <Button size="lg" className="bg-primary text-white font-bold text-lg px-8 py-4 shadow-lg hover:bg-primary/90 transition-all duration-300">
                詳しく見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 検査でわかること */}
      <section id="results" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">検査でわかること</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6">9段階のがんリスク判定</h3>
              <p className="text-gray-600 mb-6">
                ステージ0（理想的健康状態）からステージ9（末期がん）まで、9段階でがんリスクを詳細に判定します。
                早期発見により、治療ではなく予防に焦点を当てることが可能になります。
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">発がん因子の影響を受ける前のリスク段階も把握可能</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">生活習慣の改善ポイントを明確に把握</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">定期的な検査で変化を追跡可能</p>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/result-coverage">
                    <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      詳しく見る
                    </Button>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="image_stage.webp"
                  width={500}
                  height={500}
                  alt="9段階のがんリスク判定イメージ"
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 受けるべき人は？ */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">milli-c検査を受けるべき方</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">がん家系の方</h3>
                    <p className="text-gray-600">
                      家族にがん患者がいる方は、遺伝的要因によりがんリスクが高まる可能性があります。
                      早期からのリスク管理が重要です。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <TestTube className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">がん治療後で再発防止を気にしている方</h3>
                    <p className="text-gray-600">
                      がん治療を経験された方の再発モニタリングにも適しています。
                      微小ながん細胞を早期に検出し、再発リスクを低減します。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* milli-cに関する「3つの安心」 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">milli-cに関する「3つの安心」</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">臨床検査技師の監修あり</h3>
                  <p className="text-gray-600">
                    経験豊富な臨床検査技師が検査プロセスを監修。
                    確かな技術と知識で、正確な検査結果をお届けします。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">提携医療機関と連携</h3>
                  <p className="text-gray-600">
                    全国の信頼できる医療機関と提携。
                    検査から結果説明まで、一貫した医療サービスを提供します。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <FileCheck className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">国内特許技術＋関連論文掲載</h3>
                  <p className="text-gray-600">
                    独自の特許技術と科学的根拠に基づく検査。
                    学術論文での裏付けにより、信頼性の高い結果を提供します。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">よくある質問</h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  q: "milli-cの検査は保険適用ですか？",
                  a: "milli-cの検査は自費診療となります。先進的な検査のため、現時点では健康保険の適用外です。",
                },
                {
                  q: "検査結果はどのくらいで出ますか？",
                  a: "検査結果は最短6日程度でご連絡いたします。詳細な解析を行うため、約1週間程度お時間をいただいております。",
                },
                {
                  q: "検査の精度はどのくらいですか？",
                  a: "milli-cの検査は約87.5%の確率で超早期のがんを検出できます。ただし、確定診断ではないため、結果によっては医師による詳細な検査をお勧めする場合があります。",
                },
                {
                  q: "検査を受ける際の注意点はありますか？",
                  a: "検査前日の激しい運動や飲酒は避け、水分はしっかり摂取してください。また、検査当日は軽い食事を摂ってからお越しいただくことをお勧めします。",
                },
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{item.q}</h3>
                    <p className="text-gray-600">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/faq">
                <Button variant="outline">他の質問を見る</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">お客様の声</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "佐藤 健太郎",
                age: "45歳",
                comment:
                  "家族にがん患者が多く、自分も不安を抱えていました。milli-cの検査で現状のリスクを知り、適切な予防策を取れるようになりました。定期的に検査して安心を得ています。",
              },
              {
                name: "田中 美咲",
                age: "38歳",
                comment:
                  "健康に気を使っていましたが、具体的に何をすべきか分かりませんでした。検査結果とカウンセリングで明確なアドバイスをもらえて、今は自信を持って健康管理ができています。",
              },
              {
                name: "鈴木 大輔",
                age: "52歳",
                comment:
                  "がん治療後の再発が心配でした。milli-cなら微小ながん細胞も検出できると聞き受診。定期的に検査して再発の兆候がないか確認しています。精神的な安心感が大きいです。",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=64&width=64`}
                          width={64}
                          height={64}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{testimonial.name}</h3>
                      <p className="text-gray-500">{testimonial.age}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/voices">
              <Button>すべての体験談を見る</Button>
            </Link>
          </div>
        </div>
      </section>


      {/* 固定特設ページバナー */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-primary">早期予約キャンペーン実施中</p>
                  <p className="text-sm text-gray-600">初回検査料金が20%OFF</p>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-primary">期間限定特典</p>
                  <p className="text-sm text-gray-600">結果説明カウンセリング無料</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <p className="hidden md:block text-sm text-gray-500">※ キャンペーン期間：2024年4月30日まで</p>
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                特設ページへ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

