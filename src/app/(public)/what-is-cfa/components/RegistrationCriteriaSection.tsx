export default function RegistrationCriteriaSection() {
  return (
    <section className="relative w-full px-6 py-12 md:py-20 flex flex-col items-center bg-white z-10 px-6 md:px-8 lg:px-12">
      
      {/* Title & Sub-copy */}
      <div className="text-center mb-[60px] max-w-[928px] flex flex-col items-center gap-[16px]">
        <h2 className="text-section-title text-[#161c2d]">
          Registration Criteria <br className="sm:hidden" /> and Requirements
        </h2>
        <p className="text-body-default text-gray-mid max-w-[800px]">
          To become a CFA charterholder, your professional work experience must meet the following criteria:
        </p>
      </div>

      {/* Row Cards Container: 1539px max-width, 45px physical gap on desktop */}
      <div className="flex flex-col gap-[45px] w-full max-w-[1539px]">
        
        {/* Row 1: Investment Decision Making */}
        <div className="relative w-full min-h-[180px] md:h-[153px] bg-brand-blue text-white rounded-[28px] flex flex-col md:flex-row items-center overflow-hidden shadow-sm transition-all duration-300 hover:translate-y-[-2px]">
          {/* Left Icon Area: 157px wide, flush to left, light blue fill */}
          <div className="absolute left-0 top-0 w-full md:w-[157px] h-[80px] md:h-full bg-light-blue-tint rounded-t-[28px] md:rounded-t-none md:rounded-l-[28px] flex items-center justify-center shrink-0">
            {/* Strategy / Decision SVG */}
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
              <path d="M4 4l4 4m-4 0l4-4" />
              <circle cx="6" cy="18" r="2" />
              <path d="M8 18h6a4 4 0 0 0 4-4V6" />
              <path d="M15 9l3-3 3 3" />
            </svg>
          </div>
          {/* Content Zone: Offset by 197px from left on desktop */}
          <div className="w-full h-full flex flex-col md:flex-row md:items-center pt-[90px] md:pt-0 pb-6 md:pb-0 pl-6 md:pl-[197px] pr-6 md:pr-10 gap-4 md:gap-[40px]">
            <div className="md:w-[420px] shrink-0">
              <h3 className="text-card-heading text-white leading-tight font-medium">
                Investment Decision Making
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-body-large text-white/90 font-light leading-snug">
                Evaluating financial, economic, or statistical data in investment processes directly.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: Supervisory Roles */}
        <div className="relative w-full min-h-[180px] md:h-[153px] bg-brand-blue text-white rounded-[28px] flex flex-col md:flex-row items-center overflow-hidden shadow-sm transition-all duration-300 hover:translate-y-[-2px]">
          {/* Left Icon Area: 157px wide, flush to left, light blue fill */}
          <div className="absolute left-0 top-0 w-full md:w-[157px] h-[80px] md:h-full bg-light-blue-tint rounded-t-[28px] md:rounded-t-none md:rounded-l-[28px] flex items-center justify-center shrink-0">
            {/* Sheet / Document SVG */}
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
              <rect x="5" y="3" width="14" height="18" rx="2" ry="2" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="9" y1="12" x2="15" y2="12" />
              <line x1="9" y1="16" x2="13" y2="16" />
            </svg>
          </div>
          {/* Content Zone: Offset by 197px from left on desktop */}
          <div className="w-full h-full flex flex-col md:flex-row md:items-center pt-[90px] md:pt-0 pb-6 md:pb-0 pl-6 md:pl-[197px] pr-6 md:pr-10 gap-4 md:gap-[40px]">
            <div className="md:w-[420px] shrink-0">
              <h3 className="text-card-heading text-white leading-tight font-medium">
                Supervisory Roles
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-body-large text-white/90 font-light leading-snug">
                Managing or overseeing individuals who perform qualifying investment-related work.
              </p>
            </div>
          </div>
        </div>

        {/* Row 3: Teaching & Research */}
        <div className="relative w-full min-h-[180px] md:h-[153px] bg-brand-blue text-white rounded-[28px] flex flex-col md:flex-row items-center overflow-hidden shadow-sm transition-all duration-300 hover:translate-y-[-2px]">
          {/* Left Icon Area: 157px wide, flush to left, light blue fill */}
          <div className="absolute left-0 top-0 w-full md:w-[157px] h-[80px] md:h-full bg-light-blue-tint rounded-t-[28px] md:rounded-t-none md:rounded-l-[28px] flex items-center justify-center shrink-0">
            {/* Screen / Blackboard SVG */}
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
              <rect x="3" y="3" width="18" height="13" rx="2" />
              <path d="M12 16v5M8 21h8" />
              <path d="M9 7h6M9 10h4" />
            </svg>
          </div>
          {/* Content Zone: Offset by 197px from left on desktop */}
          <div className="w-full h-full flex flex-col md:flex-row md:items-center pt-[90px] md:pt-0 pb-6 md:pb-0 pl-6 md:pl-[197px] pr-6 md:pr-10 gap-4 md:gap-[40px]">
            <div className="md:w-[420px] shrink-0">
              <h3 className="text-card-heading text-white leading-tight font-medium">
                Teaching &amp; Research
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-body-large text-white/90 font-light leading-snug">
                Teaching topics directly related to investment and finance activities.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

