import { Target, ClipboardList, Monitor } from "lucide-react";

export default function RegistrationCriteriaSection() {
  return (
    <section className="relative w-full px-6 py-12 md:py-20 flex flex-col items-center bg-white z-10">
      
      <div className="text-center mb-12 max-w-[800px]">
        <h2 className="section-heading mb-4">
          Registration Criteria <br /> and Requirements
        </h2>
        <p className="font-sans text-sm md:text-base text-gray-600">
          To become a CFA Charterholder, your professional work experience must meet the following criteria:
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-[1000px]">
        
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row items-start md:items-center p-6 md:p-8 rounded-[20px] bg-[#5B85FF] text-white gap-6 shadow-sm">
          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
            <Target className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1 md:w-1/3">
            <h3 className="font-sans font-semibold text-xl md:text-2xl">
              Investment <br className="hidden md:block" /> Decision Making
            </h3>
          </div>
          <div className="flex-2 md:w-2/3">
            <p className="font-sans font-normal text-sm md:text-base text-white/90">
              Evaluating financial, economic, or statistical data in investment processes directly.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col md:flex-row items-start md:items-center p-6 md:p-8 rounded-[20px] bg-[#4576FF] text-white gap-6 shadow-sm">
          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
            <ClipboardList className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1 md:w-1/3">
            <h3 className="font-sans font-semibold text-xl md:text-2xl">
              Supervisory Roles
            </h3>
          </div>
          <div className="flex-2 md:w-2/3">
            <p className="font-sans font-normal text-sm md:text-base text-white/90">
              Managing or overseeing individuals who perform qualifying investment-related work.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col md:flex-row items-start md:items-center p-6 md:p-8 rounded-[20px] bg-[#678EFF] text-white gap-6 shadow-sm">
          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
            <Monitor className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1 md:w-1/3">
            <h3 className="font-sans font-semibold text-xl md:text-2xl">
              Teaching &amp; Research
            </h3>
          </div>
          <div className="flex-2 md:w-2/3">
            <p className="font-sans font-normal text-sm md:text-base text-white/90">
              Teaching topics directly related to investment and finance activities.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
