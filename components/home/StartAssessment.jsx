"use client";
import React, { useEffect, useRef } from "react";

const StartAssessment = ({ onClose }) => {
  const modalRef = useRef();

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    // Add event listener when the modal is open
    document.addEventListener("mousedown", handleOutsideClick);

    // Remove event listener when the modal is closed
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div className="absolute  w-full h-full flex flex-col justify-center items-center">
      <div
        ref={modalRef}
        className="w-[90%] md:w-[50%]  bg-white shadow-lg  rounded-md flex flex-col gap-y-4 p-10"
      >
        <div className="flex flex-row justify-between w-full">
          <h1 className="text-[18px] md:text-[26px] text-[#07294D] font-[600] max-w-[300px] leading-7">
            BrightForth Career Consulting Assessment
          </h1>
          <div className=" cursor-pointer " onClick={() => onClose()}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2C8.2 2 2 8.2 2 16C2 23.8 8.2 30 16 30C23.8 30 30 23.8 30 16C30 8.2 23.8 2 16 2ZM16 28C9.4 28 4 22.6 4 16C4 9.4 9.4 4 16 4C22.6 4 28 9.4 28 16C28 22.6 22.6 28 16 28Z"
                fill="black"
              />
              <path
                d="M21.4 23L16 17.6L10.6 23L9 21.4L14.4 16L9 10.6L10.6 9L16 14.4L21.4 9L23 10.6L17.6 16L23 21.4L21.4 23Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="">
          <span className="text-black font-[200]">
            Our assessments are designed to empower students in making well
            confirmed educational choices. By evaluating your academic strengths
            and financial capabilities, we can provide personalized
            recommendations tailored to your unique profile. This ensures that
            the educational paths you explore align not only with your academic
            aspirations but also with your budgetary considerations. Our goal is
            to guide you towards choices that optimize both academic success and
            financial feasibility, fostering a balanced and fulfilling
            educational journey.
          </span>
        </div>
        <a
          href="/assessment"
          className="flex justify-center px-2 py-3 w-[200px] mx-auto bg-[#0B5CFF] rounded-md"
        >
          Start Assessment
        </a>
      </div>
    </div>
  );
};

export default StartAssessment;
