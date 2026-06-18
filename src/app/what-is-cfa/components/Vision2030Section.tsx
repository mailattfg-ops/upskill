import Image from "next/image";

export default function Vision2030Section() {
  return (
    <section className="relative w-full px-6 py-12 md:py-24 bg-white flex flex-col items-center">
      <div className="text-center mb-10 max-w-[800px]">
        <h2 className="section-heading mb-4">
          CFA &amp; Saudi Vision 2030
        </h2>
        <p className="font-sans text-sm md:text-base text-gray-600">
          Saudi Arabia's Vision 2030 demands world-class financial professionals. Upskill ensures you become one.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-[1200px] w-full items-stretch">
        
        {/* Left Text Box */}
        <div className="flex-1 bg-[#F5F5F5] rounded-[30px] p-8 md:p-12">
          <p className="font-sans text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed text-center lg:text-left">
            The transformation brought about by Saudi Arabia's Vision 2030 entails one of the most revolutionary changes being implemented by a nation in recent times. Saudi Arabia transforms from reliance on oil to establishing itself as one of the top nations in the world, creating investment opportunities. At the very center of this revolution is the creation of the Financial Sector Development Program (FSDP) to create an efficient market in the Kingdom through the presence of its capital markets, the establishment of mega sovereign wealth funds such as the Public Investment Fund (PIF) and the development of Riyadh into one of the best cities globally for Vision 2030 to become a success. Saudi Arabia requires some of the most talented individuals who possess skills in areas like asset management and portfolio strategies.
            <br /><br />
            The only way to gain such specialized talents is through obtaining knowledge about the complex world of finance. CFA certification is a gold standard in global finance which trains finance students to learn solutions for complex real-life finance issues. Through the CFA, individuals become experts in areas of asset management, portfolios, and ethics.
          </p>
        </div>

        {/* Right Image Box */}
        <div className="relative w-full lg:w-[400px] xl:w-[450px] min-h-[300px] lg:min-h-auto rounded-[30px] overflow-hidden flex-shrink-0 bg-gray-200">
          <Image
            src="/about_company_building.webp" /* Placeholder, can be swapped with Kingdom Centre image later */
            alt="Saudi Arabia Vision 2030"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
