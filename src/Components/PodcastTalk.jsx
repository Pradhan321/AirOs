import React, { useState } from "react";
import AllShows from "../utils/TalkShow";
import BuisnessPlan from "../assets/PodcastTalk/BusinessPlan.png";
import GoodTeam from "../assets/PodcastTalk/GoodTeam.png";
import Medical from "../assets/PodcastTalk/Medical.png";
import Rectangle from "../assets/PodcastTalk/Rectangle.png";

const PodcastTalk = () => {
  const [showAllMobile, setShowAllMobile] = useState(false);

  // Determine how many to show based on screen size
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const showsToDisplay = isMobile && !showAllMobile ? AllShows.slice(0, 4) : AllShows;
  return (
    <div className="bg-[#122] w-full relative pb-8">
      {/* Header */}
      <div className="w-full min-h-[120px] px-4 sm:px-8 pt-8 flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex justify-center items-center gap-4">
            <div className="w-8 h-1 bg-[#eab557] rounded" />
            <div className="opacity-70 text-white text-base sm:text-lg font-normal font-['NunitoSans']">
              🎶 Live Music
            </div>
          </div>
          <div className="w-full max-w-xl text-center text-white text-2xl sm:text-4xl font-bold font-['NunitoSans'] leading-tight tracking-wide">
            🎙️ Explore Music Categories
          </div>
        </div>
      </div>
      {/* All talk shows */}
       <div className="flex justify-center items-center w-full px-2 sm:px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 w-full max-w-6xl">
          {showsToDisplay
            .sort((a, b) => b.isLive - a.isLive)
            .map((allshow) => (
              <div
                key={allshow?.id}
                className={`w-full rounded-[16px] md:rounded-[23px] overflow-hidden ${
                  allshow.isLive ? "bg-[#FFF]" : "bg-[#374545]"
                } cursor-pointer transition-shadow hover:shadow-lg`}
              >
                <div className="w-full aspect-[6/7] relative bg-gray-300 rounded-t-[16px] md:rounded-t-[23px] overflow-hidden">
                  <img
                    src="./images/talkShow.png"
                    alt={allshow.title}
                    className="w-full h-full object-contain mt-4 mb-3 rounded-t-[16px]"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="flex items-center justify-between w-full">
                      <div
                        className={`${
                          allshow.isLive ? "text-black" : "text-white"
                        } text-base md:text-lg font-bold font-['Nunito_Sans'] truncate`}
                      >
                        {allshow.title.substring(0, 15) || "Trending News"}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-green-500 text-xs">★</span>
                        <span
                          className={`${
                            allshow.isLive ? "text-black" : "text-white"
                          } text-xs`}
                        >
                          {allshow.rating || "8.5"}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`opacity-75 ${
                        allshow.isLive ? "text-black" : "text-white"
                      } text-xs md:text-sm font-normal font-['Space_Grotesk'] leading-tight`}
                    >
                      {allshow.host || "Akash Wali"}
                    </div>
                    {allshow.isLive && (
                      <div className="flex items-center justify-between w-full mt-2">
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          <span className="text-red-500 text-xs">
                            Live soon
                          </span>
                        </div>
                        <div className="text-green-500 text-xs">
                          {allshow.timing
                            ? allshow.timing.split(" ")[0]
                            : "08:00 PM"}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* Load More button for mobile */}
      {isMobile && !showAllMobile && AllShows.length > 4 && (
        <div className="flex justify-center mt-6">
          <button
            className="px-6 py-2 bg-[#fecc30] text-black font-semibold rounded-full shadow hover:bg-[#ffd966] transition"
            onClick={() => setShowAllMobile(true)}
          >
            Load More
          </button>
        </div>
      )}
      {/* Decorative SVG */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rotate-[-10deg] flex-shrink-0 flex justify-end ml-auto mt-8 sm:mt-10 mr-4 sm:mr-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="78"
          height="74"
          viewBox="0 0 78 74"
          fill="none"
        >
          <path
            d="M32.3945 0.770045L43.02 19.7893L61.4239 6.64678L54.6616 27.4886L77.2089 30.4087L57.0201 40.8643L70.5029 58.1363L48.7139 52.0809L45.2342 73.5873L34.6087 54.5681L16.2048 67.7106L22.9671 46.8687L0.419822 43.9487L20.6086 33.4931L7.12582 16.221L28.9148 22.2764L32.3945 0.770045Z"
            fill="#FFA200"
          />
        </svg>
      </div>
      {/* Blurred Circle */}
      <div className="absolute w-40 h-40 sm:w-[204px] sm:h-[204px] top-0 left-0 bg-[#fecc30] rounded-full blur-[80px] sm:blur-[126.70px] -z-10" />
      {/* Categories */}
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 mt-8">
        <div className="opacity-70 text-white text-base font-normal font-['Nunito Sans'] leading-snug mb-3 sm:mb-5">
          Discover 10 Hit Shows by Category
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
          <div className="h-28 sm:h-32 relative bg-black/40 rounded-md overflow-hidden flex items-end">
            <img
              className="w-20 h-20 sm:w-32 sm:h-32 absolute right-2 top-2"
              src={BuisnessPlan}
              alt="History"
            />
            <div className="absolute left-3 bottom-3 text-white text-base sm:text-lg font-bold font-['Nunito Sans'] leading-3">
              History
            </div>
          </div>
          <div className="h-28 sm:h-32 relative bg-black/40 rounded-md overflow-hidden flex items-end">
            <img
              className="w-20 h-20 sm:w-32 sm:h-32 absolute right-2 top-2"
              src={GoodTeam}
              alt="Business"
            />
            <div className="absolute left-3 bottom-3 text-white text-base sm:text-lg font-bold font-['Nunito Sans'] leading-3">
              Business
            </div>
          </div>
          <div className="h-28 sm:h-32 relative bg-black/40 rounded-md overflow-hidden flex items-end">
            <img
              className="w-20 h-20 sm:w-32 sm:h-32 absolute right-2 top-2"
              src={Medical}
              alt="Fitness"
            />
            <div className="absolute left-3 bottom-3 text-white text-base sm:text-lg font-bold font-['Nunito Sans'] leading-3">
              Fitness
            </div>
          </div>
          <div className="h-28 sm:h-32 relative bg-black/40 rounded-md overflow-hidden flex items-end">
            <img
              className="w-20 h-20 sm:w-32 sm:h-32 absolute right-2 top-2"
              src={Rectangle}
              alt="Trending"
            />
            <div className="absolute left-3 bottom-3 text-white text-base sm:text-lg font-bold font-['Nunito Sans'] leading-3">
              Trending
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastTalk;



