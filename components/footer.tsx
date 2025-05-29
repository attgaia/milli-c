import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pb-8">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col items-center space-y-3">
          {/* 利用規約とプライバシーポリシー */}
          <div className="flex space-x-6 text-sm">
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              利用規約
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/company" className="text-gray-400 hover:text-white transition-colors">
              運営会社
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

