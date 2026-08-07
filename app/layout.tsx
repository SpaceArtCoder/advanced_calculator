import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.scss";


const digitalFont = localFont({
  src: "./fonts/BitcountPropSingle-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf",
  variable: "--font-digital",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calculator",
  description: "Always at hand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${digitalFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
