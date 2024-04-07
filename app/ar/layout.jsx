// import { Inter } from "../../.next/font/google"
import "../globals.css";
import Nav from "../../components/rtl-nav"

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  
  return (
    <html>
    <body className="h-full">
      <div className="min-h-full">
        <Nav />
        <div className="py-10">
            <main>
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
            </main>
          </div>
        </div>
    </body>
  </html>
  )}