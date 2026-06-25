import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "NOT_SET (using fallback: placeholder.supabase.co)";
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "NOT_SET";
  
  return NextResponse.json({
    supabaseUrl: url,
    hasKey: key !== "NOT_SET" && key !== "placeholder-key",
    keyLength: key.length,
    detectedKeys: Object.keys(process.env).filter(k => k.includes("SUPABASE")),
  });
}
