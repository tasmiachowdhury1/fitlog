import type { Metadata } from "next"
import { Oswald } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import { WorkoutProvider } from "./context/PlanContext"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer"



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
        <WorkoutProvider>
          <Navbar />
          {children}
          <Toaster position="top-right" toastOptions={{
            style: {
              background: "#1a1a1a",
              color: "#fff",
              border: "1px solid #2a2a2a",
            },
            success: {
              iconTheme: { primary: "#ccff00", secondary: "#0a0a0a" },
            },
          }} />
        </WorkoutProvider>
        <Footer />
      </body>

    </html>
  )
}
