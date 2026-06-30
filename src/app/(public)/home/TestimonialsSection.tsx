import Image from "next/image";

interface Testimonial {
  id?: string;
  name: string;
  role: string;
  text: string;
  image: string;
}

interface TestimonialsSectionProps {
  visibleTestimonials: Testimonial[];
}

export default function TestimonialsSection({ visibleTestimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="w-full bg-white pt-[78px] pb-24 md:pb-32 px-6 overflow-hidden  px-6 md:px-8 lg:px-12">
      {/* Section Header */}
      <div className="mx-auto flex flex-col items-center gap-6 md:gap-[23px] mb-14 md:mb-16 fade-up">
        {/* Heading — Figma: Cal Sans 90px, #4879FF */}
        <h2 className="font-['Cal_Sans'] font-normal text-[40px] lg:text-[46px] xl:text-[54px] 2xl:text-[66px] leading-[1.15] text-[#4879FF] text-center w-full max-w-[800px]">
          Hear From <br /> Our Students
        </h2>

        {/* Subtitle — Figma: DM Sans 24px, #5C5C5C */}
        <p className="font-sans font-normal text-[14px] md:text-[18px] lg:text-[22px] leading-[19.2px] md:leading-[32px] tracking-[-0.03em] md:tracking-[0em] text-center text-[#5C5C5C] w-full max-w-[1128px] overflow-visible px-4">
          Pass your CFA exams with Upskill and join the community of CFA charter holders.
        </p>
      </div>

      <div className="mx-auto w-full max-w-[1511.03px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
        {visibleTestimonials.map((t, idx) => (
          <div
            key={t.id || idx}
            className="flex flex-col w-full max-w-[476.43px] p-6 md:px-[31.31px] md:py-[32px] bg-white border-[1.36px] border-[#D5D5D5] rounded-[44px] shadow-xs hover:shadow-md transition-all duration-300 fade-up"
          >
            {/* Header: Avatar & Name/Role */}
            <div className="flex items-center gap-[23.14px]">
              {/* Avatar */}
              <div className="relative w-[65.34px] h-[65.34px] rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                <Image
                  src={t.image?.startsWith('http') ? `${t.image}?v=2` : (t.image || '/default_avatar.svg')}
                  alt={t.name}
                  fill
                  sizes="65.34px"
                  className="object-cover"
                />
              </div>
              {/* Name & Role block */}
              <div className="flex flex-col justify-center flex-1 min-h-[65.34px]">
                <span className="font-['DM_Sans'] font-semibold text-[22px] lg:text-[24px] leading-[28px] tracking-tight text-[#0A1015] select-none">
                  {t.name}
                </span>
                <span className="font-['DM_Sans'] font-normal text-[15px] lg:text-[16px] leading-[20px] lg:leading-[22px] tracking-normal text-[#808080] select-none mt-0.5">
                  {t.role}
                </span>
              </div>
            </div>

            {/* Testimonial text */}
            <p className="font-['DM_Sans'] font-normal text-[17px] lg:text-[18px] leading-[23px] lg:leading-[24px] text-[#17171C] mt-[24.5px] text-left">
              &ldquo;{t.text}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
