import AuthContextProvider from "@/components/AuthProvider"
import "./globals.css"
import type { Metadata } from "next"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Gopher AI",
  description: "Gopher AI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="w-full h-full">
      <body className={cn("h-full w-full")}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  )
}
