import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";

const STATIC_TESTIMONIALS = [
  {
    name: "Michelle Chen",
    role: "Investment Analyst",
    text: "The curriculum is not only comprehensive but also highly engaging. I feel more prepared for my career than ever!",
    image: "/student_michelle.webp"
  },
  {
    name: "James John",
    role: "Financial Consultant",
    text: "The hands-on projects and case studies really bridge the gap between theory and practice. I highly recommend it!",
    image: "/student_james_john.webp"
  },
  {
    name: "James Kim",
    role: "Portfolio Manager",
    text: "I learned invaluable skills that I apply daily in my job. The instructors are industry experts who truly care about our success.",
    image: "/student_james_kim.webp"
  },
  {
    name: "Zara Ahmed",
    role: "Risk Analyst",
    text: "This program helped me develop a strong foundation in finance and investment strategies. I'm more confident in my decisions now!",
    image: "/student_zara_ahmed.webp"
  },
  {
    name: "Daya H",
    role: "Financial Planner",
    text: "The networking opportunities here are incredible! I have connected with peers and mentors that will be valuable throughout my career.",
    image: "/student_daya_h.webp"
  },
  {
    name: "Sophia Martinez",
    role: "Market Researcher",
    text: "I appreciate the diverse perspectives and experiences shared in class. It broadens my understanding of the global market landscape.",
    image: "/student_sophia_martinez.webp"
  }
];

const STATIC_BLOGS = [
  {
    id: "static-blog-1",
    title: "How to Start Preparing for CFA Level I While Working Full-Time",
    description: "Learn practical strategies to balance your study schedule with a demanding career.",
    read_time: "5 min read",
    publish_date: "March 17, 2025",
    image: "/blog_laptop_charts.webp?v=5",
  },
  {
    id: "static-blog-2",
    title: "Top Mistakes CFA Candidates Make During Exam Preparation",
    description: "Avoid common study habits that slow down progress and affect exam performance.",
    read_time: "8 Min Read",
    publish_date: "March 17, 2025",
    image: "/blog_exam_writing.webp?v=5",
  }
];

