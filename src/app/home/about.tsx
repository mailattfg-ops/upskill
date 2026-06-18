import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
        
        {/* Conceptual Image */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border border-card-border bg-card-bg p-2 transition-transform duration-500 hover:scale-102">
            <div className="relative w-full h-full rounded-2xl overflow-hidden min-h-[300px] md:min-h-[400px]">
              <Image
                src="/upskill_about_team.png"
                alt="Futuristic collaborative design system art illustration representing modern development team"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            About <span className="text-gradient font-black">Our Mission</span>
          </h1>
          
          <p className="text-base leading-relaxed text-gray-300">
            UP SKILL is conceived to bridge the gap between initial frontend visual layout development and final high-performance application builds. By utilizing absolute static pre-renders alongside lightweight layout sheets, UP SKILL secures instantaneous responsiveness.
          </p>

          <p className="text-base leading-relaxed text-gray-400">
            Our core directive is to empower developers by eliminating scaffolding complexities. We deliver absolute standard-conforming elements that integrate flawlessly with both browser render layers and downstream backend databases.
          </p>

          {/* Core Values / Targets */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="p-5 rounded-2xl border border-card-border bg-card-bg/40 glass">
              <h3 className="text-sm font-bold text-accent-cyan mb-1.5">Frontend Mastery First</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Focus entirely on client interactions and visual execution, knowing the code output remains production grade.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-card-border bg-card-bg/40 glass">
              <h3 className="text-sm font-bold text-accent-purple mb-1.5">Pure Node Standards</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Engineered using strictly standardized elements ensuring absolute clean imports and minimal dependency drag.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-cyan/15 hover:scale-102 transition-transform"
            >
              Go to Homepage
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
