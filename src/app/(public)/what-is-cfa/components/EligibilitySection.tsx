export default function EligibilitySection() {
  return (
    <section className="relative w-full px-6 py-8 md:py-12 flex justify-center z-10 px-6 md:px-8 lg:px-12">
      {/* Container: 1503px max-width */}
      <div className="max-w-[1503px] w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch md:items-start">
        
        {/* Card 1: Complete a valid bachelor's degree */}
        <div className="flex flex-col justify-start p-8 md:p-10 bg-brand-blue text-white rounded-[32px] shadow-sm transition-all duration-300 hover:translate-y-[-4px] min-h-[350px] md:h-[380px] md:self-start">
          <div className="w-12 h-12 mb-6 rounded-xl border border-white/30 flex items-center justify-center">
            {/* ID Card Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <circle cx="12" cy="10" r="3" />
              <path d="M7 21v-2a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2" />
            </svg>
          </div>
          <h3 className="font-['Cal_Sans'] font-normal text-2xl lg:text-[30px] leading-tight mb-4 max-w-[340px]">
            Complete a valid bachelor's degree
          </h3>
          <p className="font-sans font-normal text-sm lg:text-[16px] leading-[24px] text-white/80 max-w-[340px]">
            Hold a valid bachelor's degree from any accredited university or institution.
          </p>
        </div>

        {/* Card 2: Currently an Undergraduate (Dashed Border - Taller) */}
        <div className="flex flex-col justify-start p-8 md:p-10 bg-white text-near-black rounded-[32px] border-2 border-brand-blue shadow-sm transition-all duration-300 hover:translate-y-[-4px] min-h-[380px] md:h-[441px]">
          <div className="w-12 h-12 mb-6 rounded-xl border border-brand-blue/30 flex items-center justify-center">
            {/* Graduation Cap Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.9a2 2 0 0 0 1.66 0z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
          </div>
          <h3 className="font-['Cal_Sans'] font-normal text-2xl lg:text-[30px] leading-tight mb-4 text-[#161c2d] max-w-[340px]">
            Currently an Undergraduate
          </h3>
          <div className="flex flex-col gap-3 font-sans font-normal text-xs sm:text-sm lg:text-[14.5px] leading-[22px] text-gray-mid max-w-[340px]">
            <p>
              <strong>Level I:</strong> The exam window must fall within 23 months of the candidate's graduation month.
            </p>
            <p>
              <strong>Level II:</strong> The exam window must fall within 11 months of the candidate's graduation date.
            </p>
            <p>
              <strong>Level III:</strong> The candidate's degree must be completed by the month before the exam date.
            </p>
          </div>
        </div>

        {/* Card 3: Have 4000 hours of work experience */}
        <div className="flex flex-col justify-start p-8 md:p-10 bg-brand-blue text-white rounded-[32px] shadow-sm transition-all duration-300 hover:translate-y-[-4px] min-h-[350px] md:h-[380px] md:self-start">
          <div className="w-12 h-12 mb-6 rounded-xl border border-white/30 flex items-center justify-center">
            {/* Briefcase Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
          </div>
          <h3 className="font-['Cal_Sans'] font-normal text-2xl lg:text-[30px] leading-tight mb-4 max-w-[340px]">
            Have 4000 hours of work experience
          </h3>
          <p className="font-sans font-normal text-sm lg:text-[16px] leading-[24px] text-white/80 max-w-[340px]">
            Accumulate 4000 hours of relevant professional work experience in the finance industry.
          </p>
        </div>

      </div>
    </section>
  );
}

