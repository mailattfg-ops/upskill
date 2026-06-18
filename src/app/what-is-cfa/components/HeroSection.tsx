export default function HeroSection() {
  return (
    <section className="relative pt-[120px] pb-16 md:pt-[160px] md:pb-20 px-6 text-center overflow-visible">
      {/* Background Gradient matching Image 1: 1728x231px equivalent */}
      <div 
        className="absolute top-0 left-0 w-full h-[231px] z-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #4576FF 0%, rgba(69, 118, 255, 0) 100%)",
        }}
      />
      
      <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center gap-6">
        <h1 className="hero-heading text-[#4576FF]">
          What is CFA?
        </h1>
        <p className="section-description max-w-[800px]">
          The chartered financial analyst (CFA) charter is a professional designation offered by the CFA Institute. The CFA Institute is an organization that measures and certifies the competence and integrity of financial analysts.
        </p>
      </div>
    </section>
  );
}
