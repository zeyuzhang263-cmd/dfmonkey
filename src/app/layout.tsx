import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'dfmonkey - AI-Powered EA Trading Solutions',
  description: 'Three profitable trading strategies designed for stable returns. Join thousands of traders.',
  keywords: 'EA trading, forex trading, AI trading, XAUUSD, trading automation',
  openGraph: {
    title: 'dfmonkey - AI-Powered EA Trading Solutions',
    description: 'Three profitable trading strategies for stable returns.',
    type: 'website',
    url: 'https://dfmonkey.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
