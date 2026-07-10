import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google';

import './globals.css';

const spaceGrotesk = Space_Grotesk({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const jetbrainsMono = JetBrains_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  description:
    'Portfolio of Pratik Rajbhandari, a full stack developer building scalable, distributed systems and delightful product experiences.',
  icons: {
    apple: '/apple-icon.png',
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icon-light-32x32.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icon-dark-32x32.png',
      },
      {
        type: 'image/svg+xml',
        url: '/icon.svg',
      },
    ],
  },
  title: 'Pratik Rajbhandari — Full Stack Developer',
};

// eslint-disable-next-line react-refresh/only-export-components
export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1512',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html
      className={`dark bg-background ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      lang="en"
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
