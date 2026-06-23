"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

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

const sections = [
  { id: "preparation", tocTitle: "Introduction", bodyTitle: "CFA Exam Preparation" },
  { id: "networking", tocTitle: "Start with yacht size and layout", bodyTitle: "Networking Opportunities" },
  { id: "format", tocTitle: "Duration matters more than many realize", bodyTitle: "Exam Format and Structure" },
  { id: "career", tocTitle: "Services you can tailor", bodyTitle: "Career Opportunities Post-CFA" },
];

export default function ProgramPage() {
  // Set default active section to "format" (linked to the third link "Duration matters more than many realize")
  // to match the exact mockup snapshot where that specific link is highlighted active by default.
  const [activeSection, setActiveSection] = useState("format");
  const [blogsList, setBlogsList] = useState<any[]>([]);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const { data } = await supabase
          .from("blogs")
          .select("*")
          .order("publish_date", { ascending: false })
          .limit(2);
        if (data && data.length > 0) {
          setBlogsList(data);
        } else {
          setBlogsList(STATIC_BLOGS);
        }
      } catch (err) {
        console.error("Error loading blogs on program page:", err);
        setBlogsList(STATIC_BLOGS);
      }
    }
    loadBlogs();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Force "format" active when scrolled near the top of the page (hero area)
      if (window.scrollY < 400) {
        setActiveSection("format");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only update if we are scrolled past the top hero section
          if (entry.isIntersecting && window.scrollY >= 400) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    // Initial check
    if (window.scrollY < 400) {
      setActiveSection("format");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <main className="w-full flex flex-col items-center bg-white relative z-10 overflow-visible">
      {/* Visual linear gradient band (full bleed, 231px tall at the top) */}
      <div 
        className="absolute top-0 left-0 w-full h-[231px] pointer-events-none z-0"
        style={{
          background: "linear-gradient(180deg, #4879FF 0%, rgba(72, 121, 255, 0.2) 70%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      {/* Hero / Article Header */}
      <section className="relative z-10 w-full max-w-[934px] pt-[176px] pb-8 flex flex-col items-center text-center px-6 md:px-0">
        {/* Category Label */}
        <span className="text-[20px] sm:text-[24px] font-sans font-normal tracking-tight text-[#2530FF] mb-3">
          Explore
        </span>

        {/* H1 Title */}
        <h1 className="font-['Cal_Sans'] font-normal text-[36px] sm:text-[48px] md:text-[64px] leading-[1.1] text-black tracking-tight max-w-[850px]">
          A basic intro to CFA and how it works
        </h1>

        {/* Subtitle */}
        <p className="mt-4 font-sans font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-[#727272] max-w-[760px]">
          Learn practical strategies to balance your study schedule with a demanding career.
        </p>

        {/* Date Row */}
        <div className="mt-6 flex items-center justify-center text-sm sm:text-base font-sans font-medium text-black">
          <span>March 17, 2025</span>
        </div>
      </section>

      {/* Full-width Feature Image */}
      <div className="w-full relative h-[250px] sm:h-[350px] md:h-[480px] lg:h-[580px] xl:h-[661px] mb-12 overflow-hidden pointer-events-none z-10">
        <Image
          src="/program_hero.jpg"
          alt="CFA Program Banner"
          fill
          priority
          className="object-cover object-top"
        />
      </div>

      {/* 2-Column Article Body */}
      <div className="relative z-10 w-full max-w-[934px] flex flex-col md:flex-row gap-6 md:gap-[48px] items-start px-6 md:px-0 pb-16">
        
        {/* Mobile Table of Contents Accordion / Panel */}
        <div className="w-full md:hidden bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-4">
          <span className="font-['Cal_Sans'] text-[20px] text-black block mb-3">
            Contents
          </span>
          <div className="flex flex-col gap-2.5">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleScrollTo(s.id)}
                className={`text-left text-sm sm:text-base font-sans transition-colors ${
                  activeSection === s.id
                    ? "text-[#2530FF] font-bold"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                • {s.tocTitle}
              </button>
            ))}
          </div>
        </div>

        {/* Left Sidebar: Table of Contents */}
        <aside className="w-[220px] shrink-0 sticky top-[120px] hidden md:block select-none">
          <h3 className="font-['Cal_Sans'] font-normal text-[28px] leading-tight text-black mb-6">
            Contents
          </h3>
          <nav className="flex flex-col gap-4">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleScrollTo(s.id)}
                className={`text-left text-[18px] leading-snug font-sans transition-colors ${
                  activeSection === s.id
                    ? "text-[#2530FF] font-bold"
                    : "text-[#9F9F9F] hover:text-black"
                }`}
              >
                {s.tocTitle}
              </button>
            ))}
          </nav>
        </aside>

        {/* Right Main Column: Article Content */}
        <article className="flex-1 w-full max-w-full md:max-w-[666px]">
          {/* Section 1 */}
          <section id="preparation" className="mb-12">
            <h2 className="font-['Cal_Sans'] font-normal text-[28px] sm:text-[34px] md:text-[40px] leading-[1.2] text-black mb-4 scroll-mt-[120px]">
              CFA Exam Preparation
            </h2>
            <p className="font-sh-grotesk font-normal text-[18px] sm:text-[20px] md:text-[22px] leading-[1.5] text-[#616161] mb-6">
              The CFA exam can be daunting, but with strategic planning and the right resources, candidates can streamline their study process. Utilizing study guides, practice exams, and online courses tailored to the CFA curriculum can significantly enhance understanding and retention of key concepts.
            </p>
          </section>

          {/* Section 2 */}
          <section id="networking" className="mb-12">
            <h2 className="font-['Cal_Sans'] font-normal text-[28px] sm:text-[34px] md:text-[40px] leading-[1.2] text-black mb-4 scroll-mt-[120px]">
              Networking Opportunities
            </h2>
            <p className="font-sh-grotesk font-normal text-[18px] sm:text-[20px] md:text-[22px] leading-[1.5] text-[#616161] mb-6">
              Joining CFA societies and attending local events allows candidates to connect with industry professionals. Engaging with mentors can provide invaluable insights and guidance, which can make a significant difference in a candidate's career trajectory post-certification.
            </p>
          </section>

          {/* Section 3 */}
          <section id="format" className="mb-12">
            <h2 className="font-['Cal_Sans'] font-normal text-[28px] sm:text-[34px] md:text-[40px] leading-[1.2] text-black mb-4 scroll-mt-[120px]">
              Exam Format and Structure
            </h2>
            <p className="font-sh-grotesk font-normal text-[18px] sm:text-[20px] md:text-[22px] leading-[1.5] text-[#616161] mb-6">
              Understanding the format of the CFA exams is crucial for success. The Level I exam consists of multiple-choice questions, while Levels II and III require candidates to grapple with detailed case studies and constructed responses, respectively. Familiarity with the exam structure helps in effective time management during the test.
            </p>
          </section>

          {/* Section 4 */}
          <section id="career" className="mb-4">
            <h2 className="font-['Cal_Sans'] font-normal text-[28px] sm:text-[34px] md:text-[40px] leading-[1.2] text-black mb-4 scroll-mt-[120px]">
              Career Opportunities Post-CFA
            </h2>
            <p className="font-sh-grotesk font-normal text-[18px] sm:text-[20px] md:text-[22px] leading-[1.5] text-[#616161] mb-6">
              Earning a CFA designation opens doors to various career paths in finance, including portfolio management, research analysis, and investment banking. The credential is highly regarded globally, often leading to higher earning potential and greater job security in the competitive financial services industry.
            </p>
          </section>
        </article>

      </div>

      {/* Divider line before Related Blogs */}
      <div className="relative z-10 w-[calc(100%-48px)] md:w-full h-px bg-[#EEEEEE] max-w-[934px] mx-auto mt-6 mb-2" />

      {/* Related Blogs Section: Section background is white to match Figma exactly */}
      <section className="relative z-10 w-full bg-white pt-2 pb-12 md:pt-4 md:pb-16 xl:pt-4 xl:pb-24 px-6 md:px-0 overflow-visible select-none">
        <div className="mx-auto max-w-[1728px] w-full flex flex-col items-center">
          {/* Heading */}
          <h2 className="font-['Cal_Sans'] font-normal text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[54px] 2xl:text-[66px] leading-[1.1] text-center text-[#2530FF] mb-4">
            Read blogs <br /> on CFA
          </h2>

          {/* Subtitle */}
          <p className="font-['DM_Sans'] font-normal text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] leading-[1.3] text-center text-[#5C5C5C] max-w-[1128px] px-4 mb-12">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>

          {/* Blog Cards Grid */}
          <div className="w-full max-w-[934px] flex flex-col md:flex-row gap-[20px] lg:gap-[30px] xl:gap-[45px] justify-center items-stretch">
            {blogsList.map((blog, idx) => (
              <div
                key={blog.id || idx}
                className="flex flex-col md:flex-row flex-1 max-w-full md:max-w-[520px] lg:max-w-[580px] xl:max-w-[680px] 2xl:max-w-[771px] bg-white border border-[#C0C0C0] rounded-[20px] overflow-hidden hover:shadow-md transition-all duration-300"
              >
                {/* Image Box */}
                <div className="relative w-full md:w-[49%] h-[220px] md:h-[260px] lg:h-[300px] xl:h-[340px] 2xl:h-[380px] flex-shrink-0 bg-[#EEEEEE]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 49vw"
                    className="object-cover"
                  />
                </div>
                {/* Details Box */}
                <div className="flex-1 p-6 md:p-5 lg:p-6 xl:p-8 2xl:p-10 flex flex-col justify-center bg-white">
                  <div className="flex flex-col gap-2 xl:gap-3 2xl:gap-4">
                    {/* Eyebrow */}
                    <span className="font-sh-grotesk font-normal text-[14px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[18px] leading-[1.03] text-[#2530FF] whitespace-nowrap">
                      {blog.read_time}
                    </span>
                    {/* Heading */}
                    <h3 className="font-['Cal_Sans'] font-normal text-[18px] sm:text-[20px] md:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[28px] leading-[1.1] text-black tracking-normal mt-1 xl:mt-2">
                      {blog.title}
                    </h3>
                    {/* Description */}
                    <p className="font-sans font-normal text-[13px] sm:text-[14px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] leading-[1.3] text-[#727272] tracking-[-3%] mt-1 xl:mt-2">
                      {blog.description}
                    </p>
                  </div>
                  {/* Date */}
                  <span className="font-sh-grotesk font-normal text-[14px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[18px] leading-[1.03] text-black mt-6 xl:mt-8 2xl:mt-10 block">
                    {blog.publish_date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
