import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
import AOS from '@/components/AOS'
import classNames from 'classnames'

const roboto = Noto_Sans({
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'yumi',
  description: 'meu portifólio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body
        className={classNames(
          roboto.className,
          'w-[100vw] max-w-full min-h-screen flex flex-col'
        )}
      >
        <AOS />
        {children}
      </body>
    </html>
  )
}
