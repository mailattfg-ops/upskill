import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import BookingModal from "@/components/BookingModal";
import ScrollAnimate from "@/components/ScrollAnimate";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UP SKILL | CFA Exam Preparation",
  description: "Pass your CFA exams with UP SKILL. Saudi Arabia's premier CFA prep course offering expert study guidance, comprehensive mock exams, and rich prep resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollAnimate />
        {children}
        <BookingModal />
      </body>
    </html>
  );
}
