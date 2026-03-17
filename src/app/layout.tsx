import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';

export const metadata: Metadata = {
  title: 'Dsignxt ERP',
  description: 'Internal ERP handling Admin and Employee portals',
};

import { Toaster } from 'sonner';
import { CommandMenu } from '@/components/CommandMenu';
import AIAssistant from '@/components/ai/AIAssistant';
import { ThemeProvider } from '@/components/ThemeProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            {children}
            <Toaster position="top-right" richColors closeButton />
            <CommandMenu />
            <AIAssistant />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
