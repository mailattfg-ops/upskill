import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details | UP SKILL",
  description: "Read the latest insights and study strategies from the UP SKILL CFA preparation network.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

