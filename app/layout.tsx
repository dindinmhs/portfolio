import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { ReactQuery } from "@/context/reactquery";

const ubuntu = Ubuntu({ subsets: ["latin"], weight : ["400","500","700"] });


export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body className={`${ubuntu.className} bg-gray-50 dark:text-fontDark dark:bg-neutral-800`}>
        <ReactQuery>
          {children}
        </ReactQuery>
      </body>
    </html>
  );
}
