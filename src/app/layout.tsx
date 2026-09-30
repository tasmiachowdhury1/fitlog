import { Oswald } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})



export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
    >
      <body className={`min-h-full flex flex-col ${oswald.className}`}>
        <Navbar />
        {children}
      </body>

    </html>
  )
}
