import '@/styles/global.css';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import { Chakra } from '@/libs/Chakra';
import { AppConfig } from '@/utils/AppConfig';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: '/android-chrome-192x192.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      url: '/android-chrome-512x512.png',
    },
    {
      rel: 'manifest',
      url: '/site.webmanifest',
    },
  ],
};

export default function RootLayout({ children, params }: LayoutExtendedProps) {
  if (!AppConfig.locales.includes(params.locale)) notFound();

  const messages = useMessages();

  return (
    <html style={{ backgroundColor: 'black' }} lang={params.locale}>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Chakra>{children}</Chakra>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
