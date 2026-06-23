import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | UP SKILL",
  description: "Get in touch with us. We're here to assist you with any questions or comments regarding our CFA preparation program.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

