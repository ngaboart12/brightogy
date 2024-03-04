"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "../components/dropdown.css";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";

import Hero from "../components/home/Hero";
import ContactUS from "../components/Landing/ContactUS";
import StartAssessment from "../components/home/StartAssessment";
import Slider from "components/Landing/Slider";
import OurlBlog from "components/home/OurlBlog";
import Ourspecialoffers from "components/home/Ourspecialoffers";
import Universties from "components/Landing/Universties";
import Services from "components/Landing/Services";
import FindeBetterProgram from "components/Landing/FindeBetterProgram";
import StepToFlow from "components/Landing/StepToFlow";
import WhyChooseUS from "components/Landing/WhyChooseUS";
import PartenerBrightForth from "components/Landing/PartenerBrightForth";
import Footer from "components/Landing/Footer";

export default function Home() {
  const [activeDot, setActiveDot] = useState(0);

  const [isModalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChange", () => {
        setActiveDot(swiperInstance.realIndex);
      });
    }

    AOS.init({ duration: 2000 });

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange");
      }
    };
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const countries = [
    { name: "USA", imageSrc: "/image/usa.jpg" },
    { name: "CANADA", imageSrc: "/image/canada.jpg" },
    { name: "CHINA", imageSrc: "/image/china.avif" },
    { name: "POLAND", imageSrc: "/image/poland.jpg" },
    { name: "UK", imageSrc: "/image/up1.png" },
    // Add more countries as needed
  ];
  const swiperRef = useRef(null);

  const handleNextClick = () => {
    // Access the Swiper instance and then call slideNext()
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const handlePrevClick = () => {
    // Access the Swiper instance and then call slideNext()
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const swiperOptions = {
    spaceBetween: 50,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  };

  return (
    <div className="flex flex-col gap-[40px] items-center justify-center  w-full overflow-hidden  ">
      <Hero />
      

      {/* services offer */}
      <Universties />
      <Services />
      <FindeBetterProgram />
      <StepToFlow />
      <WhyChooseUS />
      <OurlBlog />

      <div className=" max-w-7xl flex flex-col md:flex-row gap-4 w-full items-center py-10 md:py-40 px-[10px] md:px-20">
        <div className="flex flex-col gap-4  ">
          <h1 className="text-[32px] text-[#123E6C] font-[700] text-center md:text-start leading-8 ">
            OUR TOP <br className="flex md:hidden" /> DESTINATIONS
          </h1>
          <p className="text-center md:text-start text-[#707070] text-[16px] font-[300]  leading-5 ">
            Now, we’re excited to welcome students from around the World ! These
            Countries will be offering courses across all disciplines, and
            select courses will be taught in English.
          </p>
          <a
            href="#"
            className="py-[16px] mx-auto md:mx-0 px-[31px] bg-green text-white rounded-lg w-[200px] flex justify-center items-center"
          >
            Discover more
          </a>
        </div>
        <div className=" w-[360px]  md:w-[80%] relative items-center px-10 md:px-0">
          <Swiper ref={swiperRef} {...swiperOptions}>
            {countries.map((country, index) => (
              <SwiperSlide
                key={index}
                className="w-[300px] h-[400px] py-4 flex flex-col gap-2"
              >
                <div className="flex flex-col items-center w-[300px] h-[250px] overflow-hidden">
                  <Image
                    src={country.imageSrc}
                    width={400}
                    height={110}
                    alt={`Flag of ${country.name}`}
                    className="w-[250px] h-[250px] object-cover rounded-md"
                  />
                </div>
                <p className="mt-2 text-lg font-semibold text-black text-center">
                  {country.name}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex flex-row w-full justify-center md:justify-end  gap-[10px]">
            <button onClick={handlePrevClick} className="">
              <svg
                width="30"
                height="30"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.9998 0.666992C36.8658 0.666992 47.3332 11.1343 47.3332 24.0003C47.3332 36.8663 36.8658 47.3336 23.9998 47.3336C11.1338 47.3336 0.666504 36.8663 0.666504 24.0003C0.666504 11.1343 11.1338 0.666992 23.9998 0.666992ZM23.9998 4.16699C13.0635 4.16699 4.1665 13.064 4.1665 24.0003C4.1665 34.9366 13.0635 43.8336 23.9998 43.8336C34.9362 43.8336 43.8332 34.9366 43.8332 24.0003C43.8332 13.064 34.9362 4.16699 23.9998 4.16699ZM28.6044 14.6663C29.2881 15.3523 29.2834 16.4606 28.5998 17.142L21.7118 23.9996L28.5998 30.8596C29.2834 31.541 29.2881 32.6469 28.6044 33.333C28.2638 33.6783 27.8134 33.8486 27.3654 33.8486C26.9198 33.8486 26.4718 33.6783 26.1311 33.3376L17.9948 25.241C17.6658 24.912 17.4814 24.4663 17.4814 23.9996C17.4814 23.5353 17.6658 23.0896 17.9948 22.7606L26.1311 14.6616C26.8148 13.9803 27.9208 13.9803 28.6044 14.6663Z"
                  fill="#7DB834"
                />
              </svg>
            </button>
            <button onClick={handleNextClick}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.0003 0.666992C36.857 0.666992 47.3336 11.1437 47.3336 24.0003C47.3336 36.8803 36.857 47.3336 24.0003 47.3336L23.3475 47.3247C10.769 46.9786 0.666992 36.662 0.666992 24.0003C0.666992 11.1437 11.1203 0.666992 24.0003 0.666992ZM20.6403 14.1537C20.1737 14.1537 19.7303 14.317 19.3803 14.667C18.7037 15.367 18.7037 16.4637 19.4037 17.1403L26.287 24.0003L19.4037 30.8603C18.7037 31.537 18.7037 32.657 19.3803 33.3337C20.0803 34.0336 21.177 34.0336 21.8537 33.3337L29.997 25.237C30.3237 24.9103 30.5103 24.467 30.5103 24.0003C30.5103 23.5337 30.3237 23.0903 29.997 22.7637L21.8537 14.667C21.527 14.317 21.0837 14.1537 20.6403 14.1537Z"
                  fill="#7DB834"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Slider />

      <Ourspecialoffers />

      <PartenerBrightForth/>

      <ContactUS />

      {/* apply and make apo */}
      {/* <div className=" flex  justify-center items-center py-20 w-full px-2 md:px-20 bg-white">
        <div className="flex max-w-7xl w-full flex-col md:flex-row md:justify-between gap-16 bg-[#07294D] rounded-[24px] py-12 px-3 md:p-20">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="p-2 bg-[#0B325B] rounded-[20px] ">
              <Image
                src={`/image/statement.svg`}
                width={150}
                height={150}
                className=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[#0dd354] text-[20px] font-normal text-center md:text-start leading-6">
                Apply for january <br /> intake 2024
              </h1>
              <p className="text-white max-w-[350px] text-center md:text-start font-extralight">
                Admissions are opened for January, February and March Intake
                2024
              </p>
              <p
                onClick={openModal}
                className="py-[12px] mx-auto md:mx-0 px-[24px] bg-[#7DB834] hover:scale-110  flex justify-center text-white font-[300] w-[200px] rounded-full transition-all cursor-pointer"
              >
                Start Assesssment
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="p-2 bg-[#0B325B] rounded-[20px] ">
              <Image
                src={`/image/appointment.svg`}
                width={150}
                height={150}
                className=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[#0dd354] text-[20px] font-normal text-center md:text-start">
                Make Appoitment
              </h1>
              <p className="text-white max-w-[350px] text-center md:text-start font-extralight">
                Make Appointment Our Team will back to you soon
              </p>
              <a
                href="#contactus"
                className="py-[12px] px-[32px] mx-auto md:mx-0 bg-[#7DB834] w-[200px] font-[300] hover:scale-110 flex justify-center text-white rounded-full transition-all"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div className="EnquiryForm zoomIn w-full h-full absolute">
            <StartAssessment onClose={closeModal} />
          </div>
        )}
      </div> */}

      {/* abou us  */}

      {/* <div className="max-w-7xl px-3 md:px-10 flex flex-col gap-10 md:flex-row md:justify-between py-14 bg-gray-100  w-full">
        <div data-aos="fade-right" className="w-full md:w-1/2">
          <Image
            src={`/image/aboutus.svg`}
            width={100}
            height={100}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div
          data-aos="fade-right"
          className="w-full flex flex-col items-center md:items-start gap-4 md:gap-6 md:w-1/2 overflow-hidden"
        >
          <h1 className=" border-l-2 border-[#0dd354] text-[#0dd354]    px-[24px] py-[8px] text-[18px] font-medium ">
            About us
          </h1>
          <span className="text-[#123E6C] text-[24px] md:text-[40px] font-bold text-center md:text-start leading-[30px]">
            Welcome to BrightForth
          </span>
          <p className="text-[#2F2E2E] text-[18px] text-center md:text-start font-light  max-w-[495px]">
            We are a rapidly growing foreign education consultancy in Rwanda
            that assists students in searching and applying to overseas
            universities through our extensive network since 2021. Our core
            activity lies in assisting students to make the right choice about
            pursuing education in overseas educational institutions.
          </p>
          <a
            href="/aboutus"
            className="py-[10px] px-[48px] bg-[#7DB834] rounded-lg text-[white]"
          >
            About us
          </a>
        </div>
      </div> */}

     
     

    

     <Footer/>
    </div>
  );
}
