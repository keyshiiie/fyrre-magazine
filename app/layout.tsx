import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Hero from '@/components/sections/Hero';
import RecentPosts from '@/components/sections/RecentPosts';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fyrre Magazine | Art & Life",
  description: "Don't close your eyes. Independent art and life magazine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <Hero />
        <RecentPosts />
      </body>
    </html>
  );
}