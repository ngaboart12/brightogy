"use client";
import React, { useState } from "react";
import Image from "next/image";
import LinkComponent2 from "../LinkComponet2";

import EnquiryForm from "../Landing/EnquiryForm";
import "../dropdown.css";
import Navbar from "components/Landing/Navbar";


const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="relative overflow-hidden px-[10px] sm:px-[50px] md:px-[100px] py-[10px] min-h-[100vh]  flex flex-col  w-full items-center bg-blueBack">

      <div className={`w-full min-h-[100vh] bg-black/40 fixed z-40 transition-all  ${isModalOpen ? "bottom-0   " : "bottom-[350vh] "} `}>
        <EnquiryForm onClose={closeModal}/>
      </div>


      <div className="absolute w-full h-full top-0 z-10">
        <Image
          src={`/image/Banner.svg`}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-[10px] w-full h-full z-20 justify-between ">
        <Navbar />

        <div className="w-full flex flex-col lg:flex-row md:items-center gap-[20px] ">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-[10px]">
            <div className="flex flex-row items-center gap-[10px]">
              <span className="text-[18px] text-white font-[700] font-Kumbh">
                Welcome To brightforth{" "}
              </span>
              <div>
                <svg
                  width="120"
                  height="12"
                  viewBox="0 0 220 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM6 7H220V5H6V7Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-[32px] md:text-[42px] max-w-[540px] font-[900] text-center lg:text-start text-white font-baloo leading-[44px]">
              Your Personalized <span className=" text-greenText"> Guide </span>
              to an Extraordinary{" "}
              <span className=" text-greenText"> Future</span>
            </h1>

            <span className="text-white text-center lg:text-start text-[16px] leading-6 font-[500] font-poppins">
              Explore a World of Education,Contact us for a free consultation
              Because we are leading educational consultant popularly recognized
            </span>

            <div className="flex flex-row gap-[20px] items-center">
              <button onClick={openModal} className="flex flex-row py-[16px] px-[20px] md:px-[40px] rounded-[14px] text-[16px] bg-green text-white gap-[10px] items-center">
                Enquire now
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M19.75 11.7256L4.75 11.7256"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.7002 5.701L19.7502 11.725L13.7002 17.75"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </button>
              <a href="/application">

              <button className="flex flex-row py-[16px] px-[20px] md:px-[40px] rounded-[14px] text-[16px] bg-white text-greenText gap-[10px] items-center">
                Aplly now
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                      opacity="0.4"
                      d="M19.75 11.7256L4.75 11.7256"
                      stroke="#7DB834"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      />
                    <path
                      d="M13.7002 5.701L19.7502 11.725L13.7002 17.75"
                      stroke="#7DB834"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      />
                  </svg>
                </div>
              </button>
                      </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 md:p-[50px] ld:p-[100px] px-[50px]">
            <div className="w-full h-full">

            <Image src={`/image/banner-circle.svg`} width={600} height={600} className="w-full" />
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Hero;