export default async function Home() {
  // Fetch testimonials
  let testimonialsList: any[] = [];
  try {
    const { data } = await supabase.from("testimonials").select("*");
    testimonialsList = data || [];
  } catch (err) {
    console.error("Supabase testimonials fetch error:", err);
  }
  if (testimonialsList.length === 0) {
    testimonialsList = STATIC_TESTIMONIALS;
  }

  // Filter visibility: hide testimonials if `is_visible` is false (default to show if column is missing)
  const visibleTestimonials = testimonialsList.filter((t) => t.is_visible !== false);

  // Fetch blogs
  let blogsList: any[] = [];
  try {
    const { data } = await supabase.from("blogs").select("*").order("publish_date", { ascending: false }).limit(2);
    blogsList = data || [];
  } catch (err) {
    console.error("Supabase blogs fetch error:", err);
  }
  if (blogsList.length === 0) {
    blogsList = STATIC_BLOGS;
  }
  return (
    <div className="relative min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-[112px] pb-0 md:pt-[120px] lg:pt-[140px] xl:pt-[160px] px-0 overflow-visible bg-white">
        <div className="mx-auto max-w-[1474px] flex flex-col items-center text-center gap-4 md:gap-5 px-6">

          {/* Main Headline */}
          <h1 className="font-['Cal_Sans'] font-normal text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[50px] 2xl:text-[66px] leading-[1.15] text-[#4879FF] text-center max-w-none animate-fade-in">
            Upskilling Tomorrow's <br className="hidden sm:inline" /> CFA Charterholder
          </h1>

          {/* Subtitle */}
          <p className="font-sans font-normal text-[12px] sm:text-[13px] xl:text-[15px] 2xl:text-[17px] leading-[1.35] text-center text-[#727272] max-w-[928px] w-full px-4">
            Expert-led offline CFA training designed for ambitious students, <br className="hidden md:inline" /> professionals, or anyone who aspires to become a CFA across Saudi Arabia.
          </p>

          {/* Action Buttons */}
          <div className="mt-2 md:mt-3 flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-10">
            <Link
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 text-base transition-all transform hover:scale-102 active:scale-98 shadow-md hover:shadow-lg shadow-blue-500/10"
            >
              Schedule a Free Session
            </Link>
            <Link
              href="#programs"
              className="inline-flex items-center justify-center rounded-xl border-2 border-blue-600/20 hover:border-blue-600 text-blue-600 font-bold px-8 py-4 text-base bg-white hover:bg-blue-50/50 transition-all transform hover:scale-102 active:scale-98"
            >
              Explore our programs
            </Link>
          </div>
        </div>

        {/* Hero Visual Block — Figma: 1474×736px, full-width container with custom gradient */}
        <div
          className="relative w-full overflow-visible mt-4 sm:mt-6 md:mt-8"
          style={{ background: "linear-gradient(180deg, #FFFFFF 17.6%, #4576FF 100%)" }}
        >
          {/* Outer container holding the height dynamically or aspect ratio 1474:736 at full 2xl width */}
          <div className="relative mx-auto max-w-[1474px] w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[420px] xl:h-[520px] 2xl:h-[661px] overflow-visible">

            {/* Students cutout — sits on top of the gradient, centered and top-aligned, cropped at bottom */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="relative w-full h-full">
                <Image
                  src="/cfa_students.png"
                  alt="A group of ambitious CFA finance students studying and holding textbooks"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>

          </div>

          {/* Gradient Overlay Container at the bottom (1728 x 309px in Figma) */}
          <div
            className="absolute bottom-0 left-0 right-0 w-full z-10 h-[180px] sm:h-[220px] md:h-[240px] lg:h-[260px] xl:h-[280px] 2xl:h-[309px] pointer-events-none"
            style={{
              background: "linear-gradient(180deg, rgba(69, 118, 255, 0) 0%, #4576FF 100%)"
            }}
          />

          {/* Metrics Row — sitting at the bottom of the container */}
          {false && (
            <div className="absolute bottom-0 left-0 right-0 w-full z-10 flex justify-center items-end h-[180px] sm:h-[220px] md:h-[240px] lg:h-[260px] xl:h-[280px] 2xl:h-[309px]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center px-4 w-full max-w-7xl pb-[2%] sm:pb-[3%] xl:pb-[4%]">

                {/* Metric 1 */}
                <div className="flex flex-col justify-center items-center gap-[6px] md:gap-[15.08px]">
                  <span className="font-['Cal_Sans'] font-normal text-[18px] sm:text-[24px] md:text-[27px] lg:text-[30px] xl:text-[36px] leading-[88%] tracking-normal text-center">
                    CFA Levels
                  </span>
                  <span className="font-sans font-normal text-[10px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[19px] leading-[100%] tracking-[-0.03em] text-center text-blue-100/90">
                    I, II &amp; III Covered
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="flex flex-col justify-center items-center gap-[6px] md:gap-[15.08px]">
                  <span className="font-['Cal_Sans'] font-normal text-[18px] sm:text-[24px] md:text-[27px] lg:text-[30px] xl:text-[36px] leading-[88%] tracking-normal text-center">
                    200+
                  </span>
                  <span className="font-sans font-normal text-[10px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[19px] leading-[100%] tracking-[-0.03em] text-center text-blue-100/90">
                    Students Mentored
                  </span>
                </div>

                {/* Metric 3 */}
                <div className="flex flex-col justify-center items-center gap-[6px] md:gap-[15.08px]">
                  <span className="font-['Cal_Sans'] font-normal text-[18px] sm:text-[24px] md:text-[27px] lg:text-[30px] xl:text-[36px] leading-[88%] tracking-normal text-center">
                    8+
                  </span>
                  <span className="font-sans font-normal text-[10px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[19px] leading-[100%] tracking-[-0.03em] text-center text-blue-100/90">
                    Years of Experience
                  </span>
                </div>

                {/* Metric 4 */}
                <div className="flex flex-col justify-center items-center gap-[6px] md:gap-[15.08px]">
                  <span className="font-['Cal_Sans'] font-normal text-[18px] sm:text-[24px] md:text-[27px] lg:text-[30px] xl:text-[36px] leading-[88%] tracking-normal text-center">
                    87%
                  </span>
                  <span className="font-sans font-normal text-[10px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[19px] leading-[100%] tracking-[-0.03em] text-center text-blue-100/90">
                    Student Pass Rate
                  </span>
                </div>

              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          WHY CHOOSE US SECTION
          Figma: heading 608×180 top:1191px, cards 1503×547px
      ───────────────────────────────────────────────────────── */}
      <section id="why-choose-us" className="w-full bg-white py-10 md:py-14 lg:py-16 xl:py-28 px-4 overflow-hidden relative z-10">

        {/* Section header text block */}
        <div className="mx-auto flex flex-col items-center gap-6 mb-14 md:mb-16">

          {/* Heading — Figma: Cal Sans 90px, #4879FF, 608×180px, top:1191 left:570 (1728px frame) */}
          <h2 className="font-['Cal_Sans'] font-normal text-[34px] lg:text-[44px] xl:text-[54px] 2xl:text-[66px] leading-[1.15] text-[#4879FF] text-center w-full max-w-[800px]">
            Why Should You <br /> Choose Us
          </h2>

          {/* Subtitle — Figma: DM Sans 24px, #5C5C5C, 1128×56px, line-height 32px, top:1393 left:300 */}
          <p className="font-['DM_Sans'] font-normal text-[12px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px] leading-[28px] text-center text-[#5C5C5C] w-full max-w-[1128px] overflow-visible px-4">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        {/* Outer group — Figma: 1503×547px, top:-37px, border-radius:71px, border:1px
            overflow:visible so left/right cards (top:-37px) extend above the border    */}
        <div
          className="mx-auto w-full max-w-[1503px] flex flex-col md:flex-row md:items-start gap-6 md:gap-[22px] mt-4 md:mt-[-37px] min-h-none md:min-h-[547px] overflow-visible"
        >

          {/* ── LEFT CARD — Blue ──
              Figma: 486×441px, top:-37px (extends 37px above outer group top)
              border-radius: 71px                                                  */}
          <div
            className="flex-1 flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10 xl:p-12 bg-[#4879FF] text-white rounded-[40px] md:rounded-[71px] w-full md:max-w-[486px] h-auto md:h-[441px] mt-0 md:-mt-[37px]"
            style={{
              flexShrink: 1,
            }}
          >
            {/* Clock icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/40 flex items-center justify-center self-start">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
              </svg>
            </div>
            {/* Content group — Figma: 386×201px */}
            <div className="w-full max-w-[386px]">
              <h3 className="font-['Cal_Sans'] font-normal text-[29px] lg:text-[24px] xl:text-[27px] 2xl:text-[30px] leading-[35px] text-white w-full max-w-[359px] mb-4">
                Flexible Scheduling
              </h3>
              <p className="font-sans font-normal text-[17px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] leading-[21px] text-white w-full max-w-[386px]">
                Attend sessions that fit around your work, university, or professional commitments.
              </p>
            </div>
          </div>

          {/* ── CENTER CARD — White ──
              Figma: 487×441px, top:69px, left:508px (of 1503px group)
              border-radius: 71px, border: 1px                              */}
          <div
            className="flex-1 flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10 xl:p-12 bg-white rounded-[40px] md:rounded-[71px] border border-[#D0DCFF] shadow-sm w-full md:max-w-[487px] h-auto md:h-[441px] mt-0 md:mt-[69px]"
            style={{
              flexShrink: 1,
            }}
          >
            {/* Calendar icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[28px] border border-[#D0DCFF] bg-[#F8FAFC] flex items-center justify-center self-start">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
              </svg>
            </div>
            {/* Content group */}
            <div className="w-full max-w-[386px]">
              <h3 className="font-['Cal_Sans'] font-normal text-[29px] lg:text-[24px] xl:text-[27px] 2xl:text-[30px] leading-[35px] text-[#0f172a] w-full max-w-[359px] mb-4">
                Personalised Study Plan
              </h3>
              <p className="font-sans font-normal text-[17px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] leading-[21px] text-[#5C5C5C] w-full max-w-[386px]">
                Every student learns differently. Your preparation strategy is tailored around your schedule, strengths, and target exam date.
              </p>
            </div>
          </div>

          {/* ── RIGHT CARD — Blue ──
              Figma: 486×441px, top:-37px (extends 37px above outer group top)
              left:1017px, border-radius: 71px                                    */}
          <div
            className="flex-1 flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10 xl:p-12 bg-[#4879FF] text-white rounded-[40px] md:rounded-[71px] w-full md:max-w-[486px] h-auto md:h-[441px] mt-0 md:-mt-[37px]"
            style={{
              flexShrink: 1,
            }}
          >
            {/* Cert icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/40 flex items-center justify-center self-start">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <rect x="3" y="3" width="14" height="11" rx="2" />
                <circle cx="10" cy="18" r="3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 21l4-3 4 3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h6M7 10h4" />
              </svg>
            </div>
            {/* Content group */}
            <div className="w-full max-w-[386px]">
              <h3 className="font-['Cal_Sans'] font-normal text-[29px] lg:text-[24px] xl:text-[27px] 2xl:text-[30px] leading-[35px] text-white w-full max-w-[359px] mb-4">
                Expert Guidance &amp; Proven Results
              </h3>
              <p className="font-sans font-normal text-[17px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] leading-[21px] text-white w-full max-w-[386px]">
                Learn directly from an experienced CFA Charterholder with real-world finance expertise.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          ABOUT THE COMPANY SECTION
      ───────────────────────────────────────────────────────── */}
      <section id="about-company" className="w-full bg-white pt-10 pb-16 md:pb-20 lg:pt-12 lg:pb-24 xl:pt-[59px] xl:pb-28 px-6 overflow-hidden">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-6 mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-['Cal_Sans'] font-normal text-[34px] lg:text-[44px] xl:text-[54px] 2xl:text-[66px] leading-[1.15] text-[#4879FF] text-center w-full max-w-[800px]">
            About the company
          </h2>
          <p className="font-['DM_Sans'] font-normal text-[12px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px] leading-[28px] text-center text-[#5C5C5C] w-full max-w-[1128px]">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        <div className="mx-auto max-w-[1503px] flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 items-stretch min-h-[400px] lg:min-h-[450px] xl:min-h-[520px] 2xl:min-h-[668px]">
          {/* Left card with description */}
          <div className="flex-1 flex flex-col justify-center p-6 md:p-8 lg:p-10 xl:p-12 bg-[#F5F5F5] rounded-[30px]">
            <p className="text-xs sm:text-sm lg:text-sm xl:text-base leading-relaxed text-gray-600 font-sans font-normal text-justify">
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
              dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
              sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
              sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
              scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu
              tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
              <br /><br />
              Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam
              a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
              Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a
              eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit
              amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia.
              Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum
              ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
              Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi,
              sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed
              tincidunt ac, finibus non odio.
            </p>
          </div>

          {/* Right card with image */}
          <div className="relative w-full min-h-[300px] md:min-h-[400px] lg:w-[320px] xl:w-[380px] 2xl:w-[443px] rounded-[30px] overflow-hidden bg-[#F2F2F2] flex-shrink-0 shadow-sm">
            <Image
              src="/about_company_building.webp"
              alt="UP SKILL company building"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          HOW IT WORKS SECTION (Path to the CFA Charter)
      ───────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="w-full bg-[#DBE5FF] pt-[42px] pb-20 md:py-0 md:px-0 overflow-visible relative md:h-[680px] lg:h-[780px] xl:h-[920px] 2xl:h-[1117px]">

        {/* Desktop Layout — Figma Specifications */}
        <div className="hidden md:block w-full max-w-[1728px] mx-auto h-full relative overflow-visible">

          {/* Header */}
          <h2 className="absolute top-[20px] md:top-[30px] xl:top-[42px] left-1/2 -translate-x-1/2 w-full max-w-[900px] h-auto font-['Cal_Sans'] font-normal text-[28px] md:text-[38px] lg:text-[44px] xl:text-[54px] 2xl:text-[66px] leading-[110%] tracking-normal text-center text-[#4576FF] z-20">
            Path to the <br /> CFA Charter
          </h2>

          {/* Subtitle */}
          <p className="absolute top-[80px] md:top-[100px] lg:top-[120px] xl:top-[150px] 2xl:top-[245px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1128px] h-auto font-['DM_Sans'] font-normal text-[12px] md:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px] leading-[28px] tracking-normal text-center text-[#5C5C5C] bg-[#DBE5FF] px-6 py-2 rounded-full z-20">
            Upskill's structured four-step journey is designed to take you from CFA aspirant to Charterholder.
          </p>

          {/* Group 7 — Steps & Timeline Container */}
          <div className="absolute top-[160px] md:top-[180px] lg:top-[200px] xl:top-[220px] 2xl:top-[265px] left-1/2 -translate-x-1/2 2xl:left-[190px] 2xl:translate-x-0 w-[95%] max-w-[1263px] h-[480px] lg:h-[520px] xl:h-[640px] 2xl:h-[799px] overflow-visible">

            {/* Central Vertical Line (5px wide) */}
            <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[5px] h-[98%] bg-[#4576FF] z-0 pointer-events-none" />

            {/* Upper Part Gradient Mask */}
            <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[36px] h-[20%] bg-[linear-gradient(180deg,#DBE5FF_0%,#DBE5FF_41.77%,rgba(219,229,255,0)_100%)] z-10 pointer-events-none" />

            {/* Lower Part Gradient Mask */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[36px] h-[15%] bg-[linear-gradient(180deg,rgba(219,229,255,0)_0%,#DBE5FF_100%)] z-10 pointer-events-none" />

            {/* Step 1 (Right) */}
            {/* Node dot (22px x 22px) */}
            <div className="absolute top-[70px] lg:top-[90px] xl:top-[120px] 2xl:top-[154px] left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full bg-[#4576FF] border-[3px] border-[#DBE5FF] z-10" />
            {/* Text block */}
            <div className="absolute top-[35px] lg:top-[50px] xl:top-[75px] 2xl:top-[98px] left-[53%] 2xl:left-[785px] w-[45%] 2xl:w-[478px] text-left flex flex-col gap-[8px] md:gap-[15.08px]">
              <h3 className="font-sans font-medium text-[13px] md:text-[16px] lg:text-[19px] xl:text-[24px] 2xl:text-[29px] leading-[100%] tracking-[-0.03em] text-[#4576FF]">
                Apply for a Free Consultation
              </h3>
              <p className="font-['DM_Sans'] font-normal text-[10px] md:text-[11px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] leading-[120%] text-[#71717A] max-w-[441px]">
                Speak with an expert and discover where you stand
              </p>
            </div>

            {/* Step 2 (Left) */}
            {/* Node (Active/Selected state - Outer: 70px x 70px. Inner: 22px x 22px) */}
            <div className="absolute top-[160px] lg:top-[185px] xl:top-[240px] 2xl:top-[303px] left-1/2 -translate-x-1/2 w-[40px] h-[40px] xl:w-[70px] xl:h-[70px] rounded-full bg-[#A7BEFF] z-10 flex items-center justify-center">
              <div className="w-[12px] h-[12px] xl:w-[22px] xl:h-[22px] rounded-full bg-[#4576FF]" />
            </div>
            {/* Text block */}
            <div className="absolute top-[135px] lg:top-[160px] xl:top-[210px] 2xl:top-[263px] right-[53%] 2xl:right-[678px] w-[45%] 2xl:w-[441px] text-right flex flex-col gap-[8px] md:gap-[15.08px]">
              <h3 className="font-sans font-medium text-[13px] md:text-[16px] lg:text-[19px] xl:text-[24px] 2xl:text-[29px] leading-[100%] tracking-[-0.03em] text-[#4576FF] max-w-[409px] ml-auto">
                Take part in an Honest level assessment
              </h3>
              <p className="font-['DM_Sans'] font-normal text-[10px] md:text-[11px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] leading-[120%] text-[#71717A] max-w-[441px] ml-auto">
                Test for basic knowledge on financial and mathematical understanding
              </p>
            </div>

            {/* Step 3 (Right) */}
            {/* Node dot (22px x 22px) */}
            <div className="absolute top-[280px] lg:top-[320px] xl:top-[390px] 2xl:top-[485px] left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full bg-[#4576FF] border-[3px] border-[#DBE5FF] z-10" />
            {/* Text block */}
            <div className="absolute top-[245px] lg:top-[280px] xl:top-[345px] 2xl:top-[449px] left-[53%] 2xl:left-[785px] w-[45%] 2xl:w-[408px] text-left flex flex-col gap-[8px] md:gap-[15.08px]">
              <h3 className="font-sans font-medium text-[13px] md:text-[16px] lg:text-[19px] xl:text-[24px] 2xl:text-[29px] leading-[100%] tracking-[-0.03em] text-[#4576FF] max-w-[338px]">
                Get Matched with a Study Plan
              </h3>
              <p className="font-['DM_Sans'] font-normal text-[10px] md:text-[11px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] leading-[120%] text-[#71717A] max-w-[408px]">
                Receive a curriculum plan for your specific situation
              </p>
            </div>

            {/* Step 4 (Left) */}
            {/* Node dot (22px x 22px) */}
            <div className="absolute top-[400px] lg:top-[450px] xl:top-[540px] 2xl:top-[666px] left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full bg-[#4576FF] border-[3px] border-[#DBE5FF] z-10" />
            {/* Text block */}
            <div className="absolute top-[365px] lg:top-[410px] xl:top-[495px] 2xl:top-[630px] right-[53%] 2xl:right-[678px] w-[45%] 2xl:w-[591px] text-right flex flex-col gap-[8px] md:gap-[15.08px]">
              <h3 className="font-sans font-medium text-[13px] md:text-[16px] lg:text-[19px] xl:text-[24px] 2xl:text-[29px] leading-[100%] tracking-[-0.03em] text-[#4576FF] max-w-[591px] ml-auto">
                Pass Your CFA Exam with Confidence
              </h3>
              <p className="font-['DM_Sans'] font-normal text-[10px] md:text-[11px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] leading-[120%] text-[#71717A] max-w-[441px] ml-auto">
                Achieve your goals with our proven strategies and dedicated support.
              </p>
            </div>

          </div>

        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden w-full relative px-6">
          {/* Header */}
          <h2 className="font-['Cal_Sans'] font-normal text-[24px] leading-tight text-center text-[#4576FF] mb-4">
            Path to the <br /> CFA Charter
          </h2>

          {/* Subtitle */}
          <p className="font-['DM_Sans'] font-normal text-[12px] leading-[22px] text-center text-[#5C5C5C] mb-12">
            Upskill's structured four-step journey is designed to take you from CFA aspirant to Charterholder.
          </p>

          {/* Timeline channel and steps wrapper */}
          <div className="relative pl-8 pr-4 flex flex-col gap-10">

            {/* Timeline Central/Left line */}
            <div className="absolute left-[16px] top-2 bottom-2 w-[4px] bg-[#4576FF] rounded-full" />

            {/* Step 1 */}
            <div className="relative flex flex-col gap-2">
              {/* Node */}
              <div className="absolute left-[-16px] top-[8px] -translate-x-1/2 w-4 h-4 rounded-full bg-[#4576FF] border-[3px] border-[#DBE5FF] z-10" />
              <h3 className="font-sans font-medium text-[16px] leading-tight text-[#4576FF]">
                Apply for a Free Consultation
              </h3>
              <p className="font-['DM_Sans'] font-normal text-[13px] leading-relaxed text-[#71717A]">
                Speak with an expert and discover where you stand
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col gap-2">
              {/* Node (Active/Selected state) */}
              <div className="absolute left-[-16px] top-[8px] -translate-x-1/2 w-6 h-6 rounded-full bg-[#4576FF]/20 border-[3px] border-[#4576FF] z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#4576FF]" />
              </div>
              <h3 className="font-sans font-medium text-[16px] leading-tight text-[#4576FF]">
                Take part in an Honest level assessment
              </h3>
              <p className="font-['DM_Sans'] font-normal text-[13px] leading-relaxed text-[#71717A]">
                Test for basic knowledge on financial and mathematical understanding
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col gap-2">
              {/* Node */}
              <div className="absolute left-[-16px] top-[8px] -translate-x-1/2 w-4 h-4 rounded-full bg-[#4576FF] border-[3px] border-[#DBE5FF] z-10" />
              <h3 className="font-sans font-medium text-[16px] leading-tight text-[#4576FF]">
                Get Matched with a Study Plan
              </h3>
              <p className="font-['DM_Sans'] font-normal text-[13px] leading-relaxed text-[#71717A]">
                Receive a curriculum plan for your specific situation
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col gap-2">
              {/* Node */}
              <div className="absolute left-[-16px] top-[8px] -translate-x-1/2 w-4 h-4 rounded-full bg-[#4576FF] border-[3px] border-[#DBE5FF] z-10" />
              <h3 className="font-sans font-medium text-[16px] leading-tight text-[#4576FF]">
                Pass Your CFA Exam with Confidence
              </h3>
              <p className="font-['DM_Sans'] font-normal text-[13px] leading-relaxed text-[#71717A]">
                Achieve your goals with our proven strategies and dedicated support.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          HEAR FROM OUR STUDENTS (TESTIMONIALS) SECTION
      ───────────────────────────────────────────────────────── */}
      <section id="testimonials" className="w-full bg-white pt-[78px] pb-24 md:pb-32 px-6 overflow-hidden">
        {/* Section Header */}
        <div className="mx-auto flex flex-col items-center gap-6 md:gap-[23px] mb-14 md:mb-16">
          {/* Heading — Figma: Cal Sans 90px, #4879FF */}
          <h2 className="font-['Cal_Sans'] font-normal text-[34px] lg:text-[44px] xl:text-[54px] 2xl:text-[66px] leading-[1.15] text-[#4879FF] text-center w-full max-w-[800px] h-auto flex items-center justify-center">
            Hear From <br /> Our Students
          </h2>
          {/* Subtitle — Figma: DM Sans 24px, #5C5C5C */}
          <p className="font-['DM_Sans'] font-normal text-[12px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px] leading-[28px] text-center text-[#5C5C5C] w-full max-w-[1128px] h-auto px-4 flex items-center justify-center">
            Pass your CFA exams with Upskill and join the elite community of CFA charter holders.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[1511.03px] flex flex-wrap justify-center gap-8 md:gap-[40.84px]">
          {visibleTestimonials.map((t, idx) => (
            <div
              key={t.id || idx}
              className="flex flex-col w-full md:flex-1 md:min-w-[320px] max-w-[476.43px] p-6 md:px-[31.31px] md:py-[32px] bg-white border-[1.36px] border-[#D5D5D5] rounded-[44px] shadow-xs hover:shadow-md transition-all duration-300"
            >
              {/* Header: Avatar & Name/Role */}
              <div className="flex items-center gap-[23.14px]">
                {/* Avatar */}
                <div className="relative w-[65.34px] h-[65.34px] rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                  <Image
                    src={`${t.image}?v=2`}
                    alt={t.name}
                    fill
                    sizes="65.34px"
                    className="object-cover"
                  />
                </div>
                {/* Name & Role block */}
                <div className="flex flex-col justify-center flex-1 min-h-[65.34px]">
                  <span className="font-['DM_Sans'] font-semibold text-[22px] lg:text-[24px] leading-[28px] tracking-tight text-[#0A1015] select-none">
                    {t.name}
                  </span>
                  <span className="font-['DM_Sans'] font-normal text-[15px] lg:text-[16px] leading-[20px] lg:leading-[22px] tracking-normal text-[#808080] select-none mt-0.5">
                    {t.role}
                  </span>
                </div>
              </div>

              {/* Testimonial text */}
              <p className="font-['DM_Sans'] font-normal text-[17px] lg:text-[18px] leading-[23px] lg:leading-[24px] text-[#17171C] mt-[24.5px] text-left">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          BLOGS SECTION
          Figma: width 1728px, height 1990px, background #F1F1F1, top: 5585px
      ───────────────────────────────────────────────────────── */}
      <section id="blogs" className="w-full bg-[#F1F1F1] py-6 md:py-8 lg:py-12 xl:py-20 px-6 overflow-visible select-none">
        <div className="mx-auto max-w-[1728px] w-full flex flex-col items-center">

          {/* Heading — Figma: Cal Sans 90px, #4879FF, 544×180px */}
          <h2 className="font-['Cal_Sans'] font-normal text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[54px] 2xl:text-[66px] leading-[110%] tracking-normal text-center text-[#4879FF] flex items-center justify-center select-none z-20">
            Read blogs <br /> on CFA
          </h2>

          {/* Subtitle — Figma: DM Sans 24px, #5C5C5C, 1128×56px */}
          <p className="mt-3 md:mt-4 font-['DM_Sans'] font-normal text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] leading-[130%] tracking-normal text-center text-[#5C5C5C] flex items-center justify-center select-none z-20 max-w-[1128px] px-4">
            Stay ahead with expert CFA tips, study strategies, and industry insights written by finance experts.
          </p>

          {/* Blog Cards Grid — Figma: width: 1587px, height: 554px, gap: 45px */}
          <div className="mt-6 md:mt-8 lg:mt-10 w-full max-w-[1587px] flex flex-col md:flex-row gap-[20px] lg:gap-[30px] xl:gap-[45px] z-20 justify-center items-stretch">
            {blogsList.map((blog, idx) => (
              <Link
                key={blog.id || idx}
                href={`/blog?id=${blog.id}`}
                className="flex flex-col md:flex-row flex-1 max-w-full md:max-w-[520px] lg:max-w-[580px] xl:max-w-[680px] 2xl:max-w-[771px] bg-white border border-[#C0C0C0] rounded-[20px] overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {/* Image Box */}
                <div className="relative w-full md:w-[49%] h-[220px] md:h-auto min-h-[260px] md:min-h-[320px] lg:min-h-[350px] xl:min-h-[420px] 2xl:min-h-[554px] flex-shrink-0 bg-[#EEEEEE]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 49vw"
                    className="object-cover"
                  />
                </div>
                {/* Details Box */}
                <div className="flex-1 p-6 md:p-4 md:pl-6 lg:p-6 lg:pl-8 xl:p-10 xl:pl-12 flex flex-col justify-center bg-white min-h-[300px]">
                  <div className="flex flex-col gap-[8px] xl:gap-[12px] 2xl:gap-[16px]">
                    {/* Eyebrow */}
                    <span className="font-sh-grotesk font-normal text-[15px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[21px] leading-[103%] text-[#2530FF] whitespace-nowrap">
                      {blog.read_time}
                    </span>
                    {/* Heading */}
                    <h3 className="font-['Cal_Sans'] font-normal text-[22px] md:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[34px] leading-[103%] text-black tracking-normal mt-1 xl:mt-2">
                      {blog.title}
                    </h3>
                    {/* Description */}
                    <p className="font-sans font-normal text-[14px] md:text-[11px] lg:text-[13px] xl:text-[14px] 2xl:text-[21px] leading-[120%] text-[#727272] tracking-[-3%] mt-1 xl:mt-2">
                      {blog.description}
                    </p>
                  </div>
                  {/* Date */}
                  <span className="font-sh-grotesk font-normal text-[15px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[21px] leading-[103%] text-black mt-6 xl:mt-8 2xl:mt-12 block">
                    {blog.publish_date}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* View all articles button — Figma: width 259px, height 66px */}
          <div className="mt-8 md:mt-12 lg:mt-16 flex justify-center z-20">
            <Link
              href="/blogs"
              className="w-[259px] h-[66px] bg-black hover:bg-black/90 text-white rounded-[20px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex items-center justify-center transition-all duration-300 font-['Cal_Sans'] font-normal text-[24px] leading-[100%] tracking-[-0.25px] select-none text-center"
            >
              View all articles
            </Link>
          </div>

          {/* Blue CTA Banner Box — Figma: width 1674px, height 727px, radius: 57px */}
          <div
            className="mt-16 md:mt-24 w-full max-w-[1674px] min-h-[420px] md:min-h-[500px] lg:min-h-[560px] xl:min-h-[620px] 2xl:h-[727px] rounded-[57px] overflow-hidden z-20 text-center relative flex flex-col items-center justify-center px-6"
            style={{
              background: "linear-gradient(180deg, #4879FF 0%, #0637BC 57.03%)"
            }}
          >
            {/* Dots overlay inside the banner itself to match Multiply blend mode inside the banner */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-90"
              style={{
                backgroundImage: "url('/cta_dots_pattern.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />

            {/* Content Wrapper — Centered flex container to manage gaps and alignment dynamically */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 max-w-[1128px] py-12 md:py-16">

              {/* Title — Cal Sans, white, centered */}
              <h2 className="w-full max-w-[800px] font-['Cal_Sans'] font-normal text-[26px] sm:text-[34px] md:text-[42px] lg:text-[50px] xl:text-[58px] leading-[105%] text-white tracking-tight text-center select-none">
                Ready to pass <br /> your CFA exam?
              </h2>

              {/* Subtitle — Geist/font-sans, white/90, centered */}
              <p className="w-full max-w-[566px] font-sans font-normal text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] leading-[130%] text-white/90 tracking-[-0.04em] text-center select-none">
                Book a free consultation today and build a smarter, <br className="hidden md:inline" /> more structured CFA preparation strategy.
              </p>

              {/* Button — White background, brand blue text */}
              <Link
                href="#book-consultation"
                className="w-[280px] h-[58px] md:w-[308px] md:h-[66px] bg-white hover:bg-white/95 text-[#4879FF] font-['Cal_Sans'] font-normal text-[18px] md:text-[21px] leading-[100%] tracking-[-0.25px] rounded-[20px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex items-center justify-center transition-all transform hover:scale-102 active:scale-98 select-none text-center"
              >
                Book a free Consultation
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* Footer — Figma: Group 1321319586, width 1920px, height 229px */}
      <Footer />

    </div>
  );
}
