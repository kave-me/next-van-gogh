import type {Metadata} from "next";
import {Inter} from 'next/font/google'
import "./globals.css";
import {config} from "../../config"



const inter = Inter({
    variable: "--font-inter",
    subsets: ['latin']
})


export const metadata: Metadata = {
  title: config.home.title,
  description: config.home.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen max-w-screen-xl mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
