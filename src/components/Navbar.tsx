"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (!mounted) return;

    const updateHash = () => {
      if (window.location.hash !== currentHash) {
        setCurrentHash(window.location.hash);
      }
    };

    updateHash();

    const intervalId = setInterval(updateHash, 100);

    window.addEventListener('hashchange', updateHash);
    window.addEventListener('popstate', updateHash);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('hashchange', updateHash);
      window.removeEventListener('popstate', updateHash);
    };
  }, [mounted, pathname, currentHash]);

  const isCfaPage = mounted && (pathname === '/what-is-cfa' || pathname === '/contact' || pathname === '/blog');
  const useWhiteTheme = isCfaPage && !scrolled;

  // Returns true when the given href matches the current page
  const isActive = (href: string) => {
    if (!mounted) return false;

    if (pathname === '/') {
      if (href === '/') {
        // Only active if no hash section is selected
        return currentHash === "" || currentHash === "#";
      }
      if (href === '/#about-company') {
        return currentHash === "#about-company";
      }
      if (href === '/#testimonials') {
        return currentHash === "#testimonials";
      }
    } else {
      // If we are not on the homepage, section links are not active
      if (href === '/' || href === '/#about-company' || href === '/#testimonials') {
        return false;
      }
    }

    return pathname === href || pathname.startsWith(href + '/');
  };

  // Desktop link classes
  const desktopLinkClass = (href: string) => {
    const dark = useWhiteTheme;
    const active = isActive(href);
    return [
      'transition-colors text-nav-links whitespace-nowrap relative',
      // active underline decoration
      active
        ? dark
          ? 'text-white font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white after:rounded-full'
          : 'text-brand-blue font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-brand-blue after:rounded-full'
        : dark
          ? 'text-white/80 hover:text-white'
          : 'text-gray-700 hover:text-brand-blue',
    ].join(' ');
  };

  // Mobile link classes
  const mobileLinkClass = (href: string) => {
    const dark = useWhiteTheme;
    const active = isActive(href);
    return [
      'font-semibold text-sm py-1 transition-colors relative',
      active
        ? dark
          ? 'text-white underline underline-offset-4 decoration-white/60'
          : 'text-blue-600 underline underline-offset-4 decoration-blue-400'
        : dark
          ? 'text-white/80 hover:text-white'
          : 'text-gray-600 hover:text-blue-600',
    ].join(' ');
  };

  // Resolve header background
  const headerBg = scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBg}`}>
      {/* Desktop Layout */}
      <div className="mx-auto w-full max-w-[1728px] px-6 lg:px-12 xl:px-[113px] relative hidden xl:flex items-center justify-center">

        <div className="w-full max-w-[1503px] h-[77px] flex items-center justify-between bg-transparent">

          {/* Logo */}
          <div className="w-[160px] flex items-center shrink-0">
            <Link href="/" className="relative w-[147px] h-[48px] block group z-50">
              <Image
                src="/footer_logo.png"
                alt="Upskill Logo"
                fill
                className={`object-contain transition-transform group-hover:translate-y-[-2px] ${useWhiteTheme ? 'brightness-0 invert' : ''}`}
                priority
              />
            </Link>
          </div>

          {/* Centered Nav Links */}
          <nav className="flex items-center z-50 gap-[24px]">
            <Link href="/" className={desktopLinkClass('/')}>Home</Link>
            <Link href="/#about-company" className={desktopLinkClass('/#about-company')}>About</Link>
            <Link href="/what-is-cfa" className={desktopLinkClass('/what-is-cfa')}>What is CFA?</Link>
            {/* <Link href="#" className={desktopLinkClass('#')}>Program</Link> */}
            <Link href="/#testimonials" className={desktopLinkClass('/#testimonials')}>Testimonials</Link>
            <Link href="/blogs" className={desktopLinkClass('/blogs')}>Blog</Link>
            <Link href="/contact" className={desktopLinkClass('/contact')}>Contact Us</Link>
          </nav>

          {/* CTA Button */}
          <div className="w-[230px] flex justify-end shrink-0">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal'))}
              className={`px-6 h-[45px] rounded-full flex items-center justify-center transition-all hover:shadow-md z-50 cursor-pointer ${useWhiteTheme
                ? 'bg-white text-brand-blue hover:bg-gray-50'
                : 'bg-brand-blue text-white hover:bg-blue-700 shadow-sm'
                }`}
            >
              <span className="text-cta-btn whitespace-nowrap">Book Free Consultation</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile/Tablet Header Bar */}
      <div className={`xl:hidden w-full px-6 py-4 flex items-center justify-between backdrop-blur-md border-b transition-all duration-300 ${scrolled
        ? 'bg-white/95 border-gray-200 text-gray-900 shadow-sm'
        : isCfaPage
          ? 'bg-[#4576FF] border-blue-500 text-white'
          : 'bg-transparent border-transparent text-gray-900'
        }`}>
        <Link href="/" className="relative w-[110px] h-[36px] block group z-50">
          <Image
            src="/footer_logo.png"
            alt="Upskill Logo"
            fill
            className={`object-contain transition-transform group-hover:translate-y-[-2px] ${useWhiteTheme ? 'brightness-0 invert' : ''}`}
            priority
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2 focus:outline-none ${useWhiteTheme ? 'text-white' : 'text-gray-600 hover:text-gray-900'}`}
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
        <div className={`xl:hidden border-t px-6 py-4 flex flex-col gap-4 shadow-inner ${scrolled
          ? 'bg-white border-gray-100'
          : isCfaPage
            ? 'bg-[#4576FF] border-blue-500 text-white'
            : 'bg-white border-gray-100'
          }`}>
          <Link href="/" onClick={() => setIsOpen(false)} className={mobileLinkClass('/')}>Home</Link>
          <Link href="/#about-company" onClick={() => setIsOpen(false)} className={mobileLinkClass('/#about-company')}>About</Link>
          <Link href="/what-is-cfa" onClick={() => setIsOpen(false)} className={mobileLinkClass('/what-is-cfa')}>What is CFA?</Link>
          <Link href="/#testimonials" onClick={() => setIsOpen(false)} className={mobileLinkClass('/#testimonials')}>Testimonials</Link>
          <Link href="/blogs" onClick={() => setIsOpen(false)} className={mobileLinkClass('/blogs')}>Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className={mobileLinkClass('/contact')}>Contact Us</Link>
          <button
            onClick={() => { setIsOpen(false); window.dispatchEvent(new CustomEvent('open-booking-modal')); }}
            className={`inline-flex items-center justify-center rounded-full font-bold px-6 py-2.5 text-center text-sm shadow-sm mt-2 cursor-pointer ${useWhiteTheme
              ? 'bg-white text-brand-blue hover:bg-gray-50'
              : 'bg-brand-blue text-white hover:bg-blue-700'
              }`}
          >
            Book Free Consultation
          </button>
        </div>
      )}
    </header>
  );
}