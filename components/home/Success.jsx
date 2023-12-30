"use client";
import React, { useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const Success = ({ onClose }) => {
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
    <div className="absolute z-50  w-full h-full flex flex-col justify-center items-center">
      <div
        ref={modalRef}
        className="w-[90%] md:w-[50%]  bg-white shadow-gray-500 shadow-md items-center justify-center  rounded-md flex flex-col gap-y-4 p-10"
      >
        <div className="p-4 rounded-full border-2 border-black/20">
          <FaCheck size={90} color="green" />
        </div>
        <h1 className="text-[24px] font-[200] text-green-500">Success Apply</h1>
        <p className="text-center max-w-[300px] text-black/40">
          thank you ipsum dolor sit amet consectetur adipisicing elit. quo ex
        </p>
        <a href="/">
          <button className="p-3 flex flex-row gap-2 items-center bg-green-500 text-white font-[200] rounded-md">
            <IoMdArrowRoundBack size={20} />
            Back to Home
          </button>
        </a>
      </div>
    </div>
  );
};

export default Success;
