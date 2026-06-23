import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/app/home/footer";

export const metadata: Metadata = {
  title: "Blog Details | UP SKILL",
  description: "Read the latest insights and study strategies from the UP SKILL CFA preparation network.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
