export default function HeroSection() {
  return (
    <section className="relative w-full bg-white flex flex-col items-center z-10 overflow-visible">
      {/* Visual linear gradient band (full bleed, 231px tall at the top) */}
      <div
        className="absolute top-0 left-0 w-full h-[200px] pointer-events-none z-0"
        style={{
          background: "linear-gradient(180deg, #4879FF 0%, rgba(72, 121, 255, 0.2) 70%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      {/* Centered Content Wrapper: 1728px max-width */}
      <div className="relative z-10 w-full max-w-[1728px] pt-[110px] pb-6 px-6 lg:px-[113px] text-center flex flex-col items-center gap-[18px]">
        {/* Title: What is CFA? */}
        <h1 className="font-['Cal_Sans'] font-normal text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[50px] 2xl:text-[66px] leading-[1.15] text-[#4879FF] text-center max-w-none animate-fade-in">
          What is CFA?
        </h1>
        {/* Description: premium typography with relaxed wrapping */}
        <p className="font-sans font-normal text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[1.5] text-center text-[#5C5C5C] max-w-[928px] w-full px-4 mt-2">
          The chartered financial analyst (CFA) charter is a professional designation offered by the CFA Institute. The CFA Institute is an organization that measures and certifies the competence and integrity of financial analysts.
        </p>
      </div>
    </section>
  );
}

