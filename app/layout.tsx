import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/components/AuthProvider';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'クリニック予約',
  description: 'オンラインで簡単に予約できるクリニック予約システム',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}

import './globals.css'