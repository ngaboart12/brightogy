"use client";
import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { comment } from "postcss";
import "./pagination.css"


function Slider() {
  const testimon = [
    {
      profile: "/image/member1.png",
      name: "KAGABO Sharon",
      type: "student",
      comment:
        "For me, working with your educational consultant changed everything. Their advice and assistance were quite helpful to me during my academic career. I liked that they were always problem-solving and that I never felt guilty for whatever difficulties I encountered. I successfully and confidently made my way through my academics because of their knowledge.",
    },
    {
      profile: "/image/member2.png",
      name: "SIBOMANA Christophe",
      type: "student",
      comment:
        "Absolutely! It's a terrific idea to provide a testimonial to an educational consultant encourage them to keep working hard and to show how their efforts have positively influenced many individuals. It might serve as a source of encouragement and gratitude for their commitment to assisting others.",
    },
    {
      profile: "/image/member3.png",
      name: "Isimbi Bella",
      type: "student",
      comment:
        "I have the utmost gratitude for BrightForth advice and assistance. Their expertise and dedication were crucial in assisting me in getting accepted into the faculty I wanted to attend. Their persistent dedication to assisting students in achieving their educational goals is much appreciated. I'm grateful that you have had such a big impact on my academic career.",
    },
  ];
  return (
    <div className="w-full relative bg-blueBack flex  justify-center mb-10  ">
      <div className="w-full h-full absolute top-0 z-10 left-0 right-0 ">
        <Image
          src={`/image/Banner.svg`}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div
      
        className=" z-40 max-w-7xl flex flex-col gap-4 md:gap-10 relative w-full justify-center items-center   py-[20px] px-[1px] md:py-[50px]"
      >
        <h1 className="text-[24px] text-white text-center  font-bold">
          What you say about us
        </h1>

        <div className="w-[90%] p-4 z-40">
          <Swiper
            spaceBetween={50}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            
           {testimon.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-4 md:flex-row md:h-[300px]">
              <div className="flex flex-col md:flex-row items-center gap-4 w-full bg-[#196092] p-6 rounded-lg min-h-[40vh]">
                <div className="w-[130px] md:h-[127px] ">
                  <Image
                    src={item.profile}
                    width={500}
                    height={500}
                    className="w-full h-full rounded-md object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <div>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.11067 23.0947C4.73733 21.636 4 20 4 17.348C4 12.6813 7.276 8.49866 12.04 6.43066L13.2307 8.268C8.784 10.6733 7.91467 13.7947 7.568 15.7627C8.284 15.392 9.22133 15.2627 10.14 15.348C12.5453 15.5707 14.4413 17.5453 14.4413 20C14.4413 21.2377 13.9497 22.4247 13.0745 23.2998C12.1993 24.175 11.0123 24.6667 9.77467 24.6667C8.344 24.6667 6.976 24.0133 6.11067 23.0947ZM19.444 23.0947C18.0707 21.636 17.3333 20 17.3333 17.348C17.3333 12.6813 20.6093 8.49866 25.3733 6.43066L26.564 8.268C22.1173 10.6733 21.248 13.7947 20.9013 15.7627C21.6173 15.392 22.5547 15.2627 23.4733 15.348C25.8787 15.5707 27.7747 17.5453 27.7747 20C27.7747 21.2377 27.283 22.4247 26.4078 23.2998C25.5327 24.175 24.3457 24.6667 23.108 24.6667C21.6773 24.6667 20.3093 24.0133 19.444 23.0947Z"
                        fill="#7DB834"
                      />
                    </svg>
                  </div>
                  <p className="text-[14px] font-[300] text-white max-w-[400px]">
                    {item.comment}
                  </p>
                  <div className="flex flex-col ">
                    <span className="text-white text-[18px] font-medium">
                      {item.name}
                    </span>
                    <span className="text-[#87ACD2] text-[16px]">
                      {item.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination absolute bottom-4 flex justify-center w-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
