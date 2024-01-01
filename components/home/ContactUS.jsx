"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { IoLocation, IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { GiWorld } from "react-icons/gi";

const ContactUS = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [emapty, setEmpty] = useState();

  async function handelSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const data = {
      username,
      email,
      message,
    };
    if (username == "") {
      setEmpty("username");
      setLoading(false);
    } else if (email == "") {
      setEmpty("email");
      setLoading(false);
    } else if (message == "") {
      setEmpty("message");
      setLoading(false);
    } else {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setLoading(false);
        setEmpty("");
        setEmail("");
        setUsername("");
        setMessage("");
        toast.success("Email sent successfully");
        console.log("Message sent successfully");
      }
      if (!response.ok) {
        setLoading(false);
        setEmpty("");
        setEmail("");
        setUsername("");
        setMessage("");
        toast.error("message not sent");
        console.log("error sending message");
      }
    }
  }
  return (
    <div
      className=" w-full items-center flex flex-col gap-6 max-w-7xl py-20 bg-gray-100"
      id="contactus"
    >
      <h1
        data-aos="zoom-out-right"
        className="text-[32px] text-[#07294D] font-bold text-center"
      >
        Reach Out To Us
      </h1>
      <div
        data-aos="zoom-out-right"
        className="flex w-full flex-col gap-10 md:flex-row"
      >
        <div className="w-full md:w-1/2 md:items-end items-center flex flex-col gap-2">
          <div className=" w- flex flex-col gap-5">
            <h1 className="text-[24px] text-[#07294D] font-bold ">
              OUR SCHEDULE
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <span className="text-[18px] text-[#07294D]">Sunday</span>
                <span className="text-[14px] font-[300] text-[#07294D]">
                  closed
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] text-[#07294D]">Saturday</span>
                <span className="text-[14px] font-[300] text-[#736B6B]">
                  09:00 AM - 02:30 pM
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] text-[#07294D]">
                  Monday - Friday
                </span>
                <span className="text-[14px] font-[300] text-[#736B6B]">
                  7:00 AM - 5:00 pM
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center">
                <IoLocation color="#07294D" />
                <span className="text-[#07294D]">kigali, Rwanda .</span>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <IoMdMail color="#07294D" />
                <span className="text-[#07294D]">info@brightforth.rw</span>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <IoCall color="#07294D" />
                <span className="text-[#07294D]">+250791858282</span>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <GiWorld color="#07294D" />
                <span className="text-[#07294D]">www.brightforth.rw</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <span className="text-[18px] text-[#07294D]">#brightforth</span>
              <div className="flex gap-2">
                <a href="#">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20ZM20 10C25.5 10 30 14.5 30 20C30 25 26.375 29.25 21.375 30V22.875H23.75L24.25 20H21.5V18.125C21.5 17.375 21.875 16.625 23.125 16.625H24.375V14.125C24.375 14.125 23.25 13.875 22.125 13.875C19.875 13.875 18.375 15.25 18.375 17.75V20H15.875V22.875H18.375V29.875C13.625 29.125 10 25 10 20C10 14.5 14.5 10 20 10Z"
                      fill="#07294D"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 23.5C18.125 23.5 16.5 22 16.5 20C16.5 18.125 18 16.5 20 16.5C21.875 16.5 23.5 18 23.5 20C23.5 21.875 21.875 23.5 20 23.5Z"
                      fill="#07294D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.25 11.5H15.75C14.75 11.625 14.25 11.75 13.875 11.875C13.375 12 13 12.25 12.625 12.625C12.3283 12.9217 12.1881 13.2185 12.0186 13.5771C11.9739 13.6717 11.9271 13.7707 11.875 13.875C11.8557 13.933 11.8333 13.994 11.8094 14.0594C11.6786 14.4167 11.5 14.9047 11.5 15.75V24.25C11.625 25.25 11.75 25.75 11.875 26.125C12 26.625 12.25 27 12.625 27.375C12.9217 27.6717 13.2185 27.8119 13.5771 27.9814C13.6717 28.0261 13.7706 28.0728 13.875 28.125C13.933 28.1443 13.994 28.1667 14.0594 28.1906C14.4167 28.3214 14.9047 28.5 15.75 28.5H24.25C25.25 28.375 25.75 28.25 26.125 28.125C26.625 28 27 27.75 27.375 27.375C27.6717 27.0783 27.8119 26.7815 27.9814 26.4229C28.0261 26.3283 28.0728 26.2293 28.125 26.125C28.1443 26.067 28.1667 26.006 28.1906 25.9406C28.3214 25.5833 28.5 25.0953 28.5 24.25V15.75C28.375 14.75 28.25 14.25 28.125 13.875C28 13.375 27.75 13 27.375 12.625C27.0783 12.3283 26.7815 12.1881 26.4229 12.0186C26.3284 11.974 26.2292 11.9271 26.125 11.875C26.067 11.8557 26.006 11.8333 25.9406 11.8094C25.5833 11.6786 25.0953 11.5 24.25 11.5ZM20 14.625C17 14.625 14.625 17 14.625 20C14.625 23 17 25.375 20 25.375C23 25.375 25.375 23 25.375 20C25.375 17 23 14.625 20 14.625ZM26.75 14.5C26.75 15.1904 26.1904 15.75 25.5 15.75C24.8096 15.75 24.25 15.1904 24.25 14.5C24.25 13.8096 24.8096 13.25 25.5 13.25C26.1904 13.25 26.75 13.8096 26.75 14.5Z"
                      fill="#07294D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20ZM15.75 9.625H24.25C25.375 9.75 26.125 9.875 26.75 10.125C27.5 10.5 28 10.75 28.625 11.375C29.25 12 29.625 12.625 29.875 13.25C30.125 13.875 30.375 14.625 30.375 15.75V24.25C30.25 25.375 30.125 26.125 29.875 26.75C29.5 27.5 29.25 28 28.625 28.625C28 29.25 27.375 29.625 26.75 29.875C26.125 30.125 25.375 30.375 24.25 30.375H15.75C14.625 30.25 13.875 30.125 13.25 29.875C12.5 29.5 12 29.25 11.375 28.625C10.75 28 10.375 27.375 10.125 26.75C9.875 26.125 9.625 25.375 9.625 24.25V15.75C9.75 14.625 9.875 13.875 10.125 13.25C10.5 12.5 10.75 12 11.375 11.375C12 10.75 12.625 10.375 13.25 10.125C13.875 9.875 14.625 9.625 15.75 9.625Z"
                      fill="#07294D"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20ZM27.625 14.375C28.5 14.25 29.25 14.125 30 13.75C29.5 14.625 28.75 15.375 27.875 15.875C28.125 21.75 23.875 28.125 16.25 28.125C14 28.125 11.875 27.375 10 26.25C12.125 26.5 14.375 25.875 15.875 24.75C14 24.75 12.5 23.5 12 21.875C12.625 22 13.25 21.875 13.875 21.75C12 21.25 10.625 19.5 10.625 17.625C11.25 17.875 11.875 18.125 12.5 18.125C10.75 16.875 10.125 14.5 11.25 12.625C13.375 15.125 16.375 16.75 19.75 16.875C19.125 14.375 21.125 11.875 23.75 11.875C24.875 11.875 26 12.375 26.75 13.125C27.75 12.875 28.625 12.625 29.375 12.125C29.125 13.125 28.5 13.875 27.625 14.375Z"
                      fill="#07294D"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20ZM10.25 16.625V30H14.5V16.625H10.25ZM10 12.375C10 13.75 11 14.75 12.375 14.75C13.75 14.75 14.75 13.75 14.75 12.375C14.75 11 13.75 10 12.375 10C11.125 10 10 11 10 12.375ZM25.75 30H29.75V21.75C29.75 17.625 27.25 16.25 24.875 16.25C22.75 16.25 21.25 17.625 20.875 18.5V16.625H16.875V30H21.125V22.875C21.125 21 22.375 20 23.625 20C24.875 20 25.75 20.625 25.75 22.75V30Z"
                      fill="#07294D"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col">
          <form
            action=""
            onSubmit={handelSubmit}
            className=" w-full md:w-[60%] flex flex-col gap-10 px-10"
          >
            <div className="flex flex-col gap-1">
              <span className="text-black">Name</span>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Enter your name"
                className="p-[10px]  outline-none rounded-xl border border-gray-300 font-light placeholder:text-black text-black"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-black">Email</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter your Email"
                className="p-[10px] outline-none rounded-xl border border-gray-300 font-light  placeholder:text-black text-black"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-black">Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                placeholder="Enter your Message"
                className="p-[10px] outline-none rounded-xl border border-gray-300 font-light  placeholder:text-black text-black"
                rows={3}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#FFCD21] text-black rounded-xl p-4"
            >
              {loading ? (
                <ThreeDots
                  height="20"
                  width="80"
                  radius="9"
                  color="white"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              ) : (
                "submit now"
              )}
            </button>
          </form>
        </div>
      </div>
      <div className="w-full items-center flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d31899.828587935393!2d30.124833!3d-1.962306!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwNTcnNDQuMyJTIDMwwrAwNycyOS40IkU!5e0!3m2!1sen!2sus!4v1704072082064!5m2!1sen!2sus"
          width="650"
          height="350"
          className="border:0; w-[80%] rounded-xl"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUS;
