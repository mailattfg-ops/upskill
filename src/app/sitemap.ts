import { MetadataRoute } from "next";
import { supabase } from "@/lib/supabaseClient";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://upskillmiddleeast.com";

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

  try {
    // Dynamically retrieve published blogs to populate sitemap URLs
    const { data: blogs } = await supabase
      .from("blogs")
      .select("id, publish_date")
      .order("publish_date", { ascending: false });

    if (blogs && blogs.length > 0) {
      const dynamicBlogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
        url: `${baseUrl}/blog?id=${blog.id}`,
        lastModified: blog.publish_date ? new Date(blog.publish_date) : new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      }));

      return [...staticRoutes, ...dynamicBlogRoutes];
    }
  } catch (err) {
    console.error("Error fetching dynamic routes for sitemap.xml:", err);
  }

  return staticRoutes;
}
