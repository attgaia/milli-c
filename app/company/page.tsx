import React from "react";

export default function CompanyPage() {
  return (
    <div className="container mx-auto py-16 px-4 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12">運営会社</h1>
      <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold mt-8 mb-4">会社概要</h2>
        <table className="w-full text-left mb-8">
          <tbody>
            <tr><th className="pr-4 py-2">会社名</th><td>株式会社ミリシー（サンプル）</td></tr>
            <tr><th className="pr-4 py-2">所在地</th><td>東京都千代田区サンプル1-2-3</td></tr>
            <tr><th className="pr-4 py-2">設立</th><td>2023年4月</td></tr>
            <tr><th className="pr-4 py-2">代表者</th><td>山田 太郎</td></tr>
            <tr><th className="pr-4 py-2">事業内容</th><td>医療系Webサービスの開発・運営</td></tr>
          </tbody>
        </table>
        <p>本ページは運営会社情報のサンプルです。実際の内容は別途ご用意ください。</p>
      </div>
    </div>
  );
} 