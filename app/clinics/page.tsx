'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// クリニックデータの型定義
type Clinic = {
  id: string;
  name: string;
  address: string;
  phone: string;
  area: string;
};

// サンプルデータ（実際のデータベースから取得するように変更予定）
const clinics: Clinic[] = [
  {
    id: '1',
    name: '東京中央クリニック',
    address: '東京都千代田区丸の内1-1-1',
    phone: '03-1234-5678',
    area: '東京',
  },
  {
    id: '2',
    name: '新宿メディカルクリニック',
    address: '東京都新宿区新宿3-1-1',
    phone: '03-2345-6789',
    area: '東京',
  },
  {
    id: '3',
    name: '横浜セントラルクリニック',
    address: '神奈川県横浜市中区1-1-1',
    phone: '045-123-4567',
    area: '神奈川',
  },
  {
    id: '4',
    name: '大阪メディカルセンター',
    address: '大阪府大阪市中央区1-1-1',
    phone: '06-1234-5678',
    area: '大阪',
  },
];

// エリアごとにクリニックをグループ化
const clinicsByArea = clinics.reduce((acc, clinic) => {
  if (!acc[clinic.area]) {
    acc[clinic.area] = [];
  }
  acc[clinic.area].push(clinic);
  return acc;
}, {} as Record<string, Clinic[]>);

export default function ClinicsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">提携クリニック一覧</h1>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">すべて</TabsTrigger>
          {Object.keys(clinicsByArea).map((area) => (
            <TabsTrigger key={area} value={area}>
              {area}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
          <div className="grid gap-4">
            {clinics.map((clinic) => (
              <ClinicCard key={clinic.id} clinic={clinic} />
            ))}
          </div>
        </TabsContent>

        {Object.entries(clinicsByArea).map(([area, areaClinics]) => (
          <TabsContent key={area} value={area}>
            <div className="grid gap-4">
              {areaClinics.map((clinic) => (
                <ClinicCard key={clinic.id} clinic={clinic} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

// クリニックカードコンポーネント
function ClinicCard({ clinic }: { clinic: Clinic }) {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-2">{clinic.name}</h3>
      <div className="space-y-1 text-sm text-gray-600">
        <p>住所: {clinic.address}</p>
        <p>電話: {clinic.phone}</p>
        <p>エリア: {clinic.area}</p>
      </div>
    </Card>
  );
}
