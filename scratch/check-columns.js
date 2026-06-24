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
  const { data, error } = await supabase.from("blogs").select("*").limit(1);
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Success! Columns:", data.length > 0 ? Object.keys(data[0]) : "No rows in table to inspect");
  }
}

test();
