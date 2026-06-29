"use client";

import { useEffect, useRef, useState } from "react";

export default function PathToCfaSection() {
  const desktopLineRef = useRef<HTMLDivElement>(null);
  const desktopNode1Ref = useRef<HTMLDivElement>(null);
  const desktopNode2Ref = useRef<HTMLDivElement>(null);
  const desktopNode3Ref = useRef<HTMLDivElement>(null);
  const desktopNode4Ref = useRef<HTMLDivElement>(null);

  const mobileLineRef = useRef<HTMLDivElement>(null);
  const mobileNode1Ref = useRef<HTMLDivElement>(null);
  const mobileNode2Ref = useRef<HTMLDivElement>(null);
  const mobileNode3Ref = useRef<HTMLDivElement>(null);
  const mobileNode4Ref = useRef<HTMLDivElement>(null);

  const [desktopLineHeight, setDesktopLineHeight] = useState(0);
  const [mobileLineHeight, setMobileLineHeight] = useState(0);

  const [node1Active, setNode1Active] = useState(false);
  const [node2Active, setNode2Active] = useState(false);
  const [node3Active, setNode3Active] = useState(false);
  const [node4Active, setNode4Active] = useState(false);

  const [mNode1Active, setMNode1Active] = useState(false);
  const [mNode2Active, setMNode2Active] = useState(false);
  const [mNode3Active, setMNode3Active] = useState(false);
  const [mNode4Active, setMNode4Active] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const triggerY = viewportHeight * 0.55; // 55% from the top of the viewport

      // 1. Desktop timeline and node calculations
      if (desktopLineRef.current) {
        const lineRect = desktopLineRef.current.getBoundingClientRect();
        const progress = triggerY - lineRect.top;
        const activeHeight = Math.max(0, Math.min(lineRect.height, progress));
        setDesktopLineHeight(activeHeight);
      }

      if (desktopNode1Ref.current) {
        setNode1Active(desktopNode1Ref.current.getBoundingClientRect().top <= triggerY);
      }
      if (desktopNode2Ref.current) {
        setNode2Active(desktopNode2Ref.current.getBoundingClientRect().top <= triggerY);
      }
      if (desktopNode3Ref.current) {
        setNode3Active(desktopNode3Ref.current.getBoundingClientRect().top <= triggerY);
      }
      if (desktopNode4Ref.current) {
        setNode4Active(desktopNode4Ref.current.getBoundingClientRect().top <= triggerY);
      }

      // 2. Mobile timeline and node calculations
      if (mobileLineRef.current) {
        const lineRect = mobileLineRef.current.getBoundingClientRect();
        const progress = triggerY - lineRect.top;
        const activeHeight = Math.max(0, Math.min(lineRect.height, progress));
        setMobileLineHeight(activeHeight);
      }

      if (mobileNode1Ref.current) {
        setMNode1Active(mobileNode1Ref.current.getBoundingClientRect().top <= triggerY);
      }
      if (mobileNode2Ref.current) {
        setMNode2Active(mobileNode2Ref.current.getBoundingClientRect().top <= triggerY);
      }
      if (mobileNode3Ref.current) {
        setMNode3Active(mobileNode3Ref.current.getBoundingClientRect().top <= triggerY);
      }
      if (mobileNode4Ref.current) {
        setMNode4Active(mobileNode4Ref.current.getBoundingClientRect().top <= triggerY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    
    // Initial call after DOM has settled
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="how-it-works" className="w-full bg-[#DBE5FF] pt-[42px] pb-20 md:py-0 md:px-0 overflow-visible relative md:h-[680px] lg:h-[780px] xl:h-[920px] 2xl:h-[1117px]">
      {/* Desktop Layout — Figma Specifications */}
      <div className="hidden md:block w-full max-w-[1728px] mx-auto h-full relative overflow-visible">
        {/* Header Container */}
        <div className="absolute top-[20px] md:top-[30px] xl:top-[42px] left-1/2 -translate-x-1/2 w-full max-w-[1128px] flex flex-col items-center gap-3 md:gap-4 lg:gap-5 z-20">
          {/* Heading — Figma: Cal Sans 90px, #4879FF */}
          <h2 className="font-['Cal_Sans'] font-normal w-full max-w-[900px] font-cal font-normal text-[40px] lg:text-[46px] xl:text-[54px] 2xl:text-[66px] leading-[1.22] tracking-normal text-center text-[#4879FF] select-none">
            Path to the <br /> CFA Charter
          </h2>

          {/* Subtitle — Figma: DM Sans 24px, #5C5C5C */}
          <p className="w-[90%] max-w-[1128px] font-sans font-normal text-[14px] md:text-[18px] lg:text-[22px] leading-[19.2px] md:leading-[32px] tracking-[-0.03em] md:tracking-[0em] text-center text-[#5C5C5C] overflow-visible px-4">
            Upskill&apos;s structured four-step journey is designed to take you from CFA aspirant to Charterholder.
          </p>
        </div>

        {/* Group 7 — Steps & Timeline Container */}
        <div className="absolute top-[160px] md:top-[180px] lg:top-[200px] xl:top-[220px] 2xl:top-[265px] left-1/2 -translate-x-1/2 w-[95%] max-w-[1263px] h-[480px] lg:h-[520px] xl:h-[640px] 2xl:h-[799px] overflow-visible">
          {/* Central Vertical Line Base (background) */}
          <div ref={desktopLineRef} className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[5px] h-[98%] bg-[#C0D0FF] z-0 pointer-events-none rounded-full" />

          {/* Central Vertical Line Active (scroll animated) */}
          <div 
            className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[5px] bg-[#4576FF] z-0 pointer-events-none rounded-full transition-all duration-100 ease-out origin-top shadow-[0_0_8px_rgba(69,118,255,0.5)]" 
            style={{ height: `${desktopLineHeight}px` }}
          />

          {/* Upper Part Gradient Mask */}
          <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[36px] h-[20%] bg-[linear-gradient(180deg,#DBE5FF_0%,#DBE5FF_41.77%,rgba(219,229,255,0)_100%)] z-10 pointer-events-none" />

          {/* Lower Part Gradient Mask */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[36px] h-[15%] bg-[linear-gradient(180deg,rgba(219,229,255,0)_0%,#DBE5FF_100%)] z-10 pointer-events-none" />

          {/* Step 1 (Right) */}
          {/* Node dot (22px x 22px) */}
          <div ref={desktopNode1Ref} className={`absolute top-[70px] lg:top-[90px] xl:top-[120px] 2xl:top-[154px] left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full border-[3px] z-10 transition-all duration-300 ${
            node1Active 
              ? "bg-[#4576FF] border-[#DBE5FF] scale-110 shadow-[0_0_12px_rgba(69,118,255,0.8)]" 
              : "bg-white border-[#B2C8FF]"
          }`} />
          {/* Text block */}
          <div className="absolute top-[35px] lg:top-[50px] xl:top-[75px] 2xl:top-[98px] left-[53%] w-[45%] 2xl:w-[478px] text-left flex flex-col gap-1 md:gap-1.5">
            <h3 className="font-sans font-medium text-[13px] md:text-[16px] lg:text-[19px] xl:text-[24px] 2xl:text-[29px] leading-[110%] tracking-[-0.03em] text-[#4576FF]">
              Apply for a Free <br className="hidden md:inline" /> Consultation
            </h3>
            <p className="font-['DM_Sans'] font-normal text-[10px] md:text-[11px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] leading-[120%] text-[#71717A] max-w-[441px]">
              Speak with an expert and discover <br className="hidden md:inline" /> where you stand
            </p>
          </div>

          {/* Step 2 (Left) */}
          {/* Node dot (22px x 22px) */}
          <div ref={desktopNode2Ref} className={`absolute top-[175px] lg:top-[205px] xl:top-[255px] 2xl:top-[320px] left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full border-[3px] z-10 transition-all duration-300 ${
            node2Active 
              ? "bg-[#4576FF] border-[#DBE5FF] scale-110 shadow-[0_0_12px_rgba(69,118,255,0.8)]" 
              : "bg-white border-[#B2C8FF]"
          }`} />
          {/* Text block */}
          <div className="absolute top-[135px] lg:top-[160px] xl:top-[210px] 2xl:top-[263px] right-[53%] w-[45%] 2xl:w-[441px] text-right flex flex-col gap-1 md:gap-1.5">
            <h3 className="font-sans font-medium text-[13px] md:text-[16px] lg:text-[19px] xl:text-[24px] 2xl:text-[29px] leading-[110%] tracking-[-0.03em] text-[#4576FF] max-w-[409px] ml-auto">
              Take part in an Honest <br className="hidden md:inline" /> level assessment
            </h3>
            <p className="font-['DM_Sans'] font-normal text-[10px] md:text-[11px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] leading-[120%] text-[#71717A] max-w-[441px] ml-auto">
              Test for basic knowledge on financial <br className="hidden md:inline" /> and mathematical understanding
            </p>
          </div>

          {/* Step 3 (Right) */}
          {/* Node dot (22px x 22px) */}
          <div ref={desktopNode3Ref} className={`absolute top-[280px] lg:top-[320px] xl:top-[390px] 2xl:top-[485px] left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full border-[3px] z-10 transition-all duration-300 ${
            node3Active 
              ? "bg-[#4576FF] border-[#DBE5FF] scale-110 shadow-[0_0_12px_rgba(69,118,255,0.8)]" 
              : "bg-white border-[#B2C8FF]"
          }`} />
          {/* Text block */}
          <div className="absolute top-[245px] lg:top-[280px] xl:top-[345px] 2xl:top-[449px] left-[53%] w-[45%] 2xl:w-[408px] text-left flex flex-col gap-1 md:gap-1.5">
            <h3 className="font-sans font-medium text-[13px] md:text-[16px] lg:text-[19px] xl:text-[24px] 2xl:text-[29px] leading-[110%] tracking-[-0.03em] text-[#4576FF] max-w-[338px]">
              Get Matched with <br className="hidden md:inline" /> a Study Plan
            </h3>
            <p className="font-['DM_Sans'] font-normal text-[10px] md:text-[11px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] leading-[120%] text-[#71717A] max-w-[408px]">
              Receive a curriculum plan for your <br className="hidden md:inline" /> specific situation
            </p>
          </div>

          {/* Step 4 (Left) */}
          {/* Node dot (22px x 22px) */}
          <div ref={desktopNode4Ref} className={`absolute top-[400px] lg:top-[450px] xl:top-[540px] 2xl:top-[666px] left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full border-[3px] z-10 transition-all duration-300 ${
            node4Active 
              ? "bg-[#4576FF] border-[#DBE5FF] scale-110 shadow-[0_0_12px_rgba(69,118,255,0.8)]" 
              : "bg-white border-[#B2C8FF]"
          }`} />
          {/* Text block */}
          <div className="absolute top-[365px] lg:top-[410px] xl:top-[495px] 2xl:top-[630px] right-[53%] w-[45%] 2xl:w-[591px] text-right flex flex-col gap-1 md:gap-1.5">
            <h3 className="font-sans font-medium text-[13px] md:text-[16px] lg:text-[19px] xl:text-[24px] 2xl:text-[29px] leading-[110%] tracking-[-0.03em] text-[#4576FF] max-w-[591px] ml-auto">
              Pass Your CFA Exam with <br className="hidden md:inline" /> Confidence
            </h3>
            <p className="font-['DM_Sans'] font-normal text-[10px] md:text-[11px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] leading-[120%] text-[#71717A] max-w-[441px] ml-auto">
              Achieve your goals with our proven <br className="hidden md:inline" /> strategies and dedicated support
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden w-full relative px-6">
        {/* Header */}
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-6 mb-8 md:mb-12 lg:mb-16">

          <h2 className="font-['Cal_Sans'] font-normal text-[40px] lg:text-[46px] xl:text-[54px] 2xl:text-[66px] leading-[1.22] text-[#4879FF] text-center w-full max-w-[800px]">
            Path to the <br /> CFA Charter
          </h2>

          {/* Subtitle — Figma: DM Sans 24px, #5C5C5C */}
          <p className="font-sans font-normal text-[14px] md:text-[18px] lg:text-[22px] leading-[1.4] text-center text-[#5C5C5C] w-full max-w-[1128px] overflow-visible px-4">
            Upskill&apos;s structured four-step journey is <br /> designed to take you from CFA aspirant to <br /> Charterholder.
          </p>
        </div>
        {/* Timeline channel and steps wrapper */}
        <div className="relative pl-4 pr-20 flex flex-col gap-10 pt-8">
          {/* Timeline Central/Left line Base */}
          <div ref={mobileLineRef} className="absolute right-[32px] top-2 bottom-2 w-[4px] bg-[#C0D0FF] rounded-full" />

          {/* Timeline Central/Left line Active */}
          <div 
            className="absolute right-[32px] top-2 w-[4px] bg-[#4576FF] rounded-full transition-all duration-100 ease-out origin-top shadow-[0_0_6px_rgba(69,118,255,0.5)]" 
            style={{ height: `${mobileLineHeight}px` }}
          />

          {/* Step 1 */}
          <div className="relative flex flex-col gap-1 text-right">
            {/* Node */}
            <div ref={mobileNode1Ref} className={`absolute right-[-54px] top-[8px] w-4 h-4 rounded-full border-[3px] z-10 transition-all duration-300 ${
              mNode1Active 
                ? "bg-[#4576FF] border-[#DBE5FF] scale-110 shadow-[0_0_8px_rgba(69,118,255,0.8)]" 
                : "bg-white border-[#B2C8FF]"
            }`} />
            <h3 className="font-sans font-medium text-[24px] leading-tight text-[#4576FF]">
              Apply for a Free <br className="hidden md:inline" /> Consultation
            </h3>
            <p className="font-['DM_Sans'] font-normal text-[14px] leading-relaxed text-[#71717A]">
              Speak with an expert and discover <br className="hidden md:inline" /> where you stand
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col gap-1 text-right">
            {/* Node */}
            <div ref={mobileNode2Ref} className={`absolute right-[-54px] top-[8px] w-4 h-4 rounded-full border-[3px] z-10 transition-all duration-300 ${
              mNode2Active 
                ? "bg-[#4576FF] border-[#DBE5FF] scale-110 shadow-[0_0_8px_rgba(69,118,255,0.8)]" 
                : "bg-white border-[#B2C8FF]"
            }`} />
            <h3 className="font-sans font-medium text-[24px] leading-tight text-[#4576FF]">
              Take part in an Honest <br className="hidden md:inline" /> level assessment
            </h3>
            <p className="font-['DM_Sans'] font-normal text-[14px] leading-relaxed text-[#71717A]">
              Test for basic knowledge on financial <br className="hidden md:inline" /> and mathematical understanding
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col gap-1 text-right">
            {/* Node */}
            <div ref={mobileNode3Ref} className={`absolute right-[-54px] top-[8px] w-4 h-4 rounded-full border-[3px] z-10 transition-all duration-300 ${
              mNode3Active 
                ? "bg-[#4576FF] border-[#DBE5FF] scale-110 shadow-[0_0_8px_rgba(69,118,255,0.8)]" 
                : "bg-white border-[#B2C8FF]"
            }`} />
            <h3 className="font-sans font-medium text-[24px] leading-tight text-[#4576FF]">
              Get Matched with <br className="hidden md:inline" /> a Study Plan
            </h3>
            <p className="font-['DM_Sans'] font-normal text-[14px] leading-relaxed text-[#71717A]">
              Receive a curriculum plan for your <br className="hidden md:inline" /> specific situation
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative flex flex-col gap-1 text-right">
            {/* Node */}
            <div ref={mobileNode4Ref} className={`absolute right-[-54px] top-[8px] w-4 h-4 rounded-full border-[3px] z-10 transition-all duration-300 ${
              mNode4Active 
                ? "bg-[#4576FF] border-[#DBE5FF] scale-110 shadow-[0_0_8px_rgba(69,118,255,0.8)]" 
                : "bg-white border-[#B2C8FF]"
            }`} />
            <h3 className="font-sans font-medium text-[24px] leading-tight text-[#4576FF]">
              Pass Your CFA Exam with <br className="hidden md:inline" /> Confidence
            </h3>
            <p className="font-['DM_Sans'] font-normal text-[14px] leading-relaxed text-[#71717A]">
              Achieve your goals with our proven <br className="hidden md:inline" /> strategies and dedicated support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
