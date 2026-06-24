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
  console.log("Attempting to insert test blog...");
  const { data, error } = await supabase.from("blogs").insert([
    {
      title: "Test Blog",
      description: "This is a test description",
      read_time: "5 min read",
      publish_date: "2026-06-24",
      image: "/program_hero.png",
      sections: []
    }
  ]).select();
  
  if (error) {
    console.error("Insert Error:", error.message);
  } else {
    console.log("Insert Success! Row:", data);
  }
}

test();
