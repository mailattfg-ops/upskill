import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPublishDate(dateString: string): string {
  if (!dateString) return "";
  
  // If it already has month names (letters) or comma, return as is
  if (/[a-zA-Z]/.test(dateString) || dateString.includes(",")) {
    return dateString;
  }

  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;

    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateString;
  }
}

export function getBlogSlug(blog: any): string {
  if (!blog) return "";

  // 1. Check metadata section slug
  if (blog.sections && Array.isArray(blog.sections)) {
    const meta = blog.sections.find((s: any) => s && s.id === "metadata");
    if (meta && meta.slug) {
      return meta.slug;
    }
  }

  // 2. Default fallback: slugify the title
  if (blog.title) {
    return blog.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  return blog.id || "";
}
