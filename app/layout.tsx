import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './Components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tic Tac Toe',
  generator:'nas_dev',
  referrer:'origin-when-cross-origin',
  keywords:["tictactoe","game","tic","tac","toe","Mini game,nextJs,tailwind_css","game with react","reactjs","nextjs","tictactoe game"],
  creator: 'Nasreddine abdellouche',
  description: ' Mini game ',
  icons: {
    icon:"./favicon.ico",
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Footer />
      </body>
    </html>
  )
}
