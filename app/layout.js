import { Inter } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhineet Sahay | Full Stack Developer & ML Enthusiast",
  description:
    "Portfolio of Abhineet Sahay — Full Stack Developer skilled in Next.js, TypeScript, PostgreSQL, and Machine Learning. Showcasing projects including an anime recommendation system, scalable web apps, and backend systems.",
  keywords: [
    "Abhineet Sahay",
    "Full Stack Developer",
    "Next.js Developer",
    "TypeScript",
    "Machine Learning",
    "Portfolio",
    "Web Developer India",
  ],
  authors: [{ name: "Abhineet Sahay" }],
  creator: "Abhineet Sahay",
  openGraph: {
    title: "Abhineet Sahay | Portfolio",
    description:
      "Explore projects, skills, and experience of Abhineet Sahay — Full Stack Developer and ML Enthusiast.",
    url: "https://devsahay.vercel.app/",
    siteName: "Abhineet Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhineet Sahay Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhineet Sahay | Portfolio",
    description:
      "Full Stack Developer building scalable apps and ML-powered systems.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://devsahay.vercel.app/"),
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
