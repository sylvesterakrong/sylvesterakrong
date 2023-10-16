import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Banner from './components/Banner/page'
import Footer from './components/Footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'sylvesterakrong.dev',
  description: 'My portfolio website which was made with next js and typescript and was styled with tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Banner/>
      <body className={inter.className}>{children}</body>
      <Footer/>
    </html>
  )
}
