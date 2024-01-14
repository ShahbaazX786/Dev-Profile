import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import LayoutContainer from '@/components/LayoutContainer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Developer Profile Finder',
  description: 'Find the Github Profile of any user using their username.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <LayoutContainer>
        <body className={inter.className}>{children}</body>
      </LayoutContainer>
    </html>
  )
}
