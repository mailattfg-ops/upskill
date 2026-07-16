const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = "https://gkwtomipcmclkyroyiti.supabase.co";
const supabaseAnonKey = "sb_publishable_IzE9bIf3v64eWUc7XU4JOg_yNH1GBrD";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function run() {
  const { data, error } = await supabase.from('blogs').select('*').limit(1);
  if (error) {
    console.error("Error fetching blogs:", error);
  } else {
    console.log("Blogs columns:", data && data.length > 0 ? Object.keys(data[0]) : "No rows found");
    if (data && data.length > 0) {
      console.log("Example row:", data[0]);
    }
  }
}

run();
