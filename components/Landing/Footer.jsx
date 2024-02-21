"use client";
import React, { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

const Footer = () => {
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
    <div className="flex flex-col py-2  w-full">
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-y-4 w-full px-[10px] sm:px-[50px] md:px-[100px] bg-[#F0F0F0] py-4">
        <div className="flex flex-row items-center gap-2">
          <div>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M10.0009 11.6912C11.4368 11.6912 12.6009 10.5272 12.6009 9.09118C12.6009 7.65527 11.4368 6.49121 10.0009 6.49121C8.56491 6.49121 7.40088 7.65527 7.40088 9.09118C7.40088 10.5272 8.56491 11.6912 10.0009 11.6912Z"
                stroke="#292D32"
                stroke-width="1.5"
              />
              <path
                d="M3.01626 7.57533C4.65793 0.358661 15.3496 0.366995 16.9829 7.58366C17.9413 11.817 15.3079 15.4003 12.9996 17.617C11.3246 19.2337 8.67459 19.2337 6.99126 17.617C4.69126 15.4003 2.05793 11.8087 3.01626 7.57533Z"
                stroke="#292D32"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <span className="text-black text-[16px] font-[600]">
            Kigali,Rwanda
          </span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3082 15.7753C18.3082 16.0753 18.2415 16.3837 18.0998 16.6837C17.9582 16.9837 17.7748 17.267 17.5332 17.5337C17.1248 17.9837 16.6748 18.3087 16.1665 18.517C15.6665 18.7253 15.1248 18.8337 14.5415 18.8337C13.6915 18.8337 12.7832 18.6337 11.8248 18.2253C10.8665 17.817 9.90817 17.267 8.95817 16.5753C7.99984 15.8753 7.0915 15.1003 6.22484 14.242C5.3665 13.3753 4.5915 12.467 3.89984 11.517C3.2165 10.567 2.6665 9.61699 2.2665 8.67533C1.8665 7.72533 1.6665 6.81699 1.6665 5.95033C1.6665 5.38366 1.7665 4.84199 1.9665 4.34199C2.1665 3.83366 2.48317 3.36699 2.92484 2.95033C3.45817 2.42533 4.0415 2.16699 4.65817 2.16699C4.8915 2.16699 5.12484 2.21699 5.33317 2.31699C5.54984 2.41699 5.7415 2.56699 5.8915 2.78366L7.82484 5.50866C7.97484 5.71699 8.08317 5.90866 8.15817 6.09199C8.23317 6.26699 8.27484 6.44199 8.27484 6.60033C8.27484 6.80033 8.2165 7.00033 8.09984 7.19199C7.9915 7.38366 7.83317 7.58366 7.63317 7.78366L6.99984 8.44199C6.90817 8.53366 6.8665 8.64199 6.8665 8.77533C6.8665 8.84199 6.87484 8.90033 6.8915 8.96699C6.9165 9.03366 6.9415 9.08366 6.95817 9.13366C7.10817 9.40866 7.3665 9.76699 7.73317 10.2003C8.10817 10.6337 8.50817 11.0753 8.9415 11.517C9.3915 11.9587 9.82484 12.367 10.2665 12.742C10.6998 13.1087 11.0582 13.3587 11.3415 13.5087C11.3832 13.5253 11.4332 13.5503 11.4915 13.5753C11.5582 13.6003 11.6248 13.6087 11.6998 13.6087C11.8415 13.6087 11.9498 13.5587 12.0415 13.467L12.6748 12.842C12.8832 12.6337 13.0832 12.4753 13.2748 12.3753C13.4665 12.2587 13.6582 12.2003 13.8665 12.2003C14.0248 12.2003 14.1915 12.2337 14.3748 12.3087C14.5582 12.3837 14.7498 12.492 14.9582 12.6337L17.7165 14.592C17.9332 14.742 18.0832 14.917 18.1748 15.1253C18.2582 15.3337 18.3082 15.542 18.3082 15.7753Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
            </svg>
          </div>
          <span className="text-black text-[16px] font-[600]">
            +250791858282
          </span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.08317 16.3337H6.6665C3.33317 16.3337 1.6665 15.5003 1.6665 11.3337V7.16699C1.6665 3.83366 3.33317 2.16699 6.6665 2.16699H13.3332C16.6665 2.16699 18.3332 3.83366 18.3332 7.16699V11.3337C18.3332 14.667 16.6665 16.3337 13.3332 16.3337H12.9165C12.6582 16.3337 12.4082 16.4587 12.2498 16.667L10.9998 18.3337C10.4498 19.067 9.54984 19.067 8.99984 18.3337L7.74984 16.667C7.6165 16.4837 7.30817 16.3337 7.08317 16.3337Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                opacity="0.4"
                d="M13.3306 9.66699H13.338"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                opacity="0.4"
                d="M9.99561 9.66699H10.0031"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                opacity="0.4"
                d="M6.66211 9.66699H6.66959"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <span className="text-black text-[16px] font-[600]">
            info@Brighforth.rw
          </span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g opacity="0.4">
                <path
                  d="M12 16.5C14.21 16.5 16 14.71 16 12.5C16 10.29 14.21 8.5 12 8.5C9.79 8.5 8 10.29 8 12.5C8 14.71 9.79 16.5 12 16.5Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.17 8.49988C18.15 7.83988 15.02 7.83988 12 8.49988"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.94922 6.55957L3.96922 6.61957C4.97922 9.50957 6.52922 12.1896 8.53922 14.4996"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8809 22.44C12.9409 20.17 14.4909 17.49 15.4309 14.58L15.4609 14.5"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
          <span className="text-black text-[16px] font-[600]">
            www.brightforth.rw
          </span>
        </div>
      </div>
      <div className="px-[10px] sm:px-[50px] md:px-[100px] bg-white py-4 flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 py-4">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="w-[120px]">
              <Image
                src={"/image/logo.svg"}
                width={200}
                height={200}
                className="w-full"
              />
            </div>
            <span className="text-[16px] font-[400] text-center md:text-start font-poppins text-[#797979]">
              BrightForth Consultants helps students easily and affordably find
              their dream schools abroad.
            </span>

            <h1 className="text-[20px] font-[600] text-green">
              Global Accreditations & Recognitions
            </h1>
            <div className="grid grid-cols-6 gap-2">
              <div className="w-[80px]">
                <Image
                  src={"/image/vistula.png"}
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <div className="w-[80px]">
                <Image
                  src={"/image/britis.png"}
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <div className="w-[80px]">
                <Image
                  src={"/image/online.png"}
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <div className="w-[80px]">
                <Image
                  src={"/image/auniveristy.png"}
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <div className="w-[80px]">
                <Image
                  src={"/image/name.png"}
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <div className="w-[80px]">
                <Image
                  src={"/image/alte.png"}
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4  items-center md:items-start">
            <h1 className="text-[20px] font-[700] text-black font-poppins">
              Services <br className="hidden md:flex" /> For Students
            </h1>
            <div className="flex flex-col gap-[10px] items-center md:items-start text-[18px] text-[#797979]">
              <a href="/careercounseling" className="hover:text-black transition-all">
                Counseling
              </a>
              <a href="/prepartion" className="hover:text-black transition-all">
                Test Preparation
              </a>
              <a href="/univeristydocument" className="hover:text-black transition-all">
                course, country and university selection
              </a>
              <a href="/visa-tips" className="hover:text-black transition-all">
                Visa processing
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4  items-center md:items-start">
            <h1 className="text-[20px] font-[700] text-center md:text-start text-black font-poppins">
              Study <br className="hidden md:flex"/> Desitinations
            </h1>

            <div className="grid grid-cols-3 gap-4 px-[10px] md:px-0 text-[16px] text-[#797979] font-poppins">
              <a href="/usa" className="hover:text-black transition-all">
                United states
              </a>
              <a href="/poland" className="hover:text-black transition-all">
                Poland
              </a>
              <a href="/australia" className="hover:text-black transition-all">
                Australia
              </a>
              <a href="/canada" className="hover:text-black transition-all">
                Canada
              </a>
              <a href="/china" className="hover:text-black transition-all">
                China
              </a>
              <a href="/germany" className="hover:text-black transition-all">
                Germany
              </a>
              <a href="united" className="hover:text-black transition-all">
                United kingdom
              </a>
              <a href="/turkey" className="hover:text-black transition-all">
                Turkey
              </a>
              <a href="/georgia" className="hover:text-black transition-all">
                Georgia
              </a>
            </div>

            <form
              action="#"
              onSubmit={handleSubscribe}
              className="flex w-full justify-center "
            >
              <div className="bg-[#E9E9E9] p-3 flex">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  autoComplete="off"
                  name="subscribe"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" bg-transparent font-[400] w-f outline-none  text-white"
                />
              </div>
              <button className="bg-green text-white text-[16px] px-2 w-[120px] font-[500]">
                {loading ? "Loading..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full px-[10px] sm:px-[50px] md:px-[100px] flex flex-col-reverse md:flex-row gap-[20px] items-center justify-between">
        <span className="text-[14px] font-[500] font-poppins text-[#7A7A7A]">
          @ 2023 BrightForth. All rights reserved.
        </span>
        <div className="flex flex-row gap-4 items-center">
          <a
            href="#"
            className="text-[14px] font-[500] font-poppins text-[#7A7A7A] transition-all hover:text-black"
          >
            Terms And Conditions
          </a>
          <a
            href="#"
            className="text-[14px] font-[500] font-poppins text-[#7A7A7A] transition-all hover:text-black"
          >
            Privacy
          </a>
        </div>
        <div className="grid grid-cols-6 gap-2 md:pr-5">
          <a href="$" className="">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.4 9.2H12.6C11.8 9.3 11.4 9.4 11.1 9.5C10.7 9.6 10.4 9.8 10.1 10.1C9.86261 10.3374 9.75045 10.5748 9.61489 10.8617C9.57916 10.9373 9.5417 11.0166 9.5 11.1C9.48453 11.1464 9.46667 11.1952 9.44752 11.2475C9.34291 11.5333 9.2 11.9238 9.2 12.6V19.4C9.3 20.2 9.4 20.6 9.5 20.9C9.6 21.3 9.8 21.6 10.1 21.9C10.3374 22.1374 10.5748 22.2495 10.8617 22.3851C10.9374 22.4209 11.0165 22.4583 11.1 22.5C11.1464 22.5155 11.1952 22.5333 11.2475 22.5525C11.5333 22.6571 11.9238 22.8 12.6 22.8H19.4C20.2 22.7 20.6 22.6 20.9 22.5C21.3 22.4 21.6 22.2 21.9 21.9C22.1374 21.6626 22.2495 21.4252 22.3851 21.1383C22.4209 21.0626 22.4583 20.9835 22.5 20.9C22.5155 20.8536 22.5333 20.8048 22.5525 20.7525C22.6571 20.4667 22.8 20.0762 22.8 19.4V12.6C22.7 11.8 22.6 11.4 22.5 11.1C22.4 10.7 22.2 10.4 21.9 10.1C21.6626 9.86261 21.4252 9.75045 21.1383 9.61488C21.0627 9.57918 20.9833 9.54167 20.9 9.5C20.8536 9.48453 20.8048 9.46666 20.7525 9.44752C20.4667 9.3429 20.0762 9.2 19.4 9.2ZM16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM21.4 11.6C21.4 12.1523 20.9523 12.6 20.4 12.6C19.8477 12.6 19.4 12.1523 19.4 11.6C19.4 11.0477 19.8477 10.6 20.4 10.6C20.9523 10.6 21.4 11.0477 21.4 11.6Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 5C0 2.23858 2.23858 0 5 0H27C29.7614 0 32 2.23858 32 5V27C32 29.7614 29.7614 32 27 32H5C2.23858 32 0 29.7614 0 27V5ZM12.6 7.7H19.4C20.3 7.8 20.9 7.9 21.4 8.1C22 8.4 22.4 8.6 22.9 9.1C23.4 9.6 23.7 10.1 23.9 10.6C24.1 11.1 24.3 11.7 24.3 12.6V19.4C24.2 20.3 24.1 20.9 23.9 21.4C23.6 22 23.4 22.4 22.9 22.9C22.4 23.4 21.9 23.7 21.4 23.9C20.9 24.1 20.3 24.3 19.4 24.3H12.6C11.7 24.2 11.1 24.1 10.6 23.9C10 23.6 9.6 23.4 9.1 22.9C8.6 22.4 8.3 21.9 8.1 21.4C7.9 20.9 7.7 20.3 7.7 19.4V12.6C7.8 11.7 7.9 11.1 8.1 10.6C8.4 10 8.6 9.6 9.1 9.1C9.6 8.6 10.1 8.3 10.6 8.1C11.1 7.9 11.7 7.7 12.6 7.7Z"
                fill="black"
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
                d="M0 5C0 2.23858 2.23858 0 5 0H27C29.7614 0 32 2.23858 32 5V27C32 29.7614 29.7614 32 27 32H5C2.23858 32 0 29.7614 0 27V5ZM16 8C20.4 8 24 11.6 24 16C24 20 21.1 23.4 17.1 24V18.3H19L19.4 16H17.2V14.5C17.2 13.9 17.5 13.3 18.5 13.3H19.5V11.3C19.5 11.3 18.6 11.1 17.7 11.1C15.9 11.1 14.7 12.2 14.7 14.2V16H12.7V18.3H14.7V23.9C10.9 23.3 8 20 8 16C8 11.6 11.6 8 16 8Z"
                fill="black"
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
                d="M0 5C0 2.23858 2.23858 0 5 0H27C29.7614 0 32 2.23858 32 5V27C32 29.7614 29.7614 32 27 32H5C2.23858 32 0 29.7614 0 27V5ZM8.2 13.3V24H11.6V13.3H8.2ZM8 9.9C8 11 8.8 11.8 9.9 11.8C11 11.8 11.8 11 11.8 9.9C11.8 8.8 11 8 9.9 8C8.9 8 8 8.8 8 9.9ZM20.6 24H23.8V17.4C23.8 14.1 21.8 13 19.9 13C18.2 13 17 14.1 16.7 14.8V13.3H13.5V24H16.9V18.3C16.9 16.8 17.9 16 18.9 16C19.9 16 20.6 16.5 20.6 18.2V24Z"
                fill="black"
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
              <path d="M18.6 16L14.4 13.6V18.4L18.6 16Z" fill="black" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 5C0 2.23858 2.23858 0 5 0H27C29.7614 0 32 2.23858 32 5V27C32 29.7614 29.7614 32 27 32H5C2.23858 32 0 29.7614 0 27V5ZM22.2 10.7C22.9 10.9 23.4 11.4 23.6 12.1C24 13.4 24 16 24 16C24 16 24 18.6 23.7 19.9C23.5 20.6 23 21.1 22.3 21.3C21 21.6 16 21.6 16 21.6C16 21.6 10.9 21.6 9.7 21.3C9 21.1 8.5 20.6 8.3 19.9C8 18.6 8 16 8 16C8 16 8 13.4 8.2 12.1C8.4 11.4 8.90001 10.9 9.60001 10.7C10.9 10.4 15.9 10.4 15.9 10.4C15.9 10.4 21 10.4 22.2 10.7Z"
                fill="black"
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
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 5C0 2.23858 2.23858 0 5 0H27C29.7614 0 32 2.23858 32 5V27C32 29.7614 29.7614 32 27 32H5C2.23858 32 0 29.7614 0 27V5ZM16 8C18.1 8 20.1 8.8 21.6 10.3C23.1 11.8 24 13.8 24 15.9C24 20.3 20.4 23.9 16 23.9C14.7 23.9 13.4 23.5 12.2 22.9L8 24L9.10001 20C8.40001 18.8 8 17.4 8 16C8 11.6 11.6 8 16 8Z"
                fill="black"
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
                d="M0 5C0 2.23858 2.23858 0 5 0H27C29.7614 0 32 2.23858 32 5V27C32 29.7614 29.7614 32 27 32H5C2.23858 32 0 29.7614 0 27V5ZM22.1 11.5C22.8 11.4 23.4 11.3 24 11C23.6 11.7 23 12.3 22.3 12.7C22.5 17.4 19.1 22.5 13 22.5C11.2 22.5 9.5 21.9 8 21C9.7 21.2 11.5 20.7 12.7 19.8C11.2 19.8 10 18.8 9.6 17.5C10.1 17.6 10.6 17.5 11.1 17.4C9.6 17 8.5 15.6 8.5 14.1C9 14.3 9.5 14.5 10 14.5C8.6 13.5 8.1 11.6 9 10.1C10.7 12.1 13.1 13.4 15.8 13.5C15.3 11.5 16.9 9.5 19 9.5C19.9 9.5 20.8 9.9 21.4 10.5C22.2 10.3 22.9 10.1 23.5 9.7C23.3 10.5 22.8 11.1 22.1 11.5Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
