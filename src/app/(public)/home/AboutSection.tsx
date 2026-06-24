import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about-company" className="w-full bg-white pt-10 pb-16 md:pb-20 lg:pt-12 lg:pb-24 xl:pb-28 px-6 overflow-hidden px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-6 mb-8 md:mb-12 lg:mb-16">
        
        <h2 className="font-['Cal_Sans'] font-normal text-[40px] lg:text-[46px] xl:text-[54px] 2xl:text-[66px] leading-[1.15] text-[#4879FF] text-center w-full max-w-[800px]">
          About the company
        </h2>

        {/* Subtitle — Figma: DM Sans 24px, #5C5C5C */}
        <p className="font-sans font-normal text-[14px] md:text-[18px] lg:text-[22px] leading-[19.2px] md:leading-[32px] tracking-[-0.03em] md:tracking-[0em] text-center text-[#5C5C5C] w-full max-w-[1128px] overflow-visible px-4">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>

      <div className="mx-auto max-w-[1503px] flex flex-col-reverse lg:flex-row gap-6 lg:gap-8 xl:gap-12 items-stretch min-h-[400px] lg:min-h-[450px] xl:min-h-[520px] 2xl:min-h-[668px]">
        {/* Left card with description */}
        <div className="flex-1 flex flex-col justify-center p-6 md:p-8 lg:p-10 xl:p-12 bg-[#F5F5F5] rounded-[30px]">
          <p className="text-xs sm:text-sm lg:text-sm xl:text-base leading-relaxed text-gray-600 font-sans font-normal text-center">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
            dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
            sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
            sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
            scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu
            tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet
            lacinia. Aliquam in elementum tellus.
            <br /><br />
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam
            a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
            Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a
            eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit
            amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia.
            Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum
            ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
            Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi,
            sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed
            tincidunt ac, finibus non odio.
          </p>
        </div>

        {/* Right card with image */}
        <div className="relative w-full min-h-[300px] md:min-h-[400px] lg:w-[320px] xl:w-[380px] 2xl:w-[443px] rounded-[30px] overflow-hidden bg-[#F2F2F2] flex-shrink-0 shadow-sm">
          <Image
            src="/about_company_building.webp"
            alt="UP SKILL company building"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
