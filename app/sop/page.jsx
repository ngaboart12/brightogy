import React from "react";
import Image from "next/image";
import LinkComponent from "../../components/LinkComponet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Landing/Footer";

const Sop = () => {
  return (
    <div className="flex flex-col items-center  w-full overflow-hidden bg-white relative">
      <LinkComponent />
      <Navbar />
      {/* hero */}
      <div className="w-full max-w-7xl flex flex-col gap-10 px-[20px] sm:px-10 lg:px-40 py-10">
        <div className="w-full flex flex-col md:flex-row  justify-between ">
          <div className="flex w-full md:w-1/2 flex-col gap-4 items-center md:items-start">
            <div className="w-[213px] h-[47px] px-10 py-3 bg-yellow-50 justify-center items-center gap-2.5 inline-flex">
              <div className="w-[133px] text-center text-amber-500 text-lg font-medium ">
                How to Write
              </div>
            </div>
            <span className="max-w-[300px] text-[#123E6C] text-[20px] font-[600]">
              Statement of Purpose for Your Canadian Student Visa
            </span>
          </div>
          <div className="flex w-full md:w-1/2 text-center md:text-start py-4 md:py-0">
            <span className="text-[#3D3D3D] text-[16px] font-[400]">
              While collecting and filling out your documents as you prepare to
              Study abroad in Canada, it’s important to prioritize writing your
              Statement of purpose (or SOP). An SOP is a personal essay that
              helps you stand out from other students with similar
              accomplishments.
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col  md:flex-row gap-10 justify-between">
          <div className="flex w-full md:w-1/2 flex-col gap-4 items-center md:items-start py-4">
            <Image
              src={`/image/sop.jpg`}
              width={200}
              height={0}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col  md:items-start gap-2 w-full md:w-1/2">
            <h1 className="text-[24px] text-[#123E6C] font-[#173F69] font-[600] text-center md:text-start">
              What Should I Include in My Statement of Purpose?
            </h1>
            <div className="flex flex-row gap-2 items-center">
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="20"
                    fill="#FFA800"
                    fill-opacity="0.4"
                  />
                  <circle cx="20" cy="20" r="14" fill="#FFA800" />
                  <path
                    d="M19.8378 26.3721V15.2681H21.3258V26.3721H19.8378ZM17.5658 16.6121V15.2681H21.1658V16.6121H17.5658Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-[#707070]">
                Who are you, and why are you a good candidate for this program?
              </span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="20"
                    fill="#FFA800"
                    fill-opacity="0.4"
                  />
                  <circle cx="20" cy="20" r="14" fill="#FFA800" />
                  <path
                    d="M17.5978 25.4601L21.6938 21.1401C22.1098 20.7134 22.4352 20.3454 22.6698 20.0361C22.9045 19.7161 23.0698 19.4227 23.1658 19.1561C23.2725 18.8894 23.3258 18.6121 23.3258 18.3241C23.3258 17.7587 23.1445 17.3161 22.7818 16.9961C22.4192 16.6761 21.9498 16.5161 21.3738 16.5161C20.8085 16.5161 20.3125 16.6547 19.8858 16.9321C19.4592 17.1987 19.0805 17.6147 18.7498 18.1801L17.6938 17.3001C18.1312 16.5747 18.6592 16.0307 19.2778 15.6681C19.8965 15.2947 20.6112 15.1081 21.4218 15.1081C22.1045 15.1081 22.6965 15.2414 23.1978 15.5081C23.7098 15.7747 24.1045 16.1481 24.3818 16.6281C24.6592 17.1081 24.7978 17.6681 24.7978 18.3081C24.7978 18.7667 24.7392 19.1774 24.6218 19.5401C24.5152 19.9027 24.3178 20.2761 24.0298 20.6601C23.7525 21.0334 23.3632 21.4814 22.8618 22.0041L19.5498 25.4121L17.5978 25.4601ZM17.5978 26.3721V25.4601L18.8778 25.0281H25.0538V26.3721H17.5978Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-[#707070]">
                Why do you want to apply for this specific program?
              </span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="20"
                    fill="#FFA800"
                    fill-opacity="0.4"
                  />
                  <circle cx="20" cy="20" r="14" fill="#FFA800" />
                  <path
                    d="M21.0218 26.5321C20.2965 26.5321 19.6352 26.3987 19.0378 26.1321C18.4512 25.8547 17.9552 25.4547 17.5498 24.9321L18.5738 23.9081C18.8192 24.2814 19.1552 24.5801 19.5818 24.8041C20.0085 25.0174 20.4832 25.1241 21.0058 25.1241C21.4965 25.1241 21.9178 25.0334 22.2698 24.8521C22.6325 24.6601 22.9152 24.3934 23.1178 24.0521C23.3312 23.7107 23.4378 23.3161 23.4378 22.8681C23.4378 22.4094 23.3312 22.0147 23.1178 21.6841C22.9152 21.3427 22.6272 21.0814 22.2538 20.9001C21.8805 20.7187 21.4378 20.6281 20.9258 20.6281C20.7338 20.6281 20.5418 20.6441 20.3498 20.6761C20.1578 20.6974 19.9712 20.7347 19.7898 20.7881L20.4298 19.9241C20.6325 19.8281 20.8512 19.7534 21.0858 19.7001C21.3205 19.6467 21.5552 19.6201 21.7898 19.6201C22.3872 19.6201 22.9205 19.7587 23.3898 20.0361C23.8698 20.3134 24.2485 20.7027 24.5258 21.2041C24.8138 21.7054 24.9578 22.2867 24.9578 22.9481C24.9578 23.6521 24.7872 24.2761 24.4458 24.8201C24.1152 25.3534 23.6565 25.7747 23.0698 26.0841C22.4832 26.3827 21.8005 26.5321 21.0218 26.5321ZM19.7898 20.7881V19.8761L23.0378 16.1801L24.8298 16.1641L21.4858 19.9561L19.7898 20.7881ZM18.0778 16.6121V15.2681H24.8298V16.1641L23.5178 16.6121H18.0778Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-[#707070]">
                Where do you want your degree to take you?
              </span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="20"
                    fill="#FFA800"
                    fill-opacity="0.4"
                  />
                  <circle cx="20" cy="20" r="14" fill="#FFA800" />
                  <path
                    d="M17.5978 22.5481L21.6458 15.2681H23.3418L19.2138 22.5481H17.5978ZM17.5978 23.4761V22.5481L18.2378 22.1321H26.1098V23.4761H17.5978ZM23.0218 26.3721V19.0281H24.5098V26.3721H23.0218Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-[#707070]">
                How will your past experiences, including your educational
                background, help you to succeed?
              </span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="20"
                    fill="#FFA800"
                    fill-opacity="0.4"
                  />
                  <circle cx="20" cy="20" r="14" fill="#FFA800" />
                  <path
                    d="M21.5818 26.5321C20.8458 26.5321 20.1845 26.3614 19.5978 26.0201C19.0218 25.6787 18.5632 25.2201 18.2218 24.6441C17.8805 24.0681 17.7098 23.4281 17.7098 22.7241C17.7098 21.7427 18.0512 20.7667 18.7338 19.7961L21.9978 15.2681H23.7418L20.3978 19.8281L19.8538 20.1161C19.9818 19.8921 20.1365 19.7054 20.3178 19.5561C20.4992 19.3961 20.7232 19.2734 20.9898 19.1881C21.2565 19.1027 21.5712 19.0601 21.9338 19.0601C22.5845 19.0601 23.1712 19.2147 23.6938 19.5241C24.2272 19.8334 24.6538 20.2601 24.9738 20.8041C25.3045 21.3374 25.4698 21.9614 25.4698 22.6761C25.4698 23.3801 25.2938 24.0254 24.9418 24.6121C24.6005 25.1987 24.1312 25.6681 23.5338 26.0201C22.9472 26.3614 22.2965 26.5321 21.5818 26.5321ZM21.5818 25.1241C22.0298 25.1241 22.4298 25.0174 22.7818 24.8041C23.1445 24.5801 23.4272 24.2867 23.6298 23.9241C23.8432 23.5507 23.9498 23.1347 23.9498 22.6761C23.9498 22.2174 23.8432 21.8067 23.6298 21.4441C23.4272 21.0707 23.1445 20.7774 22.7818 20.5641C22.4298 20.3507 22.0298 20.2441 21.5818 20.2441C21.1338 20.2441 20.7285 20.3507 20.3658 20.5641C20.0138 20.7774 19.7312 21.0707 19.5178 21.4441C19.3152 21.8067 19.2138 22.2174 19.2138 22.6761C19.2138 23.1347 19.3152 23.5507 19.5178 23.9241C19.7312 24.2974 20.0138 24.5907 20.3658 24.8041C20.7285 25.0174 21.1338 25.1241 21.5818 25.1241Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-[#707070]">
                Intention of returning back to your Home Country
              </span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="20"
                    fill="#FFA800"
                    fill-opacity="0.4"
                  />
                  <circle cx="20" cy="20" r="14" fill="#FFA800" />
                  <path
                    d="M21.0378 26.5321C20.2805 26.5321 19.6032 26.3987 19.0058 26.1321C18.4192 25.8547 17.9232 25.4547 17.5178 24.9321L18.5418 23.9081C18.7872 24.2814 19.1232 24.5801 19.5498 24.8041C19.9872 25.0174 20.4725 25.1241 21.0058 25.1241C21.5072 25.1241 21.9445 25.0281 22.3178 24.8361C22.7018 24.6441 23.0005 24.3774 23.2138 24.0361C23.4378 23.6841 23.5498 23.2681 23.5498 22.7881C23.5498 22.2974 23.4432 21.8814 23.2298 21.5401C23.0165 21.1987 22.7285 20.9427 22.3658 20.7721C22.0138 20.5907 21.6245 20.5001 21.1978 20.5001C20.7605 20.5001 20.3605 20.5534 19.9978 20.6601C19.6458 20.7667 19.3098 20.9481 18.9898 21.2041L19.0058 20.2441C19.1872 20.0201 19.3952 19.8387 19.6298 19.7001C19.8645 19.5614 20.1312 19.4547 20.4298 19.3801C20.7285 19.3054 21.0752 19.2681 21.4698 19.2681C22.2378 19.2681 22.8885 19.4281 23.4218 19.7481C23.9552 20.0681 24.3605 20.5001 24.6378 21.0441C24.9258 21.5881 25.0698 22.1961 25.0698 22.8681C25.0698 23.5721 24.8938 24.2014 24.5418 24.7561C24.2005 25.3107 23.7258 25.7481 23.1178 26.0681C22.5098 26.3774 21.8165 26.5321 21.0378 26.5321ZM18.9898 21.2041L18.1738 20.3881L18.6698 15.2681H20.0458L19.4858 20.5321L18.9898 21.2041ZM18.9738 16.6121L18.6698 15.2681H24.5098V16.6121H18.9738Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-[#707070]">
                Why are you choosing this specific institution?
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* tips for writting a statement */}
      <div className="px-[20px] py-10 md:px-20 lg:px-40 flex flex-col gap-4 items-center max-w-7xl">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-[#123E6C] text-[30px] font-[600] max-w-[500px] text-center">
            Tips for Writing a Statement of Purpose for Canada
          </h1>
          <span className="text-[16px] text-[#505050] max-w-[400px] text-center">
            Before starting to write your statement of purpose, here are a few
            tips you should consider:
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2 p-4 rounded-md bg-[#F3F9FF]">
            <h1 className="text-[20px] text-[#123E6C] font-[600]">
              Keep things original.
            </h1>
            <span className="text-[#747272] text-[16px]">
              Never, under any circumstances, copy or purchase someone else’s
              work.
            </span>
          </div>
          <div className="flex flex-col gap-2 p-4 rounded-md bg-[#F3F9FF]">
            <h1 className="text-[20px] text-[#123E6C] font-[600] leading-5">
              Be clear about returning home.
            </h1>
            <span className="text-[#747272] text-[16px]">
              Avoid discussing any plans you may have to stay in Canada upon
              completing your program. This can be misconstrued and goes against
              student visa rules and regulations.
            </span>
          </div>
          <div className="flex flex-col gap-2 p-4 rounded-md bg-[#F3F9FF]">
            <h1 className="text-[20px] text-[#123E6C] font-[600] leading-5">
              Elaborate on your experiences.
            </h1>
            <span className="text-[#747272] text-[16px]">
              Go into detail about extracurricular activities, personal or
              educational accomplishments, and challenges you’ve overcome.
            </span>
          </div>
        </div>
      </div>

      {/* an example oof  introduction */}
      <div className="w-full px-[20px] max-w-7xl md:px-[100px] lg:px-[261px]  py-[51px] bg-sky-900 justify-start items-center inline-flex">
        <div className="self-stretch flex-col justify-start items-center gap-6 inline-flex">
          <div className="text-amber-500 text-lg font-semibold ">
            An example of an introduction to an SOP can look like this:
          </div>
          <div className="max-w-[739px] text-center text-white text-lg font-normal font-['Patrick Hand']">
            “My name is ___, and I’m applying to the Computer Science program at
            ___ University. I know I’ll be a great candidate for this program
            because of ___ and ___. I want to study in Canada, and specifically
            at ___ University, because of ___ and ___. After graduating with my
            degree, I plan to use my experiences to ___ and advance my career
            back home.”
          </div>
        </div>
      </div>

      {/*   steps for writting a statement purpose */}
      <div className="flex w-full px-[20px] md:px-10 lg:px-40 items-center flex-col gap-4 max-w-7xl py-20">
        <div className="w-[150px]    h-[47px] px-10 py-3 bg-yellow-50 justify-center items-center gap-2.5 inline-flex">
          <div className="w-[70px] text-center text-amber-500 text-lg font-medium ">
            Steps
          </div>
        </div>

        <h1 className="text-[32px] text-[#123E6C] font-bold max-w-[400px] text-center leading-7">
          Steps for Writing a Statement of Purpose
        </h1>
        {/* setp 1 */}
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="flex flex-row gap-2 items-center">
              <div>
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="45" height="45" rx="8" fill="#E2F0FF" />
                  <path
                    d="M22.0933 29V16.346H24.5053V29H22.0933ZM19.6093 18.47V16.346H24.3253V18.47H19.6093Z"
                    fill="#123E6C"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[20px] text-[#123E6C]">
                  Start with an Outline
                </h1>
                <span className="text-[16px] text-black">
                  Begin by asking yourself the following questions:
                </span>
              </div>
            </div>
            <div className="flex flex-col py-4 gap-2 px-4">
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#123E6C" />
                  </svg>
                </div>
                <span className="text-[16px] text-[#000]">
                  Why do I want to study in Canada?”
                </span>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#123E6C" />
                  </svg>
                </div>
                <span className="text-[16px] text-[#000]">
                  Why do I want to study in my program and institution of
                  choice?
                </span>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#123E6C" />
                  </svg>
                </div>
                <span className="text-[16px] text-[#000]">
                  What experiences or prerequisites do I have that will help me
                  when studying this program in Canada?”
                </span>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#123E6C" />
                  </svg>
                </div>
                <span className="text-[16px] text-[#000]">
                  What will I have gained when I return home after studying in
                  Canada?”
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div className="flex flex-col">
              <span className="text-[16px]">
                Make a list of all the answers you come up with. Think about if
                there was anything academic or personal in your life that
                contributed to your reasons. Some common reasons include
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#123E6C" />
                  </svg>
                </div>
                <span className="text-[16px] text-[#000]">
                  Past and current academic experiences
                </span>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#123E6C" />
                  </svg>
                </div>
                <span className="text-[16px] text-[#000]">
                  Past or current personal experiences
                </span>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#123E6C" />
                  </svg>
                </div>
                <span className="text-[16px] text-[#000]">
                  Work and volunteer experience
                </span>
              </div>
              <div className="p-4 rounded-md bg-[#123E6C] flex flex-col gap-2">
                <h1 className="text-[18px] text-[#FFA800]">Tip</h1>
                <span className="text-white font-[400] leading-5">
                  When providing your personal or academic information, be as
                  accurate as possible. This includes addressing any gaps in
                  your education.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* setp 2 */}
        <div className="max-w-7xl py-10 w-full flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="flex flex-row gap-2 items-center">
              <div>
                <svg
                  width="45"
                  height="46"
                  viewBox="0 0 45 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="45" height="45" rx="8" fill="#E2F0FF" />
                  <path
                    d="M17.4934 28.096L22.2634 23.11C22.5994 22.75 22.8694 22.432 23.0734 22.156C23.2894 21.868 23.4454 21.598 23.5414 21.346C23.6374 21.082 23.6854 20.818 23.6854 20.554C23.6854 20.026 23.5114 19.612 23.1634 19.312C22.8274 19.012 22.3894 18.862 21.8494 18.862C21.2974 18.862 20.8054 19.006 20.3734 19.294C19.9534 19.582 19.5574 20.038 19.1854 20.662L17.5114 19.24C18.0154 18.388 18.6394 17.746 19.3834 17.314C20.1394 16.87 21.0034 16.648 21.9754 16.648C22.8034 16.648 23.5234 16.81 24.1354 17.134C24.7594 17.458 25.2394 17.908 25.5754 18.484C25.9114 19.06 26.0794 19.732 26.0794 20.5C26.0794 21.016 26.0134 21.484 25.8814 21.904C25.7614 22.324 25.5514 22.744 25.2514 23.164C24.9634 23.572 24.5614 24.034 24.0454 24.55L20.5714 28.096H17.4934ZM17.4934 29.5V28.096L19.5814 27.376H26.3494V29.5H17.4934Z"
                    fill="#123E6C"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[20px] text-[#123E6C]">Drafting Time</h1>
                <span className="text-[16px] text-black">
                  Now that you’ve come up with an outline, it’s time to start
                  drafting all the information you’ve gathered! Start with a
                  structure that includes:
                </span>
              </div>
            </div>
            {/* div list here */}
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div className="flex  flex-col gap-2 items-center">
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#123E6C" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-[600] text-[16px] text-black">
                    An introductory paragraph.
                  </h1>

                  <span className="text-[16px] text-[#000]">
                    Your introduction will tell the institution who you are, and
                    what your background is.
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#123E6C" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-[600] text-[16px] text-black">
                    Body paragraphs
                  </h1>

                  <span className="text-[16px] text-[#000]">
                    Each body paragraph should elaborate on one main point.
                    Also, be sure to list your experiences in chronological
                    order.
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#123E6C" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-[600] text-[16px] text-black">
                    Conclusion.
                  </h1>

                  <span className="text-[16px] text-[#000]">
                    This is where you’ll briefly summarize all the information
                    presented in your SOP. It’s also an excellent opportunity to
                    thank the person reading your application!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* middel */}
        <div className="w-full px-[20px] max-w-7xl   justify-start items-center gap-16 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex-col justify-start items-start gap-[9px] inline-flex">
            <div className=" text-black text-lg font-normal ">
              While creating a structure, keep the majority of your word count
              in your body paragraphs.{" "}
            </div>
            <div className="text-black text-lg font-semibold ">
              Most SOPs are between 800–2,500 words.
            </div>
            <div className=" text-black text-lg font-normal ">
              Check with your institution to confirm their preferred SOP word
              count.
            </div>
          </div>
          <div className="w-full md:w-1/2 p-6 bg-sky-900 rounded-2xl flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="flex-col justify-start items-start gap-1.5 flex">
              <div className="text-amber-500 text-lg font-medium ">Tip</div>
              <div className=" text-white text-base font-medium ">
                Try to write your SOP at a level that is equivalent to your
                English test scores.
              </div>
            </div>
          </div>
        </div>

        {/* step 3 */}
        <div className="max-w-7xl py-10 w-full flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="flex flex-row gap-2 items-center">
              <div>
                <svg
                  width="45"
                  height="46"
                  viewBox="0 0 45 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="45" height="45" rx="8" fill="#E2F0FF" />
                  <path
                    d="M21.5338 29.68C20.6818 29.68 19.9018 29.53 19.1938 29.23C18.4858 28.918 17.8918 28.474 17.4118 27.898L19.0318 26.296C19.2718 26.656 19.6138 26.944 20.0578 27.16C20.5018 27.376 20.9818 27.484 21.4978 27.484C21.9778 27.484 22.3918 27.4 22.7398 27.232C23.0878 27.052 23.3578 26.806 23.5498 26.494C23.7538 26.17 23.8558 25.798 23.8558 25.378C23.8558 24.934 23.7538 24.556 23.5498 24.244C23.3578 23.932 23.0758 23.692 22.7038 23.524C22.3318 23.356 21.8878 23.272 21.3718 23.272C21.1438 23.272 20.9098 23.29 20.6698 23.326C20.4298 23.35 20.2258 23.392 20.0578 23.452L21.1378 22.084C21.4378 21.988 21.7318 21.91 22.0198 21.85C22.3198 21.778 22.5958 21.742 22.8478 21.742C23.4958 21.742 24.0778 21.898 24.5938 22.21C25.1218 22.51 25.5358 22.942 25.8358 23.506C26.1478 24.058 26.3038 24.712 26.3038 25.468C26.3038 26.308 26.1058 27.046 25.7098 27.682C25.3138 28.306 24.7558 28.798 24.0358 29.158C23.3278 29.506 22.4938 29.68 21.5338 29.68ZM20.0578 23.452V22.048L23.2978 18.286L26.1058 18.25L22.7578 22.084L20.0578 23.452ZM18.1138 18.97V16.846H26.1058V18.25L24.1078 18.97H18.1138Z"
                    fill="#123E6C"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[20px] text-[#123E6C]">Add Your Proof</h1>
                <span className="text-[16px] text-black">
                  Once you’ve finished drafting your SOP, return to the
                  experiences you’ve listed in it, and ensure you include
                  supporting documentation. It’s especially important that your
                  academic history is accurate and lines up with your reasons
                  for applying.
                </span>
              </div>
            </div>
            {/* div list here */}
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div className="flex  flex-col gap-2 ">
              <span className="text-[18px] text-[#123E6C] font-[500] text-start">
                Supporting documentation can include:
              </span>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#123E6C" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-[600] text-[16px] text-black">
                    Proof of Financial Support
                  </h1>

                  <span className="text-[16px] text-[#000]">
                    These show proof of how you’ll be able to support yourself
                    financially as a student living in Canada.
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#123E6C" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-[600] text-[16px] text-black">Resume</h1>

                  <span className="text-[16px] text-[#000]">
                    This provides more information about your professional
                    experiences and skills.
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#123E6C" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-[600] text-[16px] text-black">
                    Awards and certificates.
                  </h1>

                  <span className="text-[16px] text-[#000]">
                    These provide proof of any awards noted in your SOP.
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#123E6C" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-[600] text-[16px] text-black">
                    Medical or employment records.
                  </h1>

                  <span className="text-[16px] text-[#000]">
                    These records can help back up your given reasons for any
                    study gaps.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* setp 4 */}
        <div className="max-w-7xl py-10 w-full flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="flex flex-row gap-2 items-center">
              <div>
                <svg
                  width="45"
                  height="46"
                  viewBox="0 0 45 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="45" height="45" rx="8" fill="#E2F0FF" />
                  <path
                    d="M17.5184 25.036L21.8384 16.846H24.5384L20.1104 25.036H17.5184ZM17.5184 26.476V25.036L18.4184 24.334H27.4904V26.476H17.5184ZM23.4944 29.5V21.436H25.9064V29.5H23.4944Z"
                    fill="#123E6C"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[20px] text-[#123E6C]">
                  Edit, Edit, Edit!
                </h1>
                <span className="text-[16px] text-black">
                  After brainstorming, drafting, and adding supporting
                  documentation to your SOP, give yourself a well-deserved pat
                  on the back. You’re all done!
                </span>
              </div>
            </div>
            <div className="px-0 md:px-14">
              <span className="text-[16px] text-black ">
                Well—almost. While the majority of the work is done, it’s also
                extremely important to edit your SOP. Some tips to keep in mind:
              </span>
            </div>
            {/* div list here */}
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div className="flex  flex-col gap-2 ">
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#123E6C" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[16px] text-[#000]">
                    Make sure your information is accurate, is in chronological
                    order, and has supporting documentation where needed.
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#123E6C" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[16px] text-[#000]">
                    Read it aloud to confirm your writing flows well and makes
                    sense.
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#123E6C" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[16px] text-[#000]">
                    Check that your grammar and spelling are correct.
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#123E6C" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[16px] text-[#000]">
                    Ask a friend or family member to give you their feedback.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-[20px] max-w-7xl   justify-start items-center gap-16 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex-col justify-start items-start gap-[9px] inline-flex">
            <div className=" text-black text-[16px] font-normal ">
              Well—almost. While the majority of the work is done, it’s also
              extremely important to edit your SOP. Some tips to keep in mind:
            </div>
          </div>
          <div className="w-full md:w-1/2  rounded-2xl flex-col justify-start items-start gap-2.5 inline-flex">
            <span className=" text-black text-[16px] font-normal ">
              Now that we’ve broken the process down, taking the SOP writing
              process step-by-step should help make it a little easier. Follow
              the guide we’ve highlighted in this blog, and you’ll be sure to
              write an amazing statement of purpose for Canada. Good luck!
            </span>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Sop;
