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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="DNA analysis with smiling people"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            ステージに上がらない。milli-c で見つける未来の安心
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            がん細胞1ミリ以下でも検出可能。超早期発見・予防であなたの健康を守る
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg">
              30秒で予約
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 font-bold text-lg"
            >
              カウンセリング（有料）を申し込む
            </Button>
          </div>
        </div>
      </section>

      {/* milli-cとは？ */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">milli-cとは？</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Dna className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">微小ながん細胞も検出可能</h3>
                <p className="text-gray-600">1ミリ以下の超早期がん細胞を高精度で検出し、治療ではなく予防へ</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">87.5%の確率で予知</h3>
                <p className="text-gray-600">最新の検査技術により、高確率で早期がんリスクを判定</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <TestTube className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">血液と少量の尿だけでOK</h3>
                <p className="text-gray-600">侵襲性の低い簡単な検査で、体への負担を最小限に</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">日本発の最先端技術</h3>
                <p className="text-gray-600">日本で開発された最先端の遺伝子解析技術を活用</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/about">
              <Button variant="outline" className="group">
                もっと詳しく <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 検査の流れ */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">検査の流れ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-8 relative">
            {/* Connect lines between steps */}
            <div className="hidden lg:block absolute top-24 left-[25%] right-[25%] h-0.5 bg-primary/30"></div>

            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 z-10">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-8 -right-4 lg:block hidden">
                <div className="w-8 h-8 rounded-full bg-white border border-primary flex items-center justify-center text-sm font-bold text-primary">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">予約</h3>
              <p className="text-gray-600">WEBまたは電話から簡単予約。希望の日時と提携クリニックを選択できます。</p>
            </div>

            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 z-10">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-8 -right-4 lg:block hidden">
                <div className="w-8 h-8 rounded-full bg-white border border-primary flex items-center justify-center text-sm font-bold text-primary">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">来院・検査</h3>
              <p className="text-gray-600">問診後、血液と尿の採取を行います。所要時間約30分の簡単な検査です。</p>
            </div>

            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 z-10">
                <TestTube className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-8 -right-4 lg:block hidden">
                <div className="w-8 h-8 rounded-full bg-white border border-primary flex items-center justify-center text-sm font-bold text-primary">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">解析</h3>
              <p className="text-gray-600">最新の技術で検体を詳細に分析。遺伝子レベルでの検査を実施します。</p>
            </div>

            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 z-10">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-8 -right-4 lg:block hidden">
                <div className="w-8 h-8 rounded-full bg-white border border-primary flex items-center justify-center text-sm font-bold text-primary">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">結果通知</h3>
              <p className="text-gray-600">最短6日で結果をお届け。オプションでカウンセリングも受けられます。</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/process">
              <Button>検査の流れについて詳しく見る</Button>
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
                <Link href="/results">
                  <Button>検査でわかることの詳細へ</Button>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/placeholder.svg?height=500&width=500"
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
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">40歳以上で健康診断を受けていない方</h3>
                    <p className="text-gray-600">
                      40歳を過ぎるとがんリスクが徐々に高まります。定期的な健康診断を受けていない方は
                      特にリスク評価が重要です。
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
                      <Search className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">健康リスクを事前に知りたい方</h3>
                    <p className="text-gray-600">
                      予防医療に関心がある方、健康維持に積極的な方に適しています。
                      数値で健康状態を把握し、リスクに応じた生活改善ができます。
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

      {/* 料金プラン */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">料金プラン</h2>

          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="bg-primary text-white p-6 text-center">
                <h3 className="text-2xl font-bold">基本プラン（がんリスク判定）</h3>
                <p className="text-lg opacity-90 mt-2">最先端の技術で健康リスクを管理</p>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <span className="text-4xl font-bold">¥145,000</span>
                  <span className="text-gray-500 ml-2">(税込)</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">血液・尿検査による詳細なリスク判定</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">9段階でのリスク評価レポート</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">健康維持のためのアドバイス</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">生活習慣改善ガイド</p>
                  </div>
                </div>

                <div className="mt-8 text-gray-500 border-t pt-4">
                  <p className="mb-2">※ カウンセリング（有料：¥10,000/回）はオプションです</p>
                  <p>※ 現在、先着50名様限定で特別価格でご提供中</p>
                </div>

                <div className="mt-8 text-center">
                  <Link href="/pricing">
                    <Button size="lg" className="px-8">
                      料金の詳細を見る
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* クリニック検索 */}
      <section id="clinics" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">クリニック検索</h2>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600">
              全国の提携クリニックから、お近くの医療機関を検索できます。
              エリアを選択して、予約可能なクリニックをお探しください。
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {["北海道", "東北", "関東", "中部", "関西", "中国・四国", "九州・沖縄"].map((area) => (
                <Button key={area} variant="outline" className="w-full">
                  {area}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((clinic) => (
              <Card key={clinic} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">milli-c提携クリニック{clinic}</h3>
                  <div className="flex items-start mb-4">
                    <MapPin className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">東京都渋谷区○○町1-2-3</p>
                  </div>
                  <div className="flex items-start mb-4">
                    <Clock className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">
                      9:00〜18:00（月・水・金）
                      <br />
                      10:00〜17:00（土）
                    </p>
                  </div>
                  <Button className="w-full mt-4">予約する</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/clinics">
              <Button variant="outline" size="lg">
                すべてのクリニックを見る
              </Button>
            </Link>
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
            <Link href="/testimonials">
              <Button>すべての体験談を見る</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">健康な未来は早期発見から</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            あなたの大切な健康を守るために、milli-cの超早期がん検査を今すぐ予約しましょう。
            1ミリ以下のがん細胞を検出できる技術で、あなたの明日を守ります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg">
              30秒で予約
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 font-bold text-lg"
            >
              カウンセリング（有料）を申し込む
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

