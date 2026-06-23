import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/app/home/footer";

export const metadata: Metadata = {
  title: "Contact Us | UP SKILL",
  description: "Get in touch with us. We're here to assist you with any questions or comments regarding our CFA preparation program.",
};

export default function ContactLayout({
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
