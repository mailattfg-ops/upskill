import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WhatIsCfaLayout({
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
