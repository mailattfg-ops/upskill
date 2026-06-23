"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import DateRangePicker from "./DateRangePicker";
import { TimePicker } from "@/components/ui/time-picker";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(new Date(2027, 0, 6));
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    qualification: "",
    employmentStatus: "Employed",
    currentCompany: "",
    countryCode: "+966",
    whatsappNumber: "",
    preferredDate: "01/06/27",
    preferredTime: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleOpen = () => {
      setIsOpen(true);
      setIsSubmitted(false);
    };
    window.addEventListener("open-booking-modal", handleOpen);

    // Intercept clicks on anchor tags pointing to `#book-consultation` or `#book-free-session`
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (
          href === "#book-consultation" ||
          href === "#book-free-session" ||
          href === "/#book-consultation" ||
          href === "/#book-free-session"
        ) {
          e.preventDefault();
          setIsOpen(true);
          setIsSubmitted(false);
        }
      }
    };
    document.addEventListener("click", handleHashClick);

    return () => {
      window.removeEventListener("open-booking-modal", handleOpen);
      document.removeEventListener("click", handleHashClick);
    };
  }, []);

  // Handle click outside to close
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);




  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  const handleDateApply = (date: Date | null) => {
    setSelectedStartDate(date);
    if (date) {
      const mm = String(date.getMonth() + 1).padStart(2, "0");
      const dd = String(date.getDate()).padStart(2, "0");
      const yy = String(date.getFullYear()).slice(-2);
      setFormData((prev) => ({
        ...prev,
        preferredDate: `${mm}/${dd}/${yy}`,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        preferredDate: "",
      }));
    }
    setIsDatePickerOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setFormData({
        name: "",
        age: "",
        qualification: "",
        employmentStatus: "Employed",
        currentCompany: "",
        countryCode: "+966",
        whatsappNumber: "",
        preferredDate: "",
        preferredTime: "",
      });
      setSelectedStartDate(null);
      setIsSubmitted(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto lg:overflow-y-hidden bg-black/60 backdrop-blur-[2px] transition-opacity duration-300">
      <div className="flex min-h-full items-start lg:items-center justify-center p-4 lg:p-0">
        {/* Modal Split Card Container: CSS Grid (48% / 52%) on desktop, max width 480px on mobile, max-height 95vh / 85vh */}
        <div
          ref={modalRef}
          className="relative w-full max-w-[480px] lg:max-w-[960px] h-auto lg:h-[550px] max-h-none lg:max-h-[85vh] bg-white rounded-[16px] lg:rounded-[21px] shadow-[0_8px_8px_-4px_rgba(0,0,0,0.03),0_20px_24px_-4px_rgba(0,0,0,0.08)] overflow-hidden grid grid-cols-1 lg:grid-cols-[48%_52%] items-stretch transition-transform duration-300 scale-100 my-auto"
        >
        
        {/* CLOSE BUTTON FOR TABLET/MOBILE */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-50 p-2 text-gray-400 hover:text-gray-700 bg-white/80 backdrop-blur-sm rounded-full lg:hidden shadow-sm"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* LEFT COLUMN: HERO CARD */}
        <div className="w-full h-[278px] lg:h-full pt-6 px-6 pb-0 lg:p-[16px] flex items-center justify-center bg-white shrink-0">
          <div className="w-full h-[254px] lg:h-full rounded-[8px] relative overflow-hidden bg-gradient-to-b from-[#4879ff] to-[#0637bc] flex items-center justify-center px-4 lg:px-6 shadow-inner select-none">
            
            {/* Dotted Grid Pattern Overlay */}
            <svg
              className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="modalDotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.2" fill="#ffffff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#modalDotPattern)" />
            </svg>

            {/* Decorative Semi-transparent Abstract Shape Overlay (12% opacity) */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/12 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/12 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full pointer-events-none" />

            {/* Headline: centered, Cal Sans font, white */}
            <h2 className="font-['Cal_Sans'] font-normal text-[26px] sm:text-[34px] lg:text-[36px] leading-[1.1] text-white text-center z-10 max-w-[280px] tracking-tight">
              Ready to Pass<br />Your CFA Exam?
            </h2>
          </div>
        </div>

        {/* RIGHT COLUMN: FORM AREA */}
        <div className="w-full h-auto lg:h-full lg:py-[12px] flex flex-col justify-between relative bg-white overflow-visible lg:overflow-hidden">
          {isSubmitted ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-white h-[400px] lg:h-full">
              <div className="w-16 h-16 bg-[#DBE5FF] text-[#4879ff] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-sans font-bold text-[22px] text-[#171717] mb-2">Registration Complete!</h3>
              <p className="font-sans text-[14px] text-[#525252] max-w-[300px]">
                Thank you. We have received your booking details and will contact you shortly to confirm your session.
              </p>
            </div>
          ) : (
            <div className="flex-1 flex flex-col justify-between relative min-h-0">
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between min-h-0">
                
                {/* Modal Header Zone */}
                <div className="pt-6 px-6 pb-5 lg:pt-[8px] lg:pb-1 lg:px-[24px] flex flex-col gap-1 shrink-0 bg-white">
                  <h3 className="font-sans font-semibold text-[18px] leading-[28px] lg:leading-[22px] text-[#171717]">
                    Register for a free consultation
                  </h3>
                  <p className="font-sans font-normal text-[14px] leading-[20px] lg:leading-[18px] text-[#525252]">
                    Enter the given information to schedule a free consultation.
                  </p>
                </div>

                {/* Form Content Zone (compact fit) */}
                <div className="px-6 lg:px-[24px] flex flex-col gap-[16px] lg:gap-[8px] flex-1 overflow-visible lg:overflow-y-auto min-h-0">
                
                {/* Row 1: Name on card (304px) + Age (112px) */}
                <div className="flex flex-col min-[360px]:flex-row gap-[16px] lg:gap-[12px] w-full">
                  <div className="flex-[304] shrink-0">
                    <label className="block font-sans font-medium text-[14px] leading-[20px] text-[#404040] mb-1.5 lg:mb-1">
                      Name on card
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Olivia Rhye"
                      required
                      className="w-full h-[44px] lg:h-[36px] px-[14px] lg:px-[12px] py-[10px] lg:py-[4px] bg-white border border-[#d4d4d4] rounded-[8px] text-[16px] leading-[24px] font-sans font-normal text-[#171717] placeholder-[#a3a3a3] focus:outline-none focus:border-[#4879ff] focus:ring-1 focus:ring-[#4879ff] transition-all"
                    />
                  </div>
                  <div className="flex-[112] shrink-0">
                    <label className="block font-sans font-medium text-[14px] leading-[20px] text-[#404040] mb-1.5 lg:mb-0.5">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="22"
                      required
                      min="16"
                      max="100"
                      className="w-full h-[44px] lg:h-[36px] px-[14px] lg:px-[12px] py-[10px] lg:py-[4px] bg-white border border-[#d4d4d4] rounded-[8px] text-[16px] leading-[24px] font-sans font-normal text-[#171717] placeholder-[#a3a3a3] focus:outline-none focus:border-[#4879ff] focus:ring-1 focus:ring-[#4879ff] transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Current qualification (288px) + Employment status (128px) */}
                <div className="flex flex-col min-[360px]:flex-row gap-[16px] lg:gap-[12px] w-full">
                  <div className="flex-[288] shrink-0">
                    <label className="block font-sans font-medium text-[14px] leading-[20px] text-[#404040] mb-1.5 lg:mb-0.5">
                      Current qualification
                    </label>
                    <input
                      type="text"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      placeholder="Bachelors of economics"
                      required
                      className="w-full h-[44px] lg:h-[36px] px-[14px] lg:px-[12px] py-[10px] lg:py-[4px] bg-white border border-[#d4d4d4] rounded-[8px] text-[16px] leading-[24px] font-sans font-normal text-[#171717] placeholder-[#a3a3a3] focus:outline-none focus:border-[#4879ff] focus:ring-1 focus:ring-[#4879ff] transition-all"
                    />
                  </div>
                  <div className="flex-[128] shrink-0 relative">
                    <label className="block font-sans font-medium text-[14px] leading-[20px] text-[#404040] mb-1.5 lg:mb-0.5">
                      Employment status
                    </label>
                    <div className="relative">
                      <select
                        name="employmentStatus"
                        value={formData.employmentStatus}
                        onChange={handleChange}
                        className="w-full h-[44px] lg:h-[36px] pl-[14px] lg:pl-[12px] pr-[36px] lg:pr-[32px] py-[10px] lg:py-[4px] bg-white border border-[#d4d4d4] rounded-[8px] text-[16px] leading-[24px] font-sans font-medium text-[#171717] focus:outline-none focus:border-[#4879ff] focus:ring-1 focus:ring-[#4879ff] transition-all appearance-none cursor-pointer"
                      >
                        <option value="Employed">Employed</option>
                        <option value="Student">Student</option>
                        <option value="Unemployed">Unemployed</option>
                        <option value="Self-employed">Self-employed</option>
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 3: Current Company */}
                <div className="w-full">
                  <label className="block font-sans font-medium text-[14px] leading-[20px] text-[#404040] mb-1.5 lg:mb-0.5">
                    Current Company that you work at
                  </label>
                  <input
                    type="text"
                    name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className="w-full h-[44px] lg:h-[36px] px-[14px] lg:px-[12px] py-[10px] lg:py-[4px] bg-white border border-[#d4d4d4] rounded-[8px] text-[16px] leading-[24px] font-sans font-normal text-[#171717] placeholder-[#a3a3a3] focus:outline-none focus:border-[#4879ff] focus:ring-1 focus:ring-[#4879ff] transition-all"
                  />
                </div>

                {/* Row 4: Country code (112px) + WhatsApp number (304px) */}
                <div className="flex flex-col min-[360px]:flex-row gap-[16px] lg:gap-[12px] w-full">
                  <div className="flex-[112] shrink-0">
                    <label className="block font-sans font-medium text-[14px] leading-[20px] text-[#404040] mb-1.5 lg:mb-0.5">
                      Country code
                    </label>
                    <input
                      type="text"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      placeholder="+971"
                      required
                      className="w-full h-[44px] lg:h-[36px] px-[14px] lg:px-[12px] py-[10px] lg:py-[4px] bg-white border border-[#d4d4d4] rounded-[8px] text-[16px] leading-[24px] font-sans font-normal text-[#171717] placeholder-[#a3a3a3] focus:outline-none focus:border-[#4879ff] focus:ring-1 focus:ring-[#4879ff] transition-all"
                    />
                  </div>
                  <div className="flex-[304] shrink-0">
                    <label className="block font-sans font-medium text-[14px] leading-[20px] text-[#404040] mb-1.5 lg:mb-0.5">
                      Whatsapp number
                    </label>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      placeholder="1234 1234 1234 1234"
                      required
                      className="w-full h-[44px] lg:h-[36px] px-[14px] lg:px-[12px] py-[10px] lg:py-[4px] bg-white border border-[#d4d4d4] rounded-[8px] text-[16px] leading-[24px] font-sans font-normal text-[#171717] placeholder-[#a3a3a3] focus:outline-none focus:border-[#4879ff] focus:ring-1 focus:ring-[#4879ff] transition-all"
                    />
                  </div>
                </div>

                {/* Row 5: Preferred Date + Preferred Time */}
                <div className="flex flex-col min-[360px]:flex-row gap-[16px] lg:gap-[12px] w-full">
                  <div className="flex-1 relative">
                    <label className="block font-sans font-medium text-[14px] leading-[20px] text-[#404040] mb-1.5 lg:mb-0.5">
                      Preffered Date
                    </label>
                    <Popover open={isDatePickerOpen} onOpenChange={setIsDatePickerOpen}>
                      <PopoverTrigger asChild>
                        <div className="relative cursor-pointer">
                          <input
                            type="text"
                            name="preferredDate"
                            readOnly
                            value={formData.preferredDate}
                            placeholder="Select date range"
                            required
                            className="w-full h-[44px] lg:h-[36px] pl-[14px] lg:pl-[12px] pr-[36px] lg:pr-[32px] py-[10px] lg:py-[4px] bg-white border border-[#d4d4d4] rounded-[8px] text-[15px] lg:text-[16px] leading-[24px] font-sans font-medium text-[#171717] focus:outline-none focus:border-[#4879ff] focus:ring-1 focus:ring-[#4879ff] transition-all cursor-pointer"
                          />
                          <button
                            type="button"
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </button>
                        </div>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 border-0 bg-transparent shadow-none z-50 max-h-[90vh] overflow-y-auto" align="start">
                        <DateRangePicker
                          initialStartDate={selectedStartDate}
                          initialEndDate={null}
                          onApply={handleDateApply}
                          onCancel={() => setIsDatePickerOpen(false)}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex-1 relative">
                    <label className="block font-sans font-medium text-[14px] leading-[20px] text-[#404040] mb-1.5 lg:mb-0.5">
                      Preffered time
                    </label>
                    <TimePicker
                      value={formData.preferredTime}
                      onChange={(time) => {
                        setFormData((prev) => ({
                          ...prev,
                          preferredTime: time,
                        }));
                      }}
                    />
                  </div>
                </div>

              </div>

              {/* Space between fields and buttons */}
              <div className="my-2 lg:my-0" />

              {/* Modal Actions Zone */}
              <div className="pt-8 pb-6 lg:pt-1.5 lg:pb-1.5 px-6 lg:px-[24px] flex flex-col-reverse min-[360px]:flex-row gap-[12px] items-center justify-between shrink-0 bg-white">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-full sm:w-[210px] h-[44px] lg:h-[36px] rounded-[8px] bg-white border border-[#d4d4d4] text-[#404040] font-sans font-semibold text-[14px] leading-[20px] transition-all hover:bg-gray-50 flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.05)] cursor-pointer select-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-[210px] h-[44px] lg:h-[36px] rounded-[8px] bg-[#7f56d9] border-[#7f56d9] text-white font-sans font-semibold text-[14px] leading-[20px] transition-all hover:bg-[#693cb8] flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.05)] cursor-pointer select-none"
                >
                  Confirm
                </button>
              </div>
              </form>


            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  );
}
