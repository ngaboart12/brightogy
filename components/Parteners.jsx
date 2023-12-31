import React from "react";
import Image from "next/image";

const Parteners = () => {
  return (
    <div class="w-full  py-[47px] bg-sky-50 justify-center items-center inline-flex">
      <div class="self-stretch flex-col justify-start items-center gap-4 inline-flex">
        <div class="text-amber-500 text-2xl font-semibold ">
          Trusted by Leading Institutions
        </div>
        <div class="justify-start items-center gap-[10px] md:gap-[100px] grid grid-cols-3 md:grid-cols-5">
          <div className="w-[100px] h-[50px]">
            <Image
              className="w-full h-full object-fit"
              src={`/image/uskudar.png`}
              width={200}
              height={200}
            />
          </div>
          <div className="w-[100px] h-[50px] bg-green-500 rounded-md">
            <Image
              className="w-full h-full object-fit"
              src={`/image/aivancity.svg`}
              width={200}
              height={200}
            />
          </div>
          <div className="w-[50px] h-[50px] rounded-md flex items-center justify-center">
            <Image
              className="w-full h-full object-fit"
              src={`/image/vistula.jpg`}
              width={200}
              height={200}
            />
          </div>
          <div className="w-[90px] h-[60px] rounded-md flex items-center justify-center">
            <Image
              className="w-full h-full object-fit"
              src={`/image/nest-college.png`}
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parteners;
