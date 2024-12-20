"use client";
import React, { useEffect, useState } from "react";
import "./dropdown.css";
import { VscThreeBars } from "react-icons/vsc";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";

const Navbar2 = () => {
  const [scrolled, setScrolled] = useState(false);

  // Effect to add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down more than 50 pixels
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach the event listener to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`w-full  flex items-center justify-center  px-[10px] md:px-[50px] lg:px-[100px] py-2 relative  ${
        scrolled ? "bg-white border-b-2 border-black/10 fixed z-40" : ""
      }`}
    >
      <div className="max-w-7xl w-full flex flex-row   ">
        <div className="flex ">
          {scrolled ? (
            <a href="/">
              <Image
                src={`/image/logo.svg`}
                width={400}
                height={400}
                alt=""
                className="w-[20vh]"
              />
            </a>
          ) : (
            <a href="/">
              <Image
                src={`/image/logo2.svg`}
                width={400}
                height={400}
                alt=""
                className="w-[20vh]"
              />
            </a>
          )}
        </div>

        {/* <div className="border border-t-0 p-2 w-1/5 flex items-center border-l-0">
          <div className="flex flex-row items-center gap-1">
            <div>
              <svg
                width="15"
                height="15"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.80541 17.2959C13.9423 17.2959 17.2959 13.9423 17.2959 9.80547C17.2959 5.6686 13.9423 2.315 9.80541 2.315C5.66854 2.315 2.31494 5.6686 2.31494 9.80547C2.31494 13.9423 5.66854 17.2959 9.80541 17.2959Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.0151 15.4042L17.9518 18.3333"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span className="text-white font-[200]">Search</span>
          </div>
        </div> */}

        <div className="links hidden md:flex  gap-[102px] items-center w-full justify-end   pr-[10px] md:pr-[50px] lg:pr-[100px] px-[10px] ">
          <ul
            className={`${
              scrolled ? "text-black" : "text-white"
            } flex  font-[300] text-[12px]  gap-4  items-center`}
          >
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <p className=" cursor-pointer flex gap-1 items-center">
                <span>COMPANY</span>{" "}
                <span className="icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.72456 6.64143C3.94645 6.41954 4.29367 6.39937 4.53835 6.58092L4.60845 6.64143L9.99984 12.0325L15.3912 6.64143C15.6131 6.41954 15.9603 6.39937 16.205 6.58092L16.2751 6.64143C16.497 6.86332 16.5172 7.21054 16.3356 7.45522L16.2751 7.52532L10.4418 13.3586C10.2199 13.5805 9.87267 13.6007 9.62799 13.4192L9.5579 13.3586L3.72456 7.52532C3.48048 7.28124 3.48048 6.88551 3.72456 6.64143Z"
                      fill={`${scrolled ? "black" : "white"}`}
                    />
                  </svg>
                </span>
              </p>
              <ul className="text-[black] font-[300] gap-4 text-[14px] bg-black">
                <li>
                  <a href="/aboutus" className="hover:text-black/70">
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a href="/eventss" className="hover:text-black/70">
                    EVENTS
                  </a>
                </li>
                <li>
                  <a href="/events" className="hover:text-black/70">
                    GALLERY
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <p className=" cursor-pointer flex gap-1 items-center">
                <span>TEST COACHING</span>{" "}
                <span className="icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.72456 6.64143C3.94645 6.41954 4.29367 6.39937 4.53835 6.58092L4.60845 6.64143L9.99984 12.0325L15.3912 6.64143C15.6131 6.41954 15.9603 6.39937 16.205 6.58092L16.2751 6.64143C16.497 6.86332 16.5172 7.21054 16.3356 7.45522L16.2751 7.52532L10.4418 13.3586C10.2199 13.5805 9.87267 13.6007 9.62799 13.4192L9.5579 13.3586L3.72456 7.52532C3.48048 7.28124 3.48048 6.88551 3.72456 6.64143Z"
                      fill={`${scrolled ? "black" : "white"}`}
                    />
                  </svg>
                </span>
              </p>
              <ul className="text-[black] font-[300] gap-4 text-[14px] bg-black">
                <li>
                  <a href="/toefl" className="hover:text-black/70">
                    TOEFL
                  </a>
                </li>
                <li>
                  <a href="/ielts" className="hover:text-black/70">
                    IELTS
                  </a>
                </li>
                <li>
                  <a href="/duolingo" className="hover:text-black/70">
                    Duolingo
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <p href="/" className=" flex gap-1 items-center">
                <span>COUNTRIES</span>{" "}
                <span className="icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.72456 6.64143C3.94645 6.41954 4.29367 6.39937 4.53835 6.58092L4.60845 6.64143L9.99984 12.0325L15.3912 6.64143C15.6131 6.41954 15.9603 6.39937 16.205 6.58092L16.2751 6.64143C16.497 6.86332 16.5172 7.21054 16.3356 7.45522L16.2751 7.52532L10.4418 13.3586C10.2199 13.5805 9.87267 13.6007 9.62799 13.4192L9.5579 13.3586L3.72456 7.52532C3.48048 7.28124 3.48048 6.88551 3.72456 6.64143Z"
                      fill={`${scrolled ? "black" : "white"}`}
                    />
                  </svg>
                </span>
              </p>
              <ul className="text-[black] font-[300] gap-4 text-[16px] bg-black">
                <li>
                  <a href="/canada" className="hover:text-black/70">
                    Canada
                  </a>
                </li>
                <li>
                  <a href="/poland">Poland</a>
                </li>
                <li>
                  <a href="/china">China</a>
                </li>
              </ul>
            </li>
            <li>
              <p href="/" className=" flex gap-1 items-center">
                <span>SERVICES</span>{" "}
                <span className="icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.72456 6.64143C3.94645 6.41954 4.29367 6.39937 4.53835 6.58092L4.60845 6.64143L9.99984 12.0325L15.3912 6.64143C15.6131 6.41954 15.9603 6.39937 16.205 6.58092L16.2751 6.64143C16.497 6.86332 16.5172 7.21054 16.3356 7.45522L16.2751 7.52532L10.4418 13.3586C10.2199 13.5805 9.87267 13.6007 9.62799 13.4192L9.5579 13.3586L3.72456 7.52532C3.48048 7.28124 3.48048 6.88551 3.72456 6.64143Z"
                      fill={`${scrolled ? "black" : "white"}`}
                    />
                  </svg>
                </span>
              </p>
              <ul className="text-[black] font-[300] gap-4 text-[14px] bg-black">
                <li>
                  <a href="/careercounseling" className="hover:text-black/70">
                    Career Counseling
                  </a>
                </li>
                <li>
                  <a href="/sop" className="hover:text-black/70">
                    Statement of Purpose
                  </a>
                </li>
                <li>
                  <a href="/careercounseling" className="hover:text-black/70">
                    Travel Insurance
                  </a>
                </li>
                <li>
                  <a href="/visaguidance" className="hover:text-black/70">
                    Visa guidance
                  </a>
                </li>
                <li>
                  <a href="/predeparture">Pre-departure Services</a>
                </li>
                <li>
                  <a href="/univeristydocument">
                    University selection and Documentation
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contactus">CONTACT US</a>
            </li>
            <li>
              <a href="/faqpage">FAQ</a>
            </li>
          </ul>
          <div className="hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.80541 17.296C13.9423 17.296 17.2959 13.9424 17.2959 9.8055C17.2959 5.66863 13.9423 2.31503 9.80541 2.31503C5.66854 2.31503 2.31494 5.66863 2.31494 9.8055C2.31494 13.9424 5.66854 17.296 9.80541 17.296Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.0151 15.4043L17.9518 18.3333"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className="py-4 flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <MdOutlineClose size={30} /> : <VscThreeBars size={30} />}
      </div>
      {isOpen ? (
        <div className="mobile flex  md:hidden flex-col gap-[102px] top-16   w-full h-[90vh] absolute z-20 bg-gray-800 rounded-lg px-6 py-6 ">
          <ul className="  flex flex-col text-white font-[300] text-[16px]  gap-4  items-start">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <p className=" cursor-pointer flex gap-1 items-center">
                <span>COMPANY</span>{" "}
                <span className="icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.72456 6.64143C3.94645 6.41954 4.29367 6.39937 4.53835 6.58092L4.60845 6.64143L9.99984 12.0325L15.3912 6.64143C15.6131 6.41954 15.9603 6.39937 16.205 6.58092L16.2751 6.64143C16.497 6.86332 16.5172 7.21054 16.3356 7.45522L16.2751 7.52532L10.4418 13.3586C10.2199 13.5805 9.87267 13.6007 9.62799 13.4192L9.5579 13.3586L3.72456 7.52532C3.48048 7.28124 3.48048 6.88551 3.72456 6.64143Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </p>
              <ul className="text-[black] font-[300] gap-4 text-[14px] bg-black">
                <li>
                  <a href="/aboutus" className="hover:text-black/70">
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a href="/eventss" className="hover:text-black/70">
                    EVENTS
                  </a>
                </li>
                <li>
                  <a href="/events" className="hover:text-black/70">
                    GALLERY
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <p className=" cursor-pointer flex gap-1 items-center">
                <span>TEST COACHING</span>{" "}
                <span className="icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.72456 6.64143C3.94645 6.41954 4.29367 6.39937 4.53835 6.58092L4.60845 6.64143L9.99984 12.0325L15.3912 6.64143C15.6131 6.41954 15.9603 6.39937 16.205 6.58092L16.2751 6.64143C16.497 6.86332 16.5172 7.21054 16.3356 7.45522L16.2751 7.52532L10.4418 13.3586C10.2199 13.5805 9.87267 13.6007 9.62799 13.4192L9.5579 13.3586L3.72456 7.52532C3.48048 7.28124 3.48048 6.88551 3.72456 6.64143Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </p>
              <ul className="text-[black] font-[300] gap-4 text-[14px] bg-black">
                <li>
                  <a href="/toefl" className="hover:text-black/70">
                    TOEFL
                  </a>
                </li>
                <li>
                  <a href="/ielts" className="hover:text-black/70">
                    IELTS
                  </a>
                </li>
                <li>
                  <a href="/duolingo" className="hover:text-black/70">
                    Duolingo
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <p href="/" className=" flex gap-1 items-center">
                <span>COUNTRIES</span>{" "}
                <span className="icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.72456 6.64143C3.94645 6.41954 4.29367 6.39937 4.53835 6.58092L4.60845 6.64143L9.99984 12.0325L15.3912 6.64143C15.6131 6.41954 15.9603 6.39937 16.205 6.58092L16.2751 6.64143C16.497 6.86332 16.5172 7.21054 16.3356 7.45522L16.2751 7.52532L10.4418 13.3586C10.2199 13.5805 9.87267 13.6007 9.62799 13.4192L9.5579 13.3586L3.72456 7.52532C3.48048 7.28124 3.48048 6.88551 3.72456 6.64143Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </p>
              <ul className="text-[black] font-[300] gap-4 text-[16px] bg-black">
                <li>
                  <a href="/canada" className="hover:text-black/70">
                    Canada
                  </a>
                </li>
                <li>
                  <a href="/poland">Poland</a>
                </li>
                <li>
                  <a href="/china">China</a>
                </li>
              </ul>
            </li>
            <li>
              <p href="/" className=" flex gap-1 items-center">
                <span>SERVICES</span>{" "}
                <span className="icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.72456 6.64143C3.94645 6.41954 4.29367 6.39937 4.53835 6.58092L4.60845 6.64143L9.99984 12.0325L15.3912 6.64143C15.6131 6.41954 15.9603 6.39937 16.205 6.58092L16.2751 6.64143C16.497 6.86332 16.5172 7.21054 16.3356 7.45522L16.2751 7.52532L10.4418 13.3586C10.2199 13.5805 9.87267 13.6007 9.62799 13.4192L9.5579 13.3586L3.72456 7.52532C3.48048 7.28124 3.48048 6.88551 3.72456 6.64143Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </p>
              <ul className="text-[black] font-[300] gap-4 text-[14px] bg-black">
                <li>
                  <a href="/careercounseling" className="hover:text-black/70">
                    Career Counseling
                  </a>
                </li>
                <li>
                  <a href="/sop" className="hover:text-black/70">
                    Statement of Purpose
                  </a>
                </li>
                <li>
                  <a href="/travel" className="hover:text-black/70">
                    Travel Insurance
                  </a>
                </li>
                <li>
                  <a href="/visaguidance" className="hover:text-black/70">
                    Visa guidance
                  </a>
                </li>
                <li>
                  <a href="/predeparture">Pre-departure Services</a>
                </li>
                <li>
                  <a href="/univeristydocument">
                    University selection and Documentation
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/events">EVENTS</a>
            </li>
            <li>
              <a href="/faqpage">FAQ</a>
            </li>
          </ul>
          <div className="hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.80541 17.296C13.9423 17.296 17.2959 13.9424 17.2959 9.8055C17.2959 5.66863 13.9423 2.31503 9.80541 2.31503C5.66854 2.31503 2.31494 5.66863 2.31494 9.8055C2.31494 13.9424 5.66854 17.296 9.80541 17.296Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.0151 15.4043L17.9518 18.3333"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar2;
