"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image"

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

      <marquee behavior="scroll" direction="left" scrollamount="20">
        <div className="flex flex-row gap-[10px] md:gap-[70px] lg:gap-[140px]">

        {university.map((university, index) => (
          <div className="md:w-20 md:h-20 w-10 h-10">

          <img key={index} src={university.image} alt={`University ${index + 1}`} className="w-full h-full object-cover" />
          </div>
          ))}
          </div>
      </marquee>
    </div>  )
}

export default Universties
