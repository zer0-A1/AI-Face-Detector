// react
import { PropsWithChildren } from 'react';

// next
import type { Metadata } from 'next';

// uploadthing
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from 'uploadthing/server';
import { ourFileRouter } from '@/app/api/uploadthing/core';

// global styles
import '@/styles/globals.css';

// fonts
import { inter } from '@/ui/fonts';

export const metadata: Metadata = {
  title: 'AI Face Detection by Taro Shibusawa',
  description: 'AI Face Detection with age, gender, and ethnicity recognition',
  keywords: [
    'AI',
    'face',
    'detection',
    'recognition',
    'ethnicity',
    'age',
    'race',
    'Taro Shibusawa',
  ],
  icons: { icon: '/images/favicon.png' },
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'AI Face Detection by Taro Shibusawa',
    siteName: 'AI Face Detection by Taro Shibusawa',
    description:
      'AI face detection with age, gender, and ethnicity recognition',
    images: {
      url: '/images/screenshots/home.png',
      alt: 'AI Face Detection by Taro Shibusawa',
      width: 1200,
      height: 654,
      type: 'image/png',
      secureUrl: '/images/screenshots/home.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Face Detection by Taro Shibusawa',
    description:
      'AI face detection with age, gender, and ethnicity recognition',
    images: '/images/screenshots/home.png',
    creator: '@taroshibusawa',
    site: '@taroshibusawa',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`bg-[url('/images/bg.webp')] bg-no-repeat bg-left-bottom bg-[length:100%] md:bg-[length:800px] ${inter.className} bg-[#00162A]`}
      >
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        {children}
      </body>
    </html>
  );
}
