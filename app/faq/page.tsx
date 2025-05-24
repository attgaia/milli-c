import { Card, CardContent } from "@/components/ui/card";

const faqs = [
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
];

export default function FaqPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">よくある質問</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((item, idx) => (
          <Card key={idx} className="border-none shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-3">{item.q}</h2>
              <p className="text-gray-600">{item.a}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 