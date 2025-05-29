"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const clinics = [
  "ホリスティッククリニック東京",
  "美浜ホームクリニック",
  "ふじみ野内科クリニック",
];

export default function ReservePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("診察");
  const [clinic, setClinic] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const handleReserve = async () => {
    if (!name || !email || !emailConfirm) {
      toast.error("必須項目を入力してください");
      return;
    }
    if (email !== emailConfirm) {
      toast.error("メールアドレスが一致しません");
      return;
    }
    if (!clinic) {
      toast.error("クリニックを選択してください");
      return;
    }
    if (!date) {
      toast.error("日時を選択してください");
      return;
    }
    setLoading(true);
    try {
      // ここでAPIに送信する処理を実装
      toast.success("予約が完了しました");
      // router.push("/thanks");
    } catch (e) {
      toast.error("予約に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center mb-8">
        <img src="/mainlogo_millic.png" alt="milli-c ロゴ" width={200} height={60} style={{ width: '200px', height: 'auto' }} />
      </div>
      <h1 className="text-3xl font-bold text-center mb-12">検査・カウンセリング予約フォーム</h1>
      <Card className="p-6 max-w-xl mx-auto">
        <div className="mb-4">
          <label className="block mb-1 font-semibold">お名前 <span className="text-red-500">※必須</span></label>
          <input type="text" className="w-full border rounded px-3 py-2" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">メールアドレス <span className="text-red-500">※必須</span></label>
          <input type="email" className="w-full border rounded px-3 py-2" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">メールアドレス確認用 <span className="text-red-500">※必須</span></label>
          <input type="email" className="w-full border rounded px-3 py-2" value={emailConfirm} onChange={e => setEmailConfirm(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">電話番号</label>
          <input type="tel" className="w-full border rounded px-3 py-2" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">検査 or カウンセリング</label>
          <select className="w-full border rounded px-3 py-2" value={type} onChange={e => setType(e.target.value)}>
            <option value="検査">検査</option>
            <option value="カウンセリング">カウンセリング</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">クリニック選択 <span className="text-red-500">※必須</span></label>
          <select className="w-full border rounded px-3 py-2" value={clinic} onChange={e => setClinic(e.target.value)} required>
            <option value="">選択してください</option>
            {clinics.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold">日時選択 <span className="text-red-500">※必須</span></label>
          <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
        </div>
        <Button onClick={handleReserve} disabled={loading} className="w-full">
          {loading ? "送信中..." : "予約する"}
        </Button>
      </Card>
      <div className="flex justify-center mt-12">
        <a href="/" className="inline-block">
          <Button size="lg" className="bg-gray-600 text-white text-lg font-bold px-8 py-4 rounded-xl shadow hover:bg-gray-800 transition-all duration-200">
            トップページへ戻る
          </Button>
        </a>
      </div>
    </div>
  );
}
