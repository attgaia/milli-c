'use client';

import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'sonner';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </ThemeProvider>
    </SessionProvider>
  );
} 