import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[96vh] sm:h-[610px] md:h-[660px] lg:h-[720px] xl:h-[780px] 2xl:h-[840px] overflow-hidden bg-white">
      {/* Background Image — full bleed. Position shifted down slightly (lower Y%) so
          there's clear open space above the subjects' heads for the text/buttons to
          sit in, instead of the crop starting right at head height. */}
      <div
        className="absolute inset-0 bg-no-repeat bg-[size:auto_125%] sm:bg-cover select-none pointer-events-none z-0"
        style={{
          backgroundImage: "url('/hero_students_wide.jpg')",
          backgroundPosition: "center 30%",
        }}
      />

      {/* Top White Fader Overlay — enlarged so the entire headline+subtitle+buttons
          block sits fully within the white/faded zone instead of spilling onto the photo */}
      <div
        className="absolute top-0 left-0 right-0 h-[60%] sm:h-[56%] md:h-[52%] z-10 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 40%, rgba(255, 255, 255, 0.85) 65%, rgba(255, 255, 255, 0.4) 85%, rgba(255, 255, 255, 0) 100%)"
        }}
      />

      {/* Bottom White Fader Overlay — blends photo into the page below */}
      <div
        className="hidden sm:absolute bottom-0 left-0 right-0 sm:h-[130px] md:h-[160px] z-10 pointer-events-none"
        style={{
          background: "linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 20%, rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, 0.3) 80%, rgba(255, 255, 255, 0) 100%)"
        }}
      />

      {/* Content Container (overlaid directly on top of fader boundaries) */}
      <div className="relative z-20 w-full max-w-[1474px] mx-auto flex flex-col items-center text-center pt-[96px] sm:pt-[110px] md:pt-[120px] lg:pt-[100px] px-6">
        {/* Main Headline */}
        <h1 className="font-['Cal_Sans'] font-normal text-[36px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[56px] 2xl:text-[70px] leading-[1.08] text-[#4879FF] text-center max-w-[1200px] animate-fade-in">
          Upskilling Tomorrow&apos;s <br /> CFA Charterholder
        </h1>

        {/* Subtitle */}
        <p className="font-sans font-normal text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px] leading-[1.35] text-center text-[#2f2f2f] max-w-[960px] w-full px-3 sm:px-4 mt-3 sm:mt-2 tracking-tight">
          Expert-led offline CFA training designed for ambitious<br /> students, professionals, or anyone who aspires to become a CFA across Saudi Arabia.
        </p>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-row gap-3 sm:gap-5 w-full max-w-[340px] sm:max-w-none justify-center px-4 sm:px-0">
          <Link
            href="#book-consultation"
            className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-[12px] sm:rounded-[16px] bg-[#4576FF] hover:bg-blue-700 text-white font-semibold px-4 sm:px-8 py-3 sm:py-3.5 text-[12px] sm:text-[16px] leading-none text-center transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_12px_24px_rgba(69,118,255,0.35)] hover:scale-[1.02] active:scale-98 whitespace-nowrap"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}