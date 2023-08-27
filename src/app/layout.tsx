import type { Metadata } from 'next'
import {  Kumbh_Sans } from 'next/font/google'
import './globals.css'

const kumbh = Kumbh_Sans({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' })

export const metadata: Metadata = {
  title: 'E-commerce product page',
  description: 'E-commerce product page',
  icons: {icon: {url: '/favicon.png', type:"image/png", sizes:"32x32"}}
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${kumbh.className} leading-normal bg-background text-foreground`}>{children}</body>
    </html>
  )
}
