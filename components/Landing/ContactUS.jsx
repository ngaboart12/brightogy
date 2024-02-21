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
      className=" w-full  flex flex-col gap-6 max-w-7xl py-20 "
      id="contactus"
    >
      <h1
   
        className="text-[32px] text-[#07294D] font-bold text-center"
      >
        Reach Out To Us
      </h1>
      <div
       
        className="flex w-full flex-col gap-10 md:flex-row"
      >
        <div className="w-full pl-10 md:w-1/2 flex flex-col gap-2">
          <div className=" w-full pr-[40px] md:pr-[0px] flex flex-col gap-4">
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
          
            <div className="w-full items-center flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d31899.828587935393!2d30.124833!3d-1.962306!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwNTcnNDQuMyJTIDMwwrAwNycyOS40IkU!5e0!3m2!1sen!2sus!4v1704072082064!5m2!1sen!2sus"
                width="350"
                height="250"
                className="border:0; w-[100%] rounded-xl"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
         
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col">
          <form
            action=""
            onSubmit={handelSubmit}
            className=" w-full md:w-[90%] flex flex-col gap-6 px-10"
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
              className="bg-[#7db834] w-full md:w-1/2 text-white rounded-xl p-4"
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
    </div>
  );
};

export default ContactUS;
