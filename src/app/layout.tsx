import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abhishek Kalyane | Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in Next.js, GenAI, and scalable Full-Stack solutions. Building high-performance digital experiences that drive growth.",
  keywords: [
    "Abhishek Kalyane",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "GenAI",
    "Web Development",
  ],
  authors: [{ name: "Abhishek Kalyane" }],
  openGraph: {
    title: "Abhishek Kalyane | Senior Software Engineer",
    description:
      "Building high-performance digital experiences with Next.js, GenAI, and modern web technologies.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
