"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Local fallback login state
  const [isLocalAdmin, setIsLocalAdmin] = useState(false);

  // Tabs: "blogs" | "testimonials"
  const [activeTab, setActiveTab] = useState<"blogs" | "testimonials">("blogs");

  // Data lists
  const [blogs, setBlogs] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  // Forms
  const [editingBlog, setEditingBlog] = useState<any>(null);
  const [formSubTab, setFormSubTab] = useState<"general" | "sections">("general");
  const [blogFormData, setBlogFormData] = useState({
    title: "",
    description: "",
    read_time: "5 min read",
    publish_date: new Date().toISOString().split("T")[0],
    image: "/program_hero.png",
    sections: [
      { id: "preparation", tocTitle: "Introduction", bodyTitle: "CFA Exam Preparation", content: "" },
      { id: "networking", tocTitle: "Start with yacht size and layout", bodyTitle: "Networking Opportunities", content: "" },
      { id: "format", tocTitle: "Duration matters more than many realize", bodyTitle: "Exam Format and Structure", content: "" },
      { id: "career", tocTitle: "Services you can tailor", bodyTitle: "Career Opportunities Post-CFA", content: "" },
    ],
  });

  // Blog image upload states
  const [uploadingBlogImage, setUploadingBlogImage] = useState(false);
  const [blogUploadFeedback, setBlogUploadFeedback] = useState<{ type: "success" | "error" | ""; text: string }>({ type: "", text: "" });

  const [editingTestimonial, setEditingTestimonial] = useState<any>(null);
  const [testimonialFormData, setTestimonialFormData] = useState({
    name: "",
    role: "",
    text: "",
    image: "/student_michelle.webp",
  });

  // Image upload states
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadFeedback, setUploadFeedback] = useState<{ type: "success" | "error" | ""; text: string }>({ type: "", text: "" });

  // Client-side image resizing and compression
  const compressAndResizeImage = (file: File, maxWidth = 200, maxHeight = 200): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          if (!ctx) {
            resolve(event.target?.result as string);
            return;
          }

          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
          resolve(dataUrl);
        };
        img.onerror = (err) => reject(err);
      };
      reader.onerror = (err) => reject(err);
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    setUploadFeedback({ type: "", text: "" });

    try {
      // 1. Compress image client-side to keep base64 or upload extremely lightweight (~10KB)
      const base64Data = await compressAndResizeImage(file);

      // 2. Try Supabase Storage upload
      const fileExt = file.name.split(".").pop() || "jpg";
      const fileName = `avatar_${Date.now()}.${fileExt}`;

      try {
        const res = await fetch(base64Data);
        const blob = await res.blob();

        const { data, error } = await supabase.storage
          .from("testimonials")
          .upload(fileName, blob, {
            contentType: "image/jpeg",
            cacheControl: "3600",
            upsert: true,
          });

        if (error) throw error;

        const { data: publicUrlData } = supabase.storage
          .from("testimonials")
          .getPublicUrl(fileName);

        if (publicUrlData?.publicUrl) {
          setTestimonialFormData((prev) => ({
            ...prev,
            image: publicUrlData.publicUrl,
          }));
          setUploadFeedback({
            type: "success",
            text: "Image uploaded to storage successfully!",
          });
        } else {
          throw new Error("Failed to get public URL");
        }
      } catch (storageErr: any) {
        console.warn("Storage upload failed, falling back to base64 inline image:", storageErr.message);
        setTestimonialFormData((prev) => ({
          ...prev,
          image: base64Data,
        }));
        setUploadFeedback({
          type: "success",
          text: "Uploaded (saved in-database fallback).",
        });
      }
    } catch (err: any) {
      setUploadFeedback({
        type: "error",
        text: `Error processing image: ${err.message}`,
      });
    } finally {
      setUploadingImage(false);
    }
  };

  const handleBlogImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingBlogImage(true);
    setBlogUploadFeedback({ type: "", text: "" });

    try {
      // 1. Compress image client-side to keep base64 or upload extremely lightweight (~30-50KB for hero image)
      const base64Data = await compressAndResizeImage(file, 600, 350);

      // 2. Try Supabase Storage upload to "blogs" bucket
      const fileExt = file.name.split(".").pop() || "jpg";
      const fileName = `blog_${Date.now()}.${fileExt}`;

      try {
        const res = await fetch(base64Data);
        const blob = await res.blob();

        const { data, error } = await supabase.storage
          .from("blogs")
          .upload(fileName, blob, {
            contentType: "image/jpeg",
            cacheControl: "3600",
            upsert: true,
          });

        if (error) throw error;

        const { data: publicUrlData } = supabase.storage
          .from("blogs")
          .getPublicUrl(fileName);

        if (publicUrlData?.publicUrl) {
          setBlogFormData((prev) => ({
            ...prev,
            image: publicUrlData.publicUrl,
          }));
          setBlogUploadFeedback({
            type: "success",
            text: "Image uploaded to blogs storage successfully!",
          });
        } else {
          throw new Error("Failed to get public URL");
        }
      } catch (storageErr: any) {
        console.warn("Storage upload failed, falling back to base64 inline image:", storageErr.message);
        setBlogFormData((prev) => ({
          ...prev,
          image: base64Data,
        }));
        setBlogUploadFeedback({
          type: "success",
          text: "Uploaded (saved in-database fallback).",
        });
      }
    } catch (err: any) {
      setBlogUploadFeedback({
        type: "error",
        text: `Error processing image: ${err.message}`,
      });
    } finally {
      setUploadingBlogImage(false);
    }
  };


  // Check auth status
  useEffect(() => {
    // Check standard Supabase session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Check local fallback login from localStorage
    const localAdmin = localStorage.getItem("upskill_local_admin");
    if (localAdmin === "true") {
      setIsLocalAdmin(true);
    }

    return () => subscription.unsubscribe();
  }, []);

  // Fetch data when authenticated
  useEffect(() => {
    if (session || isLocalAdmin) {
      fetchData();
    }
  }, [session, isLocalAdmin, activeTab]);

  const fetchData = async () => {
    setLoadingData(true);
    try {
      if (activeTab === "blogs") {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .order("publish_date", { ascending: false });
        if (error) throw error;
        setBlogs(data || []);
      } else {
        const { data, error } = await supabase
          .from("testimonials")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) throw error;
        setTestimonials(data || []);
      }
    } catch (err: any) {
      console.error(`Error fetching ${activeTab}:`, err.message);
    } finally {
      setLoadingData(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setAuthLoading(true);

    try {
      // 1. Try standard Supabase Auth
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // 2. Fallback: If Supabase Auth is not set up / users table empty, check local override credentials
        if (email === "admin@upskill.com" && password === "admin123") {
          localStorage.setItem("upskill_local_admin", "true");
          setIsLocalAdmin(true);
        } else {
          setAuthError(error.message || "Invalid credentials");
        }
      } else {
        setSession(data.session);
      }
    } catch (err: any) {
      setAuthError(err.message || "An error occurred during sign in");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("upskill_local_admin");
    setIsLocalAdmin(false);
    setSession(null);
  };

  // Blog CRUD
  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const dataToSave = {
        title: blogFormData.title,
        description: blogFormData.description,
        read_time: blogFormData.read_time,
        publish_date: blogFormData.publish_date,
        image: blogFormData.image,
        sections: blogFormData.sections,
      };

      if (editingBlog) {
        const { error } = await supabase
          .from("blogs")
          .update(dataToSave)
          .eq("id", editingBlog.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("blogs")
          .insert([dataToSave]);
        if (error) throw error;
      }
      setBlogFormData({
        title: "",
        description: "",
        read_time: "5 min read",
        publish_date: new Date().toISOString().split("T")[0],
        image: "/program_hero.png",
        sections: [
          { id: "preparation", tocTitle: "Introduction", bodyTitle: "CFA Exam Preparation", content: "" },
          { id: "networking", tocTitle: "Start with yacht size and layout", bodyTitle: "Networking Opportunities", content: "" },
          { id: "format", tocTitle: "Duration matters more than many realize", bodyTitle: "Exam Format and Structure", content: "" },
          { id: "career", tocTitle: "Services you can tailor", bodyTitle: "Career Opportunities Post-CFA", content: "" },
        ],
      });
      setEditingBlog(null);
      setFormSubTab("general");
      setBlogUploadFeedback({ type: "", text: "" });
      fetchData();
    } catch (err: any) {
      alert("Error saving blog: " + err.message);
    }
  };

  const handleBlogEdit = (blog: any) => {
    setEditingBlog(blog);
    setBlogUploadFeedback({ type: "", text: "" });
    setFormSubTab("general");

    let blogSections = [
      { id: "preparation", tocTitle: "Introduction", bodyTitle: "CFA Exam Preparation", content: "" },
      { id: "networking", tocTitle: "Start with yacht size and layout", bodyTitle: "Networking Opportunities", content: "" },
      { id: "format", tocTitle: "Duration matters more than many realize", bodyTitle: "Exam Format and Structure", content: "" },
      { id: "career", tocTitle: "Services you can tailor", bodyTitle: "Career Opportunities Post-CFA", content: "" },
    ];

    if (blog.sections && Array.isArray(blog.sections) && blog.sections.length > 0) {
      blogSections = blogSections.map(defSec => {
        const found = blog.sections.find((s: any) => s.id === defSec.id);
        return found ? { ...defSec, ...found } : defSec;
      });
    }

    setBlogFormData({
      title: blog.title,
      description: blog.description,
      read_time: blog.read_time,
      publish_date: blog.publish_date,
      image: blog.image,
      sections: blogSections,
    });
  };

  const handleBlogDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      try {
        const { error } = await supabase.from("blogs").delete().eq("id", id);
        if (error) throw error;
        fetchData();
      } catch (err: any) {
        alert("Error deleting blog: " + err.message);
      }
    }
  };

  // Testimonial CRUD
  const handleTestimonialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingTestimonial) {
        const { error } = await supabase
          .from("testimonials")
          .update({
            name: testimonialFormData.name,
            role: testimonialFormData.role,
            text: testimonialFormData.text,
            image: testimonialFormData.image,
          })
          .eq("id", editingTestimonial.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("testimonials")
          .insert([
            {
              name: testimonialFormData.name,
              role: testimonialFormData.role,
              text: testimonialFormData.text,
              image: testimonialFormData.image,
            },
          ]);
        if (error) throw error;
      }
      setTestimonialFormData({
        name: "",
        role: "",
        text: "",
        image: "/student_michelle.webp",
      });
      setEditingTestimonial(null);
      setUploadFeedback({ type: "", text: "" });
      fetchData();
    } catch (err: any) {
      alert("Error saving testimonial: " + err.message);
    }
  };

  // is_visible column removed — not in schema

  const handleTestimonialEdit = (testimonial: any) => {
    setEditingTestimonial(testimonial);
    setUploadFeedback({ type: "", text: "" });
    setTestimonialFormData({
      name: testimonial.name,
      role: testimonial.role,
      text: testimonial.text,
      image: testimonial.image,
    });
  };

  const handleTestimonialDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      try {
        const { error } = await supabase.from("testimonials").delete().eq("id", id);
        if (error) throw error;
        fetchData();
      } catch (err: any) {
        alert("Error deleting testimonial: " + err.message);
      }
    }
  };

  // LOGIN SCREEN
  if (!session && !isLocalAdmin) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 bg-slate-900 font-sans">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 font-sans">
              upskill admin
            </h1>
            <p className="text-sm text-slate-500">
              Log in to manage your blogs and student testimonials.
            </p>
          </div>

          {authError && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
              {authError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@upskill.com"
                className="w-full h-11 px-4 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-[#4576FF] transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-11 px-4 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-[#4576FF] transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={authLoading}
              className="w-full h-11 bg-[#4576FF] hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-md flex items-center justify-center cursor-pointer disabled:opacity-50"
            >
              {authLoading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <div className="pt-4 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-400">
              Fallback demo login: <strong className="text-slate-600">admin@upskill.com / admin123</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ADMIN DASHBOARD
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-full md:w-64 bg-slate-900 text-white flex flex-col justify-between shrink-0">
        <div>
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <span className="text-2xl font-black tracking-tighter">
              upskill admin
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-blue-600 rounded">
              portal
            </span>
          </div>

          <nav className="p-4 space-y-1">
            <button
              onClick={() => setActiveTab("blogs")}
              className={`w-full flex items-center px-4 py-3 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === "blogs"
                  ? "bg-[#4576FF] text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 4a2 2 0 00-2-2v3m2-3V9m-2 4h.01M17 16h.01" />
              </svg>
              Manage Blogs
            </button>

            <button
              onClick={() => setActiveTab("testimonials")}
              className={`w-full flex items-center px-4 py-3 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === "testimonials"
                  ? "bg-[#4576FF] text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              Manage Testimonials
            </button>
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 text-sm font-semibold text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-all cursor-pointer"
          >
            <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 01-3-3h4a3 3 0 013 3v1" />
            </svg>
            Sign Out
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <header className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              {activeTab === "blogs" ? "Blogs Management" : "Testimonials Management"}
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              {activeTab === "blogs" 
                ? "Add, edit, or delete dynamic articles in Saudi Arabia's CFA network."
                : "Manage social proof and feedback comments from your student success network."}
            </p>
          </div>
        </header>

        {/* 2-COLUMN LAYOUT: FORM (LEFT) + LIST (RIGHT) */}
        <div className="grid grid-cols-1 xl:grid-cols-[400px_1fr] gap-8 items-start">
          
          {/* CRUD FORM PANEL */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-lg font-bold mb-4 text-slate-800 flex items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4576FF] mr-2" />
              {activeTab === "blogs" 
                ? (editingBlog ? "Edit Blog Article" : "Create New Blog")
                : (editingTestimonial ? "Edit Testimonial" : "Create Testimonial")}
            </h2>

            {activeTab === "blogs" ? (
              // BLOG FORM
              <form onSubmit={handleBlogSubmit} className="space-y-4">
                {/* Form Tabs: General Info vs. Article Sections */}
                <div className="flex border-b border-slate-200 mb-2">
                  <button
                    type="button"
                    onClick={() => setFormSubTab("general")}
                    className={`flex-1 py-2 text-center text-xs font-bold transition-all cursor-pointer ${
                      formSubTab === "general"
                        ? "border-b-2 border-[#4576FF] text-[#4576FF]"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    General Info
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormSubTab("sections")}
                    className={`flex-1 py-2 text-center text-xs font-bold transition-all cursor-pointer ${
                      formSubTab === "sections"
                        ? "border-b-2 border-[#4576FF] text-[#4576FF]"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Article Sections
                  </button>
                </div>

                {formSubTab === "general" ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Article Title
                      </label>
                      <input
                        type="text"
                        required
                        value={blogFormData.title}
                        onChange={(e) => setBlogFormData({ ...blogFormData, title: e.target.value })}
                        placeholder="e.g., How to balance Level I with full-time work"
                        className="w-full h-10 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#4576FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Description
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={blogFormData.description}
                        onChange={(e) => setBlogFormData({ ...blogFormData, description: e.target.value })}
                        placeholder="Provide a summary sentence..."
                        className="w-full p-3 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#4576FF] resize-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">
                          Read Time
                        </label>
                        <input
                          type="text"
                          required
                          value={blogFormData.read_time}
                          onChange={(e) => setBlogFormData({ ...blogFormData, read_time: e.target.value })}
                          placeholder="e.g., 5 min read"
                          className="w-full h-10 px-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4576FF]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">
                          Publish Date
                        </label>
                        <input
                          type="date"
                          required
                          value={blogFormData.publish_date}
                          onChange={(e) => setBlogFormData({ ...blogFormData, publish_date: e.target.value })}
                          className="w-full h-10 px-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4576FF]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Blog Hero Image
                      </label>
                      
                      {/* Visual Preview & Upload Actions */}
                      <div className="mt-1 flex flex-col gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                        {blogFormData.image && (
                          <div className="w-full h-32 rounded-lg overflow-hidden bg-slate-200 border border-slate-300 flex items-center justify-center relative">
                            <img 
                              src={blogFormData.image} 
                              alt="Blog Preview" 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="%2394a3b8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>';
                              }}
                            />
                          </div>
                        )}
                        
                        <div className="flex items-center gap-3">
                          <input
                            type="file"
                            accept="image/*"
                            id="blog-photo-upload"
                            onChange={handleBlogImageUpload}
                            className="hidden"
                          />
                          <label 
                            htmlFor="blog-photo-upload" 
                            className="inline-flex items-center px-2.5 py-1.5 border border-slate-300 shadow-sm text-xs font-semibold rounded text-slate-700 bg-white hover:bg-slate-50 focus:outline-none cursor-pointer transition-all"
                          >
                            {uploadingBlogImage ? "Processing..." : "Choose File"}
                          </label>
                          <p className="text-[10px] text-slate-400">
                            PNG, JPG, WEBP. Auto-compressed.
                          </p>
                        </div>
                      </div>

                      {blogUploadFeedback.text && (
                        <p className={`text-[11px] mt-1 font-semibold ${
                          blogUploadFeedback.type === "success" ? "text-emerald-600" : "text-red-500"
                        }`}>
                          {blogUploadFeedback.text}
                        </p>
                      )}

                      <div className="mt-3">
                        <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-1">
                          Or paste direct image URL / Path
                        </label>
                        <input
                          type="text"
                          required
                          value={blogFormData.image}
                          onChange={(e) => {
                            setBlogFormData({ ...blogFormData, image: e.target.value });
                            setBlogUploadFeedback({ type: "", text: "" });
                          }}
                          placeholder="e.g., /program_hero.png"
                          className="w-full h-9 px-3 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-[#4576FF]"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5 max-h-[500px] overflow-y-auto pr-1">
                    {blogFormData.sections && blogFormData.sections.map((sec, index) => (
                      <div key={sec.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                        <span className="block text-[10px] font-bold text-[#4576FF] uppercase tracking-wider">
                          Section {index + 1}: {sec.id === "preparation" ? "Intro" : sec.id}
                        </span>
                        <div>
                          <label className="block text-[10px] font-semibold text-slate-500 mb-0.5">
                            TOC Link Title
                          </label>
                          <input
                            type="text"
                            required
                            value={sec.tocTitle}
                            onChange={(e) => {
                              const updated = [...blogFormData.sections];
                              updated[index] = { ...updated[index], tocTitle: e.target.value };
                              setBlogFormData({ ...blogFormData, sections: updated });
                            }}
                            className="w-full h-8 px-2 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#4576FF]"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-semibold text-slate-500 mb-0.5">
                            Section Heading
                          </label>
                          <input
                            type="text"
                            required
                            value={sec.bodyTitle}
                            onChange={(e) => {
                              const updated = [...blogFormData.sections];
                              updated[index] = { ...updated[index], bodyTitle: e.target.value };
                              setBlogFormData({ ...blogFormData, sections: updated });
                            }}
                            className="w-full h-8 px-2 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#4576FF]"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-semibold text-slate-500 mb-0.5">
                            Content Body
                          </label>
                          <textarea
                            rows={3}
                            value={sec.content}
                            onChange={(e) => {
                              const updated = [...blogFormData.sections];
                              updated[index] = { ...updated[index], content: e.target.value };
                              setBlogFormData({ ...blogFormData, sections: updated });
                            }}
                            placeholder="Enter section content (leave blank to use default fallback)..."
                            className="w-full p-2 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#4576FF] resize-none"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 h-10 bg-[#4576FF] hover:bg-blue-700 text-white font-bold rounded-lg text-sm transition-all shadow-sm cursor-pointer"
                  >
                    {editingBlog ? "Update" : "Create"}
                  </button>
                  {editingBlog && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingBlog(null);
                        setBlogUploadFeedback({ type: "", text: "" });
                        setBlogFormData({
                          title: "",
                          description: "",
                          read_time: "5 min read",
                          publish_date: new Date().toISOString().split("T")[0],
                          image: "/program_hero.png",
                          sections: [
                            { id: "preparation", tocTitle: "Introduction", bodyTitle: "CFA Exam Preparation", content: "" },
                            { id: "networking", tocTitle: "Start with yacht size and layout", bodyTitle: "Networking Opportunities", content: "" },
                            { id: "format", tocTitle: "Duration matters more than many realize", bodyTitle: "Exam Format and Structure", content: "" },
                            { id: "career", tocTitle: "Services you can tailor", bodyTitle: "Career Opportunities Post-CFA", content: "" },
                          ],
                        });
                      }}
                      className="px-4 h-10 border border-slate-200 text-slate-600 rounded-lg text-sm hover:bg-slate-50 cursor-pointer"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            ) : (
              // TESTIMONIAL FORM
              <form onSubmit={handleTestimonialSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Student Name
                  </label>
                  <input
                    type="text"
                    required
                    value={testimonialFormData.name}
                    onChange={(e) => setTestimonialFormData({ ...testimonialFormData, name: e.target.value })}
                    placeholder="e.g., Michelle Chen"
                    className="w-full h-10 px-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4576FF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Role / Subtitle
                  </label>
                  <input
                    type="text"
                    required
                    value={testimonialFormData.role}
                    onChange={(e) => setTestimonialFormData({ ...testimonialFormData, role: e.target.value })}
                    placeholder="e.g., Investment Analyst"
                    className="w-full h-10 px-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4576FF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Testimonial Comment
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={testimonialFormData.text}
                    onChange={(e) => setTestimonialFormData({ ...testimonialFormData, text: e.target.value })}
                    placeholder="Olivia's success review..."
                    className="w-full p-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4576FF] resize-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Student Photo / Avatar
                  </label>
                  
                  {/* Visual Preview & Upload Actions */}
                  <div className="mt-1 flex items-center gap-4 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 shrink-0 border border-slate-300 flex items-center justify-center relative">
                      {testimonialFormData.image ? (
                        <img 
                          src={testimonialFormData.image} 
                          alt="Preview" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="%2394a3b8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>';
                          }}
                        />
                      ) : (
                        <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <input
                        type="file"
                        accept="image/*"
                        id="testimonial-photo-upload"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <label 
                        htmlFor="testimonial-photo-upload" 
                        className="inline-flex items-center px-2.5 py-1.5 border border-slate-300 shadow-sm text-xs font-semibold rounded text-slate-700 bg-white hover:bg-slate-50 focus:outline-none cursor-pointer transition-all"
                      >
                        {uploadingImage ? "Processing..." : "Choose File"}
                      </label>
                      <p className="text-[10px] text-slate-400 mt-1">
                        PNG, JPG, WEBP. Auto-compressed.
                      </p>
                    </div>
                  </div>

                  {uploadFeedback.text && (
                    <p className={`text-[11px] mt-1 font-semibold ${
                      uploadFeedback.type === "success" ? "text-emerald-600" : "text-red-500"
                    }`}>
                      {uploadFeedback.text}
                    </p>
                  )}

                  <div className="mt-3">
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-1">
                      Or paste direct image URL / Path
                    </label>
                    <input
                      type="text"
                      required
                      value={testimonialFormData.image}
                      onChange={(e) => {
                        setTestimonialFormData({ ...testimonialFormData, image: e.target.value });
                        setUploadFeedback({ type: "", text: "" });
                      }}
                      placeholder="e.g., /student_michelle.webp"
                      className="w-full h-9 px-3 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-[#4576FF]"
                    />
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 h-10 bg-[#4576FF] hover:bg-blue-700 text-white font-bold rounded-lg text-sm transition-all shadow-sm cursor-pointer"
                  >
                    {editingTestimonial ? "Update" : "Create"}
                  </button>
                  {editingTestimonial && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingTestimonial(null);
                        setUploadFeedback({ type: "", text: "" });
                        setTestimonialFormData({
                          name: "",
                          role: "",
                          text: "",
                          image: "/student_michelle.webp",
                        });
                      }}
                      className="px-4 h-10 border border-slate-200 text-slate-600 rounded-lg text-sm hover:bg-slate-50 cursor-pointer"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* DATA LISTING (RIGHT) */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-600">
                Existing {activeTab === "blogs" ? "Articles" : "Testimonials"}
              </span>
              <button 
                onClick={fetchData} 
                className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer text-slate-600"
                title="Reload List"
              >
                <svg className={`w-4 h-4 ${loadingData ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89H17" />
                </svg>
              </button>
            </div>

            {loadingData ? (
              <div className="p-8 text-center text-slate-500 text-sm">
                Fetching details from database...
              </div>
            ) : activeTab === "blogs" ? (
              // BLOGS TABLE
              blogs.length === 0 ? (
                <div className="p-8 text-center text-slate-400 text-sm">
                  No blogs found. Use the form to create your first article!
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50/55 text-slate-500 font-medium">
                        <th className="p-4">Article</th>
                        <th className="p-4">Read Time</th>
                        <th className="p-4">Publish Date</th>
                        <th className="p-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {blogs.map((b) => (
                        <tr key={b.id} className="hover:bg-slate-50/40">
                          <td className="p-4 max-w-xs">
                            <div className="font-semibold text-slate-900 truncate">{b.title}</div>
                            <div className="text-slate-500 text-xs truncate mt-0.5">{b.description}</div>
                          </td>
                          <td className="p-4 text-slate-600 whitespace-nowrap">{b.read_time}</td>
                          <td className="p-4 text-slate-600 whitespace-nowrap">{b.publish_date}</td>
                          <td className="p-4 text-right whitespace-nowrap space-x-2">
                            <button
                              onClick={() => handleBlogEdit(b)}
                              className="px-2.5 py-1.5 text-xs font-semibold border border-slate-200 text-slate-600 bg-white rounded hover:bg-slate-50 cursor-pointer"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleBlogDelete(b.id)}
                              className="px-2.5 py-1.5 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded cursor-pointer"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            ) : (
              // TESTIMONIALS TABLE
              testimonials.length === 0 ? (
                <div className="p-8 text-center text-slate-400 text-sm">
                  No testimonials found. Use the form to add student feedback!
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50/55 text-slate-500 font-medium">
                        <th className="p-4">Photo</th>
                        <th className="p-4">Student</th>
                        <th className="p-4">Comment</th>
                        <th className="p-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {testimonials.map((t) => (
                        <tr key={t.id} className="hover:bg-slate-50/40">
                          <td className="p-4">
                            <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 border border-slate-300 shrink-0">
                              <img
                                src={t.image || '/student_michelle.webp'}
                                alt={t.name}
                                className="w-full h-full object-cover"
                                onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="%2394a3b8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>'; }}
                              />
                            </div>
                          </td>
                          <td className="p-4 whitespace-nowrap">
                            <div className="font-semibold text-slate-900">{t.name}</div>
                            <div className="text-slate-500 text-xs mt-0.5">{t.role}</div>
                          </td>
                          <td className="p-4 max-w-xs">
                            <p className="text-slate-600 text-xs line-clamp-2">{t.text}</p>
                          </td>
                          <td className="p-4 text-right whitespace-nowrap space-x-2">
                            <button
                              onClick={() => handleTestimonialEdit(t)}
                              className="px-2.5 py-1.5 text-xs font-semibold border border-slate-200 text-slate-600 bg-white rounded hover:bg-slate-50 cursor-pointer"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleTestimonialDelete(t.id)}
                              className="px-2.5 py-1.5 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded cursor-pointer"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            )}
          </div>

        </div>
      </main>

    </div>
  );
}
