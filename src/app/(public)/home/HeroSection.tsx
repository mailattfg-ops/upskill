import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center h-auto pt-[96px] sm:pt-[112px] pb-0 md:pt-[120px] lg:pt-[110px] xl:pt-[110px] px-0 overflow-visible bg-white">
      <div className="w-full max-w-[1474px] flex flex-col items-center text-center gap-0 px-6">
        {/* Main Headline */}
        <h1 className="font-['Cal_Sans'] font-normal text-[44px] sm:text-[36px] lg:text-[40px] xl:text-[50px] 2xl:text-[66px] leading-[1.1] text-[#4879FF] text-center max-w-none animate-fade-in">
          Upskilling <br className="sm:hidden" /> Tomorrow&apos;s <br className="sm:hidden" /> CFA <br /> Charterholder
        </h1>

        {/* Subtitle */}
        <p className="font-sans font-normal text-[12px] sm:text-[13.5px] xl:text-[15px] 2xl:text-[17px] leading-[1.4] text-center text-[#727272] max-w-[928px] w-full px-3 sm:px-4 mt-3 tracking-tight">
          Expert-led offline CFA training designed for ambitious <br className="sm:hidden" /> students, <br className="hidden md:inline" /> professionals, or anyone who aspires to <br className="sm:hidden" /> become a CFA across Saudi Arabia.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-row gap-3 sm:gap-4 w-full max-w-[340px] sm:max-w-none justify-center px-4 sm:px-0 z-10">
          <Link
            href="#book-consultation"
            className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-[14px] bg-[#4576FF] hover:bg-blue-700 text-white font-semibold px-4 sm:px-8 py-3.5 sm:py-2.5 text-[12px] sm:text-base leading-none text-center transition-all transform hover:scale-102 active:scale-98 shadow-md hover:shadow-lg shadow-blue-500/10 whitespace-nowrap"
          >
            Schedule a Free Consultation
          </Link>
          <Link
            href="/what-is-cfa"
            className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-[14px] border border-[#4576FF] text-[#4576FF] font-semibold px-4 sm:px-8 py-3.5 sm:py-2.5 text-[12px] sm:text-base leading-none text-center bg-white hover:bg-blue-50/50 transition-all transform hover:scale-102 active:scale-98 whitespace-nowrap"
          >
            Explore our programs
          </Link>
        </div>
      </div>

      {/* Hero Visual Block — Figma: 1474×736px, full-width container with custom gradient */}
      <div
        className="relative w-full overflow-visible mt-8 sm:mt-10 md:mt-0"
        style={{ background: "linear-gradient(180deg, #FFFFFF 17.6%, #4576FF 100%)" }}
      >
        {/* Outer container holding the height dynamically or aspect ratio 1100:492 at full 2xl width */}
        <div className="relative mx-auto max-w-[1100px] w-full h-[260px] sm:h-[300px] md:h-[250px] lg:h-[310px] xl:h-[390px] 2xl:h-[492px] overflow-visible">
          {/* Students cutout — sits on top of the gradient, centered and top-aligned, cropped at bottom */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/cfa_students.png"
                alt="A group of ambitious CFA finance students studying and holding textbooks"
                fill
                priority
                className="object-cover object-top md:object-contain md:object-bottom"
              />
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 w-full z-10 h-[80px] sm:h-[120px] md:h-[200px] lg:h-[260px] xl:h-[280px] 2xl:h-[309px] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(69, 118, 255, 0) 0%, #4576FF 71.16%)",
          }}
        />

        {/* Metrics Row — sitting at the bottom of the container */}
        {false && (
          <div className="absolute bottom-0 left-0 right-0 w-full z-10 flex justify-center items-end h-[180px] sm:h-[220px] md:h-[240px] lg:h-[260px] xl:h-[280px] 2xl:h-[309px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center px-4 w-full max-w-7xl pb-[2%] sm:pb-[3%] xl:pb-[4%]">
              {/* Metric 1 */}
              <div className="flex flex-col justify-center items-center gap-[6px] md:gap-[15.08px]">
                <span className="font-['Cal_Sans'] font-normal text-[18px] sm:text-[24px] md:text-[27px] lg:text-[30px] xl:text-[36px] leading-[88%] tracking-normal text-center">
                  CFA Levels
                </span>
                <span className="font-sans font-normal text-[10px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[19px] leading-[100%] tracking-[-0.03em] text-center text-blue-100/90">
                  I, II &amp; III Covered
                </span>
              </div>

              {/* Metric 2 */}
              <div className="flex flex-col justify-center items-center gap-[6px] md:gap-[15.08px]">
                <span className="font-['Cal_Sans'] font-normal text-[18px] sm:text-[24px] md:text-[27px] lg:text-[30px] xl:text-[36px] leading-[88%] tracking-normal text-center">
                  200+
                </span>
                <span className="font-sans font-normal text-[10px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[19px] leading-[100%] tracking-[-0.03em] text-center text-blue-100/90">
                  Students Mentored
                </span>
              </div>

              {/* Metric 3 */}
              <div className="flex flex-col justify-center items-center gap-[6px] md:gap-[15.08px]">
                <span className="font-['Cal_Sans'] font-normal text-[18px] sm:text-[24px] md:text-[27px] lg:text-[30px] xl:text-[36px] leading-[88%] tracking-normal text-center">
                  8+
                </span>
                <span className="font-sans font-normal text-[10px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[19px] leading-[100%] tracking-[-0.03em] text-center text-blue-100/90">
                  Years of Experience
                </span>
              </div>

              {/* Metric 4 */}
              <div className="flex flex-col justify-center items-center gap-[6px] md:gap-[15.08px]">
                <span className="font-['Cal_Sans'] font-normal text-[18px] sm:text-[24px] md:text-[27px] lg:text-[30px] xl:text-[36px] leading-[88%] tracking-normal text-center">
                  87%
                </span>
                <span className="font-sans font-normal text-[10px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[19px] leading-[100%] tracking-[-0.03em] text-center text-blue-100/90">
                  Student Pass Rate
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}