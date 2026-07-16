import { MetadataRoute } from "next";
import { supabase } from "@/lib/supabaseClient";
import { getBlogSlug } from "@/lib/utils";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.upskillmiddleeast.com";

  // Define the base public routes
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/what-is-cfa",
    "/blogs",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const staticBlogIds = ["static-blog-1", "static-blog-2"];
  const staticBlogRoutes: MetadataRoute.Sitemap = staticBlogIds.map((id) => ({
    url: `${baseUrl}/blog/${id}`,
    lastModified: new Date("2025-03-17"),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  try {
    // Dynamically retrieve published blogs to populate sitemap URLs
    const { data: blogs } = await supabase
      .from("blogs")
      .select("id, title, sections, publish_date")
      .order("publish_date", { ascending: false });

    if (blogs && blogs.length > 0) {
      const dynamicBlogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
        url: `${baseUrl}/blog/${getBlogSlug(blog)}`,
        lastModified: blog.publish_date ? new Date(blog.publish_date) : new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      }));

      return [...staticRoutes, ...staticBlogRoutes, ...dynamicBlogRoutes];
    }
  } catch (err) {
    console.error("Error fetching dynamic routes for sitemap.xml:", err);
  }

  return [...staticRoutes, ...staticBlogRoutes];
}
