import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AIトーク友達',
  description: 'あなたの日常に、ちょっと楽しい会話を',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' className={notoSansJP.className}>
      <body className='antialiased'>
        {children}
        <GoogleAnalytics gaId='G-54S0ZWV871' />
      </body>
    </html>
  );
}
