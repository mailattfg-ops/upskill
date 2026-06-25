const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");

const envContent = fs.readFileSync(".env", "utf8");
const env = {};
envContent.split("\n").forEach(line => {
  const parts = line.split("=");
  if (parts.length >= 2) {
    env[parts[0].trim()] = parts.slice(1).join("=").trim();
  }
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function test() {
  console.log("Querying with invalid UUID...");
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", "static-blog-1");
    
    console.log("Returned:", { data, error });
  } catch (err) {
    console.error("Caught Exception:", err);
  }
}

test();
