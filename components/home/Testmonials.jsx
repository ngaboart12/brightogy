"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Testmonials = () => {
  const testimonial = [
    {
      profile: (
        <Image
          width={600}
          height={600}
          src={`/image/test1.png`}
          alt="kagabo sharon "
          className="w-full h-full object-cover"
        />
      ),
      name: "KAGABO Sharon",
      type: "Student",
      comment:
        "For me, working with your educational consultant changed everything. Their advice and assistance were quite helpful to me during my academic career. I liked that they were always problem-solving and that I never felt guilty for whatever difficulties I encountered. I successfully and confidently made my way through my academics because of their knowledge.",
    },
    {
      profile: (
        <Image
          width={600}
          height={600}
          src={`/image/test2.png`}
          alt="kagabo sharon "
          className="w-full h-full object-cover"
        />
      ),
      name: "SIBOMANA Christophe",
      type: "Student",
      comment:
        "Absolutely! It's a terrific idea to provide a testimonial to an educational consultant encourage them to keep working hard and to show how their efforts have positively influenced many individuals. It might serve as a source of encouragement and gratitude for their commitment to assisting others.",
    },
    {
      profile: (
        <Image
          width={600}
          height={600}
          src={`/image/test3.jpg`}
          alt="kagabo sharon "
          className="w-full h-full object-cover"
        />
      ),
      name: "IRASUBIZA Germain",
      type: "Student",
      comment:
        "I have the utmost gratitude for BrightForth advice and assistance. Their expertise and dedication were crucial in assisting me in getting accepted into the faculty I wanted to attend. Their persistent dedication to assisting students in achieving their educational goals is much appreciated. I'm grateful that you have had such a big impact on my academic career.",
    },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(2);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Small devices
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Medium devices
      } else {
        setItemsPerPage(2); // Larger devices
      }
    };

    handleResize(); // Initial setup

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(testimonial.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleTestimonials = testimonial.slice(startIndex, endIndex);

  const nextTestimonialsPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevTestimonialsPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };
  return (
    <div className="w-full max-w-7xl bg-[#07294D] px-[20px] py-10 md:px-20 lg:px-40 mt-5">
      <div className="flex w-full flex-col md:flex-row justify-between gap-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-[#FFCD21] text-[24px] font-[600] text-center sm:text-start">
            Testimonials
          </h1>
        </div>
        <div className="w-full md:w-1/2 text-center sm:text-start">
          <span className=" text-white text-[16px] font-[500]">
            Our educational consultant has led us on a journey of academic
            achievement, and working with them has been a life-changing
            experience. Their proficiency, commitment, and customized strategy
            have genuinely distinguished them. This is a taste of the successful
            collaboration we have had.
          </span>
        </div>
      </div>
      <div className=" w-full flex flex-col justify-between gap-10  py-10 ">
        <div className="flex flex-row gap-10">
          {visibleTestimonials.map((item, index) => {
            return (
              <div className=" flex items-center sm:items-start flex-col sm:flex-row gap-4  ">
                <div className="w-[200px] sm:w-[200px]">{item.profile}</div>
                <div className="flex w-full  sm:w-[60%] flex-col gap-2">
                  <h1 className="text-white text-[20px] font-[600] text-center sm:text-start">
                    {item.name}
                  </h1>
                  <span className="text-blue-400 text-[16px] text-center sm:text-start">
                    {item.type}
                  </span>
                  <p className="text-white font-[300] text-[14px] line-clamp-5 text-center sm:text-start">
                    {item.comment}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-end">
          <div className=" justify-end ">
            <button
              onClick={prevTestimonialsPage}
              className="text-white  cursor-pointer "
            >
              <svg
                width="31"
                height="25"
                viewBox="0 0 31 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.25 12.4201C30.25 13.1162 29.7327 13.6915 29.0616 13.7825L28.875 13.7951L4.70433 13.794L13.4365 22.4905C13.9746 23.0263 13.9765 23.8969 13.4407 24.435C12.9536 24.9242 12.1898 24.9702 11.6506 24.572L11.4961 24.4392L0.404457 13.3952C0.333525 13.3246 0.271914 13.2481 0.219624 13.1674C0.204855 13.1431 0.189819 13.1183 0.175568 13.0929C0.162457 13.0712 0.15061 13.0486 0.139435 13.0258C0.123913 12.9926 0.108746 12.9583 0.0949764 12.9233C0.0837879 12.8963 0.0744457 12.87 0.0659237 12.8436C0.0557938 12.8108 0.0459518 12.7758 0.0374851 12.7403C0.0311909 12.7155 0.0262051 12.6917 0.0218582 12.6678C0.0157433 12.6321 0.0105381 12.5953 0.00682449 12.558C0.00361824 12.5295 0.001688 12.5013 0.000621796 12.4731C0.00034523 12.456 0 12.4381 0 12.4201L0.000688553 12.3668C0.00174141 12.3398 0.00358582 12.3129 0.00621986 12.286L0 12.4201C0 12.3333 0.00803566 12.2484 0.023407 12.1661C0.0269718 12.1465 0.0312195 12.1263 0.0359211 12.1062C0.0456886 12.0648 0.0569763 12.0249 0.069973 11.9859C0.0763531 11.9664 0.0837841 11.9457 0.0917282 11.9251C0.107796 11.8837 0.125259 11.8443 0.144474 11.8059C0.153399 11.7878 0.163397 11.7689 0.173864 11.7502C0.191048 11.7196 0.208748 11.6906 0.227467 11.6623C0.240673 11.6423 0.255297 11.6215 0.270569 11.601L0.282467 11.5851C0.319513 11.5367 0.359701 11.4909 0.402727 11.4478L0.404377 11.4465L11.496 0.400717C12.0341 -0.135141 12.9047 -0.133338 13.4406 0.404743C13.9277 0.893908 13.9705 1.65788 13.57 2.19534L13.4366 2.34928L4.708 11.044L28.875 11.0451C29.6344 11.0451 30.25 11.6607 30.25 12.4201Z"
                  fill="#F9A21B"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonialsPage}
              className="text-white  cursor-pointer mt-2"
            >
              <svg
                width="45"
                height="25"
                viewBox="0 0 75 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.30304 11.0458L70.2168 11.0458L61.3381 2.34937C60.7909 1.81356 60.789 0.942965 61.3338 0.404839C61.8291 -0.0843678 62.6057 -0.13039 63.1539 0.267849L63.311 0.40065L74.5888 11.4446C74.6609 11.5153 74.7236 11.5917 74.7767 11.6724C74.7917 11.6967 74.807 11.7216 74.8215 11.7469C74.8348 11.7687 74.8469 11.7913 74.8583 11.8141C74.874 11.8473 74.8895 11.8816 74.9035 11.9166C74.9148 11.9436 74.9243 11.9698 74.933 11.9963C74.9433 12.0291 74.9533 12.064 74.9619 12.0995C74.9683 12.1243 74.9734 12.1481 74.9778 12.1721C74.984 12.2077 74.9893 12.2446 74.9931 12.2819C74.9963 12.3103 74.9983 12.3385 74.9994 12.3667C74.9997 12.3838 75 12.4018 75 12.4197C75 12.4319 74.9999 12.444 74.9995 12.4561L74.9993 12.473C74.9983 12.5 74.9964 12.527 74.9937 12.5539L74.9939 12.549C74.9899 12.5912 74.984 12.6328 74.9762 12.6737C74.9726 12.6934 74.9683 12.7136 74.9635 12.7337C74.9536 12.775 74.9421 12.8149 74.9289 12.854C74.9224 12.8734 74.9148 12.8941 74.9068 12.9147C74.8904 12.9561 74.8727 12.9955 74.8531 13.034C74.8441 13.052 74.8339 13.0709 74.8232 13.0897C74.8058 13.1202 74.7878 13.1492 74.7687 13.1775C74.7553 13.1975 74.7404 13.2184 74.7249 13.2389L74.7128 13.2547C74.6752 13.3031 74.6343 13.349 74.5905 13.392L74.5889 13.3933L63.3111 24.4391C62.764 24.975 61.8788 24.9732 61.3339 24.4351C60.8386 23.9459 60.7951 23.182 61.2023 22.6445L61.338 22.4906L70.213 13.7958L0.30304 13.7958L0.30304 11.0458Z"
                  fill="#F9A21B"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
