import './globals.css';

import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';

const inter = Source_Code_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Patrick Fanella',
    description: 'Patrick Fanella Portfolio',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
