import "./globals.css";
import type { Metadata } from 'next'
import { Providers } from "./providers";
import { NavBar } from "@/components";
import { Toaster }  from "react-hot-toast";

export const metadata: Metadata = {
  title: 'Pokedex App',
  description: 'Created by Juan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        <Providers>
          {children}
          <Toaster/>
        </Providers>
      </body>
    </html>
  )
}
