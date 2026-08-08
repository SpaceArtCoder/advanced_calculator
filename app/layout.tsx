import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";


const digitalFont = localFont({
  src: "./fonts/BitcountPropSingle-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf",
  variable: "--font-digital",
})


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
    <html lang="en" className={digitalFont.variable}>
      <body>{children}</body>
    </html>
  );
}
