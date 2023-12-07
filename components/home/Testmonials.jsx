import React from "react";
import Image from 'next/image'


const Testmonials = () => {
  return (
    <div className="w-full max-w-7xl bg-[#07294D] px-[20px] py-10 md:px-20 lg:px-40 mt-5">
      <div className="flex w-full flex-col md:flex-row justify-between gap-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-[#FFCD21] text-[24px] font-[600] text-center sm:text-start">
            Testimonials
          </h1>
        </div>
        <div className="w-full md:w-1/2 text-center sm:text-start">
          <span className=" text-white text-[16px] font-[600]">
            Boolean draft scale figjam italic background vertical boolean
            subtract effect. Boolean layer rotate layer connection select line.
            Figjam star fill rectangle star.
          </span>
        </div>
      </div>
      <div className="flex w-full flex-col gap-10 justify-between md:flex-row py-10 ">
        <div className="w-full flex items-center sm:items-start flex-col sm:flex-row gap-4  md:w-1/2">
          <div className="w-[80%] sm:w-[40%]">
            <Image width={200} height={0} src={`/image/test1.png`} alt="" className="w-full object-cover" />
          </div>
          <div className="flex w-full  sm:w-[60%] flex-col gap-2">
            <h1 className="text-white text-[20px] font-[600] text-center sm:text-start">
              Bigizi Jean
            </h1>
            <span className="text-blue-400 text-[16px] text-center sm:text-start">
              Student
            </span>
            <p className="text-white font-[300] text-[14px] line-clamp-5 text-center sm:text-start">
              Select duplicate clip overflow ellipse content component underline
              rectangle figjam. Figma editor share frame connection subtract.
              Prototype shadow ipsum style pen follower undo content distribute
              horizontal. Opacity underline flows pen ellipse list main. Invite
              link figjam asset comment font team.
            </p>
          </div>
        </div>
        <div className="w-full  flex items-center sm:items-start flex-col sm:flex-row gap-4 md:w-1/2">
          <div className="w-[80%] sm:w-[40%]">
            <Image width={200} height={0} src={`/image/test2.png`} alt="" className="w-full object-cover" />
          </div>
          <div className="flex w-full  sm:w-[60%] flex-col gap-2">
            <h1 className="text-white text-[20px] font-[600] text-center sm:text-start">
              Ntwali Evaliste
            </h1>
            <span className="text-blue-400 text-[16px] text-center sm:text-start">
              Student
            </span>
            <p className="text-white text-[14px] line-clamp-5 text-center sm:text-start">
              Select duplicate clip overflow ellipse content component underline
              rectangle figjam. Figma editor share frame connection subtract.
              Prototype shadow ipsum style pen follower undo content distribute
              horizontal. Opacity underline flows pen ellipse list main. Invite
              link figjam asset comment font team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
