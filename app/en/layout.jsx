// import { Inter } from "../../next/font/google"
import "../globals.css";
import Nav from "../../components/ltr-nav"

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  
  return (
    <>
    <Nav />
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
    </>
  )}