import React from "react";
import Image from 'next/image'
import LinkComponent from "../../components/LinkComponet";
import Navbar from "../../components/Navbar";

import Testmonials from "../../components/home/Testmonials";
import ContactUS from "../../components/home/ContactUS";
import Footer from "../../components/Footer";

const Career = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-full">
      <LinkComponent />
      <Navbar />
      {/* hero */}
      <div className="flex w-full  px-[20px] md:px-20 lg:px-40 max-w-7xl flex-col md:flex-row gap-10 py-20">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center">
          <div className="relative w-[full] md:w-[60%] mr-10">
            <Image
              src={`/image/career.png`}
              width={200}
              height={100}
              className=" w-full object-cover  rounded-lg"
              alt="dd"
            />
            <Image
              src={`/image/poland2.png`}
              width={200}
              height={0}
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
              Career Counseling
            </h1>

            <div className="flex flex-col items-center md:items-start py-2 gap-2">
              <h2 className="text-[16px] text-[#07294D] font-[600]">
                Understanding Students’ requirements
              </h2>
              <span className="text-[#555555] text-[16px] font-[300] text-center md:text-start leading-5">
                At BrightForth, we comprehend and investigate the career
                requirements of the students. We provide professional support
                and assist students in organizing their opinions and ideas about
                career options and professional objectives.
              </span>
            </div>

            <div className="flex flex-col items-center md:items-start py-2 gap-2">
              <h2 className="text-[16px] text-[#07294D] font-[600]">
                Selecting the University
              </h2>
              <span className="text-[#555555] text-[16px] font-[300] text-center md:text-start leading-5">
                Students looking for postgraduate and doctorate level studies
                from abroad should select the universities having worldwide
                recognition and that is offering excellent education. At
                BrightForth, we help students to take their final call on the
                selection of the right university.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* second hero */}

      <div className="flex flex-col px-[20px] md:px-20 lg:px-[40] md:flex-row max-w-7xl w-full gap-6">
        <div className="w-full md:w-1/2 flex flex-col gap-4 px-[0px] md:px-10 lg:px-20 items-center md:items-start">
          <h1 className="text-[#07294D] text-[18px] font-[600]">
            Visa Processing
          </h1>
          <span className="text-[16px] text-[#353535] text-center md:text-start">
            Visa Processing and visa interview hold the key to a students’
            successful departure to a foreign university. The visa team at
            BrightForth is always updated with the latest requirements,
            immigration policies, and visa checklists. At BrightForth, we have a
            database of possible visa interview questions depending upon
            students’ profiles
          </span>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4 px-[0px] md:px-10 lg:px-20 items-center md:items-start">
          <h1 className="text-[#07294D] text-[18px] font-[600]">
            Admission Processing
          </h1>
          <span className="text-[16px] text-[#353535] text-center md:text-start">
            At BrightForth, we assist students in filling up the admission form,
            getting financials ready and all the documentation, and applying for
            a visa. The counselors at BrightForth help students at every step to
            make them realize their dream of studying abroad successfully.
          </span>
        </div>
      </div>

      {/* testimonial */}
      <Testmonials />

      {/* cotact us */}
      <ContactUS />

      {/* footer */}

      <Footer />
    </div>
  );
};

export default Career;
