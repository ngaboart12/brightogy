import React from "react";
import Image from "next/image";
import LinkComponent from "../../components/LinkComponet";
import Navbar from "../../components/Navbar";
import Testmonials from "../../components/home/Testmonials";
import ContactUS from "../../components/home/ContactUS";
import Footer from "../../components/Footer";

const PreDeparture = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-full bg-gray-100">
      <LinkComponent />
      <Navbar />

      {/* herr */}
      <div className="flex w-full  px-[20px] md:px-20 lg:px-40 max-w-7xl flex-col md:flex-row gap-10 py-20">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center">
          <div className="relative w-[full] md:w-[60%] mr-10">
            <Image
              width={200}
              height={0}
              src={`/image/career.png`}
              className=" w-full object-cover  rounded-lg"
              alt="dd"
            />
            <Image
              width={200}
              height={0}
              src={`/image/poland2.png`}
              className="w-[70%] absolute right-[-30px] md:right-[-70px] bottom-[50px]"
              alt="dd"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col   items-center md:items-start gap-4">
          <div>
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.32"
                d="M23.3323 46.6667H32.6657C41.4652 46.6667 45.8649 46.6667 48.5986 43.9329C51.3324 41.1994 51.3324 36.7995 51.3324 28C51.3324 26.9689 51.3284 24.248 51.324 23.3333H4.66618C4.66177 24.248 4.66562 26.9689 4.66562 28C4.66562 36.7995 4.66562 41.1994 7.39928 43.9329C10.133 46.6667 14.5327 46.6667 23.3323 46.6667Z"
                fill="#FFCD21"
              />
              <path
                d="M23.3216 9.33334H32.6791C41.5012 9.33334 45.9124 9.33334 48.6531 11.9368C50.6264 13.8114 51.179 16.5085 51.3337 21V23.3333H4.66699V21C4.82169 16.5085 5.37423 13.8114 7.34755 11.9368C10.0883 9.33334 14.4994 9.33334 23.3216 9.33334Z"
                fill="#FFCD21"
              />
              <path
                d="M29.167 35.5833C28.2005 35.5833 27.417 36.3669 27.417 37.3333C27.417 38.2998 28.2005 39.0833 29.167 39.0833H32.667C33.6335 39.0833 34.417 38.2998 34.417 37.3333C34.417 36.3669 33.6335 35.5833 32.667 35.5833H29.167Z"
                fill="#FFCD21"
              />
              <path
                d="M14 35.5833C13.0335 35.5833 12.25 36.3669 12.25 37.3333C12.25 38.2998 13.0335 39.0833 14 39.0833H23.3333C24.2998 39.0833 25.0833 38.2998 25.0833 37.3333C25.0833 36.3669 24.2998 35.5833 23.3333 35.5833H14Z"
                fill="#FFCD21"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-[#07294D] text-[24px] font-[600]">
              Pre-departure Services
            </h1>

            <div className="flex flex-col items-center md:items-start py-2 gap-2">
              <span className="text-[#555555] text-[16px] font-[300] text-center md:text-start leading-5">
                Every student goes through feelings of leaving the comfort of
                home before taking his flight abroad for education. Therefore,
                at BrightForth, the counselors are sensitive towards this
                situation and provide all the assistance and appropriate set of
                information that will help students in their airport pickups,
                accommodation arrangements, handling queries at the port of
                entry, migration, travel, and in their settlement abroad.
              </span>
            </div>

            <div className="flex flex-col items-center md:items-start py-2 gap-2">
              <span className="text-[#555555] text-[16px] font-[300] text-center md:text-start leading-5">
                At BrightForth, we organize pre-departure training sessions for
                the students. It has been observed that the majority of students
                traveling abroad face hassles while at airports, transit,
                landing, luggage, etc. We at BrightForth explain each and every
                aspect of pre-departure to the student.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* word */}
      <div className="px-[20px] md:px-20 lg:px-40">
        <span className="text-center text-[14px]">
          At BrighForth, we also provide a checklist of pre-departure guidelines
          depending upon the country, city, or campus selected by the student.
        </span>
      </div>

      {/* testimonail */}
      <Testmonials />

      {/* contact us */}
      <ContactUS />

      {/* foooter */}
      <Footer />
    </div>
  );
};

export default PreDeparture;
