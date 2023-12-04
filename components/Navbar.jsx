import React from "react";
import Image from "next/image";
import "./dropdown.css";

const Navbar = () => {
  return (
    <div className="w-full max-w-7xl flex justify-between px-[10px] md:px-[100px] py-2 itens-center">
      <div className="flex items-center">
        <Image
          src={`/image/logo.svg`}
          width={100}
          height={0}
          alt=""
          className="w-[20vh]"
        />
      </div>

      <div className="links flex gap-[102px] items-center mt-2">
        <ul className=" hidden md:flex text-black font-[500] text-[12px]  gap-4  items-center">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/aboutus">ABOUT US</a>
          </li>
          <li>
            <p className=" cursor-pointer flex gap-1 items-center">
              <span>TEST COACHING</span>{" "}
              <span className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.72456 6.64143C3.94645 6.41954 4.29367 6.39937 4.53835 6.58092L4.60845 6.64143L9.99984 12.0325L15.3912 6.64143C15.6131 6.41954 15.9603 6.39937 16.205 6.58092L16.2751 6.64143C16.497 6.86332 16.5172 7.21054 16.3356 7.45522L16.2751 7.52532L10.4418 13.3586C10.2199 13.5805 9.87267 13.6007 9.62799 13.4192L9.5579 13.3586L3.72456 7.52532C3.48048 7.28124 3.48048 6.88551 3.72456 6.64143Z"
                    fill="black"
                  />
                </svg>
              </span>
            </p>
            <ul className="text-[black] font-[300] gap-4 text-[16px] bg-black">
              <li>
                <a href="/toefl" className="hover:text-black/70">
                  TOEFL
                </a>
              </li>
              <li>
                <a href="/ielts" className="hover:text-black/70">
                  IELTS
                </a>
              </li>
              <li>
                <a href="/duolingo" className="hover:text-black/70">
                  DUOLINGO
                </a>
              </li>
            </ul>
          </li>
          <li>
            <p className=" cursor-pointer flex gap-1 items-center">
              <span>COUNTRIES</span>{" "}
              <span className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.72456 6.64143C3.94645 6.41954 4.29367 6.39937 4.53835 6.58092L4.60845 6.64143L9.99984 12.0325L15.3912 6.64143C15.6131 6.41954 15.9603 6.39937 16.205 6.58092L16.2751 6.64143C16.497 6.86332 16.5172 7.21054 16.3356 7.45522L16.2751 7.52532L10.4418 13.3586C10.2199 13.5805 9.87267 13.6007 9.62799 13.4192L9.5579 13.3586L3.72456 7.52532C3.48048 7.28124 3.48048 6.88551 3.72456 6.64143Z"
                    fill="black"
                  />
                </svg>
              </span>
            </p>
            <ul className="text-[black] font-[300] gap-4 text-[16px] bg-black">
              <li>
                <a href="/canada" className="hover:text-black/70">
                  Canada
                </a>
              </li>
              <li>
                <a href="/poland">Poland</a>
              </li>
              <li>
                <a href="/china">China</a>
              </li>
            </ul>
          </li>
          <li>
            <p className=" cursor-pointer flex gap-1 items-center">
              <span>SERVICES</span>{" "}
              <span className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.72456 6.64143C3.94645 6.41954 4.29367 6.39937 4.53835 6.58092L4.60845 6.64143L9.99984 12.0325L15.3912 6.64143C15.6131 6.41954 15.9603 6.39937 16.205 6.58092L16.2751 6.64143C16.497 6.86332 16.5172 7.21054 16.3356 7.45522L16.2751 7.52532L10.4418 13.3586C10.2199 13.5805 9.87267 13.6007 9.62799 13.4192L9.5579 13.3586L3.72456 7.52532C3.48048 7.28124 3.48048 6.88551 3.72456 6.64143Z"
                    fill="black"
                  />
                </svg>
              </span>
            </p>
            <ul className="text-[black] font-[300] gap-4 text-[16px] bg-black">
              <li>
                <a href="/careerCounseling" className="hover:text-black/70">
                  CAREER COUNSELING
                </a>
              </li>
              <li>
                <a href="/careerCounseling2"> CAREER COUNSELING 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/events">EVENTS</a>
          </li>
          <li>
            <a href="/faqpage">FAQ</a>
          </li>
        </ul>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.80541 17.296C13.9423 17.296 17.2959 13.9424 17.2959 9.8055C17.2959 5.66863 13.9423 2.31503 9.80541 2.31503C5.66854 2.31503 2.31494 5.66863 2.31494 9.8055C2.31494 13.9424 5.66854 17.296 9.80541 17.296Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.0151 15.4043L17.9518 18.3333"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
