import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/app/home/footer";

export const metadata: Metadata = {
  title: "CFA Training Program | UP SKILL",
  description: "Learn practical strategies to balance your study schedule with a demanding career through our CFA preparation program.",
};

export default function ProgramLayout({
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
