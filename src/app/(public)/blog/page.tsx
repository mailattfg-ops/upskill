"use client";

import { Suspense, useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { formatPublishDate } from "@/lib/utils";

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

// const sections = [
//   { id: "preparation", tocTitle: "Introduction", bodyTitle: "CFA Exam Preparation" },
//   { id: "networking", tocTitle: "Start with yacht size and layout", bodyTitle: "Networking Opportunities" },
//   { id: "format", tocTitle: "Duration matters more than many realize", bodyTitle: "Exam Format and Structure" },
//   { id: "career", tocTitle: "Services you can tailor", bodyTitle: "Career Opportunities Post-CFA" },
// ];

function BlogDetailContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "static-blog-1";

  const [activeSection, setActiveSection] = useState("preparation");
  const [blog, setBlog] = useState<any>(null);
  const [blogsList, setBlogsList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Resolve active sections for the blog
  const blogSections = useMemo(() => {
    if (!blog || !blog.sections || !Array.isArray(blog.sections)) {
      return [];
    }
    // Only return sections that actually have content
    return blog.sections.filter((s: any) => s && s.content && s.content.trim() !== "");
  }, [blog]);

  // Fetch specific blog and related blogs
  useEffect(() => {
    async function loadBlogDetails() {
      // Validate if ID is a valid UUID
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      const isValidUUID = uuidRegex.test(id);

      if (!isValidUUID) {
        // Safe instant fallback for static blogs
        const staticMatch = STATIC_BLOGS.find((b) => b.id === id) || STATIC_BLOGS[0];
        setBlog(staticMatch);

        // Fetch top 2 blogs from database as related content, or fallback to static
        try {
          const { data: relatedData } = await supabase
            .from("blogs")
            .select("*")
            .order("publish_date", { ascending: false })
            .limit(2);

          if (relatedData && relatedData.length > 0) {
            setBlogsList(relatedData);
          } else {
            setBlogsList(STATIC_BLOGS.filter(b => b.id !== id).slice(0, 2));
          }
        } catch (relatedErr) {
          console.error("Error fetching related blogs for static post:", relatedErr);
          setBlogsList(STATIC_BLOGS.filter(b => b.id !== id).slice(0, 2));
        } finally {
          setLoading(false);
        }
        return;
      }

      setLoading(true);
      try {
        // 1. Fetch current blog details
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .eq("id", id);

        if (data && data.length > 0) {
          setBlog(data[0]);
        } else {
          // Fallback to static blog details
          const staticMatch = STATIC_BLOGS.find((b) => b.id === id) || STATIC_BLOGS[0];
          setBlog(staticMatch);
        }

        // 2. Fetch related blogs (excluding current UUID)
        const { data: relatedData } = await supabase
          .from("blogs")
          .select("*")
          .neq("id", id)
          .order("publish_date", { ascending: false })
          .limit(2);

        if (relatedData && relatedData.length > 0) {
          setBlogsList(relatedData);
        } else {
          setBlogsList(STATIC_BLOGS.filter(b => b.id !== id).slice(0, 2));
        }
      } catch (err) {
        console.error("Error loading blog details from database:", err);
        const staticMatch = STATIC_BLOGS.find((b) => b.id === id) || STATIC_BLOGS[0];
        setBlog(staticMatch);
        setBlogsList(STATIC_BLOGS.filter(b => b.id !== id).slice(0, 2));
      } finally {
        setLoading(false);
      }
    }
    loadBlogDetails();
  }, [id]);

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

  if (loading) {
    return (
      <div className="w-full min-h-[400px] flex flex-col items-center justify-center pt-24 pb-20">
        <div className="w-12 h-12 rounded-full border-4 border-[#4576FF] border-t-transparent animate-spin" />
        <p className="mt-4 text-slate-500 font-sans text-sm font-semibold">Loading article details...</p>
      </div>
    );
  }

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
    </main>
  );
}

export default function BlogDetailPage() {
  return (
    <Suspense fallback={
      <div className="w-full min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center pt-24">
        <div className="w-12 h-12 rounded-full border-4 border-[#4576FF] border-t-transparent animate-spin" />
        <p className="mt-4 text-slate-500 font-sans text-sm font-semibold">Loading article...</p>
      </div>
    }>
      <BlogDetailContent />
    </Suspense>
  );
}
