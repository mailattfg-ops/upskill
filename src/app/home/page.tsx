import Hero from "./hero";
import AboutSection from "./about";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-sans text-foreground">
      {/* Background Ambient Glows */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-accent-purple/15 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 right-20 h-[500px] w-[500px] rounded-full bg-accent-cyan/15 blur-[100px] pointer-events-none" />

      {/* hero.tsx section */}
      <Hero />

      {/* about.tsx section */}
      <AboutSection />

      {/* footer.tsx section */}
      <Footer />
    </div>
  );
}
