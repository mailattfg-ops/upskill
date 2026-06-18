import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F1F1F1] text-black select-none z-30">
      <div className="mx-auto max-w-[1728px] px-6 md:px-12 lg:px-16 xl:px-[100px] py-8 md:py-10 flex flex-col justify-between">
        {/* Columns Flex Layout */}
        <div className="flex flex-col md:flex-row items-start w-full gap-8 md:gap-6 lg:gap-10 xl:gap-14">

          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col gap-5 flex-shrink-0 w-full md:w-auto md:max-w-[280px]">
            <div className="relative w-[214px] h-[70px]">
              <Image
                src="/footer_logo.png"
                alt="upskill logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-black/70 font-normal text-[14px] leading-[20px] font-[Inter,sans-serif]">
              Helping CFA candidates across Saudi Arabia prepare with confidence.
            </p>
          </div>

          {/* Column 2: Product */}
          <div className="flex flex-col justify-start flex-1 min-w-[120px]">
            <span className="font-sans font-semibold text-[16px] leading-[24px] text-black tracking-[-0.025em]">
              Product
            </span>
            <div className="flex flex-col gap-[8px] text-[14px] text-black/70 font-[Inter,sans-serif] mt-[12px]">
              <Link href="#home" className="hover:text-[#4879FF] transition-colors">Home</Link>
              <Link href="#about-company" className="hover:text-[#4879FF] transition-colors">About</Link>
              <Link href="#how-it-works" className="hover:text-[#4879FF] transition-colors">What is CFA?</Link>
              <Link href="#why-choose-us" className="hover:text-[#4879FF] transition-colors">Program</Link>
            </div>
          </div>

          {/* Column 3: For Schools */}
          <div className="flex flex-col justify-start flex-1 min-w-[120px]">
            <span className="font-sans font-semibold text-[16px] leading-[24px] text-black tracking-[-0.025em]">
              For Schools
            </span>
            <div className="flex flex-col gap-[8px] text-[14px] text-black/70 font-[Inter,sans-serif] mt-[12px]">
              <Link href="#testimonials" className="hover:text-[#4879FF] transition-colors">Testimonials</Link>
              <Link href="#blogs" className="hover:text-[#4879FF] transition-colors">Blog</Link>
              <Link href="#contact" className="hover:text-[#4879FF] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col justify-start flex-1 min-w-[180px]">
            <span className="font-sans font-semibold text-[16px] leading-[24px] text-black tracking-[-0.025em]">
              Contact
            </span>
            <div className="flex flex-col gap-[8px] text-[14px] text-black/70 font-[Inter,sans-serif] mt-[12px]">
              <span className="text-black/70">Email: hello@upskillcfa.sa</span>
              <span className="text-black/70">WhatsApp: +966 XX XXX XXXX</span>

              {/* Social Icons row */}
              <div className="flex gap-[11px] items-center mt-1">
                {/* Globe Icon */}
                <Link
                  href="https://upskillcfa.sa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white hover:bg-black/80 transition-all select-none"
                  aria-label="Website"
                >
                  <svg className="w-[11px] h-[11px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </Link>

                {/* LinkedIn Icon */}
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white hover:bg-black/80 transition-all select-none"
                  aria-label="LinkedIn"
                >
                  <svg className="w-[11px] h-[11px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </Link>

                {/* Instagram Icon */}
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white hover:bg-black/80 transition-all select-none"
                  aria-label="Instagram"
                >
                  <svg className="w-[11px] h-[11px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-6 md:mt-8 flex justify-center text-[12px] text-black/50 font-sans pb-4">
          <span>&copy; 2026 Upskill CFA. Made with ✨ for dreamers.</span>
        </div>
      </div>
    </footer>
  );
}
