import Link from "next/link";

export default function CfaCtaSection() {
  return (
    <section id="cfa-cta" className="w-full bg-[#F1F1F1] pb-16 md:pb-24 px-6 overflow-visible select-none">
      <div className="mx-auto max-w-[1728px] w-full flex flex-col items-center">
        {/* Blue CTA Banner Box — Figma: width 1674px, height 727px, radius: 57px */}
        <div
          className="w-full max-w-[354px] md:max-w-[1674px] mx-auto h-[584px] md:h-auto md:min-h-[500px] lg:min-h-[560px] xl:min-h-[620px] 2xl:h-[727px] rounded-[17px] md:rounded-[57px] overflow-hidden z-20 text-center relative flex flex-col items-center justify-center px-4 md:px-6 animate-fade-in"
          style={{
            background: "linear-gradient(180deg, #4879FF 0%, #0637BC 57.03%)",
          }}
        >
          {/* Dots overlay inside the banner itself to match Multiply blend mode inside the banner */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-90"
            style={{
              backgroundImage: "url('/cta_dots_pattern.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
 
          {/* Content Wrapper — Centered flex container to manage gaps and alignment dynamically */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 max-w-[1128px] py-6 md:py-16">
            {/* Title — Cal Sans, white, centered */}
            <h2 className="w-full max-w-[800px] font-['Cal_Sans'] font-normal text-[57.6px] sm:text-[57.6px] md:text-[42px] lg:text-[50px] xl:text-[58px] leading-[1.0] text-white tracking-normal text-center select-none">
              Ready to <br className="sm:hidden" /> pass <br className="hidden sm:inline" /> your <br className="sm:hidden" /> CFA exam?
            </h2>
 
            {/* Subtitle — Geist/font-sans, white/90, centered */}
            <p className="w-full max-w-[566px] font-sans font-normal text-[13px] sm:text-[14.4px] md:text-[15px] lg:text-[16px] xl:text-[18px] leading-[1.4] md:leading-[130%] text-white/90 tracking-tight md:tracking-[-0.04em] text-center select-none px-4">
              Book a free Consultation today and build a smarter, <br className="hidden md:inline" /> more structured CFA preparation strategy.
            </p>

            {/* Button — White background, brand blue text */}
            <Link
              href="#book-consultation"
              className="w-[240px] h-[52px] md:w-[308px] md:h-[66px] bg-white hover:bg-white/95 text-[#4879FF] font-['Cal_Sans'] font-normal text-[16px] md:text-[21px] leading-[100%] tracking-[-0.25px] rounded-[14px] md:rounded-[20px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex items-center justify-center transition-all transform hover:scale-102 active:scale-98 select-none text-center"
            >
              Book a free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
