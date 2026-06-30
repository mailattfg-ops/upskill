import { Gem } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="w-full bg-white py-10 md:py-14 lg:py-16 xl:pt-18 xl:pb-20 px-4 overflow-visible relative z-10">
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
          className="flex-1 flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10 xl:p-12 bg-[#4879FF] text-white rounded-[40px] md:rounded-[71px] w-full md:max-w-[486px] h-auto mt-0 md:-mt-[37px] transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
          style={{ flexShrink: 1 }}
        >
          {/* Clock icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full  flex items-center justify-start self-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" fill="#ffffffff" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H53.39a8,8,0,0,0,7.23-4.57,48,48,0,0,1,86.76,0,8,8,0,0,0,7.23,4.57H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM80,144a24,24,0,1,1,24,24A24,24,0,0,1,80,144Zm136,56H159.43a64.39,64.39,0,0,0-28.83-26.16,40,40,0,1,0-53.2,0A64.39,64.39,0,0,0,48.57,200H40V56H216ZM56,96V80a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h8V88H72v8a8,8,0,0,1-16,0Z"></path></svg>
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
          className="flex-1 flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10 xl:p-12 bg-white rounded-[40px] md:rounded-[71px] border border-[#0D5FD5] shadow-sm w-full md:max-w-[487px] h-auto mt-0 md:mt-[69px] transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_20px_40px_rgba(13,95,213,0.08)]"
          style={{ flexShrink: 1 }}
        >
          {/* Calendar icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full  flex items-center justify-start self-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#000000" viewBox="0 0 256 256"><path d="M240,192h-8V168a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8v24H40V56H216v80a8,8,0,0,0,16,0V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Zm-72-16h48v16H168Z"></path></svg>
          </div>
          {/* Content group */}
          <div className="w-full max-w-[386px]">
            <h3 className="font-['Cal_Sans'] mt-4 font-normal text-[29px] lg:text-[24px] xl:text-[27px] 2xl:text-[30px] leading-[35px] text-[#5C5C5C] w-full max-w-[359px] mb-4">
              Classroom Sessions
            </h3>
            <p className="font-sans font-normal text-[17px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] leading-[21px] text-[#5C5C5C] w-full max-w-[386px]">
              Sessions with peers to maximise efficiency and form a community around a shared goal.
            </p>
          </div>
        </div>

        {/* ── RIGHT CARD — Blue ── */}
        <div
          className="flex-1 flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10 xl:p-12 bg-[#4879FF] text-white rounded-[40px] md:rounded-[71px] w-full md:max-w-[486px] h-auto mt-0 md:-mt-[37px] transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
          style={{ flexShrink: 1 }}
        >
          {/* Cert icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full  flex items-center justify-start self-start">
            <Gem width={60} height={50} />
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
