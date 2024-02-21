"use client";
import React, { useState } from "react";
import Image from "next/image";
import LinkComponent2 from "../../components/LinkComponet2";
import Navbar from "../../components/Navbar";

import { GrFormNext } from "react-icons/gr";
import Footer from "components/Landing/Footer";

const Ielts = () => {
  const [whichOpen, setWhichOpen] = useState();
  const [answer, setAnswer] = useState(
    "IELTS scores are valid for 2 years from the date of taking the test"
  );
  const [answer2, setAnswer2] = useState(
    "IELTS scores are valid for 2 years from the date of taking the test"
  );
  const [sectionOpened, setSectionOpened] = useState();
  const faqs = [
    {
      question: " How long are IELTS scores valid?",
      answer:
        " IELTS scores are valid for 2 years from the date of taking the test",
    },
    {
      question: "When can I reattempt the IELTS test?",
      answer:
        "You can reattempt the IELTS at any point in time. However, before reattempting, it is best to do a post-mortem analysis of what made you score less the first time. At BrightForth, our expert coaches can guide you on your specific weak points and suggest strategies for improving your performance.",
    },
  ];
  const sections = [
    {
      title: "Listening Section",
      disc: "Listening consists of 40 questions divided among four sections. The total duration for all the sections together is 30 minutes and an additional 10 minutes are given for the test taker to transfer his answers to the answer sheet.",
    },
    {
      title: " Reading Section",
      disc: "The reading section comprises 40 questions which are set around three passages. The section has to be completed within 60 minutes and aims at evaluating the reading and comprehension of reading matter in many different areas. The section has passages from many different genres of reading from both nonfiction and fiction.",
    },
    {
      title: "Writing section",
      disc: "The writing section consists of two tasks",
      tasks: {
        first:
          "Involves interpretation of a diagram for the academic test and the other which involves writing a letter to an imaginary person for the general test. The letter should contain 150 words approximately and should be completed within 20 minutes",
        seconde:
          "consists of writing a 250-word essay on a given topic which should be completed within 40 minutes",
      },
    },
    {
      title: "Speaking section",
      disc: "This section is held as a personal interview and is of 11 minutes in duration. The test is not held on the actual day of IELTS but either a day before or after. The segment consists of three parts which are classified as personal, long talk, and discussion. The test is interactive in nature and you will be talking to an examiner. The personal section consists of the interviewer introducing himself and asking you a few questions about yourself. The long talk involves speaking at length on a given topic. In the discussion segment, you will have an interactive talk with the interviewer regarding the topic you have spoken about.",
    },
  ];
  const openAnswer = (answer) => {
    setAnswer(answer);
  };
  const openAnswer2 = (answer) => {
    setAnswer2(answer);
  };
  return (
    <div className="flex flex-col items-center  w-full overflow-hidden bg-white relative">
      {/* <LinkComponent2 /> */}
      <Navbar />

      {/* headder */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10 px-[20px] sm:px-20 md:px-20 py-20">
        <div className="w-full md:w-1/2 flex flex-col gap-2 items-center md:text-start">
          <h1 className="text-[30px] text-[#123E6C] font-bold">
            IELTS Training
          </h1>
          <p className="text-[16px] text-black">
            (International English Language Testing System)
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <span className="text-[#555555] text-[16px]">
            IELTS Training – IELTS is a test that evaluates your level of
            proficiency in the English language. It is similar to tests such as
            TOEFL and is generally taken by prospective students who plan to
            study abroad in countries that predominantly speak English. It is
            also a mandatory part of the immigration process for certain
            countries such as Canada and Australia.
          </span>
        </div>
      </div>

      {/* hero */}
      <div className="flex px-[20px] md:px-10 lg:px-40 flex-col md:flex-row gap-10 pb-10">
        <div className="w-full md:w-1/2">
          <Image
            src={`/image/ielts.png`}
            width={200}
            height={0}
            alt=""
            className="w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 py-5">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h1 className="text-[24px] font-[600] text-[#173F69]">
              IELTS Types
            </h1>
            <span className="text-[18px] font-[600] text-blueBack text-center md:text-start">
              The IELTS is generally divided into types the Academic and general
              tests
            </span>
            <div className="flex flex-row gap-2 items-center">
              <div>
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="46" height="45" rx="8" fill="#E0EFFF" />
                  <path
                    d="M22.808 30V17.292H25.616V30H22.808ZM20.36 19.686V17.292H25.436V19.686H20.36Z"
                    fill="#07294D"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-[#707070] font-[300]">
                The IELTS academic is specially made for students who intend to
                take up an undergraduate or postgraduate program in any
                English-speaking nation.
              </span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div>
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="46" height="45" rx="8" fill="#E0EFFF" />
                  <path
                    d="M18.432 28.416L23.31 23.376C23.61 23.076 23.85 22.8 24.03 22.548C24.21 22.296 24.342 22.062 24.426 21.846C24.51 21.618 24.552 21.39 24.552 21.162C24.552 20.67 24.39 20.286 24.066 20.01C23.754 19.722 23.34 19.578 22.824 19.578C22.32 19.578 21.864 19.716 21.456 19.992C21.06 20.256 20.676 20.694 20.304 21.306L18.414 19.668C18.918 18.816 19.56 18.174 20.34 17.742C21.12 17.31 22.014 17.094 23.022 17.094C23.898 17.094 24.654 17.256 25.29 17.58C25.938 17.904 26.436 18.366 26.784 18.966C27.144 19.566 27.324 20.268 27.324 21.072C27.324 21.576 27.258 22.044 27.126 22.476C26.994 22.896 26.778 23.316 26.478 23.736C26.19 24.144 25.8 24.594 25.308 25.086L21.924 28.452L18.432 28.416ZM18.432 30V28.416L20.826 27.588H27.576V30H18.432Z"
                    fill="#07294D"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-[#707070] font-[300]">
                The IELTS general is taken by potential immigrants who aspire to
                migrate to English speaking countries
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature od  IELTS */}
      <div className="flex flex-col px-[20px] md:px-20 lg:px-40 gap-6 w-full bg-blueBack py-10 items-center max-w-7xl ">
        <h1 className="text-[24px] font-normal text-[#FFA800]">
          Features of IELTS
        </h1>
        <div className="flex flex-col items-center gap-4">
          <div>
            <svg
              width="46"
              height="45"
              viewBox="0 0 46 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="46" height="45" rx="8" fill="#0A3563" />
              <path
                d="M22.808 29.5V16.792H25.616V29.5H22.808ZM20.36 19.186V16.792H25.436V19.186H20.36Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="text-white max-w-[426px] text-center font-[300] leading-4">
            There are no minimum passing marks for the test. However, each
            university will have its required score for the test.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20 w-[90%] items-start">
          <div className="flex flex-row gap-2 items-center">
            <span className="text-[16px] text-end font-[300] text-white">
              You will be assessed for your <br /> English language skills at
              listening, reading, and writing.
            </span>
            <div>
              <svg
                width="46"
                height="45"
                viewBox="0 0 46 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="46" height="45" rx="8" fill="#0A3563" />
                <path
                  d="M20.432 27.916L25.31 22.876C25.61 22.576 25.85 22.3 26.03 22.048C26.21 21.796 26.342 21.562 26.426 21.346C26.51 21.118 26.552 20.89 26.552 20.662C26.552 20.17 26.39 19.786 26.066 19.51C25.754 19.222 25.34 19.078 24.824 19.078C24.32 19.078 23.864 19.216 23.456 19.492C23.06 19.756 22.676 20.194 22.304 20.806L20.414 19.168C20.918 18.316 21.56 17.674 22.34 17.242C23.12 16.81 24.014 16.594 25.022 16.594C25.898 16.594 26.654 16.756 27.29 17.08C27.938 17.404 28.436 17.866 28.784 18.466C29.144 19.066 29.324 19.768 29.324 20.572C29.324 21.076 29.258 21.544 29.126 21.976C28.994 22.396 28.778 22.816 28.478 23.236C28.19 23.644 27.8 24.094 27.308 24.586L23.924 27.952L20.432 27.916ZM20.432 29.5V27.916L22.826 27.088H29.576V29.5H20.432Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div>
              <svg
                width="46"
                height="45"
                viewBox="0 0 46 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="46" height="45" rx="8" fill="#0A3563" />
                <path
                  d="M24.554 29.698C23.678 29.698 22.874 29.548 22.142 29.248C21.41 28.936 20.792 28.492 20.288 27.916L22.106 26.098C22.334 26.434 22.664 26.71 23.096 26.926C23.54 27.13 24.008 27.232 24.5 27.232C24.944 27.232 25.328 27.154 25.652 26.998C25.976 26.842 26.228 26.62 26.408 26.332C26.6 26.044 26.696 25.702 26.696 25.306C26.696 24.91 26.6 24.574 26.408 24.298C26.228 24.01 25.958 23.788 25.598 23.632C25.25 23.476 24.83 23.398 24.338 23.398C24.11 23.398 23.87 23.416 23.618 23.452C23.378 23.476 23.174 23.518 23.006 23.578L24.248 22.012C24.584 21.916 24.902 21.838 25.202 21.778C25.514 21.706 25.802 21.67 26.066 21.67C26.714 21.67 27.296 21.826 27.812 22.138C28.328 22.438 28.736 22.87 29.036 23.434C29.348 23.986 29.504 24.646 29.504 25.414C29.504 26.254 29.294 26.998 28.874 27.646C28.466 28.294 27.89 28.798 27.146 29.158C26.414 29.518 25.55 29.698 24.554 29.698ZM23.006 23.578V22.012L26.102 18.376L29.27 18.358L26.048 22.03L23.006 23.578ZM21.08 19.186V16.792H29.27V18.358L27.056 19.186H21.08Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="text-[16px] text-start font-[300] text-white">
              The IELTS is used for determining eligibility for admission and
              scholarship.
            </span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <span className="text-[16px] text-end font-[300] text-white">
              The total time for taking the test is around four and a half hours
              including the time for checking in?
            </span>
            <div>
              <svg
                width="46"
                height="45"
                viewBox="0 0 46 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="46" height="45" rx="8" fill="#0A3563" />
                <path
                  d="M20.378 25.09L24.554 16.792H27.632L23.366 25.09H20.378ZM20.378 26.674V25.09L21.314 24.28H30.566V26.674H20.378ZM26.372 29.5V21.634H29.144V29.5H26.372Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div>
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="46" height="45" rx="8" fill="#0A3563" />
                <path
                  d="M24.572 30.198C23.696 30.198 22.874 30.048 22.106 29.748C21.35 29.436 20.72 28.992 20.216 28.416L22.052 26.598C22.28 26.934 22.61 27.21 23.042 27.426C23.486 27.63 23.966 27.732 24.482 27.732C24.938 27.732 25.334 27.654 25.67 27.498C26.006 27.33 26.27 27.096 26.462 26.796C26.654 26.484 26.75 26.124 26.75 25.716C26.75 25.296 26.654 24.936 26.462 24.636C26.27 24.336 26 24.108 25.652 23.952C25.316 23.784 24.932 23.7 24.5 23.7C24.068 23.7 23.672 23.76 23.312 23.88C22.952 23.988 22.622 24.156 22.322 24.384L22.556 22.584C22.832 22.368 23.096 22.194 23.348 22.062C23.6 21.918 23.876 21.81 24.176 21.738C24.476 21.666 24.83 21.63 25.238 21.63C26.174 21.63 26.96 21.822 27.596 22.206C28.244 22.59 28.73 23.1 29.054 23.736C29.39 24.372 29.558 25.074 29.558 25.842C29.558 26.682 29.348 27.432 28.928 28.092C28.52 28.752 27.944 29.268 27.2 29.64C26.456 30.012 25.58 30.198 24.572 30.198ZM22.322 24.384L21.098 23.25L21.71 17.292H24.266L23.6 23.196L22.322 24.384ZM22.088 19.686L21.71 17.292H28.856V19.686H22.088Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="text-[16px] text-start font-[300] text-white">
              A break of 10 minutes will be given to students after they
              complete the Reading and Listening sections of IELTS What are the
              sections in IELTS?
            </span>
          </div>
        </div>
      </div>

      {/* Whata are the sectiion in IELTS */}

      <div className="flex w-full px-[20px] md:px-20 lg:px-40 flex-col gap-10 text-center max-w-7xl py-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-[24px] text-blueBack font-[600]">
            What are the sections in IELTS?
          </h1>
          <span className="text-[14px] text-[#4D4D4D]">
            ELTS examination is divided into the following segments
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            {faqs.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-4 w-full cursor-pointer bg-sky-900 rounded-lg flex-col justify-start items-start gap-2.5 flex"
                >
                  {answer === item.answer ? (
                    <div className="justify-between items-center gap-4 inline-flex w-full">
                      <div className="max-w-[408px] h-12 text-white text-lg font-normal ">
                        {item.question}
                      </div>
                      <div className=" relative origin-top-left ">
                        <GrFormNext
                          size={30}
                          color="white"
                          className={`${
                            answer === item.answer ? "rotate-90" : ""
                          } transition-all`}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => openAnswer(item.answer)}
                      className="justify-between items-center gap-4 inline-flex w-full"
                    >
                      <div className="max-w-[408px] h-12 text-white text-lg font-normal ">
                        {item.question}
                      </div>
                      <div className=" relative origin-top-left ">
                        <GrFormNext
                          size={30}
                          color="white"
                          className={`${
                            answer === item.answer ? "rotate-90" : ""
                          } transition-all`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex felx-col gap-2 w-full md:w-1/2">
            <span className="text-[14px] text-[#555555] text-start">
              {answer}
            </span>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="py-20 w-full items-center">
        <div className="flex flex-col gap-6 w-full bg-blueBack pt-20 pb-40 px-[20px] md:px-20 lg:px-40 items-center">
          <h1 className="text-[#FFA800] text-[24px] font-[600]">
            Frequently Asked Question
          </h1>
          <div className="flex w-full flex-col md:flex-row gap-10">
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              {faqs.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="p-4 w-full cursor-pointer bg-sky-900 rounded-lg flex-col justify-start items-start gap-2.5 flex"
                  >
                    {answer2 === item.answer ? (
                      <div className="justify-between items-center gap-4 inline-flex w-full">
                        <div className="max-w-[408px] h-12 text-white text-lg font-normal ">
                          {item.question}
                        </div>
                        <div className=" relative origin-top-left ">
                          <GrFormNext
                            size={30}
                            color="white"
                            className={`${
                              answer2 === item.answer ? "rotate-90" : ""
                            } transition-all`}
                          />
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={() => openAnswer2(item.answer)}
                        className="justify-between items-center gap-4 inline-flex w-full"
                      >
                        <div className="max-w-[408px] h-12 text-white text-lg font-normal ">
                          {item.question}
                        </div>
                        <div className=" relative origin-top-left ">
                          <GrFormNext
                            size={30}
                            color="white"
                            className={`${
                              answer2 === item.answer ? "rotate-90" : ""
                            } transition-all`}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <span className="text-white font-[300] text-[14px]">
                {answer2}
              </span>
            </div>
          </div>
          {/* <div className="  justify-start items-center gap-[98px] flex flex-col">
            <div className="justify-start items-start flex">
              <div className="w-[152px] h-[7px] bg-sky-900" />
              <div className="w-[151px] h-[7px] bg-slate-500" />
            </div>
            <div className="justify-start items-start gap-6 flex">
              <div className="w-10 h-10 p-2 bg-sky-900 rounded-lg justify-center items-center flex">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0303 4.46967C16.2966 4.73594 16.3208 5.1526 16.1029 5.44621L16.0303 5.53033L9.561 12L16.0303 18.4697C16.2966 18.7359 16.3208 19.1526 16.1029 19.4462L16.0303 19.5303C15.7641 19.7966 15.3474 19.8208 15.0538 19.6029L14.9697 19.5303L7.96967 12.5303C7.7034 12.2641 7.6792 11.8474 7.89705 11.5538L7.96967 11.4697L14.9697 4.46967C15.2626 4.17678 15.7374 4.17678 16.0303 4.46967Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="w-10 h-10 p-2 bg-sky-900 rounded-lg justify-center items-center flex">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* footer */}

      <Footer/>
    </div>
  );
};

export default Ielts;
