'use client';

import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer"
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'sonner';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <main>{children}</main>
        <Footer />
        <Toaster />
      </ThemeProvider>
    </SessionProvider>
  );
} 