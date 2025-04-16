import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/placeholder.svg?height=40&width=150"
                alt="milli-c Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-6">がん細胞1ミリ以下でも検出可能。 超早期発見・予防で安心をお届けします。</p>
            <div className="flex items-center mb-4">
              <MapPin className="w-5 h-5 mr-3 text-primary" />
              <p className="text-gray-300">東京都千代田区○○1-2-3</p>
            </div>
            <div className="flex items-center mb-4">
              <Phone className="w-5 h-5 mr-3 text-primary" />
              <p className="text-gray-300">03-1234-5678</p>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-primary" />
              <p className="text-gray-300">info@milli-c.co.jp</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">サイトマップ</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  milli-cとは？
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-gray-300 hover:text-white transition-colors">
                  検査の流れ
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-gray-300 hover:text-white transition-colors">
                  検査でわかること
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  検査料金
                </Link>
              </li>
              <li>
                <Link href="/clinics" className="text-gray-300 hover:text-white transition-colors">
                  提携クリニック
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                  お客様の声
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">リソース</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="/medical" className="text-gray-300 hover:text-white transition-colors">
                  医療関係者向け
                </Link>
              </li>
              <li>
                <Link href="/about-company" className="text-gray-300 hover:text-white transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  利用規約
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">お問い合わせ</h3>
            <p className="text-gray-300 mb-6">
              検査に関するご質問やご不明点がございましたら、お気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded"
            >
              お問い合わせ
            </Link>
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-4">SNSでフォロー</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} milli-c All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

