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
  const isCfaPage = mounted && (pathname === '/what-is-cfa' || pathname === '/program' || pathname === '/contact');
  const isBlogPage = mounted && pathname.startsWith('/blogs');

  return (
    <header className={`absolute top-0 left-0 w-full z-50 ${isBlogPage ? 'bg-[#1B1B1B]' : 'bg-transparent'}`}>
      {/* Desktop Layout - Max width 1728px container with 113px padding on large screen */}
      <div className={`mx-auto w-full max-w-[1728px] px-6 lg:px-12 xl:px-[113px] relative hidden xl:flex items-center justify-center ${isBlogPage ? 'py-0' : 'pt-[20px]'}`}>
        
        {/* Centered Visible Nav Block (1503px content width, Y-centered, 77px high) */}
        <div className="w-full max-w-[1503px] h-[77px] flex items-center justify-between bg-transparent">
          
          {/* Left Side: Logo container to balance centering */}
          <div className="w-[160px] flex items-center shrink-0">
            {/* Logo */}
            <Link href="/" className="relative w-[147px] h-[48px] block group z-50">
              <Image
                src="/footer_logo.png"
                alt="Upskill Logo"
                fill
                className={`object-contain transition-transform group-hover:translate-y-[-2px] ${isCfaPage || isBlogPage ? 'brightness-0 invert' : ''}`}
                priority
              />
            </Link>
          </div>

          {/* Centered Links Block (Gap: 32px for blog, 24px for others) */}
          <nav className={`flex items-center z-50 ${isBlogPage ? 'gap-[32px]' : 'gap-[24px]'}`}>
            <Link 
              href="/" 
              className={`transition-colors text-nav-links whitespace-nowrap ${isCfaPage || isBlogPage ? 'text-white hover:text-gray-200' : 'text-brand-blue hover:text-blue-800'}`}
            >
              Home
            </Link>
            <Link 
              href="/#about-company" 
              className={`transition-colors text-nav-links whitespace-nowrap ${isCfaPage || isBlogPage ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-brand-blue'}`}
            >
              About
            </Link>
            <Link 
              href="/what-is-cfa" 
              className={`transition-colors text-nav-links whitespace-nowrap ${isCfaPage || isBlogPage ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-brand-blue'}`}
            >
              What is CFA?
            </Link>
            <Link 
              href="/program" 
              className={`transition-colors text-nav-links whitespace-nowrap ${isCfaPage || isBlogPage ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-brand-blue'}`}
            >
              Program
            </Link>
            <Link 
              href="/#testimonials" 
              className={`transition-colors text-nav-links whitespace-nowrap ${isCfaPage || isBlogPage ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-brand-blue'}`}
            >
              Testimonials
            </Link>
            <Link 
              href="/#blogs" 
              className={`transition-colors text-nav-links whitespace-nowrap ${isCfaPage || isBlogPage ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-brand-blue'}`}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors text-nav-links whitespace-nowrap ${isCfaPage || isBlogPage ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-brand-blue'}`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Side: CTA Button Container */}
          <div className="w-[160px] flex justify-end shrink-0">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal'))}
              className={`w-[154px] h-[45px] rounded-full flex items-center justify-center transition-all hover:shadow-md z-50 cursor-pointer ${
                isBlogPage 
                  ? 'border border-[#4879FF] text-[#4879FF] bg-transparent hover:bg-[#4879FF]/10' 
                  : isCfaPage 
                    ? 'bg-white text-brand-blue hover:bg-gray-50' 
                    : 'bg-brand-blue text-white hover:bg-blue-700 shadow-sm'
              }`}
            >
              <span className="text-cta-btn whitespace-nowrap">
                Book Free Session
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile/Tablet Fallback Layout (Under 1280px) */}
      <div className={`xl:hidden w-full px-6 py-4 flex items-center justify-between backdrop-blur-md border-b ${isCfaPage ? 'bg-[#4576FF] border-blue-500 text-white' : isBlogPage ? 'bg-[#1B1B1B] border-neutral-800 text-white' : 'bg-white/80 border-gray-100'}`}>
        <Link href="/" className="relative w-[110px] h-[36px] block group z-50">
          <Image
            src="/footer_logo.png"
            alt="Upskill Logo"
            fill
            className={`object-contain transition-transform group-hover:translate-y-[-2px] ${isCfaPage || isBlogPage ? 'brightness-0 invert' : ''}`}
            priority
          />
        </Link>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2 focus:outline-none ${isCfaPage || isBlogPage ? 'text-white' : 'text-gray-600 hover:text-gray-900'}`}
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
        <div className={`xl:hidden border-t px-6 py-4 flex flex-col gap-4 shadow-inner ${isCfaPage ? 'bg-[#4576FF] border-blue-500 text-white' : isBlogPage ? 'bg-[#1B1B1B] border-neutral-800 text-white' : 'bg-white border-gray-100'}`}>
          <Link href="/" onClick={() => setIsOpen(false)} className={`font-semibold text-sm py-1 ${isCfaPage || isBlogPage ? 'text-white' : 'text-blue-600'}`}>Home</Link>
          <Link href="/#about-company" onClick={() => setIsOpen(false)} className={`font-semibold text-sm py-1 ${isCfaPage || isBlogPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>About</Link>
          <Link href="/what-is-cfa" onClick={() => setIsOpen(false)} className={`font-semibold text-sm py-1 ${isCfaPage || isBlogPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>What is CFA?</Link>
          <Link href="/program" onClick={() => setIsOpen(false)} className={`font-semibold text-sm py-1 ${isCfaPage || isBlogPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>Program</Link>
          <Link href="/#testimonials" onClick={() => setIsOpen(false)} className={`font-semibold text-sm py-1 ${isCfaPage || isBlogPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>Testimonials</Link>
          <Link href="/#blogs" onClick={() => setIsOpen(false)} className={`font-semibold text-sm py-1 ${isCfaPage || isBlogPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className={`font-semibold text-sm py-1 ${isCfaPage || isBlogPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>Contact Us</Link>
          <button onClick={() => { setIsOpen(false); window.dispatchEvent(new CustomEvent('open-booking-modal')); }} className={`inline-flex items-center justify-center rounded-full font-bold py-2.5 text-center text-sm shadow-sm mt-2 cursor-pointer ${isBlogPage ? 'border border-[#4879FF] text-[#4879FF] bg-transparent' : isCfaPage ? 'bg-white text-[#4879FF]' : 'bg-blue-600 text-white'}`}>Book Free Session</button>
        </div>
      )}
    </header>
  );
}
