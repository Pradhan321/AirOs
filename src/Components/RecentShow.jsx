import React, { Suspense } from "react";
const RecentShowList = React.lazy(() => import("./RecentShowList"));
import { OnlineShopping, ClappingHand, PhoneStar, Star } from "../svgs/Timings";

const LoadingFallback = () => <div aria-live="polite">Loading...</div>;

const RecentShow = () => {
  return (
    <div className="bg-[#122] flex flex-col items-center w-full">
      {/* Marquee */}
      <div className="w-full max-w-7xl h-auto sm:h-20 bg-amber-400 flex items-center rounded-2xl overflow-hidden relative my-4 px-4 sm:px-6">
        <div className="hidden lg:block w-full text-black text-base sm:text-xl md:text-3xl font-['Nunito Sans'] whitespace-nowrap animate-marquee ">
          Upcoming Shows 🔹 10:00 AM - Sports & Cricket Buzz 🔹 12:00 PM - Desi Beats Hour 🔹 08:00 PM - Bollywood Talk with Akash
        </div>
      </div>

      {/* Recent Show List */}
      <Suspense fallback={<LoadingFallback />}>
        <RecentShowList />
      </Suspense>

      {/* Hero Section */}
      <div className="w-full max-w-screen-xl mx-auto text-center px-4 relative mt-20">
  <div className="text-white text-3xl sm:text-4xl md:text-5xl font-normal font-['Nunito Sans'] text-center leading-snug">
    Create and stream{" "}
    <span className="font-bold bg-amber-400 text-black px-2 rounded">
      high-quality radio shows
    </span>
  </div>
  <div className="text-white text-2xl sm:text-3xl md:text-5xl text-center mt-4 font-['Nunito Sans']">
    while delivering the <span className="text-amber-400">best</span> experience
  </div>
  <div className="text-white text-2xl justify-center sm:text-3xl md:text-5xl text-center mt-4 font-bold font-['Space_Grotesk'] border-2 border-amber-400 rounded-3xl px-6 py-2 inline-block mx-auto">
    for music lovers.
  </div>
</div>
      {/* Stats Section */}
      <div className="w-full my-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 px-4 md:px-[103.64px] py-[40px] bg-[#1A2929]">
        {/* 24/7 */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <OnlineShopping />
          <div className="text-center sm:text-left">
            <div className="text-white text-3xl sm:text-5xl font-normal font-['Nunito Sans']">
              24/7
            </div>
            <div className="text-white text-base font-normal font-['Nunito Sans']">
              live broadcasting
            </div>
          </div>
        </div>

        {/* Global audience */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <ClappingHand />
          <div className="text-center sm:text-left">
            <div className="text-white text-3xl sm:text-5xl font-normal font-['Nunito Sans']">
              32M+
            </div>
            <div className="text-white text-base font-normal font-['Nunito Sans']">
              Global audience reach
            </div>
          </div>
        </div>

        {/* Listener rating */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <PhoneStar />
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1">
              <div className="text-white text-3xl sm:text-5xl font-normal font-['Nunito Sans']">
                4.7
              </div>
              <Star />
            </div>
            <div className="text-white text-base font-normal font-['Nunito Sans']">
              listener rating
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentShow;
