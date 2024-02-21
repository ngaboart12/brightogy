import React from "react";
import Image from "next/image";

const OurlBlog = () => {
  const blog = [
    {
      link: "#",
      image: "/image/visatips.jpg",
      date: "22 DEC 22",
      title: "Applying for a student visa: Top 10 tips",
      disc: "Don’t feel prepared to apply for your student visa? Our",
    },
    {
      link: "#",
      image: "/image/sociallifeabroad.jpg",
      date: "22 DEC 22",
      title: "Social lifestyle abroad",
      disc: "Don’t feel prepared to apply for your student visa? Our",
    },
    {
      link: "sop",
      image: "/image/sop.jpg",
      date: "22 DEC 22",
      title: "Statement of purpose",
      disc: "Don’t feel prepared to apply for your student visa? Our",
    },
  ];
  return (
    <div className="flex flex-col w-full max-w-7xl p-4 md:px-[100px] px-[10px] sm:px-[50px] py-10 gap-10 text-center sm:text-start bg-[#F6FBFF]">
      <div className="flex flex-col items-center w-full gap-[10px]">
        <span className="text-[18px] font-[700] text-[#08305A]">Features</span>
        <h1 className="text-[28px] font-[700] text-[#08305A] font-poppins">
          Stay updated with our features
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[32px] gap-y-10 w-full mt-10">
        {blog.map((item, index) => {
          return (
            <div
              
              className="flex flex-col gap-2 items-center sm:items-start  bg-white pb-4 rounded-t-3xl rounded-[10px]"
            >
              <div className="w-full">
                <Image
                  src={item.image}
                  width={200}
                  height={0}
                  alt=""
                  className="object-cover w-full min-w-[200px] h-[200px] "
                />
              </div>
              <div className="flex flex-col px-8 gap-2">
                <div className=" flex flex-col gap-2 items-center md:items-start">
                  <p className="flex items-center gap-2">
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.57715 8.33691H17.4304"
                        stroke="#A5A5A5"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.7017 11.5916H13.7094"
                        stroke="#A5A5A5"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0039 11.5916H10.0116"
                        stroke="#A5A5A5"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.29834 11.5916H6.30606"
                        stroke="#A5A5A5"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.7017 14.8303H13.7094"
                        stroke="#A5A5A5"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0039 14.8303H10.0116"
                        stroke="#A5A5A5"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.29834 14.8303H6.30606"
                        stroke="#A5A5A5"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.3696 2.16675V4.90906"
                        stroke="#A5A5A5"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.6377 2.16675V4.90906"
                        stroke="#A5A5A5"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.5319 3.48267H6.4758C4.02856 3.48267 2.5 4.84594 2.5 7.35185V14.8932C2.5 17.4385 4.02856 18.8333 6.4758 18.8333H13.5242C15.9791 18.8333 17.5 17.4622 17.5 14.9563V7.35185C17.5077 4.84594 15.9868 3.48267 13.5319 3.48267Z"
                        stroke="#A5A5A5"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span className="text-[#A5A5A5] text-[16px] font-light ">
                      {item.date}
                    </span>
                  </p>
                  <h1 className="text-[18px] font-poppins text-[#123E6C] font-medium sm:font-[700] min-h-[50px] leading-6">
                    {item.title}
                  </h1>

                  <p className="text-[16px] font-poppins text-black leading-[18px] font-light">
                    {item.disc}
                  </p>
                </div>
                <a href={item.link}>
                  <button className="w-full md:w-1/2 hover:scale-110 transition-all font-[400] text-greenText rounded-md py-2 flex flex-row justify-center md:justify-start items-center gap-[10px] ">
                    Read more
                    <div>
                      <svg
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          d="M15.75 7.72559L0.75 7.72559"
                          stroke="#7DB834"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.7002 1.701L15.7502 7.725L9.7002 13.75"
                          stroke="#7DB834"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurlBlog;
