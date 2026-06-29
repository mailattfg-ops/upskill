import Image from "next/image";
import Link from "next/link";
import { formatPublishDate } from "@/lib/utils";

interface Blog {
  id: string;
  title: string;
  description: string;
  read_time: string;
  publish_date: string;
  image: string;
}

interface BlogsSectionProps {
  blogsList: Blog[];
}

export default function BlogsSection({ blogsList }: BlogsSectionProps) {
  return (
    <section id="blogs" className="w-full bg-[#F1F1F1] pt-6 md:pt-8 lg:pt-12 xl:pt-20 pb-8 md:pb-12 px-6 overflow-visible select-none px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1728px] w-full flex flex-col items-center">
        
        <h2 className="font-['Cal_Sans'] font-normal text-[40px] lg:text-[46px] xl:text-[54px] 2xl:text-[66px] leading-[1.15] text-[#4879FF] text-center w-full max-w-[800px]">
          Read blogs <br /> on CFA
        </h2>

        {/* Subtitle — Figma: DM Sans 24px, #5C5C5C */}
        <p className="font-sans font-normal text-[14px] md:text-[18px] lg:text-[22px] leading-[19.2px] md:leading-[32px] tracking-[-0.03em] md:tracking-[0em] text-center text-[#5C5C5C] w-full max-w-[1128px] overflow-visible px-4">
          Stay ahead with expert CFA tips, study strategies, and industry insights written by finance experts.
        </p>

        {/* Blog Cards Grid — Figma: width: 1587px, height: 554px, gap: 45px */}
        <div className="mt-6 md:mt-8 lg:mt-10 w-full max-w-[1587px] flex flex-col md:flex-row gap-[20px] lg:gap-[30px] xl:gap-[45px] z-20 justify-center items-stretch">
          {blogsList.map((blog, idx) => (
            <Link
              key={blog.id || idx}
              href={`/blog?id=${blog.id}`}
              className="flex flex-row flex-1 w-[340px] max-w-full md:w-auto md:max-w-[520px] lg:max-w-[580px] xl:max-w-[680px] 2xl:max-w-[771px] h-[244px] md:h-auto bg-white border-[0.44px] md:border border-[#C0C0C0] rounded-[8.82px] md:rounded-[20px] overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer mx-auto"
            >
              {/* Image Box */}
              <div className="relative w-[166.7px] md:w-[49%] h-[244px] md:h-auto md:min-h-[320px] lg:min-h-[350px] xl:min-h-[420px] 2xl:min-h-[554px] flex-shrink-0 bg-[#EEEEEE]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {/* Details Box */}
              <div className="flex-1 p-3.5 md:p-4 md:pl-6 lg:p-6 lg:pl-8 xl:p-10 xl:pl-12 flex flex-col justify-center bg-white h-[244px] md:h-auto">
                <div className="flex flex-col gap-[6px] xl:gap-[12px] 2xl:gap-[16px]">
                  {/* Eyebrow */}
                  <span className="font-sh-grotesk font-normal text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[21px] leading-[103%] text-[#2530FF] whitespace-nowrap">
                    {blog.read_time}
                  </span>
                  {/* Heading */}
                  <h3 className="font-['Cal_Sans'] font-normal text-[13.5px] md:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[34px] leading-[1.1] text-black tracking-normal mt-0.5 xl:mt-2">
                    {blog.title}
                  </h3>
                  {/* Description */}
                  <p className="font-sans font-normal text-[9.5px] md:text-[11px] lg:text-[13px] xl:text-[14px] 2xl:text-[21px] leading-[1.3] text-[#727272] tracking-[-3%] mt-0.5 xl:mt-2">
                    {blog.description}
                  </p>
                </div>
                {/* Date */}
                <span className="font-sh-grotesk font-normal text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[21px] leading-[103%] text-black mt-2 md:mt-6 xl:mt-8 2xl:mt-12 block">
                  {formatPublishDate(blog.publish_date)}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View all articles button — Figma: width 259px, height 66px */}
        <div className="mt-8 md:mt-12 lg:mt-16 flex justify-center z-20">
          <Link
            href="/blogs"
            className="w-[259px] h-[66px] bg-black hover:bg-black/90 text-white rounded-[20px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex items-center justify-center transition-all duration-300 font-['Cal_Sans'] font-normal text-[24px] leading-[100%] tracking-[-0.25px] select-none text-center"
          >
            View all articles
          </Link>
        </div>
      </div>
    </section>
  );
}
