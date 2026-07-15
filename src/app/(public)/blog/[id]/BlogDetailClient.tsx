"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPublishDate } from "@/lib/utils";

interface BlogSection {
  id: string;
  tocTitle: string;
  bodyTitle: string;
  content: string;
}

interface Blog {
  id: string;
  title: string;
  description: string;
  read_time: string;
  publish_date: string;
  image: string;
  sections?: BlogSection[];
}

interface BlogDetailClientProps {
  blog: Blog;
  blogsList: Blog[];
}

export default function BlogDetailClient({ blog, blogsList }: BlogDetailClientProps) {
  const [activeSection, setActiveSection] = useState("preparation");

  // Resolve active sections for the blog
  const blogSections = useMemo(() => {
    if (!blog || !blog.sections || !Array.isArray(blog.sections)) {
      return [];
    }
    // Only return sections that actually have content
    return blog.sections.filter((s: any) => s && s.content && s.content.trim() !== "");
  }, [blog]);

  useEffect(() => {
    if (blogSections.length === 0) return;

    const firstSectionId = blogSections[0].id;

    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection(firstSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.scrollY >= 200) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-15% 0px -55% 0px",
        threshold: 0.1,
      }
    );

    blogSections.forEach((s: any) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    if (window.scrollY < 200) {
      setActiveSection(firstSectionId);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [blogSections]);

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!blog) {
    return (
      <div className="w-full min-h-[400px] flex flex-col items-center justify-center pt-24 pb-20">
        <h1 className="font-['Cal_Sans'] text-3xl text-black">Article Not Found</h1>
        <p className="text-slate-500 mt-2">The requested blog post could not be located.</p>
        <Link href="/blogs" className="mt-6 px-6 py-2.5 bg-black text-white rounded-lg font-semibold">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <main className="w-full flex flex-col items-center bg-white text-gray-900 relative z-10 overflow-visible">
      {/* Visual linear gradient band (full bleed, 231px tall at the top) */}
      <div
        className="absolute top-0 left-0 w-full h-[231px] pointer-events-none z-0"
        style={{
          background: "linear-gradient(180deg, #4879FF 0%, rgba(72, 121, 255, 0.2) 70%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      {/* Hero / Article Header */}
      <section className="relative z-10 w-full max-w-[934px] pt-[176px] pb-8 flex flex-col items-center text-center px-6 md:px-0">
        <span className="text-[20px] sm:text-[24px] font-sans font-normal tracking-tight text-[#2530FF] mb-3">
          Explore
        </span>

        <h1 className="font-['Cal_Sans'] font-normal text-[36px] sm:text-[48px] md:text-[64px] leading-[1.1] text-black tracking-tight max-w-[850px]">
          {blog.title}
        </h1>

        <p className="mt-4 font-sans font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-[#727272] max-w-[760px]">
          {blog.description}
        </p>

        <div className="mt-6 flex items-center justify-center text-sm sm:text-base font-sans font-medium text-black">
          <span>{formatPublishDate(blog.publish_date)}</span>
        </div>
      </section>

      {/* Full-width Feature Image */}
      <div className="w-full relative aspect-[16/9] md:aspect-none md:h-[480px] lg:h-[580px] xl:h-[661px] mb-12 overflow-hidden pointer-events-none z-10 bg-slate-50">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* 2-Column Article Body */}
      {blogSections.length > 0 && (
        <div className="relative z-10 w-full max-w-[934px] flex flex-col md:flex-row gap-6 md:gap-[48px] items-start px-6 md:px-0 pb-16">

          {/* Mobile Table of Contents */}
          <div className="w-full md:hidden bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-4">
            <span className="font-['Cal_Sans'] text-[20px] text-black block mb-3">
              Contents
            </span>
            <div className="flex flex-col gap-2.5">
              {blogSections.map((s: any) => (
                <button
                  key={s.id}
                  onClick={() => handleScrollTo(s.id)}
                  className={`text-left text-sm sm:text-base font-sans transition-colors ${activeSection === s.id
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
              {blogSections.map((s: any) => (
                <button
                  key={s.id}
                  onClick={() => handleScrollTo(s.id)}
                  className={`text-left text-[18px] leading-snug font-sans transition-colors ${activeSection === s.id
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
            {blogSections.map((s: any) => (
              <section key={s.id} id={s.id} className="mb-12 scroll-mt-[120px]">
                <h2 className="font-['Cal_Sans'] font-normal text-[28px] sm:text-[34px] md:text-[40px] leading-[1.2] text-black mb-4">
                  {s.bodyTitle}
                </h2>
                <p className="font-sh-grotesk font-normal text-[18px] sm:text-[20px] md:text-[22px] leading-[1.5] text-[#616161] mb-6 whitespace-pre-wrap">
                  {s.content}
                </p>
              </section>
            ))}
          </article>
        </div>
      )}

      {/* Suggested Blogs Section */}
      {blogsList && blogsList.length > 0 && (
        <section className="w-full bg-[#F9FAFB] border-t border-slate-100 py-16 md:py-20 px-6 overflow-hidden flex flex-col items-center">
          <div className="w-full max-w-[934px]">
            <h2 className="font-['Cal_Sans'] font-normal text-[28px] sm:text-[34px] md:text-[40px] leading-tight text-black mb-8 text-left">
              Suggested Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
              {blogsList.map((suggestedBlog) => (
                <Link
                  key={suggestedBlog.id}
                  href={`/blog/${suggestedBlog.id}`}
                  className="flex flex-col bg-white border border-[#C0C0C0]/60 rounded-[20px] overflow-hidden hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] hover:border-[#4879FF]/50 transition-all duration-300 hover:translate-y-[-4px] cursor-pointer group"
                >
                  {/* Image Box */}
                  <div className="relative w-full aspect-[16/10] bg-[#EEEEEE] overflow-hidden">
                    <Image
                      src={suggestedBlog.image}
                      alt={suggestedBlog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  {/* Details Box */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between min-h-[220px]">
                    <div className="flex flex-col gap-2">
                      {/* Read Time */}
                      <span className="font-sans font-semibold text-[13px] text-[#2530FF] uppercase tracking-wider">
                        {suggestedBlog.read_time}
                      </span>
                      {/* Title */}
                      <h3 className="font-['Cal_Sans'] font-normal text-[18px] sm:text-[22px] leading-snug text-black group-hover:text-[#4879FF] transition-colors line-clamp-2 mt-1">
                        {suggestedBlog.title}
                      </h3>
                      {/* Description */}
                      <p className="font-sans font-normal text-[14px] leading-relaxed text-[#727272] line-clamp-3 mt-1.5">
                        {suggestedBlog.description}
                      </p>
                    </div>
                    {/* Publish Date */}
                    <span className="font-sans font-medium text-[13px] text-black mt-6 block">
                      {formatPublishDate(suggestedBlog.publish_date)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
