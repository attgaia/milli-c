import React from "react";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-16 px-4 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12">プライバシーポリシー</h1>
      <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
        <p>このページはプライバシーポリシーのサンプルです。実際の内容は別途ご用意ください。</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">1. 個人情報の取得</h2>
        <p>当サービスは、利用目的の達成に必要な範囲で、適正に個人情報を取得します。</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">2. 個人情報の利用目的</h2>
        <p>取得した個人情報は、以下の目的で利用します。<br />・サービスの提供・運営のため<br />・お問い合わせ対応のため<br />・その他上記利用目的に付随する目的</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">3. 個人情報の第三者提供</h2>
        <p>法令に定める場合を除き、本人の同意なく第三者に提供することはありません。</p>
      </div>
    </div>
  );
} 