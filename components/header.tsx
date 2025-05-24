"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* PC表示時のロゴ */}
        <div className="hidden md:flex justify-center py-6 w-[250px] mx-auto">
          <Link href="/" className="flex items-center w-[250px]">
            <Image
              src="/images/mainlogo_millic.png"
              alt="milli-c Logo"
              width={250}
              height={100}
              priority
              className="w-[250px] h-auto"
            />
          </Link>
        </div>

        <div className="flex items-center justify-between h-16">
          {/* モバイル表示時のロゴ */}
          <div className="md:hidden flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/mainlogo_millic.png"
                alt="milli-c Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:block w-full">
            <nav className="flex items-center justify-center w-full gap-12 h-16">
              <div className="flex flex-1 items-center justify-center gap-12">
                {[
                  { href: '/about', label: 'milli-cとは？' },
                  { href: '/service', label: 'サービス内容' },
                  { href: '/flow', label: '検査の流れ' },
                  { href: '/faq', label: 'よくある質問' },
                  { href: '/special', label: '特設ページ' },
                  { href: '/contact', label: 'お問い合わせ' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-gray-500 font-normal px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-primary/10 hover:text-primary ${pathname === item.href ? 'text-primary font-semibold bg-primary/10' : ''}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link href="/reserve" className="ml-auto px-12 py-3 bg-primary text-white font-bold rounded-lg transition-colors duration-200 hover:bg-primary/80" style={{ minWidth: '160px', textAlign: 'center' }}>
                検査・カウンセリング予約
              </Link>
            </nav>
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
              href="/service"
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              サービス内容
            </Link>
            <Link
              href="/flow"
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              検査の流れ
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              よくある質問
            </Link>
            <Link
              href="/special"
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              特設ページ
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </Link>
            <Link
              href="/for-clinics"
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              医療関係の皆様へ
            </Link>
            <Link href="/reserve">
              <div className="mt-3 px-3">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold shadow-lg">検査・カウンセリング予約</Button>
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

