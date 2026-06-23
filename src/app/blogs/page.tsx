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

export default async function BlogsPage() {
  let blogsList: any[] = [];
  try {
    const { data } = await supabase
      .from("blogs")
      .select("*")
      .order("publish_date", { ascending: false });
    blogsList = data || [];
  } catch (err) {
    console.error("Supabase blogs fetch error:", err);
  }

  if (blogsList.length === 0) {
    blogsList = STATIC_BLOGS;
  }

  return (
    <main className="w-full min-h-screen bg-[#1B1B1B] text-white pt-[140px] pb-20 px-6">
      <div className="mx-auto max-w-[1474px] w-full">
        {/* Page Header */}
        <header className="mb-12 text-center md:text-left">
          <span className="text-sm font-semibold tracking-wider text-[#4576FF] uppercase">
            CFA Resources
          </span>
          <h1 className="font-['Cal_Sans'] text-4xl sm:text-5xl lg:text-6xl mt-2 tracking-tight">
            UP SKILL Insights
          </h1>
          <p className="text-slate-400 mt-4 text-base sm:text-lg max-w-2xl">
            Expert CFA tips, study strategies, and industry insights to help you pass your exams and build a successful finance career.
          </p>
        </header>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsList.map((blog) => (
            <Link 
              key={blog.id} 
              href={`/blog?id=${blog.id}`}
              className="group flex flex-col bg-[#242424] border border-neutral-800 rounded-2xl overflow-hidden hover:border-[#4576FF]/40 hover:shadow-lg transition-all duration-300"
            >
              {/* Image Box */}
              <div className="relative w-full h-[220px] sm:h-[240px] bg-neutral-900 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Details */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#4576FF] uppercase tracking-wider mb-3">
                    <span>CFA Guide</span>
                    <span>{blog.read_time}</span>
                  </div>
                  <h2 className="font-['Cal_Sans'] text-xl sm:text-2xl text-white group-hover:text-[#4576FF] transition-colors leading-tight line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-slate-400 text-sm mt-3 line-clamp-3 leading-relaxed">
                    {blog.description}
                  </p>
                </div>

                <div className="border-t border-neutral-800 pt-4 mt-6 flex items-center justify-between text-xs text-slate-500">
                  <span>Published</span>
                  <span>{blog.publish_date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
