import type { Metadata } from 'next'
import { inter } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Media Aggregation Center | Case Study',
  description: 'Turning invisible content into a core product capability - A WeatherBug product case study',
  openGraph: {
    title: 'Media Aggregation Center | Case Study',
    description: 'Turning invisible content into a core product capability',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
