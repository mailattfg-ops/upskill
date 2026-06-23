import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Portal | Upskill",
  description: "Upskill CFA Admin Portal for managing blogs and testimonials",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {children}
    </div>
  );
}
