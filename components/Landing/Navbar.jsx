"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "../dropdown.css";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(null);
  const modalRef = useRef();

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const ShowMenuFunc = (index) => {
    setShowMenu(index);
  };
  const links = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: "COMPANY",
      url: "#",
      menu: [
        {
          name: "ABOUT US",
          urls: "/aboutus",
        },
        {
          name: "EVENTS",
          urls: "/events",
        },
        {
          name: "GALLERY",
          urls: "/gallery",
        },
      ],
    },
    {
      name: "TEST COACHING",
      url: "#",
      menu: [
        {
          name: "TOEFL",
          urls: "/toefl ",
        },
        {
          name: "IELTS",
          urls: "/ielts",
        },
        {
          name: "DUOLINGO",
          urls: "/duolingo",
        },
      ],
    },
    {
      name: "COUNTRIES",
      url: "#",
      menu: [
        {
          name: "CANADA",
          urls: "/canada ",
        },
        {
          name: "POLANDA",
          urls: "/poland",
        },
        {
          name: "CHINA",
          urls: "/china",
        },
      ],
    },
    {
      name: "SERVICES",
      url: "#",
      menu: [
        {
          name: "Career Counseling",
          urls: "/careercounseling ",
        },
        {
          name: "Statement Of Purpose",
          urls: "/sop",
        },
        {
          name: "Travel Insurance",
          urls: "/Travel-Insurance",
        },
        {
          name: "Visa Guidance",
          urls: "/visaguidance",
        },
        {
          name: "Pre-departure Services",
          urls: "/predeparture",
        },
        {
          name: "University selection and Documentation",
          urls: "/univeristydocument",
        },
      ],
    },
    {
      name: "CONTACT US",
      url: "/contactus",
    },
    {
      name: "FAQ",
      url: "/faqpage",
    },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="flex flex-row justify-between w-full  ">
      <div>
        <a href="/" className="w-[120px] h-[100px]">
          <Image
            src={`/image/logo.svg`}
            width={200}
            height={300}
            className="w-full"
          />
        </a>
      </div>
      <div className="flex flex-row items-center gap-[10px]">
        <ul ref={modalRef} className="text-white text-[16px] hidden lg:flex flex-row gap-[10px] items-center   ">
          {links.map((item, index) => {
            return (
              <div  onClick={() => ShowMenuFunc(index)} className="flex flex-col  gap-[2px] items-start relative">
                <li
                
                  className="flex text-[14px] font-baloo  flex-row items-center gap-[10px]"
                >
                  <a href={item.url}>{item.name}</a>
                  {item?.menu && (
                    <div>
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.724562 0.641554C0.946451 0.419666 1.29367 0.399494 1.53835 0.581039L1.60845 0.641554L6.99984 6.03266L12.3912 0.641554C12.6131 0.419666 12.9603 0.399494 13.205 0.581039L13.2751 0.641554C13.497 0.863443 13.5172 1.21066 13.3356 1.45534L13.2751 1.52544L7.44178 7.35877C7.21989 7.58066 6.87267 7.60083 6.62799 7.41929L6.5579 7.35877L0.724562 1.52544C0.480484 1.28136 0.480484 0.885632 0.724562 0.641554Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  )}
                </li>
                {item.menu && showMenu === index && (
                  <ul
                   
                    className="flex flex-col items-start gap-[10px] rounded-[10px] px-4 pb-10 py-4 bg-white absolute top-[30px] w-[230px]"
                  >
                    {item?.menu.map((item, index) => {
                      return (
                        <li className="text-black ">
                          <a href={item.urls} className="leading-2">{item.name}</a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </ul>
      </div>
      <div className="hidden lg:flex">
      <a href="#contactus">
        <button className="py-[16px] px-[24px] bg-green rounded-[14px]  text-white flex flex-row items-center gap-[10px]">
          Reach To Us
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
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.7002 1.701L15.7502 7.725L9.7002 13.75"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
        </a>
      </div>

      {menuOpen ? (
        ""
      ) : (
        <div className="cursor-pointer flex lg:hidden" onClick={openMenu}>
          <CiMenuBurger color="white" size={30} />
        </div>
      )}

      <ul
        className={`text-white absolute w-full right-0 top-0 p-6 h-full text-[16px] lg:hidden flex flex-col bg-black/40 gap-[10px] items-center transition-all duration-300  ${
          menuOpen ? "left-0" : "left-[560vh]"
        }  `}
      >
        <div
          className="cursor-pointer ml-auto flex lg:hidden"
          onClick={openMenu}
        >
          <IoMdClose color="white" size={30} />
        </div>
        <div className="flex bg-white p-10 h-full rounded-[8px] ml-auto    flex-col gap-[20px]">
          {links.map((item, index) => {
            return (
              <div   className="flex flex-col gap-[2px] items-start relative">
                <li
                  onClick={() => ShowMenuFunc(index)}
                  className="flex text-black text-[14px] font-[400] font-baloo flex-row items-center gap-[10px]"
                >
                  <a href={item.url} className="w-[150px]">
                    {item.name}
                  </a>
                  {item?.menu && (
                    <div>
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.724562 0.641554C0.946451 0.419666 1.29367 0.399494 1.53835 0.581039L1.60845 0.641554L6.99984 6.03266L12.3912 0.641554C12.6131 0.419666 12.9603 0.399494 13.205 0.581039L13.2751 0.641554C13.497 0.863443 13.5172 1.21066 13.3356 1.45534L13.2751 1.52544L7.44178 7.35877C7.21989 7.58066 6.87267 7.60083 6.62799 7.41929L6.5579 7.35877L0.724562 1.52544C0.480484 1.28136 0.480484 0.885632 0.724562 0.641554Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  )}
                </li>
                {item.menu && showMenu === index && (
                  <ul
                   
                    className="flex flex-col items-start gap-[10px] rounded-[10px] px-4 pb-10 py-4 bg-white  "
                  >
                    {item?.menu.map((item, index) => {
                      return (
                        <li className="text-black">
                          <a href="">{item.name}</a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
          <a href="#contactus">
            <button className="py-[16px] px-[24px] bg-green rounded-[14px]  text-white flex flex-row items-center gap-[10px]">
              Reach To Us
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
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.7002 1.701L15.7502 7.725L9.7002 13.75"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </button>
          </a>
        </div>
      </ul>
  
    </div>
  );
};

export default Navbar;
