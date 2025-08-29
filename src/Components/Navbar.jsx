

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/user", {
        withCredentials: true,
      });
      setUserData(response.data);
      dispatch(addUser({ loggedInUser: response.data }));
    } catch (error) {
      setUserData(null);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [navigate]);

  const handleSignInClick = () => {
    window.location.href = "http://localhost:8080/auth/google";
  };

  const HandleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8080/logout",
        {},
        { withCredentials: true }
      );
      setUserData(null);
      dispatch(removeUser());
      window.location.reload();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-[#122] px-4 sm:px-6 lg:px-12 py-4 relative z-50">
      <div className="w-full max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-y-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-white text-2xl sm:text-3xl font-bold font-['Nunito Sans']">
            Amirtham radio 
          </span>
          <span className="text-[#C8C6C5] text-2xl sm:text-4xl font-bold font-['Nunito Sans']">
            logo
          </span>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 flex-wrap">
          {[
            { name: "Home", path: "/" },
            { name: "Donate", path: "/donate" },
            { name: "About", path: "/about" },
            { name: "Live", path: "/live" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white text-sm lg:text-base font-medium font-['Nunito Sans'] hover:text-gray-400 transition-colors"
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
          {/* Language */}
          <div className="hidden md:flex items-center gap-2 h-[35px]">
            <span className="text-white font-['Nunito Sans'] text-base sm:text-lg">
              EN
            </span>
          </div>

          {/* Play Button */}
          <button className="px-3 sm:px-4 py-2 bg-[#F2EEE9] border-[2px] sm:border-[3px] border-[#E8E4E1] rounded-full flex items-center justify-center h-[35px]">
            <span className="text-black text-sm sm:text-base font-semibold font-['Nunito Sans'] tracking-[-0.32px]">
              Play Radio
            </span>
          </button>

          {/* Sign In / Profile */}
          <div className="px-2 sm:px-3 py-[3px] bg-white rounded-full flex items-center gap-2 cursor-pointer hover:bg-[#FECC30] group transition-all duration-200 relative">
            {userData ? (
              <div className="relative group">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
                    {userData.avatar ? (
                      <img
                        src={userData.avatar}
                        alt={userData.username}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-600"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    )}
                  </div>
                  <span className="hidden sm:block text-black text-sm font-medium font-['Nunito Sans'] group-hover:text-gray-800 transition-all">
                    {userData.username}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-500 hidden md:block group-hover:rotate-180 transition-transform"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>

                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-1 z-50 hidden group-hover:block border border-gray-100">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">
                      {userData.username}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {userData.email}
                    </p>
                  </div>
                  <button
                    onClick={HandleLogout}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-500"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={handleSignInClick}
                className="flex items-center gap-2 hover:bg-yellow-300 transition-colors rounded-full"
              >
                <div className="w-8 h-8 rounded-full bg-yellow-400 bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <span className="hidden sm:inline-block text-black text-sm font-medium font-['Nunito Sans'] group-hover:text-gray-800">
                  Sign in
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
       {isMobileMenuOpen && (
  <div className="fixed inset-0 bg-[#122]/95 z-40 flex flex-col bg-[#112222]/90 pl-8 justify-center transition-opacity duration-300">
    <button
      onClick={toggleMobileMenu}
      className="absolute top-6 right-6 text-white focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    {/* "Air OS" Text at Top Left */}
    <div className="absolute top-6 left-8 flex items-center gap-2">
      <span className="text-white text-2xl font-bold font-['Nunito Sans']">
        Air
      </span>
      <span className="text-[#C8C6C5] text-2xl font-bold font-['Nunito Sans']">
        OS
      </span>
    </div>
    <div className="flex flex-col gap-6">
      {[
        { name: "Home", path: "/" },
        { name: "Donate", path: "/donate" },
        { name: "About", path: "/about" },
        { name: "Live", path: "/live" },
        { name: "Contact", path: "/contact" },
      ].map((item) => (
        <Link
          key={item.name}
          to={item.path}
          onClick={toggleMobileMenu}
          className="text-white text-xl font-medium font-['Nunito Sans'] hover:text-gray-400 transition-colors"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          {item.name}
        </Link>
      ))}
    </div>
    {/* Sign In / Profile Section */}
    <div className="mt-6 px-2 py-2 mr-6 bg-yellow-300  flex items-center gap-2  rounded-full cursor-pointer hover:bg-yellow-100 transition-colors">
      {userData ? (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
            {userData.avatar ? (
              <img
                src={userData.avatar}
                alt={userData.username}
                className="w-full h-full object-cover"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-600"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            )}
          </div>
          <span className="text-black text-sm font-medium font-['Nunito Sans']">
            {userData.username}
          </span>
          <button
            onClick={() => {
              HandleLogout();
              toggleMobileMenu();
            }}
            className="ml-2 text-red-500 text-sm font-medium"
          >
            Sign out
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            handleSignInClick();
            toggleMobileMenu();
          }}
          className="flex items-center justify-center gap-2 hover:bg-yellow-300 transition-colors rounded-full px-3 py-1"
        >
          <div className="w-8 h-8 rounded-full bg-yellow-400 bg-gray-100 border border-gray-200 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#112222"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <span className="text-black items-center justify-center bg-yellow-300 text-lg font-medium font-['Nunito Sans']">
            Sign in
          </span>
        </button>
      )}
    </div>
  </div>
)}
      </div>
    </nav>
  );
};

export default Navbar;