import Link from "next/link";

export default function Hero() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-card-border glass transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 transition-transform hover:scale-102">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple shadow-lg shadow-accent-cyan/20">
              <svg
                className="h-5.5 w-5.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              UP<span className="text-gradient">SKILL</span>
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/home" className="text-white font-semibold transition-colors">
            About Us
          </Link>
          <Link href="/#features" className="hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/#pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-white px-4.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition-all hover:bg-gray-100 hover:scale-102"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </header>
  );
}
