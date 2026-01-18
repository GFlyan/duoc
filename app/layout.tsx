import { montserrat } from '@/app/ui/fonts';
import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/header";


const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "DUO C",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${montserrat.className} antialiased h-auto w-full relative`} >
        <Header/>
        {children}
      </body>
    </html>
  );
}
