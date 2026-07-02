export default function EligibilitySection() {
  return (
    <section className="relative w-full px-6 py-8 md:py-12 flex justify-center z-10 px-6 md:px-8 lg:px-12">
      {/* Container: 1503px max-width */}
      <div className="max-w-[1503px] w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch md:items-start">

        {/* Card 1: Complete a valid bachelor's degree */}
        <div className="flex flex-col justify-start p-8 md:p-10 bg-brand-blue text-white rounded-[32px] shadow-sm transition-all duration-300 hover:translate-y-[-4px] min-h-[350px] md:h-[380px] md:self-start">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-start self-start mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" fill="#ffffffff" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H53.39a8,8,0,0,0,7.23-4.57,48,48,0,0,1,86.76,0,8,8,0,0,0,7.23,4.57H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM80,144a24,24,0,1,1,24,24A24,24,0,0,1,80,144Zm136,56H159.43a64.39,64.39,0,0,0-28.83-26.16,40,40,0,1,0-53.2,0A64.39,64.39,0,0,0,48.57,200H40V56H216ZM56,96V80a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h8V88H72v8a8,8,0,0,1-16,0Z"></path></svg>
          </div>
          <h3 className="font-['Cal_Sans'] font-normal text-2xl lg:text-[30px] leading-tight mb-4 max-w-[340px]">
            Complete a valid bachelor's degree
          </h3>
          <p className="font-sans font-normal text-sm lg:text-[16px] leading-[24px] text-white/80 max-w-[340px]">
            Hold a valid bachelor's degree from any accredited university or institution.
          </p>
        </div>

        {/* Card 2: Currently an Undergraduate (Dashed Border - Taller) */}
        <div className="flex flex-col justify-start p-8 md:p-10 bg-white text-near-black rounded-[32px] border-1 border-brand-blue shadow-sm transition-all duration-300 hover:translate-y-[-4px] min-h-[380px] md:h-[441px]">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-start self-start mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#000000" viewBox="0 0 256 256"><path d="M226.53,56.41l-96-32a8,8,0,0,0-5.06,0l-96,32A8,8,0,0,0,24,64v80a8,8,0,0,0,16,0V75.1L73.59,86.29a64,64,0,0,0,20.65,88.05c-18,7.06-33.56,19.83-44.94,37.29a8,8,0,1,0,13.4,8.74C77.77,197.25,101.57,184,128,184s50.23,13.25,65.3,36.37a8,8,0,0,0,13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64,64,0,0,0,20.65-88l44.12-14.7a8,8,0,0,0,0-15.18ZM176,120A48,48,0,1,1,89.35,91.55l36.12,12a8,8,0,0,0,5.06,0l36.12-12A47.89,47.89,0,0,1,176,120ZM128,87.57,57.3,64,128,40.43,198.7,64Z"></path></svg>            </div>
          <h3 className="font-['Cal_Sans'] font-normal text-2xl lg:text-[30px] leading-tight mb-4 text-[#5C5C5C] max-w-[340px]">
            Currently an Undergraduate
          </h3>
          <div className="flex flex-col gap-0 font-sans font-normal text-xs sm:text-sm lg:text-[14.5px] leading-[22px] text-gray-mid max-w-[340px]">
            <p className="leading-[24px] tracking-[-0.03em]">
              Level I: The exam window must fall within 23 months of the candidate's graduation month.
            </p>
            <p className="leading-[24px] tracking-[-0.03em]">
              Level II: The exam window must fall within 11 months of the candidate's graduation date.
            </p>
            <p className="leading-[24px] tracking-[-0.03em]">
              Level III: The candidate's degree must be completed by the month before the exam date.
            </p>
          </div>
        </div>

        {/* Card 3: Have 4000 hours of work experience */}
        <div className="flex flex-col justify-start p-8 md:p-10 bg-brand-blue text-white rounded-[32px] shadow-sm transition-all duration-300 hover:translate-y-[-4px] min-h-[350px] md:h-[380px] md:self-start">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-start self-start mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="48" fill="#ffffffff" viewBox="0 0 256 256"><path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path></svg>          </div>
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

