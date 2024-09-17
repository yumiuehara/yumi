import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import AOS from '@/components/AOS'

const roboto = Roboto({
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'yumi',
  description: "yumi's portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <div className="w-[100vw] max-w-full min-h-screen flex flex-col">
          <AOS />
          {children}
        </div>
      </body>
    </html>
  )
}
