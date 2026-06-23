import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/app/home/footer";

export const metadata: Metadata = {
  title: "Blogs & CFA Insights | UP SKILL",
  description: "Stay ahead with expert CFA tips, study strategies, and industry insights written by finance experts at UP SKILL.",
};

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen bg-[#1B1B1B] font-sans text-white overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
