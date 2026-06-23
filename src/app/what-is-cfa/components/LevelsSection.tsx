import { Check } from "lucide-react";

const levelsData = [
  {
    level: "I",
    subtext: "10 topics, 2 Practical Skills Modules",
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
    level: "II",
    subtext: "10 topics, 3 Practical Skills Modules",
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
    level: "III",
    subtext: "6 topics, 4 pathways",
    topics: [
      "Asset Allocation",
      "Portfolio Construction",
      "Performance Evaluation",
      "Derivatives & Risk Management",
      "Ethical and Professional Standards",
      "Portfolio Management: Private Wealth, Institutional Asset"
    ],
    skills: [
      "Portfolio Development and Construction",
      "Portfolio Management: Private Wealth (optional pathway)",
      "Asset Allocation: Private Wealth pathway (optional pathway)",
      "Managing Private Wealth, Joint Private Wealth portfolio (optional pathway)"
    ]
  }
];

export default function LevelsSection() {
  return (
    <section className="relative w-full px-6 py-16 md:py-24 bg-[#f7f8fc] flex flex-col items-center z-10">
      
      {/* Title */}
      <div className="text-center mb-[60px] max-w-[928px] flex flex-col items-center">
        <h2 className="text-section-title text-[#161c2d]">
          The Three CFA Levels
        </h2>
      </div>

      {/* Cards Container: 1512px max width on desktop, 37.8px gap between cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch justify-center gap-6 lg:gap-[37.8px] w-full max-w-[1512px]">
        {levelsData.map((data, idx) => (
          <div 
            key={idx} 
            className="flex flex-col bg-white border border-gray-100 rounded-[9.45px] p-[28.35px] gap-[28.35px] shadow-sm transition-all duration-300 hover:shadow-md w-full"
          >
            {/* Level Badge Header */}
            <div className="flex flex-col gap-1">
              <span className="text-level-label text-gray-mid">
                Level
              </span>
              <span className="text-level-number text-brand-blue">
                {data.level}
              </span>
              <p className="text-list-caption text-gray-mid leading-none mt-2">
                {data.subtext}
              </p>
            </div>

            {/* divider line */}
            <div className="w-full h-px bg-gray-100" />

            {/* Topics Section */}
            <div className="flex flex-col gap-4">
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-near-black">
                Topics
              </h4>
              <ul className="flex flex-col gap-3">
                {data.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gray-400" strokeWidth={3} />
                    </span>
                    <span className="text-list-caption text-gray-mid leading-snug">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills Section */}
            <div className="flex flex-col gap-4">
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-near-black">
                Practical Skills Modules
              </h4>
              <ul className="flex flex-col gap-3">
                {data.skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gray-400" strokeWidth={3} />
                    </span>
                    <span className="text-list-caption text-gray-mid leading-snug">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

