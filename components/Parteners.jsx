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
          <Image
            class="w-[85px] h-[85px]"
            src={`/image/dp1.svg`}
            width={200}
            height={200}
          />
          <Image
            class="w-20 h-20"
            src={`/image/dp2.svg`}
            width={200}
            height={200}
          />
          <Image
            class="w-20 h-20"
            src={`/image/dp3.svg`}
            width={200}
            height={200}
          />
          <Image
            class="w-[99px] h-[99px]"
            src={`/image/dp4.svg`}
            width={200}
            height={200}
          />
          <Image
            class="w-[106px] h-[106px]"
            src={`/image/dp5.svg`}
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Parteners;
