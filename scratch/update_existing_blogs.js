const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = "https://gkwtomipcmclkyroyiti.supabase.co";
const supabaseAnonKey = "sb_publishable_IzE9bIf3v64eWUc7XU4JOg_yNH1GBrD";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const blogUpdates = [
  {
    id: "cd5f1a21-6048-4ebf-a660-d3a8eeac4396",
    slug: "cfa-vs-finance-degree"
  },
  {
    id: "6077dd67-3de7-402b-bfb7-bafa2a7f045c",
    slug: "how-to-prepare-for-cfa-exams"
  },
  {
    id: "6e963b27-29e2-4ac6-95cf-ecc6080cb3dd",
    slug: "career-paths-after-cfa"
  }
];

async function run() {
  // Fetch all blogs first to see what's in the database
  const { data: allBlogs, error: listErr } = await supabase.from('blogs').select('id, title');
  if (listErr) {
    console.error("Error listing blogs:", listErr.message);
    return;
  }
  console.log("Existing blogs in database:");
  allBlogs.forEach(b => console.log(`- ID: ${b.id} | Title: ${b.title}`));

  for (const item of blogUpdates) {
    console.log(`\nProcessing update for ${item.id}...`);
    const blog = allBlogs.find(b => b.id === item.id);
    if (!blog) {
      console.warn(`Blog ID ${item.id} not found in database!`);
      continue;
    }

    // Fetch full blog content
    const { data: fullBlogData, error: fetchErr } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', item.id);

    if (fetchErr || !fullBlogData || fullBlogData.length === 0) {
      console.error(`Error fetching full blog ${item.id}:`, fetchErr ? fetchErr.message : "Not found");
      continue;
    }

    const fullBlog = fullBlogData[0];
    let sections = fullBlog.sections || [];
    sections = sections.filter(s => s.id !== 'metadata');
    sections.push({
      id: 'metadata',
      slug: item.slug
    });

    console.log(`Updating blog ${item.id} with slug "${item.slug}"...`);
    const { error: updateErr } = await supabase
      .from('blogs')
      .update({ sections })
      .eq('id', item.id);

    if (updateErr) {
      console.error(`Error updating blog ${item.id}:`, updateErr.message);
    } else {
      console.log(`Successfully updated blog ${item.id}!`);
    }
  }
}

run();
