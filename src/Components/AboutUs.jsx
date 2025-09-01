

import React from "react";
import { Link } from "react-router-dom";
import aboutUs from "../assets/aboutUs.png";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <div className="bg-[#122] w-full min-h-screen">
      <Navbar />

      {/* Main Section */}
      <div className="text-white px-4 sm:px-8 lg:px-24 flex flex-col-reverse lg:flex-row gap-0.5 lg:gap-12 mt-20">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col justify-start items-start gap-6">
            <div className="text-3xl sm:text-4xl lg:text-6xl font-bold font-['Nunito Sans'] leading-snug sm:leading-[48px] lg:leading-[72px]">
              Your Sound Your Story
              <br />
              Live from Toronto.
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-white/70 text-base sm:text-lg lg:text-xl font-normal font-['Nunito Sans'] leading-7 lg:leading-9 tracking-tight">
                Welcome to Air OS, Vancouver’s first multicultural internet
                radio station, dedicated to uniting communities through the
                universal language of music, podcasts, and cultural
                conversations.
              </div>
              <div className="text-white/70 text-sm font-extralight font-['Nunito Sans'] leading-relaxed tracking-tight">
                We believe that music has the power to bridge distances and keep
                people rooted in their heritage.
              </div>
            </div>
            <div className="text-white/70 text-base sm:text-lg lg:text-xl font-normal font-['Nunito Sans'] leading-7 lg:leading-9 tracking-tight">
              ✅ Live Podcasts
              <br />✅ 24/7 live broadcasting
              <br />✅ Sports & Cricket Highlights,
            </div>
          </div>
          <Link to="/live">
            <div className="w-48 sm:w-60 h-12 sm:h-14 my-8 sm:my-12 bg-stone-100 rounded-full outline outline-2 sm:outline-4 outline-stone-200 inline-flex justify-center items-center gap-3 overflow-hidden cursor-pointer">
              <button className="text-black text-base font-semibold font-['Nunito Sans'] leading-tight">
                Live Podcasts
              </button>
            </div>
          </Link>
        </div>

        {/* Right Section */}
       <div className="w-full lg:w-1/2 flex justify-center items-end relative">
  <div className="bg-[#FECC30] w-full max-w-sm sm:max-w-md h-48 sm:h-64 lg:h-[400px] mb-10 sm:mb-16 rounded-t-[50%] overflow-hidden relative flex items-end justify-center">
    {/* Purple Circle - only show on md+ screens */}
    <div className="hidden sm:block absolute rounded-full bg-purple-500 w-12 h-12 sm:w-16 sm:h-16 bottom-[44%] right-[11.5%]" />
    {/* Lady Image */}
    <img
      src="./images/lady.png"
      alt="Lady"
      className="w-[80px] sm:w-auto relative sm:absolute sm:top-[24.4%] sm:right-[10%] bottom-0"
      style={{ maxHeight: "90%", objectFit: "contain" }}
    />
  </div>
</div>
</div>

      {/* Podcast Info Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-24 px-4 lg:px-24">
        {/* Images */}
        <div className="w-full lg:w-1/2 h-96 relative flex justify-center lg:justify-start">
          <img
            className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-3xl border border-amber-400/40 absolute left-0 top-0"
            src="./images/radio1.png"
            alt="Image 1"
          />
          <img
            className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-3xl border border-amber-400/40 absolute left-[40px] top-[40px] lg:left-[77.15px] lg:top-[85.32px]"
            src="./images/radio2.png"
            alt="Image 2"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 max-w-[619px] flex flex-col justify-center items-start gap-4">
          <div className="flex flex-col gap-4">
            <div className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold font-['Nunito Sans'] uppercase leading-[36px] sm:leading-[44px] lg:leading-[54.43px]">
              🎙 Bringing Voices Together Through Podcasts
            </div>
            <div className="text-white/60 text-base sm:text-lg lg:text-xl font-normal font-['Nunito Sans'] leading-6 lg:leading-7">
              At Air OS, we do more than just play music. We provide meaningful
              conversations through Live Podcasts featuring artists,
              influencers, experts, and community leaders.
            </div>
            <div className="text-white/60 text-lg sm:text-xl lg:text-2xl font-normal font-['Nunito Sans'] leading-relaxed lg:leading-loose">
              Bollywood Buzz
              <br />
              Sports & Cricket
            </div>
          </div>

          {/* Stats */}
          <div className="w-full flex  sm:flex-row gap-6 sm:gap-20 mt-4 text-center justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="text-white text-3xl sm:text-4xl lg:text-5xl font-normal font-['Nunito Sans'] leading-[54px] lg:leading-[67.20px]">
                500K+
              </div>
              <div className="text-white text-lg sm:text-xl lg:text-2xl font-normal font-['Nunito Sans'] capitalize">
                Famous Singer
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="text-white text-3xl sm:text-4xl lg:text-5xl font-normal font-['Nunito Sans'] leading-[54px] lg:leading-[67.20px]">
                240K+
              </div>
              <div className="text-white text-lg sm:text-xl lg:text-2xl font-normal font-['Nunito Sans']">
                Playlist Song
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Music Promotion Section */}
      <div className="w-full flex flex-col justify-center items-center mt-10 sm:mt-28 px-4 gap-2 sm:gap-4 text-center">
        <div className="text-white text-3xl sm:text-4xl md:text-6xl font-bold font-['Nunito Sans'] capitalize leading-[48px] md:leading-[89.60px] tracking-wide">
          LISTEN MUSIC EASILY
        </div>
        <div className="w-full md:w-[60%] text-white text-base sm:text-lg md:text-2xl font-normal font-['Nunito Sans'] leading-7 md:leading-10 tracking-wide">
          You can download app in available platforms. After that you can create
          an account in the applications
        </div>
      </div>

      {/* About Image */}
      <div className="flex flex-col justify-center items-center  px-4 my-8 sm:my-16">
        <img
          className="w-full max-w-[603px] h-auto md:h-96 rounded-2xl"
          src={aboutUs}
          alt="podcastImage"
        />
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;


