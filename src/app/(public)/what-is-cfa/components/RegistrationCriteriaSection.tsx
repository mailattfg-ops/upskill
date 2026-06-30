export default function RegistrationCriteriaSection() {
  return (
    <section className="relative w-full px-6 pt-12 md:pt-20 flex flex-col items-center bg-white z-10 px-6 md:px-8 lg:px-12">

      {/* Title & Sub-copy */}
      <div className="text-center mb-[60px] max-w-[928px] flex flex-col items-center gap-[16px]">
        <h3 className="font-['Cal_Sans'] text-[30px] leading-[1.15] tracking-[0em] fw-400 sm:text-[36px] lg:text-[40px] xl:text-[50px] 2xl:text-[66px] text-[#161c2d]">
          CFA Charterholder < br /> Eligibility
        </h3>
        <p className="text-body-default text-gray-mid max-w-[800px]">
          To become a CFA charterholder, your professional work experience must meet the <br /> following criteria.
        </p>
      </div>

      {/* Row Cards Container: 1539px max-width, 45px physical gap on desktop */}
      <div className="flex flex-col gap-[45px] w-full max-w-[1539px]">

        {/* Row 1: Investment Decision Making */}
        <div className="relative w-full md:h-[117px] bg-brand-blue text-white rounded-[28px] flex flex-col md:flex-row items-center overflow-hidden shadow-sm transition-all duration-300 hover:translate-y-[-2px]">
          {/* Left Icon Area: 157px wide, flush to left, light blue fill */}
          <div className="absolute left-0 top-0 w-full md:w-[157px] h-[80px] md:h-full bg-light-blue-tint rounded-t-[28px] md:rounded-t-none md:rounded-l-[28px] flex items-center justify-center shrink-0">
            {/* Strategy / Decision SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="94" fill="#4879FF" viewBox="0 0 256 256"><path d="M76,152a36,36,0,1,0,36,36A36,36,0,0,0,76,152Zm0,56a20,20,0,1,1,20-20A20,20,0,0,1,76,208ZM42.34,106.34,56.69,92,42.34,77.66A8,8,0,0,1,53.66,66.34L68,80.69,82.34,66.34A8,8,0,0,1,93.66,77.66L79.31,92l14.35,14.34a8,8,0,0,1-11.32,11.32L68,103.31,53.66,117.66a8,8,0,0,1-11.32-11.32Zm187.32,96a8,8,0,0,1-11.32,11.32L204,199.31l-14.34,14.35a8,8,0,0,1-11.32-11.32L192.69,188l-14.35-14.34a8,8,0,0,1,11.32-11.32L204,176.69l14.34-14.35a8,8,0,0,1,11.32,11.32L215.31,188Zm-45.19-89.51c-6.18,22.33-25.32,41.63-46.53,46.93A8.13,8.13,0,0,1,136,160a8,8,0,0,1-1.93-15.76c15.63-3.91,30.35-18.91,35-35.68,3.19-11.5,3.22-29-14.71-46.9L152,59.31V80a8,8,0,0,1-16,0V40a8,8,0,0,1,8-8h40a8,8,0,0,1,0,16H163.31l2.35,2.34C183.9,68.59,190.58,90.78,184.47,112.83Z"></path></svg>
          </div>
          {/* Content Zone: Offset by 197px from left on desktop */}
          <div className="w-full h-full flex flex-col md:flex-row md:items-center pt-[90px] md:pt-0 pb-6 md:pb-0 pl-6 md:pl-[197px] pr-6 md:pr-10 gap-4 md:gap-[40px]">
            <div className="md:w-[420px] shrink-0">
              <h3 className="font-['Cal_Sans'] font-normal text-[29px] lg:text-[26px] xl:text-[29px] 2xl:text-[32px] leading-[35px] text-white w-full max-w-[359px] mb-4">
                Investment <br /> Decision Making
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-body-vision text-white/90 font-light leading-snug">
                Evaluating financial, economic, or statistical data in investment processes directly.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: Supervisory Roles */}
        <div className="relative w-full md:h-[117px] bg-brand-blue text-white rounded-[28px] flex flex-col md:flex-row items-center overflow-hidden shadow-sm transition-all duration-300 hover:translate-y-[-2px]">
          {/* Left Icon Area: 157px wide, flush to left, light blue fill */}
          <div className="absolute left-0 top-0 w-full md:w-[157px] h-[80px] md:h-full bg-light-blue-tint rounded-t-[28px] md:rounded-t-none md:rounded-l-[28px] flex items-center justify-center shrink-0">
            {/* Sheet / Document SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="82" fill="#4879FF" viewBox="0 0 256 256"><path d="M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23h0a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM178.26,224h0L48,201,77.75,32,208,55ZM89.34,58.42a8,8,0,0,1,9.27-6.48l83,14.65a8,8,0,0,1-1.39,15.88,8.36,8.36,0,0,1-1.4-.12l-83-14.66A8,8,0,0,1,89.34,58.42ZM83.8,89.94a8,8,0,0,1,9.27-6.49l83,14.66A8,8,0,0,1,174.67,114a7.55,7.55,0,0,1-1.41-.13l-83-14.65A8,8,0,0,1,83.8,89.94Zm-5.55,31.51A8,8,0,0,1,87.52,115L129,122.29a8,8,0,0,1-1.38,15.88,8.27,8.27,0,0,1-1.4-.12l-41.5-7.33A8,8,0,0,1,78.25,121.45Z"></path></svg>
          </div>
          {/* Content Zone: Offset by 197px from left on desktop */}
          <div className="w-full h-full flex flex-col md:flex-row md:items-center pt-[90px] md:pt-0 pb-6 md:pb-0 pl-6 md:pl-[197px] pr-6 md:pr-10 gap-4 md:gap-[40px]">
            <div className="md:w-[420px] shrink-0">
              <h3 className="font-['Cal_Sans'] font-normal text-[29px] lg:text-[26px] xl:text-[29px] 2xl:text-[32px] leading-[35px] text-white w-full max-w-[359px] mb-4">
                Supervisory Roles
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-body-vision text-white/90 font-light leading-snug">
                Managing or overseeing individuals who perform qualifying investment-related work.
              </p>
            </div>
          </div>
        </div>

        {/* Row 3: Teaching & Research */}
        <div className="relative w-full md:h-[117px] bg-brand-blue text-white rounded-[28px] flex flex-col md:flex-row items-center overflow-hidden shadow-sm transition-all duration-300 hover:translate-y-[-2px]">
          {/* Left Icon Area: 157px wide, flush to left, light blue fill */}
          <div className="absolute left-0 top-0 w-full md:w-[157px] h-[80px] md:h-full bg-light-blue-tint rounded-t-[28px] md:rounded-t-none md:rounded-l-[28px] flex items-center justify-center shrink-0">
            {/* Screen / Blackboard SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="88" height="61" fill="#4879FF" viewBox="0 0 256 256"><path d="M240,192h-8V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,56H216V192H200V168a8,8,0,0,0-8-8H120a8,8,0,0,0-8,8v24H72V88H184v48a8,8,0,0,0,16,0V80a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V192H40ZM184,192H128V176h56Z"></path></svg>
          </div>
          {/* Content Zone: Offset by 197px from left on desktop */}
          <div className="w-full h-full flex flex-col md:flex-row md:items-center pt-[90px] md:pt-0 pb-6 md:pb-0 pl-6 md:pl-[197px] pr-6 md:pr-10 gap-4 md:gap-[40px]">
            <div className="md:w-[420px] shrink-0">
              <h3 className="font-['Cal_Sans'] font-normal text-[29px] lg:text-[26px] xl:text-[29px] 2xl:text-[32px] leading-[35px] text-white w-full max-w-[359px] mb-4">
                Teaching &amp; Research
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-body-vision text-white/90 font-light leading-snug">
                Teaching topics directly related to investment and finance activities.
              </p>
            </div>
          </div>
        </div>
        {/* Row 1: Minimum Work Hours */}
        <div className="relative w-full md:h-[117px] bg-brand-blue text-white rounded-[28px] flex flex-col md:flex-row items-center overflow-hidden shadow-sm transition-all duration-300 hover:translate-y-[-2px]">
          {/* Left Icon Area: 157px wide, flush to left, light blue fill */}
          <div className="absolute left-0 top-0 w-full md:w-[157px] h-[80px] md:h-full bg-light-blue-tint rounded-t-[28px] md:rounded-t-none md:rounded-l-[28px] flex items-center justify-center shrink-0">
            {/* Strategy / Decision SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="88" height="61" fill="#4879FF" viewBox="0 0 256 256"><path d="M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.6A16.05,16.05,0,0,0,200,75.64ZM184,216H72V180l56-42,56,42.35Zm0-140.36L128,118,72,76V40H184Z"></path></svg>          </div>
          {/* Content Zone: Offset by 197px from left on desktop */}
          <div className="w-full h-full flex flex-col md:flex-row md:items-center pt-[90px] md:pt-0 pb-6 md:pb-0 pl-6 md:pl-[197px] pr-6 md:pr-10 gap-4 md:gap-[40px]">
            <div className="md:w-[420px] shrink-0">
              <h3 className="font-['Cal_Sans'] font-normal text-[29px] lg:text-[26px] xl:text-[29px] 2xl:text-[32px] leading-[35px] text-white w-full max-w-[359px] mb-4">
                Minimum <br /> Work Hours
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-body-vision text-white/90 font-light leading-snug">
                At least 4,000 hours of investment-related work experience completed over 3 years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

