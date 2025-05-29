'use client';
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
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
import { useRef, useEffect, useState } from "react"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useFadeInSection } from '@/components/ui/use-fade-in-section';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // 各セクション用のfade-inフック
  const heroFade = useFadeInSection<HTMLElement>();
  const aboutFade = useFadeInSection<HTMLElement>();
  const featuresFade = useFadeInSection<HTMLElement>();
  const serviceFade = useFadeInSection<HTMLElement>();
  const flowFade = useFadeInSection<HTMLElement>();
  const clinicsFade = useFadeInSection<HTMLElement>();
  const contactFade = useFadeInSection<HTMLElement>();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ヒーロー画像セクション */}
      <section ref={heroFade.ref} className={`w-full bg-white fade-in-section${heroFade.isMounted && heroFade.isVisible ? ' is-visible' : ''}`}>
        <div className="w-full max-w-5xl mx-auto">
          <Image
            src="/Hero_pc.webp"
            alt="milli-c ヒーロー画像"
            width={1600}
            height={600}
            className="w-full h-auto object-cover mb-12"
            priority
          />
        </div>
      </section>
      {/* milli-cとは？ */}
      <section ref={aboutFade.ref} id="about" className={`py-20 bg-white fade-in-section${aboutFade.isMounted && aboutFade.isVisible ? ' is-visible' : ''}`}>
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">milli-Cでわかること</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6">超早期がん発見の新技術</h3>
              <div className="mt-8 text-base leading-relaxed text-gray-700 space-y-4">
                <p>
                  従来のがん検査では、がんが見つかった時にはすでに手術が必要、または手遅れなことが多いです。
                  <br />
                  腫瘍マーカー総合診断法（TMCA）は、1ミリ以下のがんを検出できるため、従来の画像診断では検出不可能だったミクロ単位の微小ながん、もしくはがん細胞になりうる初期のシグナルを検知して予知することができ、未病治療が可能になります。
                </p>
                <p>
                  また、新しいがんの発見だけでなく、進行がんや末期がんを治療した方にも、milli-Cによって健康状態を把握でき、生活習慣を見直し改善することで再発を予防することもできます。
                </p>
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

          {/* がんの真実 */}
          <section id="truth" className="py-20">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 container mx-auto max-w-7xl px-4 md:px-8">
              <h2 className="text-4xl font-bold text-center mb-16">がんの真実</h2>
              <div className="flex justify-center mb-12">
                <div className="w-full max-w-5xl h-[400px] md:h-[480px] bg-gray-200 rounded-xl flex items-center justify-center border border-gray-300">
                  {/* ダミー画像 */}
                </div>
              </div>
              <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-6">
                <p>
                  従来のがん検診はCTやMRIなどの画像診断で早期発⾒をしてきました。<br />
                  がんは発⽣してから平均9年かけて、1cm<sup>2</sup>・1グラムの"初期がん"になります。<br />
                  本来はこの初期がん前に検出して対策をすべきですが、この初期がんでさえ画像診断では半分も⾒つけることはできません。PET検査法でも数mmに達しないと診断できないのです。
                </p>
                <p>
                  これに対し、当センターで実施する腫瘍マーカー総合解析法（TMCA-D）※は⾎液と採尿検査だけでミクロがんから臨床がんまで、全⾝のがんの動向を詳細に分析。また全てのがんが対象になります。発⾒後は発症危険度に応じた予防⽅法を指導します。がん治療に先⼿を打つ、画期的なスクリーニング検査です。
                </p>
              </div>
            </div>
          </section>

          <div className="bg-primary/5 rounded-2xl p-8 mb-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">腫瘍マーカー総合解析法（TMCA-D）とは？</h3>
                <div className="text-gray-700 text-base leading-relaxed space-y-4">
                  <p>
                    がん組織は、がん細胞に間質と⾎管を伴い形成します。がん組織の直径が2〜4mmほどになると⾎管が形成され、その後本格的な増殖が始まります。そしてがん細胞、がん間質、がん⾎管は、それぞれ組織の成⻑に伴って腫瘍マーカーを分泌します。
                  </p>
                  <p>
                    従来の腫瘍マーカー検査はがん特異マーカーで判定しますが、がん間質や⾎管から分泌されるマーカーを調べていません。したがってミリ、あるいはミクログラムのがんの発⾒は困難です。また、スキルスがんや⾁腫などは特異マーカーを出さない場も多く、検査の壁となっていました。
                  </p>
                  <p>
                    腫瘍マーカー総合グラム解析法（TMCA-D）はがん特異マーカーだけでなく、がん関連マーカー、がん増殖マーカーへを総合的に診断し、この難題を克服。ミリがん、さらに⽬に⾒えないミクロがんの有無の検知と、発⽣の経時的変化の把握を可能にしました。
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                  {/* ダミー画像 */}
                </div>
              </div>
            </div>
          </div>

          {/* ＴＭＣＡの発明者セクション */}
          <div className="max-w-7xl mx-auto mt-16 px-4 bg-white border border-gray-200 rounded-2xl shadow-xl px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-[240px_2fr] gap-6 items-start">
              {/* 左側：画像・肩書き・氏名 */}
              <div className="flex flex-col items-center md:items-start w-full md:w-60">
                <div className="w-56 h-56 mb-4 rounded-lg overflow-hidden bg-gray-100 mx-auto md:mx-0">
                  <Image
                    src="/kobayashiteacher.jpg"
                    alt="小林常雄 医学博士"
                    width={224}
                    height={224}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-center md:items-center w-full max-w-[14rem] mx-auto">
                  <div className="text-xs text-gray-500 leading-tight text-center">国際がん予知予防センター<br />センター長</div>
                  <div className="text-lg font-bold text-center mt-2 max-w-[224px] mx-auto whitespace-nowrap">
                    小林 常雄 <span className="text-base font-normal whitespace-nowrap">（こばやし つねお）</span>
                  </div>
                </div>
              </div>
              {/* 右側：略歴＋本人メッセージ */}
              <div className="w-full min-w-0 flex flex-col gap-4">
                <div className="text-sm text-gray-600 bg-gray-50 rounded-lg p-6">
                  <div className="font-bold mb-2">【略歴】</div>
                  <div className="space-y-1">
                    <div>昭和19年鳥取県生まれ、昭和44年鳥取大学医学部卒業後、国立がんセンター小動物部へ。</div>
                    <div>昭和47〜49年京都大学大学院、昭和54年東京大学大学院卒業。両大学院で生物学を中心としたがんの基礎研究を行い、東京大学院で博士号を取得。</div>
                    <div>昭和54年：心総合病院副院長</div>
                    <div>平成4年：京北病院院長</div>
                    <div>平成12年：IMHCクリニック院長</div>
                    <div>平成22年：国際がん予知予防センター センター長</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg w-full bg-white rounded-lg p-6">
                  私はホリスティック医療の考えを基に、39年の臨床実験を経て、TMCA-Dという検査法を開発いたしました。従来の画像診断に頼るやり⽅ではなく、⾎液と尿の採取だけで、全⾝のがん細胞をチェックするのです。加えて東洋医学的な検査と⾃⼰免疫能⼒・⾎の巡りなどを測定し、その結果をもとに治療とライフスタイルの改善を⾏います。ライフスタイルの改善、つまりがんは⽣活習慣病といえるのです。<br />そしてTMCA-Dは単なるがんの発⾒にとどまらない、健康のバロメーターを測る検査でもあります。
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            {/* <div className="mt-4">
              <Link href="/about">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  詳しく見る
                </Button>
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      {/* milli-Cの3つの特徴 */}
      <section ref={featuresFade.ref} className={`py-20 bg-gray-50 border-t border-b border-gray-200 fade-in-section${featuresFade.isMounted && featuresFade.isVisible ? ' is-visible' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">milli-Cの３つの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* 1つ目 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-56 h-56 flex items-center justify-center rounded-full border border-gray-300 mb-6">
                <span className="text-xl md:text-2xl font-bold text-gray-700 leading-tight">血液と採尿だけで<br />全身のがんを検知</span>
              </div>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                国際がん予知予防センターでは血液と尿から、今までの特異的腫瘍マーカーだけでは検出されなかった幼若レベルの細胞のミクロがんを発見します。したがって新生血管が形成され、がんがわずかに増殖を始めるミクロがんの検出が可能です。
              </p>
            </div>
            {/* 2つ目 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-56 h-56 flex items-center justify-center rounded-full border border-gray-300 mb-6">
                <span className="text-xl md:text-2xl font-bold text-gray-700 leading-tight">世界が認めた<br />優れた初期ガン判定率87.5%</span>
              </div>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                この検査法は米国第40代大統領夫人ナンシー・レーガン夫人の仲介により、開発者小林常雄医学博士（現国際がん予知予防センター長）と米国国立がん研究所（NCI）とメイヨークリニックとの臨床試験（ダブルブラインドテスト）により87.5%以上の確率でがんを超早期発見しました。
              </p>
            </div>
            {/* 3つ目 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-56 h-56 flex items-center justify-center rounded-full border border-gray-300 mb-6">
                <span className="text-xl md:text-2xl font-bold text-gray-700 leading-tight">世界のがん専門誌<br />"cancer"でも紹介</span>
              </div>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                1994年の時点ですでに世界的に権威のあるがん専門誌"cancer"（vol.73,1994）にTMCA-Dの臨床データ（2,126人の5～7年の罹患率）がこの分野で世界で初めての報告でした。現在小林式個別化がん予知予防解析は定説として世界中に確立しつつあります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* サービス内容・料金プラン */}
      <section ref={serviceFade.ref} className={`py-20 bg-white fade-in-section${serviceFade.isMounted && serviceFade.isVisible ? ' is-visible' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">サービス内容</h2>
          <h3 className="text-3xl font-semibold mb-8 text-center">料金プラン</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader className="p-8">
                <CardTitle className="text-2xl">基本プラン</CardTitle>
                <CardDescription className="text-lg">標準的な検査項目を含むプラン</CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-3xl font-bold mb-4">¥145,000</p>
                <ul className="space-y-2 mb-6 text-xl">
                  <li>• 基本検査項目</li>
                  <li>• 標準的な分析</li>
                  <li>• 基本的なレポート</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="p-8">
                <CardTitle className="text-2xl">プレミアムプラン</CardTitle>
                <CardDescription className="text-lg">詳細な分析と追加サービス</CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-3xl font-bold mb-4">¥245,000</p>
                <ul className="space-y-2 mb-6 text-xl">
                  <li>• 基本プランの全項目</li>
                  <li>• 追加検査項目</li>
                  <li>• 詳細な分析レポート</li>
                  <li>• 専門家による解説</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="p-8">
                <CardTitle className="text-2xl">カウンセリング</CardTitle>
                <CardDescription className="text-lg">専門家による個別カウンセリング</CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-3xl font-bold mb-4">¥10,000</p>
                <ul className="space-y-2 mb-6 text-xl">
                  <li>• 検査結果の解説</li>
                  <li>• 健康管理のアドバイス</li>
                  <li>• 生活習慣の相談</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/reserve">
              <Button size="lg" className="bg-primary text-white text-xl font-bold px-10 py-5 rounded-xl shadow-lg hover:bg-primary/80 hover:brightness-110 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200">
                検査・カウンセリング予約へ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 検査の流れ */}
      <section ref={flowFade.ref} id="process" className={`py-20 bg-gray-50 fade-in-section${flowFade.isMounted && flowFade.isVisible ? ' is-visible' : ''}`}>
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
        </div>
      </section>

      {/* 結果表見本 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">結果表見本</h2>
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-5xl h-[350px] md:h-[400px] bg-gray-200 rounded border border-gray-300 flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-bold text-gray-800">結果表見本の図</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <span className="text-blue-700 font-bold text-base md:text-lg cursor-pointer">説明書（概要書）</span>
            <span className="text-blue-700 font-bold text-base md:text-lg cursor-pointer">報告日数</span>
            <span className="text-blue-700 font-bold text-base md:text-lg cursor-pointer">血液量</span>
            <span className="text-blue-700 font-bold text-base md:text-lg cursor-pointer">同意書</span>
            <span className="text-blue-700 font-bold text-base md:text-lg cursor-pointer">依頼書（共同研究依頼先）</span>
          </div>
        </div>
      </section>

      {/* 受診可能クリニック */}
      <section ref={clinicsFade.ref} className={`py-20 bg-gray-50 fade-in-section${clinicsFade.isMounted && clinicsFade.isVisible ? ' is-visible' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">受診可能クリニック</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* クリニック1 */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-2">ホリスティッククリニック東京</h3>
              <p className="text-gray-600 mb-1">〒104-0028 東京都中央区八重洲2-11-3 LINE VIEW 京橋3階</p>
              <p className="text-gray-600 mb-1">TEL. 03-6910-8677</p>
              <p className="text-gray-600 mb-1">休診日. 土曜･日曜･祝日</p>
              <a href="https://hakuohkai.me/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://hakuohkai.me/</a>
            </div>
            {/* クリニック2 */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-2">美浜ホームクリニック</h3>
              <p className="text-gray-600 mb-1">〒261-0004 千葉県千葉市美浜区高洲3-21-1イオンマリンピア専門館2F</p>
              <p className="text-gray-600 mb-1">TEL. 043-306-2611</p>
              <p className="text-gray-600 mb-1">休診日. 水曜･土曜午後･日曜･祝日</p>
              <a href="https://mihamahome.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://mihamahome.jp/</a>
            </div>
            {/* クリニック3 */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-2">ふじみ野内科クリニック</h3>
              <p className="text-gray-600 mb-1">〒354-0035埼玉県富士見市ふじみ野西1丁目1-1 アイムプラザ2F</p>
              <p className="text-gray-600 mb-1">TEL. 049-263-2678</p>
              <p className="text-gray-600 mb-1">休診日. 土曜午後･日曜･祝日</p>
              <a href="https://www.fujimino-naika.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.fujimino-naika.jp/</a>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/reserve">
              <Button size="lg" className="bg-primary text-white text-xl font-bold px-10 py-5 rounded-xl shadow-lg hover:bg-primary/80 hover:brightness-110 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200">
                検査・カウンセリング予約へ
              </Button>
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
              <p className="hidden md:block text-sm text-gray-500">※ キャンペーン期間：2025年9月30日まで</p>
              <Link href="/reserve">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  検査・カウンセリング予約へ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* お問い合わせフォーム */}
      <section ref={contactFade.ref} className={`py-20 bg-white fade-in-section${contactFade.isMounted && contactFade.isVisible ? ' is-visible' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">お問い合わせ</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

// お問い合わせフォーム本体
function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('送信に失敗しました');
      }

      toast.success('お問い合わせを受け付けました');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      toast.error('送信中にエラーが発生しました');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
        <div>
          <Label htmlFor="name">お名前</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">メールアドレス</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="subject">件名</Label>
          <Input
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="message">お問い合わせ内容</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="min-h-[200px]"
          />
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? '送信中...' : '送信する'}
        </Button>
      </form>
    </div>
  );
}

