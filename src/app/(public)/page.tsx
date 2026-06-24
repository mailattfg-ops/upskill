import { supabase } from "@/lib/supabaseClient";
import HeroSection from "./home/HeroSection";
import WhyChooseUsSection from "./home/WhyChooseUsSection";
import AboutSection from "./home/AboutSection";
import PathToCfaSection from "./home/PathToCfaSection";
import TestimonialsSection from "./home/TestimonialsSection";
import BlogsSection from "./home/BlogsSection";

const STATIC_TESTIMONIALS = [
  {
    name: "Michelle Chen",
    role: "Investment Analyst",
    text: "The curriculum is not only comprehensive but also highly engaging. I feel more prepared for my career than ever!",
    image: "/student_michelle.webp"
  },
  {
    name: "James John",
    role: "Financial Consultant",
    text: "The hands-on projects and case studies really bridge the gap between theory and practice. I highly recommend it!",
    image: "/student_james_john.webp"
  },
  {
    name: "James Kim",
    role: "Portfolio Manager",
    text: "I learned invaluable skills that I apply daily in my job. The instructors are industry experts who truly care about our success.",
    image: "/student_james_kim.webp"
  },
  {
    name: "Zara Ahmed",
    role: "Risk Analyst",
    text: "This program helped me develop a strong foundation in finance and investment strategies. I'm more confident in my decisions now!",
    image: "/student_zara_ahmed.webp"
  },
  {
    name: "Daya H",
    role: "Financial Planner",
    text: "The networking opportunities here are incredible! I have connected with peers and mentors that will be valuable throughout my career.",
    image: "/student_daya_h.webp"
  },
  {
    name: "Sophia Martinez",
    role: "Market Researcher",
    text: "I appreciate the diverse perspectives and experiences shared in class. It broadens my understanding of the global market landscape.",
    image: "/student_sophia_martinez.webp"
  }
];

const STATIC_BLOGS = [
  {
    id: "static-blog-1",
    title: "How to Start Preparing for CFA Level I While Working Full-Time",
    description: "Learn practical strategies to balance your study schedule with a demanding career.",
    read_time: "5 min read",
    publish_date: "March 17, 2025",
    image: "/blog_laptop_charts.webp?v=5",
  },
  {
    id: "static-blog-2",
    title: "Top Mistakes CFA Candidates Make During Exam Preparation",
    description: "Avoid common study habits that slow down progress and affect exam performance.",
    read_time: "8 Min Read",
    publish_date: "March 17, 2025",
    image: "/blog_exam_writing.webp?v=5",
  }
];

interface Testimonial {
  id?: string;
  name: string;
  role: string;
  text: string;
  image: string;
  is_visible?: boolean;
}

interface Blog {
  id: string;
  title: string;
  description: string;
  read_time: string;
  publish_date: string;
  image: string;
}

export default async function Home() {
  // Fetch testimonials
  let testimonialsList: Testimonial[] = [];
  try {
    const { data } = await supabase.from("testimonials").select("*");
    testimonialsList = (data as Testimonial[]) || [];
  } catch (err) {
    console.error("Supabase testimonials fetch error:", err);
  }
  if (testimonialsList.length === 0) {
    testimonialsList = STATIC_TESTIMONIALS;
  }

  // Filter visibility: hide testimonials if `is_visible` is false (default to show if column is missing)
  const visibleTestimonials = testimonialsList.filter((t) => t.is_visible !== false);

  // Fetch blogs
  let blogsList: Blog[] = [];
  try {
    const { data } = await supabase.from("blogs").select("*").order("publish_date", { ascending: false }).limit(2);
    blogsList = (data as Blog[]) || [];
  } catch (err) {
    console.error("Supabase blogs fetch error:", err);
  }
  if (blogsList.length === 0) {
    blogsList = STATIC_BLOGS;
  }

  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <AboutSection />
      <PathToCfaSection />
      <TestimonialsSection visibleTestimonials={visibleTestimonials} />
      <BlogsSection blogsList={blogsList} />
    </>
  );
}
