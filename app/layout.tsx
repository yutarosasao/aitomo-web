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
  title: {
    default: 'アイトモ',
    template: '%s | アイトモ',
  },
  description: 'VOICEVOX搭載の音声会話&チャットアプリ',
  openGraph: {
    title: 'アイトモ',
    description: 'VOICEVOX搭載の音声会話&チャットアプリ',
    url: 'https://aitomo.com',
    siteName: 'アイトモ',
    locale: 'ja_JP',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
