import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sacred Structures",
  description: "Explore the beauty and history of Sacred Structures around the world",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Sacred Structures</title>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
       <Analytics />
        </ThemeProvider>
        
      </body>
    </html>
  )
}



import './globals.css'
