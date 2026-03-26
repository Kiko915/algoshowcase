import type { Metadata } from "next";
import { Public_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AlgoShowcase - The Digital Curator",
  description:
    "A high-end editorial showcase that treats code and programming projects as fine art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
