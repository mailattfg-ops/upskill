import Image from "next/image";

export default function Vision2030Section() {
  return (
    <section className="relative w-full px-6 py-16 md:py-24 bg-white flex flex-col items-center z-10 px-6 md:px-8 lg:px-12">
      
      {/* Title & Sub-copy */}
      <div className="text-center mb-[60px] max-w-[928px] flex flex-col items-center gap-[16px]">
        <h2 className="text-section-title text-[#1b1b1b]">
          CFA &amp; Saudi Vision 2030
        </h2>
        <p className="text-body-vision text-gray-mid max-w-[800px] leading-[1.2]">
          Saudi Arabia's Vision 2030 demands world-class financial professionals. Upskill ensures you become one.
        </p>
      </div>

      {/* 2-Column Container: 1474px max-width on desktop, 20px gap */}
      <div className="mx-auto max-w-[1503px] flex flex-col-reverse lg:flex-row gap-6 lg:gap-8 xl:gap-12 items-stretch min-h-[400px] lg:min-h-[450px] xl:min-h-[520px] 2xl:min-h-[668px]">
        
        {/* Left Text Box: 804px wide on desktop */}
        <div className="flex-1 flex flex-col justify-center py-6 md:py-8 lg:py-10 xl:py-12 px-8 md:px-32  bg-[#F5F5F5] rounded-[30px]">
          <p className="text-xs sm:text-sm lg:text-sm xl:text-base leading-relaxed text-gray-600 font-sans font-normal text-center">
            The transformation brought about by Saudi Arabia's Vision 2030 entails one of the most revolutionary changes being implemented by a nation in recent times. Saudi Arabia transforms from reliance on oil to establishing itself as one of the top nations in the world, creating investment opportunities. At the very center of this revolution is the creation of the Financial Sector Development Program (FSDP) to create an efficient market in the Kingdom through the presence of its capital markets, the establishment of mega sovereign wealth funds such as the Public Investment Fund (PIF) and the development of Riyadh into one of the best cities globally for Vision 2030 to become a success. Saudi Arabia requires some of the most talented individuals who possess skills in areas like asset management and portfolio strategies.
          </p>
          <p className="text-xs sm:text-sm lg:text-sm xl:text-base leading-relaxed text-gray-600 font-sans font-normal text-center">
            The only way to gain such specialized talents is through obtaining knowledge about the complex world of finance. CFA certification is a gold standard in global finance which trains finance students to learn solutions for complex real-life finance issues. Through the CFA, individuals become experts in areas of asset management, portfolios, and ethics.
          </p>
        </div>

        {/* Right Image Box: 650px wide on desktop — stretches to match text block height */}
        <div className="relative w-full min-h-[300px] md:min-h-[400px] lg:w-[320px] xl:w-[380px] 2xl:w-[443px] rounded-[30px] overflow-hidden bg-[#F2F2F2] flex-shrink-0 shadow-sm">
          <Image
            src="/saudi_vision_2030.jpg"
            alt="Saudi Arabia Vision 2030 Kingdom Centre"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

      </div>
    </section>
  );
}

