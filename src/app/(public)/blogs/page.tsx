import type { Metadata } from "next";
import BlogsPageClient from "./BlogsPageClient";

export const metadata: Metadata = {
  title: "Blogs & CFA Insights | UP SKILL",
  description: "Stay ahead with expert CFA tips, study strategies, and industry insights written by finance experts at UP SKILL.",
};

export default function BlogsPage() {
  return <BlogsPageClient />;
}
