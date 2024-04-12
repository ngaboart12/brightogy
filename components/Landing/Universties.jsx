"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image"
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { comment } from "postcss";
import "./pagination.css"

const Universties = () => {
  const university = [
    {
      image: "/image/vistula.png"
    },
    {
      image: "/image/britis.png"
    },
    {
      image: "/image/online.png"
    },
    {
      image: "/image/auniveristy.png"
    },
    {
      image: "/image/name.png"
    },
    {
      image: "/image/alte.png"
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % university.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [university.length]);

  return (
    <div className='w-full py-10 overflow-hidden relative'>
      <h1 className='uppercase font-bold text-xl text-[#005164] text-center mb-4'>Featured Universities</h1>

    
        <div className="flex flex-row items-center px-[50px]  gap-[10px] md:gap-[10px] lg:gap-[140px]">
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
                slidesPerView: 6,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            
           {university.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="">
                <div className="w-[100px] md:h-[47px] ">
                  <Image
                    src={item.image}
                    width={500}
                    height={500}
                    className="w-full h-full rounded-md object-cover"
                  />
                </div>
             
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     
          </div>
   
    </div> 
     )
}

export default Universties
