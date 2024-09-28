"use client";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
const Success = () => {
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };
  return (
    <div className="absolute z-50  w-full h-full flex flex-col items-center gap-20  ">
      <Navbar />
      <div className=" md:w-[50%] w-[90%]  bg-white shadow-gray-500 border  items-center justify-center  rounded-md flex flex-col gap-y-4 p-10">
        <div className="p-4 rounded-full border-2 border-black/20">
          <FaCheck size={90} color="green" />
        </div>
        <h1 className="text-[24px] font-[200] text-green-500">Success Apply</h1>
        <p className="text-center max-w-[300px] text-black/40">
          Thank you for applying. We will review your application and get back
          to you shortly.
        </p>
        {/* <a href="/"> */}
        <button
          onClick={goHome}
          className="p-3 flex flex-row gap-2 items-center bg-green text-white font-[200] rounded-md"
        >
          <IoMdArrowRoundBack size={20} />
          Back to Home
        </button>
        {/* </a> */}
      </div>
      <Footer />
    </div>
  );
};

export default Success;
