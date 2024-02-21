import React from "react";
import Image from "next/image";

const PartenerBrightForth = () => {
  return (
    <div className="px-[10px] sm:px-[50px] w-full md:px-[100px] bg-[#F5F5F5] pt-16 mt-20">
      <div className="flex flex-col gap-[20px] md:flex-row w-full ">
        <div className="w-full md:w-1/2">
          <Image
            src="/image/map.png"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 py-10 flex flex-col gap-[20px] items-center md:items-start">
          <h1 className="text-[28px] text-center md:text-start font-[700] text-green font-poppins leading-10">
            Partner <br />
            with brightForth
          </h1>
          <span className="text-[14px] text-center md:text-start text-black font-[400] max-w-[450px] font-poppins">
            Aragog silver jinxes above dementors be elemental granger. Owl
            cabbage venom follow parchment time-turner viktor house.{" "}
          </span>
          <div className="flex flex-row gap-[10px] items-center">
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.73877 10.622C5.73877 14.75 9.08452 18.0957 13.2125 18.0957C17.342 18.0957 20.6878 14.75 20.6878 10.622C20.6878 6.49396 17.342 3.14746 13.2125 3.14746C9.08527 3.14746 5.73877 6.49321 5.73877 10.622ZM13.2125 3.93421C16.9003 3.93421 19.901 6.93421 19.901 10.622C19.901 14.3097 16.901 17.309 13.2125 17.309C9.52552 17.309 6.52552 14.309 6.52552 10.622C6.52552 6.93496 9.52477 3.93421 13.2125 3.93421Z"
                    fill="#005164"
                  />
                  <path
                    d="M17.6695 19.3966L18.0482 20.1616L18.754 19.8128L17.6845 17.6528L16.9795 18.0023L17.3207 18.6901C16.0555 19.3351 14.6462 19.6763 13.2137 19.6763C8.22248 19.6763 4.16273 15.6143 4.16273 10.6216C4.16273 7.22031 6.08948 4.10031 9.09923 2.55981L9.46523 3.29781L10.1695 2.94831L9.09998 0.789062L8.39573 1.13856L8.75048 1.85481C5.47448 3.52806 3.37598 6.92106 3.37598 10.6216C3.37598 15.9166 7.57823 20.2456 12.8207 20.4533V21.6503C11.0042 21.7208 9.31223 22.2811 7.87748 23.2096H9.52298C10.6495 22.7056 11.8967 22.4228 13.2085 22.4228C14.4977 22.4228 15.7465 22.7026 16.8857 23.2096H18.5387C17.086 22.2736 15.388 21.7238 13.6075 21.6503V20.4503C15.0242 20.3933 16.4117 20.0356 17.6695 19.3966Z"
                    fill="#005164"
                  />
                </svg>
              </div>
            
              <div className="flex flex-col items-start leading-7">
                <h1 className="text-[32px] font-[700] font-Kumbh">10+</h1>
                <span className="text-[16px] font-[600] font-Kumbh">Countries</span>
              </div>
           
              <div className="flex flex-col items-start leading-7">
                <h1 className="text-[32px] font-[700] font-Kumbh">60+</h1>
                <span className="text-[16px] font-[600] font-Kumbh">Partners</span>
              </div>
           
          </div>
          <div className="py-3 px-[20px] rounded-[12px] bg-green text-white">
          Request Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartenerBrightForth;
