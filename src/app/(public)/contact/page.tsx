"use client";

import { useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cfaLevel: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const { error } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          cfa_level: formData.cfaLevel || null,
          message: formData.message,
        },
      ]);
      if (error) {
        console.error("Error inserting contact message:", error);
      }
    } catch (err) {
      console.error("Supabase insert exception:", err);
    }

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        cfaLevel: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <main className="w-full flex flex-col items-center bg-white relative z-10 overflow-visible">
      {/* Visual linear gradient band (full bleed, 231px tall at the top) */}
      <div
        className="absolute top-0 left-0 w-full h-[231px] pointer-events-none z-0"
        style={{
          background: "linear-gradient(180deg, #4576FF 0%, rgba(69, 118, 255, 0.2) 70%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      {/* Hero / Headline Block */}
      <section className="relative z-10 w-full max-w-[1728px]  pt-[110px] lg:px-[113px] pb-6 md:pb-12 flex flex-col items-center text-center px-6">
        <h1 className="font-['Cal_Sans'] font-normal text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[50px] 2xl:text-[66px] leading-[1.15] text-black text-center max-w-none animate-fade-in">
          Get in touch with us.<br />We're here to assist you.
        </h1>
      </section>

      {/* Form & Map Section */}
      <div className="fade-up w-full">
        <section className="relative z-10 w-full max-w-[1728px] mx-auto px-6 lg:px-12 xl:pl-[80px] xl:pr-[48px] 2xl:pl-[141px] 2xl:pr-[65px] flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-[60px] 2xl:gap-[82px] justify-between items-start pb-24">

        {/* Contact Form Column (Width 959px on desktop) */}
        <div className="w-full lg:max-w-[640px] xl:max-w-[780px] 2xl:max-w-[959px] flex-1">
          {submitted ? (
            <div className="w-full bg-[#DBE5FF] text-[#4a3aff] p-8 rounded-[20px] text-center font-sans font-semibold text-[20px] 2xl:text-[24px] shadow-sm mb-[200px]">
              Thank you! We have received your message and will get in touch with you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[24px] sm:gap-[32px] 2xl:gap-[48px] w-full">
              {/* Row 1: Your Name (full width) */}
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full border-b border-[#cacaca] bg-transparent py-2 2xl:py-4 text-[16px] sm:text-[18px] lg:text-[20px] 2xl:text-[24px] font-sans font-normal text-black placeholder-black tracking-[-0.03em] focus:outline-none focus:border-[#4a3aff] transition-colors"
                />
              </div>

              {/* Row 2: Email Address + Phone Number (optional) + CFA Level (3 columns, 32px gap) */}
              <div className="flex flex-col md:flex-row gap-[24px] lg:gap-[32px] w-full">
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full border-b border-[#cacaca] bg-transparent py-2 2xl:py-4 text-[16px] sm:text-[18px] lg:text-[20px] 2xl:text-[24px] font-sans font-normal text-black placeholder-black tracking-[-0.03em] focus:outline-none focus:border-[#4a3aff] transition-colors"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number (optional)"
                    className="w-full border-b border-[#cacaca] bg-transparent py-2 2xl:py-4 text-[16px] sm:text-[18px] lg:text-[20px] 2xl:text-[24px] font-sans font-normal text-black placeholder-black tracking-[-0.03em] focus:outline-none focus:border-[#4a3aff] transition-colors"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    name="cfaLevel"
                    value={formData.cfaLevel}
                    onChange={handleChange}
                    placeholder="CFA Level"
                    className="w-full border-b border-[#cacaca] bg-transparent py-2 2xl:py-4 text-[16px] sm:text-[18px] lg:text-[20px] 2xl:text-[24px] font-sans font-normal text-black placeholder-black tracking-[-0.03em] focus:outline-none focus:border-[#4a3aff] transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Message textarea (156px tall, 100px bottom padding) */}
              <div className="w-full">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  className="w-full border-b border-[#cacaca] bg-transparent pt-2 pb-10 h-[10px]  font-sans font-normal text-[16px] sm:text-[18px] lg:text-[20px] 2xl:text-[24px] text-black placeholder-black tracking-[-0.03em] focus:outline-none focus:border-[#4a3aff] transition-colors resize-none"
                />
              </div>

              {/* Row 4: Primary CTA Button */}
              <div className="w-full flex justify-start">
                <button
                  type="submit"
                  className="bg-[#4a3aff] hover:bg-blue-700 text-white font-inter font-semibold text-[16px] sm:text-[18px] 2xl:text-[22px] tracking-normal rounded-[37px] py-3 px-5 sm:py-[12px] sm:px-[20px] 2xl:py-[16px] 2xl:px-[25px] inline-flex items-center justify-center transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_12px_24px_rgba(74,58,255,0.25)] hover:scale-[1.02] cursor-pointer"
                  style={{
                    borderRadius: "37px",
                  }}
                >
                  Leave us a Message &rarr;
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Map Card Column (Width 481px, Height 559px, corner radius 20px) */}
        <div className="w-full lg:w-[320px] xl:w-[420px] 2xl:w-[481px] h-[250px] sm:h-[350px] lg:h-[480px] 2xl:h-[559px] rounded-[20px] overflow-hidden flex-shrink-0 relative shadow-sm z-10 border border-gray-100">
          <Image
            src="/contact_map.png"
            alt="Pacific Palisades Street Map Location"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>
      </div>
 
      {/* Section 3: Contact Info (Surface Blue bg-[#DBE5FF], 430px tall) */}
      <section className="relative z-10 w-full bg-[#DBE5FF] py-16 xl:py-24 px-6 md:px-12 lg:px-[80px] xl:px-[120px] 2xl:px-[181px] flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-[60px] 2xl:gap-[102px] min-h-[430px] md:items-center">
        {/* Left Column (x:181) */}
        <div className="flex flex-col gap-6 max-w-[500px]">
          <span className="font-inter font-normal text-[16px] text-black uppercase tracking-wider">
            Contact Info
          </span>
          <h2 className="font-sans font-bold text-[28px] sm:text-[36px] lg:text-[44px] 2xl:text-[56px] leading-[1.15] text-black">
            We are always happy to assist you
          </h2>
        </div>
 
        {/* Right Column (x:825) */}
        <div className="flex flex-col sm:flex-row gap-8 lg:gap-[60px] 2xl:gap-[102px] items-start w-full lg:w-auto">
          {/* Email Address block */}
          <div className="flex flex-col gap-3 w-full sm:w-[220px]">
            <span className="font-inter font-semibold text-[16px] leading-[24px] text-black tracking-[-0.025em] uppercase">
              Email Address
            </span>
            <div className="w-full h-px bg-black mt-1" />
            <span className="font-inter font-medium text-[16px] leading-[24px] text-black mt-2">
              help@info.com
            </span>
            <p className="font-inter font-normal text-[13px] leading-[20px] text-[#8e8e8e] mt-1">
              Assistance hours:<br />Monday - Friday 6 am to 8 pm EST
            </p>
          </div>
 
          {/* Number block */}
          <div className="flex flex-col gap-3 w-full sm:w-[220px]">
            <span className="font-inter font-semibold text-[16px] leading-[24px] text-black tracking-[-0.025em] uppercase">
              Number
            </span>
            <div className="w-full h-px bg-black mt-1" />
            <span className="font-inter font-medium text-[16px] leading-[24px] text-black mt-2">
              (808) 998-34256
            </span>
            <p className="font-inter font-normal text-[13px] leading-[20px] text-[#8e8e8e] mt-1">
              Assistance hours:<br />Monday - Friday 6 am to 8 pm EST
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
