const fs = require("fs");

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

async function test() {
  const res = await fetch(`${supabaseUrl}/rest/v1/`, {
    headers: {
      "apikey": supabaseAnonKey,
      "Authorization": `Bearer ${supabaseAnonKey}`
    }
  });
  const schema = await res.json();
  console.log("Schema keys:", Object.keys(schema));
  if (schema.paths) {
    console.log("Paths:", Object.keys(schema.paths));
  }
}

test();
