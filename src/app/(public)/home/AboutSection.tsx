import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about-company" className="w-full bg-white pt-10 pb-16 md:pb-20 lg:pt-12 lg:pb-24 xl:pb-28 px-6 overflow-hidden px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-6 mb-8 md:mb-12 lg:mb-16">

        <h2 className="font-['Cal_Sans'] font-normal text-[40px] lg:text-[46px] xl:text-[54px] 2xl:text-[66px] leading-[1.15] text-[#4879FF] text-center w-full max-w-[800px]">
          About Upskill
        </h2>

        {/* Subtitle — Figma: DM Sans 24px, #5C5C5C */}
        <p className="font-sans font-normal text-[14px] md:text-[18px] lg:text-[22px] leading-[19.2px] md:leading-[32px] tracking-[-0.03em] md:tracking-[0em] text-center text-[#5C5C5C] w-full max-w-[1128px] overflow-visible px-4">
          We are Upskill, and we are a Saudi Arabia-based CFA training academy shaping the next generation of Charterholders.
        </p>
      </div>

      <div className="mx-auto max-w-[1503px] flex flex-col-reverse lg:flex-row gap-6 lg:gap-8 xl:gap-12 items-stretch min-h-[400px] lg:min-h-[450px] xl:min-h-[520px] 2xl:min-h-[668px]">
        {/* Left card with description */}
        <div className="flex-1 w-full max-w-[378px] mx-auto lg:max-w-none flex flex-col justify-center p-5 md:p-8 lg:p-10 xl:p-12 bg-[#F5F5F5] rounded-[18px] lg:rounded-[30px] h-[401px] lg:h-auto overflow-hidden">
          <p className="text-[11.5px] sm:text-sm lg:text-sm xl:text-base leading-[1.45] text-[#5C5C5C] font-sans font-normal text-justify">
            Passing the CFA exam shouldn&apos;t feel like a solo marathon.
            Yet across Saudi Arabia, thousands of college students and
            working professionals study in isolation, hoping to be
            among the 45% who clear the exam. We founded Upskill
            because we saw too many ambitious aspirants across the
            Kingdom studying in complete isolation without proper
            guidance. Every candidate deserves better than generic
            online portals; they need high-impact, classroom-based
            training, real-time feedback, and mentors who actually
            keep them accountable. We knew that self-study portals
            simply couldn&apos;t replace the immense value of a real
            classroom and face-to-face mentorship. Today, as Saudi
            Arabia’s financial landscape expands at an unprecedented
            pace, the market demand for top-tier, credentialed talent is
            higher than ever. As Vision 2030 transforms the entire
            economy, we align our training with national goals to build
            world-class financial expertise. In this new economic era,
            the CFA certification is a gold standard. Upskill exists to
            bridge the gap between your ambition and a passing score.
            By combining intensive offline training sessions with
            dedicated mentorship, we provide the structure, expert
            guidance, and personalized coaching you need to
            confidently pass your exams and join the next generation of
            financial leaders in Saudi Arabia.
          </p>
        </div>

        {/* Right card with image */}
        <div className="relative w-full max-w-[378px] mx-auto h-[775px] lg:h-auto lg:max-w-none lg:w-[320px] xl:w-[380px] 2xl:w-[443px] rounded-[25.53px] overflow-hidden bg-[#F2F2F2] flex-shrink-0 shadow-sm">
          <Image
            src="/about_company_building.webp"
            alt="UP SKILL company building"
            fill
            priority
            className="object-cover"
          />
          {/* Bottom fade-to-white gradient */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[120px] pointer-events-none z-10"
            style={{
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
