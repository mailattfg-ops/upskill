const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");

// Parse .env manually
let envContent = "";
try {
  envContent = fs.readFileSync(".env", "utf8");
} catch (e) {
  console.error("Could not read .env file:", e.message);
  process.exit(1);
}

const env = {};
envContent.split("\n").forEach(line => {
  const parts = line.split("=");
  if (parts.length >= 2) {
    env[parts[0].trim()] = parts.slice(1).join("=").trim();
  }
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing environment variables:", { supabaseUrl, supabaseAnonKey });
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function test() {
  console.log("Querying testimonials...");
  const { data, error } = await supabase.from("testimonials").select("*");
  if (error) {
    console.error("Query Error:", error);
  } else {
    console.log("Success! Data size:", data?.length);
    console.log("Data details:", data);
  }
}

test();
