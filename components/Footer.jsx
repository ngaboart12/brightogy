"use client";
import React, { useState } from "react";
import { FaRegCopyright } from "react-icons/fa";
import toast from "react-hot-toast";

import Image from "next/image";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import EnquiryForm from "./home/EnquiryForm";

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubscribe = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      // Add the email to the "subscription" collection in Firestore
      const docRef = await addDoc(collection(db, "subscription"), {
        email,
      });

      console.log("Document written with ID: ", docRef.id);
      toast.success("subscribe successfully");
      setEmail("");
      setLoading(false);
    } catch (error) {
      toast.error("subscribe failed");
      setLoading(false);
      console.error("Error adding document: ", error);
    }
  };
  return (
    <div className="flex flex-col gap-12 bg-[#07294D] pt-10 w-full items-center">
      <div
        data-aos="zoom-in-right"
        className=" max-w-7xl p-2 gap-6 sm:gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full  justify-center sm:p-6"
      >
        {isModalOpen && (
          <div className="EnquiryForm zoomIn w-full h-full absolute">
            <EnquiryForm onClose={closeModal} />
          </div>
        )}
        <div className="flex flex-col gap-2 ">
          <div className="flex flex-col gap-2 items-center justify-center sm:items-start sm:ustify-start">
            <Image
              src={`/image/logo2.png`}
              width={100}
              height={100}
              className="w-40"
              alt=""
            />
            <p className="text-white text-[14px] font-[300] max-w-[321px] text-center sm:text-start ">
              BrightForth Consultants helps students easily and affordably find
              their dream schools abroad.
            </p>
            <div className="flex gap-4">
              <a href="#">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM8.2 13.3V24H11.6V13.3H8.2ZM8 9.9C8 11 8.8 11.8 9.9 11.8C11 11.8 11.8 11 11.8 9.9C11.8 8.8 11 8 9.9 8C8.9 8 8 8.8 8 9.9ZM20.6 24H23.8V17.4C23.8 14.1 21.8 13 19.9 13C18.2 13 17 14.1 16.7 14.8V13.3H13.5V24H16.9V18.3C16.9 16.8 17.9 16 18.9 16C19.9 16 20.6 16.5 20.6 18.2V24Z"
                    fill="#0B5CFF"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z"
                    fill="#0B5CFF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.4 9.2H12.6C11.8 9.3 11.4 9.4 11.1 9.5C10.7 9.6 10.4 9.8 10.1 10.1C9.86261 10.3374 9.75045 10.5748 9.61489 10.8617C9.57916 10.9373 9.5417 11.0166 9.5 11.1C9.48453 11.1464 9.46667 11.1952 9.44752 11.2475C9.34291 11.5333 9.2 11.9238 9.2 12.6V19.4C9.3 20.2 9.4 20.6 9.5 20.9C9.6 21.3 9.8 21.6 10.1 21.9C10.3374 22.1374 10.5748 22.2495 10.8617 22.3851C10.9374 22.4209 11.0165 22.4583 11.1 22.5C11.1464 22.5155 11.1952 22.5333 11.2475 22.5525C11.5333 22.6571 11.9238 22.8 12.6 22.8H19.4C20.2 22.7 20.6 22.6 20.9 22.5C21.3 22.4 21.6 22.2 21.9 21.9C22.1374 21.6626 22.2495 21.4252 22.3851 21.1383C22.4209 21.0626 22.4583 20.9835 22.5 20.9C22.5155 20.8536 22.5333 20.8048 22.5525 20.7525C22.6571 20.4667 22.8 20.0762 22.8 19.4V12.6C22.7 11.8 22.6 11.4 22.5 11.1C22.4 10.7 22.2 10.4 21.9 10.1C21.6626 9.86261 21.4252 9.75045 21.1383 9.61488C21.0627 9.57918 20.9833 9.54167 20.9 9.5C20.8536 9.48453 20.8048 9.46666 20.7525 9.44752C20.4667 9.3429 20.0762 9.2 19.4 9.2ZM16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM21.4 11.6C21.4 12.1523 20.9523 12.6 20.4 12.6C19.8477 12.6 19.4 12.1523 19.4 11.6C19.4 11.0477 19.8477 10.6 20.4 10.6C20.9523 10.6 21.4 11.0477 21.4 11.6Z"
                    fill="#0B5CFF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM12.6 7.7H19.4C20.3 7.8 20.9 7.9 21.4 8.1C22 8.4 22.4 8.6 22.9 9.1C23.4 9.6 23.7 10.1 23.9 10.6C24.1 11.1 24.3 11.7 24.3 12.6V19.4C24.2 20.3 24.1 20.9 23.9 21.4C23.6 22 23.4 22.4 22.9 22.9C22.4 23.4 21.9 23.7 21.4 23.9C20.9 24.1 20.3 24.3 19.4 24.3H12.6C11.7 24.2 11.1 24.1 10.6 23.9C10 23.6 9.6 23.4 9.1 22.9C8.6 22.4 8.3 21.9 8.1 21.4C7.9 20.9 7.7 20.3 7.7 19.4V12.6C7.8 11.7 7.9 11.1 8.1 10.6C8.4 10 8.6 9.6 9.1 9.1C9.6 8.6 10.1 8.3 10.6 8.1C11.1 7.9 11.7 7.7 12.6 7.7Z"
                    fill="#0B5CFF"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.6 21.7C13.6 22.3 14.8 22.6 16 22.6C19.7 22.6 22.6 19.6 22.6 16.1C22.6 14.3 22 12.7 20.7 11.4C19.4 10.2 17.8 9.5 16 9.5C12.4 9.5 9.39999 12.5 9.39999 16.1C9.39999 17.3 9.7 18.5 10.4 19.6L10.6 19.9L9.89999 22.3L12.4 21.6L12.6 21.7ZM18.2 17C18.4 17 19.4 17.5 19.6 17.6C19.6311 17.6156 19.6623 17.6287 19.6931 17.6417C19.8599 17.7121 20.0156 17.7779 20.1 18.2C20.2 18.2 20.2 18.6 20 19.1C19.9 19.5 19.1 20 18.7 20C18.6322 20 18.5673 20.0057 18.498 20.0119C18.1582 20.0419 17.712 20.0814 16.3 19.5C14.5475 18.799 13.3325 17.0999 12.9913 16.6228C12.9431 16.5554 12.9124 16.5124 12.9 16.5C12.883 16.466 12.8485 16.4116 12.8031 16.3399C12.5819 15.9906 12.1 15.2297 12.1 14.4C12.1 13.4 12.6 12.9 12.8 12.7C13 12.5 13.2 12.5 13.3 12.5H13.7C13.8 12.5 14 12.5 14.1 12.8C14.3 13.2 14.7 14.2 14.7 14.3C14.7 14.3333 14.7111 14.3667 14.7222 14.4C14.7445 14.4667 14.7667 14.5333 14.7 14.6C14.65 14.65 14.625 14.7 14.6 14.75C14.575 14.8 14.55 14.85 14.5 14.9L14.2 15.2C14.1 15.3 14 15.4 14.1 15.6C14.2 15.8 14.6 16.5 15.2 17C15.8751 17.5907 16.4078 17.8254 16.6778 17.9443C16.7278 17.9663 16.7688 17.9844 16.8 18C17 18 17.1 18 17.2 17.9C17.25 17.8 17.375 17.65 17.5 17.5C17.625 17.35 17.75 17.2 17.8 17.1C17.9 16.9 18 16.9 18.2 17Z"
                    fill="#0B5CFF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM16 8C18.1 8 20.1 8.8 21.6 10.3C23.1 11.8 24 13.8 24 15.9C24 20.3 20.4 23.9 16 23.9C14.7 23.9 13.4 23.5 12.2 22.9L8 24L9.10001 20C8.40001 18.8 8 17.4 8 16C8 11.6 11.6 8 16 8Z"
                    fill="#0B5CFF"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center sm:items-start mt-5">
            <h1 className="text-white text-[18px]">Contact Us</h1>
            <span className="text-white text-[14px] font-[300]">
              Kigali, Rwanda
            </span>
            <span className="text-white text-[14px] font-[300]">
              +250791858282
            </span>
            <span className="text-white text-[14px] font-[300]">
              info@brighforth.rw
            </span>
            <span className="text-white text-[14px] font-[300]">
              www.brightforth.rw
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center sm:items-start">
          <h1 className="text-white text-[18px]">Study Desitinations</h1>
          <a href="/canada" className="text-white text-[14px] font-[300]">
            Canada
          </a>
          <a href="/poland" className="text-white text-[14px] font-[300]">
            Poland
          </a>
          <a href="/china" className="text-white text-[14px] font-[300]">
            China
          </a>
          <a href="/usa" className="text-white text-[14px] font-[300]">
            United state
          </a>
          <a
            href="united-kingdom"
            className="text-white text-[14px] font-[300]"
          >
            United Kingdom
          </a>

          <a href="/france" className="text-white text-[14px] font-[300]">
            France
          </a>
          <a href="/ireland" className="text-white text-[14px] font-[300]">
            Ireland
          </a>
          <a href="/turkey" className="text-white text-[14px] font-[300]">
            Turkey
          </a>
          <a href="/austrial" className="text-white text-[14px] font-[300]">
            Australia
          </a>
          <a href="/germany" className="text-white text-[14px] font-[300]">
            Germany
          </a>
          <a href="/georgia" className="text-white text-[14px] font-[300]">
            Georgia
          </a>
          <a href="/cyprus" className="text-white text-[14px] font-[300]">
            Cyprus
          </a>
        </div>
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <h1 className="text-white text-[18px]">Our Services</h1>
          <a
            href="/careercounseling"
            className="text-white text-[14px] font-[300]"
          >
            Career Counseling
          </a>

          <a
            href="/univeristydocument"
            className="text-white text-[14px] font-[300]"
          >
            University selection and Documentation
          </a>
          <a href="/visaguidance" className="text-white text-[14px] font-[300]">
            Visa Guidance
          </a>
          <a href="/predeparture" className="text-white text-[14px] font-[300]">
            Pre-departure Services
          </a>
          <a
            href="/travelinsurance"
            className="text-white text-[14px] font-[300]"
          >
            Travel Insurance
          </a>
          <a href="/sop" className="text-white text-[14px] font-[300]">
            Statement of Purpose
          </a>
          <div className="flex flex-col py-4 gap-3">
            <h1 className="text-white">Quick links</h1>
            <p
              onClick={openModal}
              className="text-white text-[14px] font-[300]  cursor-pointer"
            >
              Enquiry Now
            </p>
            <a href="/aboutus" className="text-white text-[14px] font-[300]">
              About us
            </a>
            <a href="#contactus" className="text-white text-[14px] font-[300]">
              Contact us
            </a>
            <a href="/events" className="text-white text-[14px] font-[300]">
              Gallery
            </a>
            <a
              href="/application"
              className="text-white text-[14px] font-[300]"
            >
              Apply Now
            </a>
            <a href="/assessment" className="text-white text-[14px] font-[300]">
              Assessment
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <h1 className="text-white  text-center md:text-start text-[24px] md:text-[32px] font-[700] leading-8">
            Subscribe to our news letter
          </h1>
          <form action="#" onSubmit={handleSubscribe} className="flex ">
            <div className="bg-[#0A3461] p-2 flex">
              <input
                type="email"
                placeholder="Enter your Email"
                autoComplete="off"
                name="subscribe"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" bg-transparent font-[300] outline-none text-white"
              />
            </div>
            <button className="bg-[#0B5CFF] text-white text-[14px] px-2 font-[300]">
              {loading ? "Loading..." : "Subscribe"}
            </button>
          </form>
          <div className="flex flex-col gap-3 py-4">
            <a
              href="/programs"
              className="text-[#346FAF] text-[16px] font-[300]"
            >
              FIND PROGRAMS
            </a>
            <a href="#" className="text-[#346FAF] text-[16px] font-[300]">
              BOOK ONLINE COUNSELLIG
            </a>
            <a href="#" className="text-[#346FAF] text-[16px] font-[300]">
              UPCOMING EVENTS
            </a>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-out-right"
        className="max-w-7xl flex flex-col gap-2 w-full justify-center items-center"
      >
        <h1 className="text-[#FFA800] text-[14px] sm:text-[18px] md:text-[24px] font-[500] leading-6 text-center">
          Trusted by Leading Institutions
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-5  gap-8 sm:gap-14 md:gap-20 ">
          <div className="w-[100px] h-[50px]">
            <Image
              className="w-full h-full  object-scale-down "
              src={`/image/s1.png`}
              width={100}
              height={200}
            />
          </div>
          <div className="w-[100px] h-[50px]  rounded-md">
            <Image
              className="w-full h-full object-fit"
              src={`/image/s3.jpg`}
              width={200}
              height={200}
            />
          </div>
          <div className="w-[100px] h-[60px] bg-white rounded-md flex items-center justify-center">
            <Image
              className="w-full h-full object-cover rounded-sm"
              src={`/image/s4.png`}
              width={100}
              height={100}
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
      <div className="py-2 border-t-2 w-full border-[#07305C]/70 items-center justify-center flex ">
        <span className="text-white text-[14px] font-[300] text-center flex flex-row items-center gap-2">
          <FaRegCopyright /> 2024 BrightForth. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
