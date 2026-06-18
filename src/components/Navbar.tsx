"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default to standard (white pill) styling if not mounted to prevent hydration mismatch,
  // but once mounted, check if we are on the what-is-cfa page.
  const isCfaPage = mounted && pathname === '/what-is-cfa';

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* Desktop Layout - Max width 1728px container */}
      {/* Desktop Layout - Max width 1728px container */}
      <div className="mx-auto w-full max-w-[1728px] pt-[20px] px-[25px] relative hidden xl:flex items-center">
        
        {/* Left Column: Logo Spacer (Guarantees logo never gets crushed) */}
        <div className="flex-1 flex justify-start min-w-[220px]">
          <Link href="/" className="relative w-[147px] h-[48px] block group z-50">
            {/* Using the original logo image */}
            <Image
              src="/footer_logo.png"
              alt="Upskill Logo"
              fill
              className={`object-contain transition-transform group-hover:translate-y-[-2px] ${isCfaPage ? 'brightness-0 invert' : ''}`}
              priority
            />
          </Link>
        </div>

        {/* Center Column: Nav Bar Container */}
        <div className="shrink-0 flex justify-center px-4 z-50">
          <nav className="flex items-center justify-center gap-4 2xl:gap-[80px] h-[45px]">
            {/* Nav bar name box */}
            <div className="flex items-center gap-[16px] 2xl:gap-[34px] h-[45px]">
              <Link 
                href="/" 
                className={`flex items-center justify-center transition-colors font-[Inter,sans-serif] font-bold text-[15.1px] leading-[24px] whitespace-nowrap ${isCfaPage ? 'text-white hover:text-gray-200' : 'text-[#4879FF] hover:text-blue-800'}`}
              >
                Home
              </Link>
              <Link 
                href="/#about-company" 
                className={`flex items-center justify-center transition-colors font-sans font-bold text-[14.8px] leading-[20px] tracking-[-0.25px] whitespace-nowrap ${isCfaPage ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[#4879FF]'}`}
              >
                About
              </Link>
              <Link 
                href="/what-is-cfa" 
                className={`flex items-center justify-center transition-colors font-sans font-bold text-[15.1px] leading-[24px] whitespace-nowrap ${isCfaPage ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[#4879FF]'}`}
              >
                What is CFA?
              </Link>
              <Link 
                href="/#why-choose-us" 
                className={`flex items-center justify-center transition-colors font-sans font-bold text-[15.1px] leading-[24px] whitespace-nowrap ${isCfaPage ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[#4879FF]'}`}
              >
                Program
              </Link>
              <Link 
                href="/#testimonials" 
                className={`flex items-center justify-center transition-colors font-[Inter,sans-serif] font-bold text-[15.1px] leading-[24px] whitespace-nowrap ${isCfaPage ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[#4879FF]'}`}
              >
                Testimonials
              </Link>
              <Link 
                href="/#blogs" 
                className={`flex items-center justify-center transition-colors font-[Inter,sans-serif] font-bold text-[15.1px] leading-[24px] whitespace-nowrap ${isCfaPage ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[#4879FF]'}`}
              >
                Blog
              </Link>
              <Link 
                href="/#contact" 
                className={`flex items-center justify-center transition-colors font-sans font-bold text-[15.1px] leading-[24px] whitespace-nowrap ${isCfaPage ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[#4879FF]'}`}
              >
                Contact Us
              </Link>
            </div>

            {/* Book Free Session Button */}
            <Link
              href="/#contact"
              className={`w-[154px] h-[45px] shrink-0 rounded-full flex items-center justify-center transition-all hover:shadow-md ${isCfaPage ? 'bg-white text-[#4879FF] hover:bg-gray-50' : 'bg-[#4879FF] text-white hover:bg-blue-700 shadow-sm'}`}
            >
              <span className="font-sans font-medium text-[13px] whitespace-nowrap">
                Book Free Session
              </span>
            </Link>
          </nav>
        </div>

        {/* Right Column: Empty spacer to perfectly balance the logo side for mathematical centering */}
        <div className="flex-1 min-w-[220px]"></div>
      </div>

      {/* Mobile/Tablet Fallback Layout (Under 1280px) */}
      <div className={`xl:hidden w-full px-6 py-4 flex items-center justify-between backdrop-blur-md border-b ${isCfaPage ? 'bg-[#4576FF] border-blue-500' : 'bg-white/80 border-gray-100'}`}>
        <Link href="/" className="flex items-center group">
          <div className={`flex items-center justify-center ${isCfaPage ? 'text-white' : 'text-blue-600'}`}>
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-y-[-2px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
          <span className={`text-xl font-black tracking-tighter font-sans select-none ml-2 ${isCfaPage ? 'text-white' : 'text-gray-900'}`}>
            upskill
          </span>
        </Link>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2 focus:outline-none ${isCfaPage ? 'text-white' : 'text-gray-600 hover:text-gray-900'}`}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className={`xl:hidden border-t px-6 py-4 flex flex-col gap-4 shadow-inner ${isCfaPage ? 'bg-[#4576FF] border-blue-500' : 'bg-white border-gray-100'}`}>
          <Link href="/" onClick={() => setIsOpen(false)} className={`font-semibold text-sm py-1 ${isCfaPage ? 'text-white' : 'text-blue-600'}`}>Home</Link>
          <Link href="/#about-company" onClick={() => setIsOpen(false)} className={`font-semibold text-sm py-1 ${isCfaPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>About</Link>
          <Link href="/what-is-cfa" onClick={() => setIsOpen(false)} className={`font-semibold text-sm py-1 ${isCfaPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>What is CFA?</Link>
          <Link href="/#why-choose-us" onClick={() => setIsOpen(false)} className={`font-semibold text-sm py-1 ${isCfaPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>Program</Link>
          <Link href="/#testimonials" onClick={() => setIsOpen(false)} className={`font-semibold text-sm py-1 ${isCfaPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>Testimonials</Link>
          <Link href="/#blogs" onClick={() => setIsOpen(false)} className={`font-semibold text-sm py-1 ${isCfaPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>Blog</Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)} className={`font-semibold text-sm py-1 ${isCfaPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>Contact Us</Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)} className={`inline-flex items-center justify-center rounded-full font-bold py-2.5 text-center text-sm shadow-sm mt-2 ${isCfaPage ? 'bg-white text-[#4879FF]' : 'bg-blue-600 text-white'}`}>Book Free Session</Link>
        </div>
      )}
    </header>
  );
}
