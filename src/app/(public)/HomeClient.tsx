"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import HeroSection from "./home/HeroSection";
import WhyChooseUsSection from "./home/WhyChooseUsSection";
import AboutSection from "./home/AboutSection";
import PathToCfaSection from "./home/PathToCfaSection";
import TestimonialsSection from "./home/TestimonialsSection";
import BlogsSection from "./home/BlogsSection";
import CfaCtaSection from "./home/CfaCtaSection";

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

export default function HomeClient() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showTestimonials, setShowTestimonials] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch testimonials
        const { data: testimonialsData, error: tError } = await supabase
          .from("testimonials")
          .select("*");
        if (!tError && testimonialsData) {
          const visible = (testimonialsData as Testimonial[]).filter(
            (t) => t.is_visible !== false
          );
          setTestimonials(visible);
        }

        // Fetch top 2 blogs
        const { data: blogsData, error: bError } = await supabase
          .from("blogs")
          .select("*")
          .order("publish_date", { ascending: false })
          .limit(2);
        if (!bError && blogsData) {
          setBlogs(blogsData as Blog[]);
        }

        // Fetch testimonials visibility settings
        const { data: settingData } = await supabase
          .from("site_settings")
          .select("value")
          .eq("key", "testimonials_visible")
          .single();
        if (settingData) {
          setShowTestimonials(settingData.value !== "false");
        }
      } catch (err) {
        console.error("Error loading home page client data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-[400px] flex flex-col items-center justify-center pt-24 pb-20">
        <div className="w-12 h-12 rounded-full border-4 border-[#4576FF] border-t-transparent animate-spin" />
        <p className="mt-4 text-slate-500 font-sans text-sm font-semibold">Loading content...</p>
      </div>
    );
  }

  return (
    <>
      <HeroSection />
      <div className="fade-up">
        <WhyChooseUsSection />
      </div>
      <div className="fade-up">
        <AboutSection />
      </div>
      <div className="fade-up">
        <PathToCfaSection />
      </div>
      {showTestimonials && testimonials.length > 0 && (
        <div className="fade-up">
          <TestimonialsSection visibleTestimonials={testimonials} />
        </div>
      )}
      {blogs.length > 0 && (
        <div className="fade-up">
          <BlogsSection blogsList={blogs} />
        </div>
      )}
      <div className="fade-up">
        <CfaCtaSection />
      </div>
    </>
  );
}
