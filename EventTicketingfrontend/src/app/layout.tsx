// app/layout.tsx
'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/hooks/useAuth';
import { I18nProvider } from '@/components/providers/I18nProvider';
import ConditionalLayout from '@/components/layouts/ConditionalLayout';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} min-h-screen`}>
                <AuthProvider>
                    <I18nProvider>
                        <ConditionalLayout>
                            {children}
                        </ConditionalLayout>
                    </I18nProvider>
                </AuthProvider>
            </body>
        </html>
    );
}