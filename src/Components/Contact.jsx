import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import InstagramSvg from "../svgs/InstagramSvg";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [interest] = useState([
    "Query",
    "Promotion",
    "Ads In Website",
    "Donation",
    "Other",
  ]);
  const [selected, setSelected] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
    interested: "",
  });

  const HandleInterest = (val) => {
    setSelected(val);
    setContactDetails((prev) => ({ ...prev, interested: val }));
  };

  const HandleClick = (e) => {
    setContactDetails({ ...contactDetails, [e.target.name]: e.target.value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !contactDetails.name ||
      !contactDetails.email ||
      !contactDetails.message ||
      !contactDetails.interested
    ) {
      toast.error("Please fill all fields and select an interest");
      return;
    }

    setIsLoading(true);

    try {
      const responseData = await axios.post(
        "http://localhost:8080/contactus",
        {
          email: contactDetails.email,
          name: contactDetails.name,
          message: contactDetails.message,
          interested: contactDetails.interested,
        },
        {
          withCredentials: true,
        }
      );

      toast.success(responseData.data.message || "Message sent successfully!");
      setContactDetails({
        name: "",
        email: "",
        message: "",
        interested: "",
      });
      setSelected("");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to send message. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#122] text-white">
      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* Navbar Section */}
      <section id="navbar">
        <Navbar />
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-[90px] py-8 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
          {/* Left Section - Contact Info */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold font-['Nunito Sans'] mb-12">
              Let's discuss <br />
              on something <span className="text-[#FECC30]">cool</span> together
            </h1>

            <div className="space-y-6">
              {/* Email */}
              <div className="pl-6 pr-8 py-6 rounded-2xl flex items-center gap-4 hover:rounded-[16px] hover:border-[3px] hover:border-[#FECC30] hover:bg-[rgba(254,204,48,0.3)] transition-all duration-300">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M0.075 5.3325C0.226227 4.66986 0.597983 4.07822 1.12938 3.65446C1.66078 3.23071 2.32033 2.99995 3 3H21C21.6797 2.99995 22.3392 3.23071 22.8706 3.65446C23.402 4.07822 23.7738 4.66986 23.925 5.3325L12 12.621L0.075 5.3325ZM0 7.0455V17.7015L8.7045 12.3645L0 7.0455ZM10.1415 13.245L0.2865 19.2855C0.52999 19.7989 0.91429 20.2326 1.39467 20.5362C1.87505 20.8397 2.43176 21.0005 3 21H21C21.5681 21.0001 22.1246 20.8389 22.6048 20.5351C23.0849 20.2313 23.4688 19.7975 23.712 19.284L13.857 13.2435L12 14.379L10.1415 13.2435V13.245ZM15.2955 12.366L24 17.7015V7.0455L15.2955 12.3645V12.366Z"
                      fill="#FECC30"
                    />
                  </svg>
                </div>
                <div className="text-xl font-medium font-['Nunito Sans']">
                  amirthamradio@gmail.com
                </div>
              </div>

              {/* Phone */}
              <div className="pl-6 pr-8 py-6 rounded-2xl flex items-center gap-4 hover:rounded-[16px] hover:border-[3px] hover:border-[#FECC30] hover:bg-[rgba(254,204,48,0.3)] transition-all duration-300">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_675_5898)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.82723 0.76672C3.08969 0.504653 3.40485 0.301358 3.75183 0.170305C4.0988 0.0392528 4.46966 -0.0165637 4.83984 0.00655466C5.21002 0.029673 5.57105 0.131198 5.89902 0.304402C6.227 0.477607 6.51441 0.718535 6.74223 1.01122L9.43473 4.47022C9.92823 5.10472 10.1022 5.93122 9.90723 6.71122L9.08673 9.99622C9.04431 10.1664 9.0466 10.3446 9.09338 10.5136C9.14017 10.6826 9.22985 10.8366 9.35373 10.9607L13.0392 14.6462C13.1635 14.7704 13.3178 14.8602 13.4871 14.907C13.6563 14.9538 13.8349 14.9559 14.0052 14.9132L17.2887 14.0927C17.6737 13.9965 18.0754 13.989 18.4636 14.0709C18.8519 14.1527 19.2164 14.3218 19.5297 14.5652L22.9887 17.2562C24.2322 18.2237 24.3462 20.0612 23.2332 21.1727L21.6822 22.7237C20.5722 23.8337 18.9132 24.3212 17.3667 23.7767C13.4085 22.384 9.81464 20.118 6.85173 17.1467C3.88066 14.1842 1.61464 10.5909 0.22173 6.63322C-0.32127 5.08822 0.16623 3.42772 1.27623 2.31772L2.82723 0.76672Z"
                        fill="#FECC30"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_675_5898">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="text-xl font-medium font-['Nunito Sans']">
                  +1416-996-1749
                </div>
              </div>

              {/* Address */}
              <div className="pl-6 pr-8 py-6 rounded-2xl flex items-center gap-4 hover:rounded-[16px] hover:border-[3px] hover:border-[#FECC30] hover:bg-[rgba(254,204,48,0.3)] transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                  fill="none"
                >
                  <path
                    d="M12 14C12.825 14 13.5315 13.7256 14.1195 13.1768C14.7065 12.6289 15 11.97 15 11.2C15 10.43 14.7065 9.7706 14.1195 9.2218C13.5315 8.67393 12.825 8.4 12 8.4C11.175 8.4 10.469 8.67393 9.882 9.2218C9.294 9.7706 9 10.43 9 11.2C9 11.97 9.294 12.6289 9.882 13.1768C10.469 13.7256 11.175 14 12 14ZM12 28C7.975 24.8033 4.969 21.8339 2.982 19.0918C0.994 16.3506 0 13.8133 0 11.48C0 7.98 1.2065 5.19167 3.6195 3.115C6.0315 1.03833 8.825 0 12 0C15.175 0 17.9685 1.03833 20.3805 3.115C22.7935 5.19167 24 7.98 24 11.48C24 13.8133 23.0065 16.3506 21.0195 19.0918C19.0315 21.8339 16.025 24.8033 12 28Z"
                    fill="#FECC30"
                  />
                </svg>
                <div className="text-xl font-medium font-['Nunito Sans']">
                  Ontario, Canada
                </div>
              </div>
            </div>

            <div className="flex gap-8 mt-12 ml-6">
              {/* Facebook Icon */}
              <Link to="https://facebook.com">
                <div className="p-2 rounded-full hover:bg-[#FECC30] transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="24"
                    viewBox="0 0 15 24"
                    fill="#EEEEEE"
                    className="hover:fill-[#122] transition-colors duration-300"
                  >
                    <path d="M10 13.8H13.5714L15 9H10V6.6C10 5.364 10 4.2 12.8571 4.2H15V0.168C14.5343 0.1164 12.7757 0 10.9186 0C7.04 0 4.28571 1.9884 4.28571 5.64V9H0V13.8H4.28571V24H10V13.8Z" />
                  </svg>
                </div>
              </Link>

              {/* Instagram Icon */}
              <Link to="https://instagram.com">
                <div className="rounded-full hover:bg-[#FECC30] transition-colors duration-300">
                  <InstagramSvg />
                </div>
              </Link>

              {/* Twitter/X Icon */}
              <Link to="https://x.com">
                <div className="p-2 rounded-full hover:bg-[#FECC30] transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="24"
                    viewBox="0 0 29 24"
                    fill="#EEEEEE"
                    className="hover:fill-[#122] transition-colors duration-300"
                  >
                    <path d="M9.10962 24C20.0535 24 26.0402 14.7642 26.0402 6.76892C26.0402 6.51047 26.0402 6.24833 26.0293 5.98988C27.1949 5.13052 28.2008 4.06657 29 2.8479C27.9113 3.33683 26.7575 3.65906 25.5762 3.80415C26.8205 3.0466 27.7525 1.85466 28.1989 0.449871C27.0298 1.15529 25.7502 1.6505 24.4162 1.91379C23.5193 0.940965 22.3325 0.296497 21.0397 0.0802122C19.7468 -0.136072 18.4199 0.0878992 17.2647 0.717433C16.1094 1.34697 15.1902 2.34693 14.6494 3.56243C14.1087 4.77793 13.9765 6.14114 14.2734 7.44088C11.9077 7.32006 9.59323 6.69409 7.48027 5.60358C5.3673 4.51307 3.50299 2.98237 2.00825 1.11076C1.24943 2.44561 1.01785 4.02457 1.36055 5.52701C1.70324 7.02946 2.59451 8.34274 3.85337 9.20017C2.91004 9.16753 1.98744 8.90953 1.16 8.44698V8.53006C1.16163 9.92841 1.63724 11.2833 2.50646 12.3657C3.37567 13.4481 4.58517 14.1917 5.9305 14.4707C5.41985 14.6139 4.89235 14.6854 4.36269 14.683C3.98928 14.6841 3.61663 14.6489 3.24981 14.5777C3.63005 15.7815 4.37043 16.8339 5.36726 17.5877C6.36409 18.3414 7.56743 18.7588 8.80875 18.7812C6.70001 20.4681 4.09516 21.383 1.41375 21.3786C0.941269 21.3806 0.469117 21.3529 0 21.2955C2.7215 23.0627 5.8821 24.001 9.10962 24Z" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-zinc-100 rounded-3xl p-6 md:p-8 lg:p-12">
              <div className="mb-8 lg:mb-12">
                <h2 className="text-black text-base font-medium font-['Nunito Sans'] mb-5">
                  I'm interested in...
                </h2>

                {/* Interest Options */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {interest.map((item, index) => (
                    <button
                      key={index}
                      type="button"
                      className={
                        (selected === item
                          ? "bg-[#FECC30] text-black outline-black "
                          : "text-black/30 outline-black/30 hover:bg-[#FECC30] hover:text-black hover:outline-black ") +
                        "flex-1 min-w-[120px] sm:min-w-[150px] px-3 py-2 sm:px-4 sm:py-3 rounded-md outline outline-[1.61px] text-sm sm:text-base font-medium font-['Nunito Sans'] transition-colors"
                      }
                      onClick={() => HandleInterest(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={HandleSubmit}>
                <div className="space-y-6 lg:space-y-9 mb-8 lg:mb-12">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Full Name"
                      className="w-full h-12 px-4 py-2 bg-white/0 rounded-lg outline outline-1 outline-offset-[-1px] outline-black/30 text-black/70 text-base font-normal font-['Nunito Sans'] placeholder-black/70 focus:outline-[#FECC30] focus:outline-2"
                      value={contactDetails.name}
                      onChange={HandleClick}
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      className="w-full h-12 px-4 py-2 bg-white/0 rounded-lg outline outline-1 outline-offset-[-1px] outline-black/30 text-black/70 text-base font-normal font-['Nunito Sans'] placeholder-black/70 focus:outline-amber-400 focus:outline-2"
                      value={contactDetails.email}
                      onChange={HandleClick}
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Your message"
                      rows="4"
                      className="w-full min-h-[100px] px-4 py-2 bg-white/0 rounded-lg outline outline-1 outline-offset-[-1px] outline-black/30 text-black/70 text-base font-normal font-['Nunito Sans'] placeholder-black/70 focus:outline-amber-400 focus:outline-2"
                      value={contactDetails.message}
                      onChange={HandleClick}
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] px-6 py-3 sm:py-4 bg-[#FECC30] rounded-2xl flex justify-center items-center gap-4 hover:bg-[#FECC30] transition-colors disabled:opacity-70"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M23.9471 1.02871C24.0017 0.892413 24.015 0.743103 23.9855 0.599288C23.956 0.455474 23.885 0.32348 23.7812 0.21967C23.6774 0.11586 23.5454 0.0448002 23.4015 0.015299C23.2577 -0.0142021 23.1084 -0.000846891 22.9721 0.0537091L1.15162 8.78221H1.15012L0.472125 9.05221C0.34371 9.10343 0.231953 9.18915 0.149198 9.2999C0.0664433 9.41066 0.0159116 9.54213 0.00318483 9.67979C-0.00954198 9.81746 0.0160314 9.95597 0.0770801 10.08C0.138129 10.2041 0.232277 10.3088 0.349125 10.3827L0.964125 10.7727L0.965625 10.7757L8.45812 15.5427L13.2251 23.0352L13.2281 23.0382L13.6181 23.6532C13.6923 23.7696 13.7971 23.8633 13.921 23.924C14.045 23.9846 14.1833 24.0099 14.3207 23.997C14.4581 23.9842 14.5892 23.9336 14.6998 23.851C14.8103 23.7684 14.8959 23.6569 14.9471 23.5287L23.9471 1.02871ZM21.1976 3.86371L9.95662 15.1047L9.63412 14.5977C9.57503 14.5047 9.49616 14.4258 9.40312 14.3667L8.89612 14.0442L20.1371 2.80321L21.9041 2.09671L21.1991 3.86371H21.1976Z"
                        fill="black"
                      />
                    </svg>
                  )}
                  <span className="text-black text-lg sm:text-xl font-medium font-['Nunito Sans']">
                    {isLoading ? "Sending..." : "Send Message"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
