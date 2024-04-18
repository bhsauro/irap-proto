import {open_sans} from "./fonts.js";
import "./globals.css";
import Nav from "../components/ltr-nav";

export const metadata = {
  title: "IRAP Prototype",
  description: "Prototype of an eligibility screening tool for the International Refugee Assistance Project (IRAP)",
};

export default function RootLayout({ children }) {

  return (
    <html>
    <body className={`${open_sans.className} antialiased h-full`}>{children}</body>
    </html>
  )
}