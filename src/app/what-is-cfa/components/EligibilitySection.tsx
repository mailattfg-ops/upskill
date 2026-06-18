import { Building, GraduationCap, Briefcase } from "lucide-react";

export default function EligibilitySection() {
  return (
    <section className="relative w-full px-6 py-8 md:py-12 flex justify-center z-10">
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Card 1: Blue */}
        <div className="flex flex-col p-8 lg:p-10 bg-[#4879FF] text-white rounded-[40px] shadow-sm">
          <div className="w-12 h-12 mb-6 rounded-xl border border-white/30 flex items-center justify-center">
            <Building className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-['Cal_Sans'] font-normal text-2xl lg:text-3xl leading-tight mb-4">
            Complete a valid bachelor's degree
          </h3>
          <p className="font-sans font-normal text-sm lg:text-base leading-relaxed text-white/90">
            Hold a valid bachelor's degree from any accredited university or institution.
          </p>
        </div>

        {/* Card 2: White (Center) */}
        <div className="flex flex-col p-8 lg:p-10 bg-white text-gray-900 rounded-[40px] border border-[#D0DCFF] shadow-sm">
          <div className="w-12 h-12 mb-6 rounded-xl border border-[#D0DCFF] flex items-center justify-center bg-[#F8FAFC]">
            <GraduationCap className="w-6 h-6 text-gray-700" />
          </div>
          <h3 className="font-['Cal_Sans'] font-normal text-2xl lg:text-3xl leading-tight mb-4 text-[#0f172a]">
            Currently an Undergraduate
          </h3>
          <div className="flex flex-col gap-3 font-sans font-normal text-sm lg:text-base leading-relaxed text-gray-600">
            <p><strong>Level 1:</strong> The exam window must fall within 23 months of the candidate's graduation date.</p>
            <p><strong>Level 2:</strong> The exam window must fall within 11 months of the candidate's graduation date.</p>
            <p><strong>Level 3:</strong> The candidate's degree must be completed by the month before the exam date.</p>
          </div>
        </div>

        {/* Card 3: Blue */}
        <div className="flex flex-col p-8 lg:p-10 bg-[#4879FF] text-white rounded-[40px] shadow-sm">
          <div className="w-12 h-12 mb-6 rounded-xl border border-white/30 flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-['Cal_Sans'] font-normal text-2xl lg:text-3xl leading-tight mb-4">
            Have 4000 hours of work experience
          </h3>
          <p className="font-sans font-normal text-sm lg:text-base leading-relaxed text-white/90">
            Accumulate 4000 hours of relevant professional work experience in the finance industry.
          </p>
        </div>

      </div>
    </section>
  );
}
