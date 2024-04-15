import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/ltr-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IRAP Prototype",
  description: "Prototype of an eligibility screening tool for the International Refugee Assistance Project (IRAP)",
};

export default function RootLayout({ children }) {

  return (
    <html>
    <body className="h-full">
      {children}
    </body>
    </html>
  )
}