const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Configuration
const supabaseUrl = "https://gkwtomipcmclkyroyiti.supabase.co";
const supabaseAnonKey = "sb_publishable_IzE9bIf3v64eWUc7XU4JOg_yNH1GBrD";
const adminEmail = "admin@upskillmiddleeast.com";
const adminPassword = "cirsU8-xiwzuc-doxces";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Parse Markdown file
function parseBlogMarkdown(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  let title = '';
  let description = '';
  let readTime = '';
  let publishDate = new Date().toISOString().split('T')[0]; // Default to today
  let sections = [];

  let currentSection = null;
  let state = ''; // 'title', 'desc', 'read_time', 'publish_date', 'toc_title', 'heading', 'body'

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    if (line.includes('**Article Title:**')) {
      state = 'title';
      continue;
    } else if (line.includes('**Description:**')) {
      state = 'desc';
      continue;
    } else if (line.includes('**Read Time:**')) {
      state = 'read_time';
      continue;
    } else if (line.includes('**Publish Date:**')) {
      state = 'publish_date';
      continue;
    } else if (line.startsWith('### SECTION')) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = { id: '', tocTitle: '', bodyTitle: '', content: '' };
      state = '';
      continue;
    } else if (line.includes('**TOC Link Title:**')) {
      state = 'toc_title';
      continue;
    } else if (line.includes('**Section Heading:**')) {
      state = 'heading';
      continue;
    } else if (line.includes('**Content Body:**')) {
      state = 'body';
      continue;
    } else if (line.startsWith('---')) {
      // Divider
      state = '';
      continue;
    }

    // Process line content based on current state
    if (state === 'title') {
      title += (title ? ' ' : '') + line;
    } else if (state === 'desc') {
      description += (description ? ' ' : '') + line;
    } else if (state === 'read_time') {
      readTime += (readTime ? ' ' : '') + line;
    } else if (state === 'publish_date') {
      // If it says "(set on publish)", we default to today, otherwise parse
      if (line !== '(set on publish)') {
        publishDate = line;
      }
    } else if (state === 'toc_title') {
      currentSection.tocTitle += (currentSection.tocTitle ? ' ' : '') + line;
    } else if (state === 'heading') {
      currentSection.bodyTitle += (currentSection.bodyTitle ? ' ' : '') + line;
    } else if (state === 'body') {
      currentSection.content += (currentSection.content ? '\n' : '') + line;
    }
  }

  if (currentSection) {
    sections.push(currentSection);
  }

  // Generate IDs for sections based on their TOC titles (slugify)
  sections = sections.map((sec, idx) => {
    let slug = sec.tocTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    if (!slug) slug = `section-${idx + 1}`;
    sec.id = slug;
    return sec;
  });

  return {
    title,
    description,
    read_time: readTime || "5 min read",
    publish_date: publishDate,
    image: "/program_hero.png", // fallback image
    sections
  };
}

async function run() {
  const blog2Path = "C:\\Users\\HP\\Downloads\\cms-blog-2-how-to-prepare-for-cfa-exams.md";
  const blog3Path = "C:\\Users\\HP\\Downloads\\cms-blog-3-career-paths-after-cfa.md";

  console.log("Parsing Blog 2...");
  const blog2 = parseBlogMarkdown(blog2Path);
  blog2.image = "/blog_exam_writing.webp"; // give it a nice relevant image from public/
  console.log("Blog 2 Parsed:", JSON.stringify(blog2, null, 2));

  console.log("\nParsing Blog 3...");
  const blog3 = parseBlogMarkdown(blog3Path);
  blog3.image = "/saudi_vision_2030.jpg"; // give it a nice relevant image from public/
  console.log("Blog 3 Parsed:", JSON.stringify(blog3, null, 2));

  console.log("\nLogging in to Supabase...");
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email: adminEmail,
    password: adminPassword,
  });

  if (authError) {
    console.error("Auth failed:", authError.message);
    console.log("Attempting anonymous insert (if RLS is disabled)...");
  } else {
    console.log("Auth successful!");
  }

  console.log("Inserting Blog 2...");
  const { data: insData2, error: insError2 } = await supabase
    .from("blogs")
    .insert([blog2])
    .select();

  if (insError2) {
    console.error("Failed to insert Blog 2:", insError2);
  } else {
    console.log("Successfully inserted Blog 2! ID:", insData2[0].id);
  }

  console.log("Inserting Blog 3...");
  const { data: insData3, error: insError3 } = await supabase
    .from("blogs")
    .insert([blog3])
    .select();

  if (insError3) {
    console.error("Failed to insert Blog 3:", insError3);
  } else {
    console.log("Successfully inserted Blog 3! ID:", insData3[0].id);
  }
}

run();
