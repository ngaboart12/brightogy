"use client";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import Image from "next/image";

const PartnerWithUs = ({ onClose }) => {
  const [destination, setDestination] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [contactFullName, setContactFullName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhoneNumber, setContactPhoneNumber] = useState("");
  const [contactTitle, setContactTitle] = useState("");
  const [additionalComment, setAdditionalComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [emapty, setEmpty] = useState();

  async function handelSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const data = {
      destination,
      schoolName,
      contactFullName,
      contactEmail,
      contactPhoneNumber,
      contactTitle,
      additionalComment,
    };
    if (destination == "") {
      setEmpty("fullname");
      setLoading(false);
    } else if (schoolName == "") {
      setEmpty("school Name");
      setLoading(false);
    } else if (contactFullName == "") {
      setEmpty("message");
      setLoading(false);
    } else if (contactEmail == "") {
      setEmpty("message");
      setLoading(false);
    } else if (contactPhoneNumber == "") {
      setEmpty("message");
      setLoading(false);
    } else if (contactTitle == "") {
      setEmpty("message");
      setLoading(false);
    } else if (additionalComment == "") {
      setEmpty("message");
      setLoading(false);
    } else {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setLoading(false);
        setContactEmail("");
        setContactFullName("");
        setDestination("");
        setAdditionalComment("");
        setSchoolName("");
        toast.success("Partner sent successfully");
      }
      if (!response.ok) {
        setLoading(false);
        setContactEmail("");
        setContactFullName("");
        setDestination("");
        setAdditionalComment("");
        setSchoolName("");
        toast.error("Partner not sent");
        console.log("error sending message");
      }
    }
  }

  const modalRef = useRef();

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    // Add event listener when the modal is open
    document.addEventListener("mousedown", handleOutsideClick);

    // Remove event listener when the modal is closed
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="absolute   w-full h-full  flex flex-col justify-center items-center">
      <div
        ref={modalRef}
        className="w-[90%] md:w-[80%] flex flex-row  bg-white  rounded-[12px] gap-6  gapy-4 p-6 "
      >
        <div className="flex flex-col w-[40%] bg-[#1D73AF] gap-[10vh] rounded-[12px] p-10 items-start relative">
          <div className="w-full h-full top-0 left-0 absolute">
            <Image
              src={"/image/Banner.svg"}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[100px]">
            <Image
              src={`/image/logo.svg`}
              width={300}
              height={300}
              className="w-full"
            />
          </div>
          <div>
            <span className="text-[14px] text-white font-[300] font-poppins">
              brithtforth uses your personal information to manage your account
              and deliver requested goods and services. We respect your privacy
              and may occasionally contact you with information about our
              products and services. Please indicate your preferred method of
              communication.
            </span>
          </div>
        </div>
        <div className="flex flex-col w-1/2 font-poppins">
          <h1 className="text-[24px] font-[800] font-poppins text-[#1D73AF]">
            Partner With Us
          </h1>
          <form action="" onSubmit={handelSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center">
              <div className="flex flex-col gap-2">
                <h1 className="text-[14px]">Destination Country </h1>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  type="text"
                  placeholder="Enter Your Name"
                  className="border border-gray-300 text-[14px] p-3 rounded-lg placeholder:text-black text-black"
                >
                  <option>Select Country</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Zambia">Zambia</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-[14px]">School Name</h1>
                <input
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  type="text"
                  placeholder="Enter your City"
                  className="border border-gray-300 py-3 px-3 rounded-lg placeholder:text-black text-black"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[14px]">Contact Full Name</h1>
                <input
                  value={contactFullName}
                  onChange={(e) => setContactFullName(e.target.value)}
                  type="text"
                  placeholder="Enter  Fullname"
                  className="border border-gray-300 p-3 rounded-lg placeholder:text-black text-black"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[14px]">Contact Email</h1>
                <input
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  type="text"
                  placeholder="Enter  email"
                  className="border text-[14px] border-gray-300 p-3 rounded-lg placeholder:text-black text-black"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[14px]">Contact Phone Number</h1>
                <input
                  value={contactPhoneNumber}
                  onChange={(e) => setContactPhoneNumber(e.target.value)}
                  type="text"
                  placeholder="Enter phone number"
                  className="border border-gray-300 text-[14px] p-3 rounded-lg placeholder:text-black text-black"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[14px]">Contact Title</h1>
                <input
                  value={contactTitle}
                  onChange={(e) => setContactTitle(e.target.value)}
                  type="text"
                  placeholder="Enter service"
                  className="border text-[14px] border-gray-300 p-3 rounded-lg placeholder:text-black text-black"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <h1 className="text-[14px]">Additional comments</h1>
              <textarea
                value={additionalComment}
                onChange={(e) => setAdditionalComment(e.target.value)}
                placeholder="Enter service"
                className="border text-[14px] border-gray-300 p-3 rounded-lg placeholder:text-black text-black"
              />
            </div>
            <div className="mt-2 flex flex-col">
              <span className="text-[14px] text-[#6B6666] font-[300]">
                By clicking submit , you consent to allow brightforth to store
                and process the personal information submitted above to provide
                you the content requested.
              </span>
              <button className="p-4 w-full mt-2 md:w-[200px] flex  justify-center items-center text-center text-white bg-green rounded-[12px] z-40">
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
                  "Submit Now"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
