export default function HeroSection() {
  return (
    <section className="relative w-full bg-white flex flex-col items-center z-10 overflow-visible">
      {/* Visual linear gradient band (full bleed, 231px tall at the top) */}
      <div 
        className="absolute top-0 left-0 w-full h-[231px] pointer-events-none z-0"
        style={{
          background: "linear-gradient(180deg, #4879FF 0%, rgba(72, 121, 255, 0.2) 70%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      {/* Centered Content Wrapper: 1728px max-width */}
      <div className="relative z-10 w-full max-w-[1728px] pt-[176px] pb-12 px-6 lg:px-[113px] text-center flex flex-col items-center gap-[18px]">
        {/* Title: What is CFA? */}
        <h1 className="text-display-hero text-brand-blue tracking-tight">
          What is CFA?
        </h1>
        {/* Description: 24px body text */}
        <p className="text-body-default text-gray-mid max-w-[928px] leading-[1.3] mx-auto">
          The chartered financial analyst (CFA) charter is a professional designation offered by the CFA Institute. The CFA Institute is an organization that measures and certifies the competence and integrity of financial analysts.
        </p>
      </div>
    </section>
  );
}

