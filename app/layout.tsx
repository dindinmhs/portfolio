import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";

const ubuntu = Ubuntu({ subsets: ["latin"], weight : ["400","500"] });

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
      <body className={`${ubuntu.className} bg-gray-50 dark:text-fontDark dark:bg-neutral-800`}>{children}</body>
    </html>
  );
}
