"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/mainlogo_millic.png"
                alt="milli-c Logo"
                width={200}
                height={50}
                priority
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav className="ml-10 flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-primary font-medium">
                milli-cとは？
              </Link>
              <Link href="/process" className="text-gray-700 hover:text-primary font-medium">
                サービス内容
              </Link>
              <Link href="/process" className="text-gray-700 hover:text-primary font-medium">
                検査の流れ
              </Link>
              <Link href="/process" className="text-gray-700 hover:text-primary font-medium">
                よくある質問
              </Link>
              <Link href="/process" className="text-gray-700 hover:text-primary font-medium">
                特設ページ
              </Link>
              <Link href="/process" className="text-gray-700 hover:text-primary font-medium">
                お問い合わせ
              </Link>
              <Link href="/for-clinics" className="text-gray-700 hover:text-primary font-medium">
                医療関係の皆様へ
              </Link>
              {/* 使用しないメニュー項目
              <Link href="/results" className="text-gray-700 hover:text-primary font-medium">
                検査でわかること
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-primary font-medium">
                検査料金
              </Link>
              <Link href="/clinics" className="text-gray-700 hover:text-primary font-medium">
                提携クリニック
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-primary font-medium">
                よくある質問
              </Link>
              */}
            </nav>
          </div>

          <div className="hidden md:block">
            <Button className="ml-4">検査予約</Button>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">メニューを開く</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              milli-cとは？
            </Link>
            <Link
              href="/process"
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              検査の流れ
            </Link>
            <Link
              href="/results"
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              検査でわかること
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              検査料金
            </Link>
            <Link
              href="/clinics"
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              提携クリニック
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              よくある質問
            </Link>
            <div className="mt-3 px-3">
              <Button className="w-full">検査予約</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

