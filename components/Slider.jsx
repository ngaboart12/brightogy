"use client";
import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "./dropdown.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { comment } from "postcss";

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
      name: "IRASUBIZA Germain",
      type: "student",
      comment:
        "I have the utmost gratitude for BrightForth advice and assistance. Their expertise and dedication were crucial in assisting me in getting accepted into the faculty I wanted to attend. Their persistent dedication to assisting students in achieving their educational goals is much appreciated. I'm grateful that you have had such a big impact on my academic career.",
    },
  ];
  return (
    <div className="w-full relative bg-[#07294D] items-center flex  justify-center mb-10  ">
      <div
        data-aos="zoom-in"
        className=" max-w-7xl flex flex-col gap-4 md:gap-10 relative w-full justify-center items-center   py-[20px] px-[20px] md:py-[100px] md:px-[104px]"
      >
        <h1 className="text-[24px] text-[#FFA800] text-center  font-bold">
          What you say about us
        </h1>
        <div className="absolute z-10 left-20 top-[20vh]">
          <svg
            width="178"
            height="198"
            viewBox="0 0 178 198"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M86.0837 0L0 29.9358L23.5004 38.8907V48.4477C23.1103 48.5749 22.7353 48.7446 22.3823 48.9536C20.8234 49.8635 19.6885 51.3538 19.2258 53.0984C18.7631 54.8431 19.0103 56.6999 19.9133 58.2627C20.5267 59.3515 21.4375 60.243 22.5391 60.8328L18.7497 75.3226L27.3505 84.4294L33.0877 77.2553L28.8278 60.9695C28.954 60.9204 29.0745 60.8576 29.187 60.7823C30.2897 60.143 31.1912 59.2076 31.7893 58.082C32.3873 56.9564 32.658 55.6857 32.5706 54.4142C32.4831 53.1426 32.0411 51.9209 31.2946 50.8878C30.5481 49.8547 29.527 49.0514 28.3472 48.5691V40.7374L48.8322 48.5691V80.3718C60.8402 72.7897 74.7509 68.7654 88.9524 68.7654C103.154 68.7654 117.064 72.7897 129.072 80.3718V49.92L177.905 32.9815L86.0837 0ZM29.2123 52.8999C29.7072 53.7465 29.8664 54.748 29.6584 55.7064C29.4504 56.6647 28.8904 57.5102 28.0891 58.0755C27.9914 58.1646 27.8805 58.238 27.7603 58.2931C27.3137 58.5535 26.8195 58.7217 26.3068 58.7878C25.7941 58.8538 25.2733 58.8164 24.7753 58.6776C24.2364 58.5394 23.7363 58.2799 23.3132 57.9187C22.8408 57.5404 22.4628 57.0575 22.209 56.5081C21.9552 55.9587 21.8326 55.3579 21.8507 54.753C21.8689 54.148 22.0273 53.5556 22.3136 53.0224C22.5999 52.4893 23.0062 52.0299 23.5004 51.6806C23.6008 51.5908 23.7111 51.5127 23.8292 51.4479C24.4316 51.1146 25.1089 50.9405 25.7973 50.9419C26.7235 50.9466 27.6187 51.276 28.3269 51.8728C28.6777 52.163 28.977 52.5102 29.2123 52.8999Z"
              fill="#275482"
            />
            <path
              d="M121.291 172.952H136.039C129.078 183.279 118.914 191.032 107.114 195.016C95.3132 199 82.5304 198.994 70.7336 195C58.9367 191.005 48.7802 183.243 41.8281 172.91C34.8759 162.576 31.5136 150.243 32.2591 137.81C33.0045 125.378 37.8163 113.535 45.9535 104.106C54.0906 94.6771 65.1018 88.1845 77.2914 85.6281C89.4811 83.0718 102.173 84.5935 113.413 89.9589C124.653 95.3244 133.817 104.236 139.494 115.321H126.138C120.811 107.665 113.252 101.838 104.491 98.6354C95.7307 95.4329 86.1957 95.0108 77.1865 97.4265C68.1773 99.8423 60.1326 104.978 54.1497 112.134C48.1668 119.29 44.537 128.117 43.7553 137.412C42.9736 146.707 45.0781 156.016 49.7818 164.071C54.4855 172.125 61.5593 178.533 70.0384 182.419C78.5176 186.306 87.9892 187.482 97.1615 185.788C106.334 184.094 114.76 179.611 121.291 172.952Z"
              fill="#275482"
            />
            <path
              d="M88.9527 172.952C106.187 172.952 120.158 158.981 120.158 141.746C120.158 124.512 106.187 110.541 88.9527 110.541C71.7183 110.541 57.7471 124.512 57.7471 141.746C57.7471 158.981 71.7183 172.952 88.9527 172.952Z"
              fill="#275482"
            />
          </svg>
        </div>
        <div className="absolute z-10 bottom-6 right-4">
          <svg
            width="178"
            height="85"
            viewBox="0 0 178 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M86.0837 0L0 29.9358L23.5004 38.8907V48.4477C23.1103 48.5749 22.7353 48.7446 22.3823 48.9536C20.8234 49.8635 19.6885 51.3538 19.2258 53.0984C18.7631 54.8431 19.0103 56.6999 19.9133 58.2627C20.5267 59.3515 21.4375 60.243 22.5391 60.8328L18.7497 75.3226L27.3505 84.4294L33.0877 77.2553L28.8278 60.9695C28.954 60.9204 29.0745 60.8576 29.187 60.7823C30.2897 60.143 31.1912 59.2076 31.7893 58.082C32.3873 56.9564 32.658 55.6857 32.5706 54.4142C32.4831 53.1426 32.0411 51.9209 31.2946 50.8878C30.5481 49.8547 29.527 49.0514 28.3472 48.5691V40.7374L48.8322 48.5691V80.3718C60.8402 72.7897 74.7509 68.7654 88.9524 68.7654C103.154 68.7654 117.064 72.7897 129.072 80.3718V49.92L177.905 32.9815L86.0837 0ZM29.2123 52.8999C29.7072 53.7465 29.8664 54.748 29.6584 55.7064C29.4504 56.6647 28.8904 57.5102 28.0891 58.0755C27.9914 58.1646 27.8805 58.238 27.7603 58.2931C27.3137 58.5535 26.8195 58.7217 26.3068 58.7878C25.7941 58.8538 25.2733 58.8164 24.7753 58.6776C24.2364 58.5394 23.7363 58.2799 23.3132 57.9187C22.8408 57.5404 22.4628 57.0575 22.209 56.5081C21.9552 55.9587 21.8326 55.3579 21.8507 54.753C21.8689 54.148 22.0273 53.5556 22.3136 53.0224C22.5999 52.4893 23.0062 52.0299 23.5004 51.6806C23.6008 51.5908 23.7111 51.5127 23.8292 51.4479C24.4316 51.1146 25.1089 50.9405 25.7973 50.9419C26.7235 50.9466 27.6187 51.276 28.3269 51.8728C28.6777 52.163 28.977 52.5102 29.2123 52.8999Z"
              fill="#275482"
            />
          </svg>
        </div>
        <div className="w-[90%] p-4 z-40">
          <Swiper
            spaceBetween={50}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
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
            {testimon.map((item, index) => {
              return (
                <SwiperSlide>
                  <div className=" z-40 flex flex-col gap-4 md:flex-row ">
                    <div className="flex flex-col gap-4 w-full bg-[#08305A] p-6 rounded-lg min-h-[60vh]">
                      {/* <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_672_426)">
                          <path
                            d="M6.11067 23.0947C4.73733 21.636 4 20 4 17.348C4 12.6813 7.276 8.49866 12.04 6.43066L13.2307 8.268C8.784 10.6733 7.91467 13.7947 7.568 15.7627C8.284 15.392 9.22133 15.2627 10.14 15.348C12.5453 15.5707 14.4413 17.5453 14.4413 20C14.4413 21.2377 13.9497 22.4247 13.0745 23.2998C12.1993 24.175 11.0123 24.6667 9.77467 24.6667C8.344 24.6667 6.976 24.0133 6.11067 23.0947ZM19.444 23.0947C18.0707 21.636 17.3333 20 17.3333 17.348C17.3333 12.6813 20.6093 8.49866 25.3733 6.43066L26.564 8.268C22.1173 10.6733 21.248 13.7947 20.9013 15.7627C21.6173 15.392 22.5547 15.2627 23.4733 15.348C25.8787 15.5707 27.7747 17.5453 27.7747 20C27.7747 21.2377 27.283 22.4247 26.4078 23.2998C25.5327 24.175 24.3457 24.6667 23.108 24.6667C21.6773 24.6667 20.3093 24.0133 19.444 23.0947Z"
                            fill="#FFA800"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_672_426">
                            <rect width="32" height="32" fill="white" />
                          </clipPath>
                        </defs>
                      </svg> */}
                      <div className="w-16 h-16">
                        <Image
                          src={item.profile}
                          width={500}
                          height={500}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      []
                      <p className="text-[14px] font-light text-white">
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
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="swiper-pagination absolute bottom-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
