// app/layout.tsx
'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/hooks/useAuth';
import ConditionalLayout from '@/components/layouts/ConditionalLayout';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    <ConditionalLayout>
                        {children}
                    </ConditionalLayout>
                </AuthProvider>
            </body>
        </html>
    );
}