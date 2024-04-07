import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IRAP Prototype",
  description: "Prototype of an eligibility screening tool for the International Refugee Assistance Project (IRAP)",
};

export default function RootLayout({ children }) {
  
  return (
    <html>
    <body className="h-full">
    <div className="min-h-full">
      <Nav />
      <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
        </div>
    </body>
  </html>
  )}