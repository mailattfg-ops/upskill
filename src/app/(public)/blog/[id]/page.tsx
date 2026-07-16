import type { Metadata } from "next";
import { supabase } from "@/lib/supabaseClient";
import BlogDetailClient from "./BlogDetailClient";
import { getBlogSlug } from "@/lib/utils";

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

type Params = Promise<{ id: string }>;

async function getBlogData(id: string) {
  // Check static blogs first
  const staticBlog = STATIC_BLOGS.find((b) => b.id === id);
  if (staticBlog) return staticBlog;

  try {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    const isValidUUID = uuidRegex.test(id);

    if (isValidUUID) {
      const { data } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id);
      if (data && data.length > 0) {
        return data[0];
      }
    } else {
      // If it's a slug, query all database blogs and match by slug
      const { data } = await supabase
        .from("blogs")
        .select("*");
      
      if (data && data.length > 0) {
        const matchingBlog = data.find((blog) => getBlogSlug(blog) === id);
        if (matchingBlog) return matchingBlog;
      }
    }
  } catch (err) {
    console.error("Error fetching blog data on server:", err);
  }
  return STATIC_BLOGS[0];
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlogData(id);

  if (!blog) {
    return {
      title: "Blog Not Found | UP SKILL",
      description: "The requested blog article was not found.",
    };
  }

  const slug = getBlogSlug(blog);

  return {
    title: `${blog.title} | UP SKILL`,
    description: blog.description || "CFA exam prep tips, resources, and insights from UP SKILL.",
    keywords: [
      "cfa course",
      "cfa course saudi arabia",
      "upskill",
      "upskill middle east",
      blog.title.toLowerCase()
    ],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${blog.title} | UP SKILL`,
      description: blog.description,
      images: [
        {
          url: blog.image || "/blog_laptop_charts.webp",
          alt: blog.title,
        }
      ],
      type: "article",
    }
  };
}

export async function generateStaticParams() {
  const staticPaths = STATIC_BLOGS.map((blog) => ({ id: blog.id }));
  
  try {
    const { data: blogs } = await supabase
      .from("blogs")
      .select("id, title, sections");
    
    if (blogs && blogs.length > 0) {
      const dbPaths = blogs.map((blog) => ({ id: getBlogSlug(blog) }));
      return [...staticPaths, ...dbPaths];
    }
  } catch (err) {
    console.error("Error fetching blogs for generateStaticParams:", err);
  }

  return staticPaths;
}

export default async function BlogDetailPage({ params }: { params: Params }) {
  const { id } = await params;
  const blog = await getBlogData(id);

  // Fetch top 2 blogs for related section
  let blogsList: any[] = [];
  try {
    const { data } = await supabase
      .from("blogs")
      .select("*")
      .neq("id", id)
      .order("publish_date", { ascending: false })
      .limit(2);
    if (data && data.length > 0) {
      blogsList = data;
    } else {
      blogsList = STATIC_BLOGS.filter((b) => b.id !== id).slice(0, 2);
    }
  } catch (err) {
    console.error("Error loading related blogs on server:", err);
    blogsList = STATIC_BLOGS.filter((b) => b.id !== id).slice(0, 2);
  }

  return <BlogDetailClient blog={blog} blogsList={blogsList} />;
}
