


import React from "react";

const Advertisement = () => {
  return (
    <div className="bg-[#122] w-full overflow-x-hidden">
      {/* Marquee Section */}
      <div className="w-full h-24 md:h-32 overflow-hidden">
        <div className="relative whitespace-nowrap -rotate-2">
          <p className="text-white text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[75px] font-bold font-['Nunito_Sans'] leading-[1.2] animate-marquee">
            Music • Stay Connected • Diaspora Broadcasting Society • Reaching
            The World • Uplifting Music • Stay Connected • Diaspora Broadcasting
            Society • Reaching The World • Uplifting
          </p>
        </div>
      </div>

      {/* Stay Connected Section */}
      <div className="w-full max-w-screen-xl mx-auto h-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-10">
        {/* Left Section */}
        <div className="text-white text-[24px] md:text-[32px] font-semibold font-['Plus Jakarta Sans'] leading-[28px] md:leading-[38px] text-center md:text-left">
          Stay Connected - Join & Subscribe!
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex flex-col md:flex-row items-center justify-between self-stretch gap-4 pl-4 md:pl-8 pr-2 md:pr-4 py-2 md:py-2 bg-white/70 rounded-2xl">
          {/* Icon Section */}
          <div className="flex gap-3 md:gap-5 pr-2 md:pr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 30 29"
              fill="none"
            >
              <g opacity="0.7" clipPath="url(#clip0_432_11630)">
                <path
                  d="M4.11597 6.47852H25.506V21.6298C25.506 21.8662 25.4121 22.0929 25.245 22.26C25.0778 22.4272 24.8511 22.5211 24.6148 22.5211H5.00722C4.77084 22.5211 4.54415 22.4272 4.37701 22.26C4.20987 22.0929 4.11597 21.8662 4.11597 21.6298V6.47852Z"
                  stroke="#1A2434"
                  strokeWidth="1.7825"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.506 6.47852L14.811 16.2823L4.11597 6.47852"
                  stroke="#1A2434"
                  strokeWidth="1.7825"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_432_11630">
                  <rect
                    width="28.5201"
                    height="28.5201"
                    fill="white"
                    transform="translate(0.550537 0.239746)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Email Section */}
          <div className="flex opacity-70 justify-start text-[#192434] pr-4 md:pr-7 text-base md:text-lg font-normal font-['Nunito Sans'] leading-snug tracking-tight text-center gap-2 md:gap-3">
            amirthamradio@gmail.com
          </div>

          {/* Join Now Button Section */}
          <div className="w-full md:w-auto h-12 md:h-12 px-4 md:px-10 my-2 md:my-4 bg-[#192434] rounded-xl flex justify-center items-center gap-2 md:gap-4">
            <div className="text-white text-base md:text-lg font-bold font-['Nunito Sans'] leading-snug tracking-tight">
              Join Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
