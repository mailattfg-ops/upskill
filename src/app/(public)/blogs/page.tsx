import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import CfaCtaSection from "../home/CfaCtaSection";
import { formatPublishDate } from "@/lib/utils";
// import CfaCtaSection from "@/app/(public)/home/CfaCtaSection";


export const metadata: Metadata = {
  title: "Blogs & CFA Insights | UP SKILL",
  description: "Stay ahead with expert CFA tips, study strategies, and industry insights written by finance experts at UP SKILL.",
};

const STATIC_BLOGS = [
  {
    id: "static-blog-1",
    title: "How to Start Preparing for CFA Level I While Working Full-Time",
    description: "Learn practical strategies to balance your study schedule with a demanding career.",
    read_time: "5 min read",
    publish_date: "March 17, 2025",
    image: "/blog_laptop_charts.webp",
  },
  {
    id: "static-blog-2",
    title: "Top Mistakes CFA Candidates Make During Exam Preparation",
    description: "Avoid common study habits that slow down progress and affect exam performance.",
    read_time: "8 Min Read",
    publish_date: "March 17, 2025",
    image: "/blog_exam_writing.webp",
  }
];

export default async function BlogsPage() {
  let blogsList: any[] | null = null;
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("publish_date", { ascending: false });
    if (!error) {
      blogsList = data || [];
    }
  } catch (err) {
    console.error("Supabase blogs fetch error:", err);
  }

  if (blogsList === null) {
    blogsList = STATIC_BLOGS;
  }

  return (
    <div className="mx-auto  w-full">
      {/* Page Header */}
      <section id="blogs" className="pt-[112px] md:pt-[120px] lg:pt-[140px] xl:pt-[160px] w-full bg-[#F1F1F1] pb-8 md:pb-12 px-6 overflow-visible select-none">
        <div className="mx-auto max-w-[1728px] w-full flex flex-col items-center">

          {/* Heading — Figma: Cal Sans 90px, #4879FF, 544×180px */}
          <h2 className="font-['Cal_Sans'] font-normal text-[40px] lg:text-[46px] xl:text-[54px] 2xl:text-[66px] leading-[1.15] text-[#4879FF] text-center w-full max-w-[800px]">
            Read blogs <br /> on CFA
          </h2>

          {/* Subtitle — Figma: DM Sans 24px, #5C5C5C */}
          <p className="font-sans font-normal text-[14px] md:text-[18px] lg:text-[22px] leading-[19.2px] md:leading-[32px] tracking-[-0.03em] md:tracking-[0em] text-center text-[#5C5C5C] w-full max-w-[1128px] overflow-visible px-4">
            Stay ahead with expert CFA tips, study strategies, and industry insights written by finance experts.
          </p>

          {/* Blog Cards Grid — responsive 2-column grid */}
          {blogsList.length > 0 ? (
            <div className="mt-6 md:mt-8 lg:mt-10 w-full max-w-[1587px] grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:gap-[30px] xl:gap-[45px] z-20">
              {blogsList.map((blog, idx) => (
                <Link
                  key={blog.id || idx}
                  href={`/blog?id=${blog.id}`}
                  className="flex flex-col sm:flex-row bg-white border border-[#C0C0C0] rounded-[20px] overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  {/* Image Box */}
                  <div className="relative w-full sm:w-[45%] h-[200px] sm:h-auto sm:min-h-[240px] md:min-h-[260px] lg:min-h-[300px] xl:min-h-[360px] 2xl:min-h-[420px] flex-shrink-0 bg-[#EEEEEE]">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 49vw"
                      className="object-cover"
                    />
                  </div>
                  {/* Details Box */}
                  <div className="flex-1 p-6 md:p-4 md:pl-6 lg:p-6 lg:pl-8 xl:p-10 xl:pl-12 flex flex-col justify-center bg-white min-h-[300px]">
                    <div className="flex flex-col gap-[8px] xl:gap-[12px] 2xl:gap-[16px]">
                      {/* Eyebrow */}
                      <span className="font-sh-grotesk font-normal text-[15px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[21px] leading-[103%] text-[#2530FF] whitespace-nowrap">
                        {blog.read_time}
                      </span>
                      {/* Heading */}
                      <h3 className="font-['Cal_Sans'] font-normal text-[22px] md:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[34px] leading-[103%] text-black tracking-normal mt-1 xl:mt-2">
                        {blog.title}
                      </h3>
                      {/* Description */}
                      <p className="font-sans font-normal text-[14px] md:text-[11px] lg:text-[13px] xl:text-[14px] 2xl:text-[21px] leading-[120%] text-[#727272] tracking-[-3%] mt-1 xl:mt-2">
                        {blog.description}
                      </p>
                    </div>
                    {/* Date */}
                    <span className="font-sh-grotesk font-normal text-[15px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[21px] leading-[103%] text-black mt-6 xl:mt-8 2xl:mt-12 block">
                      {formatPublishDate(blog.publish_date)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-12 text-center text-gray-500 font-sans text-[18px]">
              No articles published yet.
            </p>
          )}

        </div>
      </section>
      <CfaCtaSection />
    </div>
  );
}
