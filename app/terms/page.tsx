import React from "react";

export default function TermsPage() {
  return (
    <div className="container mx-auto py-16 px-4 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12">利用規約</h1>
      <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
        <p>このページは利用規約のサンプルです。実際の内容は別途ご用意ください。</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">第1条（適用）</h2>
        <p>本規約は、当サービスの利用に関する条件を定めるものです。</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">第2条（禁止事項）</h2>
        <p>ユーザーは、以下の行為をしてはなりません。<br />・法令または公序良俗に違反する行為<br />・犯罪行為に関連する行為<br />・その他運営者が不適切と判断する行為</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">第3条（免責事項）</h2>
        <p>当サービスの利用により生じた損害について、運営者は一切の責任を負いません。</p>
      </div>
    </div>
  );
} 