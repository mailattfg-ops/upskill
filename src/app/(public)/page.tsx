import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "UP SKILL | CFA Course Prep Saudi Arabia",
  description: "Join UP SKILL's elite CFA preparation program. Get access to comprehensive study materials, practice questions, and mock exams designed to help you pass.",
};

export default function Home() {
  return <HomeClient />;
}
