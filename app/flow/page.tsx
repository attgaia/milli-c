import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, TestTube, FileCheck } from "lucide-react";

export default function FlowPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">検査の流れ</h1>
      <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <Card className="border-none shadow-lg">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2">1. 予約</h2>
            <p className="text-gray-600">WEBフォームまたはお電話でご予約いただけます。ご希望の日時とクリニックをお選びください。</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-lg">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2">2. 来院・問診・採血＋尿検査</h2>
            <p className="text-gray-600">ご予約日時にクリニックへご来院いただき、問診と採血・尿検査を行います。所要時間は約30分です。</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-lg">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
              <TestTube className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2">3. 検体の分析</h2>
            <p className="text-gray-600">最新技術を用いて検体を詳細に分析します。高精度な検査で早期発見を目指します。</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-lg">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
              <FileCheck className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2">4. 結果報告・カウンセリング</h2>
            <p className="text-gray-600">検査結果をレポートでご報告。ご希望の方には専門家によるカウンセリングもご案内します。</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 