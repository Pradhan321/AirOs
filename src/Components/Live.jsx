


import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import VideoPlayer from "./VideoPlayer";
import MainLiveView from "./MainLiveView";
import LiveChat from "./LiveChat";
import axios from "axios";

const Live = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // ...existing code...
const [showChat, setShowChat] = useState(false);
// ...existing code...

  useEffect(() => {
    const findAllEvents = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get("http://localhost:8080/admin/getEvents");
        if (response.data) {
          setEvents(response.data);
          console.log("Fetched events:", response.data);
        }
      } catch (error) {
        console.log(error);
        setError("Failed to load events. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    findAllEvents();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#122]">
      <Navbar />
      <div className="flex flex-col lg:flex-row h-auto my-4 sm:my-6">
        {/* Main Live View (Radio Stream) */}
        <div className="w-full lg:flex-1 lg:pr-2">
          <MainLiveView />
        </div>
        {/* Live Chat - Stacks below on small screens, fixed width on desktop */}
        <div className="hidden lg:block w-full lg:w-80 h-auto lg:h-[600px] bg-[#191919] lg:ml-0 mt-9 lg:mt-0 rounded-lg overflow-hidden lg:mr-8">
          <LiveChat />
        </div>
      </div>
      <button
        className="fixed bottom-6 right-6 z-50 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg lg:hidden"
        onClick={() => setShowChat(true)}
      >
        Live Chat
      </button>

      {/* Live Chat Modal - Mobile */}
      {showChat && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black bg-opacity-60 lg:hidden">
          <div className="w-full sm:w-[400px] max-w-full bg-[#191919] rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-lg">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
             <div className="flex flex-col items-start">
  <span className="text-white text-lg font-bold">Live Chat</span>
  <span className="text-gray-400 text-sm">
    Top messages
    <span className="text-xs ml-1 align-middle">&#128065;</span>
    <span className="text-xs ml-1 align-middle">120k</span>
  </span>
</div>
              <button className="text-gray-400 hover:text-white text-2xl" onClick={() => setShowChat(false)}>
                &times;
              </button>
            </div>
            <div className="h-[400px] overflow-y-auto">
              <LiveChat />
            </div>
          </div>
        </div>
      )}
    {/* Main Live View (Radio Stream) */}
       <h2 className="text-white text-xl sm:text-2xl font-bold mb-2 ml-4 sm:ml-6 md:ml-8 lg:ml-16">I Redesigned the ENTIRE UI from Scratch</h2>
<div className="hidden lg:block w-full lg:w-[calc(100%-28rem)] lg:pr-2 mb-2 ml-4 sm:ml-6 md:ml-8 lg:ml-16">
  <div className="border border-gray-400 border-0.5 rounded-lg p-4 ">
    <p className="text-gray-300 mb-2">I tried to redesign YouTube's UI and make it more user-friendly.</p>
    <p className="text-gray-300 mb-2">Hope you enjoy!</p>
    <a href="#" className="text-gray-400 hover:text-blue-300">Show more</a>
  </div>
</div>
   
    
      <div className="flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-16 my-6 sm:my-9">
        <div className="text-white text-xl sm:text-2xl font-bold font-['Nunito Sans']">
          Coming Podcast
        </div>
        {isLoading && (
          <div className="w-full flex justify-center py-4 sm:py-6">
            <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-b-2 border-orange-600"></div>
          </div>
        )}
        {error && (
          <div className="w-full bg-red-100 border-l-4 border-red-500 text-red-700 p-2 sm:p-4">
            <p className="text-sm sm:text-base">{error}</p>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-2 sm:p-4">
          {events.map((event) => (
            <div
              key={event._id}
              className="w-full relative bg-zinc-700 rounded-xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              {/* Image Container */}
              <div className="w-full px-2 sm:px-4 pt-2 sm:pt-4">
                <div className="w-full h-32 sm:h-48 md:h-56 bg-white rounded-xl sm:rounded-3xl overflow-hidden relative">
                  {event.eventThumbnail && (
                    <img
                      src={`${
                        import.meta.env.VITE_CLOUDFRONT_DOMAIN_NAME
                      }/${event.eventThumbnail.split("/").pop()}`}
                      alt="Event thumbnail"
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 rounded-t-xl sm:rounded-t-3xl bg-gradient-to-b from-transparent to-black/10"></div>
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full px-3 sm:px-5 pt-3 sm:pt-5 pb-4 sm:pb-6">
                <div className="flex flex-col gap-2 sm:gap-3">
                  {/* Time Section */}
                  <div className="flex flex-col">
                    <h3 className="text-white text-base sm:text-lg font-bold font-['Nunito Sans']">
                      {event.startTime} - {event.endTime}
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm font-medium font-['Nunito Sans']">
                      {new Date(event.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Days & Repeat */}
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {event.days.map((day, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 py-1 bg-zinc-600 rounded-full text-white text-xs font-medium font-['Nunito_Sans']"
                      >
                        {day}
                      </span>
                    ))}
                    <span className="px-2 sm:px-3 py-1 bg-zinc-800 rounded-full text-white text-xs font-medium font-['Nunito Sans']">
                      {event.repeat}
                    </span>
                  </div>

                  {/* Status Bar */}
                  <div className="flex justify-between items-center mt-1 sm:mt-2">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-500 text-xs sm:text-sm font-bold font-['Nunito Sans']">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* New Badge for recently created events */}
              {new Date(event.createdAt) >
                new Date(Date.now() - 24 * 60 * 60 * 1000) && (
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-orange-600 text-white text-xs font-bold font-['Nunito Sans'] px-1 sm:px-2 py-0.5 sm:py-1 rounded-full">
                  NEW
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Live;



