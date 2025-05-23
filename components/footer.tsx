import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pb-24">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* お問い合わせリンク */}
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              お問い合わせ
            </Button>
          </Link>

          {/* SNSアイコン */}
          <div className="flex space-x-6">
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

          {/* 利用規約とプライバシーポリシー */}
          <div className="flex space-x-6 text-sm">
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              利用規約
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
          </div>

          {/* コピーライト */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} milli-c All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

