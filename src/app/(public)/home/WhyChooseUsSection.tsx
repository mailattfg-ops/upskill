export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="w-full bg-white py-10 md:py-14 lg:py-16 xl:pt-28 xl:pb-20 px-4 overflow-visible relative z-10">
      {/* Section header text block */}
      <div className="mx-auto flex flex-col items-center gap-6 mb-14 md:mb-28">
        {/* Heading — Figma: Cal Sans 90px, #4879FF */}
        <h2 className="font-['Cal_Sans'] font-normal text-[40px] lg:text-[46px] xl:text-[54px] 2xl:text-[66px] leading-[1.15] text-[#4879FF] text-center w-full max-w-[800px]">
          Why Choose <br /> Upskill?
        </h2>

        {/* Subtitle — Figma: DM Sans 24px, #5C5C5C */}
        <p className="font-sans font-normal text-[14px] md:text-[18px] lg:text-[22px] leading-[19.2px] md:leading-[32px] tracking-[-0.03em] md:tracking-[0em] text-center text-[#5C5C5C] w-full max-w-[1128px] overflow-visible px-4">
          We know how demanding CFA exams are. Master the hardest concepts faster with structured offline sessions and live support from top mentors.
        </p>
      </div>

      {/* Outer group — Figma: 1503×547px */}
      <div className="mx-auto w-full max-w-[1503px] flex flex-col md:flex-row md:items-start gap-6 md:gap-[22px] mt-4 md:mt-[-37px] min-h-none overflow-visible px-4 md:px-6 lg:px-8">
        {/* ── LEFT CARD — Blue ── */}
        <div
          className="flex-1 flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10 xl:p-12 bg-[#4879FF] text-white rounded-[40px] md:rounded-[71px] w-full md:max-w-[486px] h-auto mt-0 md:-mt-[37px]"
          style={{ flexShrink: 1 }}
        >
          {/* Clock icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/40 flex items-center justify-center self-start">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
            </svg>
          </div>
          {/* Content group — Figma: 386×201px */}
          <div className="w-full max-w-[386px]">
            <h3 className="font-['Cal_Sans'] font-normal text-[29px] lg:text-[24px] xl:text-[27px] 2xl:text-[30px] leading-[35px] text-white w-full max-w-[359px] mb-4">
              Personalized  <br /> Attention
            </h3>
            <p className="font-sans font-normal text-[17px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] leading-[21px] text-white w-full max-w-[386px]">
              Upskill’s small batch sizes ensure every student always receives focused and personalised attention.
            </p>
          </div>
        </div>

        {/* ── CENTER CARD — White ── */}
        <div
          className="flex-1 flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10 xl:p-12 bg-white rounded-[40px] md:rounded-[71px] border border-[#D0DCFF] shadow-sm w-full md:max-w-[487px] h-auto mt-0 md:mt-[69px]"
          style={{ flexShrink: 1 }}
        >
          {/* Calendar icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[28px] border border-[#D0DCFF] bg-[#F8FAFC] flex items-center justify-center self-start">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
            </svg>
          </div>
          {/* Content group */}
          <div className="w-full max-w-[386px]">
            <h3 className="font-['Cal_Sans'] mt-4 font-normal text-[29px] lg:text-[24px] xl:text-[27px] 2xl:text-[30px] leading-[35px] text-[#0f172a] w-full max-w-[359px] mb-4">
              Classroom Sessions
            </h3>
            <p className="font-sans font-normal text-[17px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] leading-[21px] text-[#5C5C5C] w-full max-w-[386px]">
              Sessions with peers to maximise efficiency and form a community around a shared goal.
            </p>
          </div>
        </div>

        {/* ── RIGHT CARD — Blue ── */}
        <div
          className="flex-1 flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10 xl:p-12 bg-[#4879FF] text-white rounded-[40px] md:rounded-[71px] w-full md:max-w-[486px] h-auto mt-0 md:-mt-[37px]"
          style={{ flexShrink: 1 }}
        >
          {/* Cert icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/40 flex items-center justify-center self-start">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <rect x="3" y="3" width="14" height="11" rx="2" />
              <circle cx="10" cy="18" r="3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 21l4-3 4 3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h6M7 10h4" />
            </svg>
          </div>
          {/* Content group */}
          <div className="w-full max-w-[386px]">
            <h3 className="font-['Cal_Sans'] mt-4 font-normal text-[29px] lg:text-[24px] xl:text-[27px] 2xl:text-[30px] leading-[35px] text-white w-full max-w-[359px] mb-4">
              Expert Guidance
            </h3>
            <p className="font-sans font-normal text-[17px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] leading-[21px] text-white w-full max-w-[386px]">
              Learn directly from expert CFA mentors committed to helping you pass the CFA exam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
