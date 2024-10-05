import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css"
import Navbar from './Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cıne Verse",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
