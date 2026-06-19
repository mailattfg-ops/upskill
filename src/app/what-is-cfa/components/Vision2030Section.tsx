import Image from "next/image";

export default function Vision2030Section() {
  return (
    <section className="relative w-full px-6 py-16 md:py-24 bg-white flex flex-col items-center z-10">
      
      {/* Title & Sub-copy */}
      <div className="text-center mb-[60px] max-w-[928px] flex flex-col items-center gap-6">
        <h2 className="text-section-title text-[#1b1b1b]">
          CFA &amp; Saudi Vision 2030
        </h2>
        <p className="text-body-vision text-gray-mid max-w-[800px] leading-[1.2]">
          Saudi Arabia's Vision 2030 demands world-class financial professionals. Upskill ensures you become one.
        </p>
      </div>

      {/* 2-Column Container: 1474px max-width on desktop, 20px gap */}
      <div className="flex flex-col lg:flex-row gap-5 max-w-[1474px] w-full items-stretch justify-center">
        
        {/* Left Text Box: 804px wide on desktop */}
        <div className="w-full lg:w-[804px] bg-surface-light rounded-[30px] p-8 md:p-12 flex flex-col justify-center shrink-0">
          <p className="text-body-default text-gray-mid text-left leading-[1.35]">
            The transformation brought about by Saudi Arabia's Vision 2030 entails one of the most revolutionary changes being implemented by a nation in recent times. Saudi Arabia transforms from reliance on oil to establishing itself as one of the top nations in the world, creating investment opportunities. At the very center of this revolution is the creation of the Financial Sector Development Program (FSDP) to create an efficient market in the Kingdom through the presence of its capital markets, the establishment of mega sovereign wealth funds such as the Public Investment Fund (PIF) and the development of Riyadh into one of the best cities globally for Vision 2030 to become a success. Saudi Arabia requires some of the most talented individuals who possess skills in areas like asset management and portfolio strategies.
          </p>
          <p className="text-body-default text-gray-mid text-left leading-[1.35] mt-6">
            The only way to gain such specialized talents is through obtaining knowledge about the complex world of finance. CFA certification is a gold standard in global finance which trains finance students to learn solutions for complex real-life finance issues. Through the CFA, individuals become experts in areas of asset management, portfolios, and ethics.
          </p>
        </div>

        {/* Right Image Box: 650px wide on desktop, 580px height */}
        <div className="relative w-full lg:w-[650px] min-h-[350px] lg:h-[580px] rounded-[30px] overflow-hidden flex-shrink-0 bg-gray-100 shadow-sm">
          <Image
            src="/saudi_vision_2030.jpg"
            alt="Saudi Arabia Vision 2030 Kingdom Centre"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}

