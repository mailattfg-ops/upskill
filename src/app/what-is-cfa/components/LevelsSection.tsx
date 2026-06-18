import { Check } from "lucide-react";

const levelsData = [
  {
    level: "1",
    subtext: "10 topics, ~1.5 hours of self-study",
    topics: [
      "Ethical and Professional Standards",
      "Quantitative Methods",
      "Economics",
      "Financial Statement Analysis",
      "Corporate Issuers",
      "Equity Investments",
      "Fixed Income",
      "Derivatives",
      "Alternative Investments",
      "Portfolio Management"
    ],
    skills: [
      "Financial Modeling",
      "Python Programming Fundamentals"
    ]
  },
  {
    level: "2",
    subtext: "10 topics, ~1.5 hours of self-study",
    topics: [
      "Ethical and Professional Standards",
      "Quantitative Methods",
      "Economics",
      "Financial Statement Analysis",
      "Corporate Issuers",
      "Equity Investments",
      "Fixed Income",
      "Derivatives",
      "Alternative Investments",
      "Portfolio Management"
    ],
    skills: [
      "Financial Modeling",
      "Python Programming Fundamentals",
      "Analyst Skills"
    ]
  },
  {
    level: "3",
    subtext: "2 topics, ~1.5 hours of self-study",
    topics: [
      "Asset Allocation",
      "Portfolio Construction",
      "Performance Measurement",
      "Execution and Risk Management",
      "Ethical and Professional Standards",
      "Portfolio Management (Wealth planning or Private Wealth)"
    ],
    skills: [
      "Portfolio Development and Construction",
      "Private Wealth Management (optional)",
      "One of (Optional): Wealth planning, Private Wealth/Institutional, etc"
    ]
  }
];

export default function LevelsSection() {
  return (
    <section className="relative w-full px-6 py-12 md:py-20 bg-[#F9F9F9] flex flex-col items-center">
      <h2 className="section-heading mb-12">
        The Three CFA Levels
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] w-full">
        {levelsData.map((data, idx) => (
          <div key={idx} className="flex flex-col bg-white border border-gray-200 rounded-[20px] p-6 lg:p-8 shadow-sm">
            <h3 className="font-sans font-bold text-xl mb-1">
              Level <br /> <span className="text-3xl">{data.level}</span>
            </h3>
            <p className="font-sans text-xs text-gray-500 mb-6">
              {data.subtext}
            </p>

            <h4 className="font-sans font-semibold text-sm mb-3">Topics</h4>
            <ul className="flex flex-col gap-2 mb-8">
              {data.topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-gray-600 leading-snug">{topic}</span>
                </li>
              ))}
            </ul>

            <h4 className="font-sans font-semibold text-sm mb-3">Practical Skills Modules</h4>
            <ul className="flex flex-col gap-2">
              {data.skills.map((skill, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-gray-600 leading-snug">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
