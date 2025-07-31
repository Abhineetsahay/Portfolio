import { Inter } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Website",
  description: "Abhineet Sahay Portfolio website created using NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/vercel.svg" />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <LenisScroll>{children}</LenisScroll>
      </body>
    </html>
  );
}
