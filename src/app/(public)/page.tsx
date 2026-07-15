import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "UP SKILL | CFA Course Prep Saudi Arabia | Upskill Middle East",
  description: "Join UP SKILL (Upskill Middle East), Saudi Arabia's premier offline CFA preparation program. Get expert prep guidance, study materials, and mock exams designed to help you pass.",
  keywords: [
    "cfa course",
    "cfa course saudi arabia",
    "upskill",
    "upskill middle east",
    "cfa exam preparation",
    "cfa training riyadh",
    "cfa study guide",
    "finance training ksa",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "CFA Exam Preparation Course",
    "description": "Saudi Arabia's premier offline CFA preparation course by UP SKILL (Upskill Middle East). Access comprehensive study guides, mock exams, and rich resources to pass your CFA exam.",
    "provider": {
      "@type": "Organization",
      "name": "UP SKILL (Upskill Middle East)",
      "sameAs": "https://www.upskillmiddleeast.com"
    },
    "educationalCredentialAwarded": "CFA Charterholder Candidate Prep",
    "offers": {
      "@type": "Offer",
      "category": "Educational Program",
      "areaServed": [
        {
          "@type": "Country",
          "name": "Saudi Arabia"
        },
        {
          "@type": "Country",
          "name": "Middle East"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
