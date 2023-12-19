"use client";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

const EnquiryForm = ({ onClose }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [destination, setDestination] = useState("");
  const [service, setService] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [emapty, setEmpty] = useState();

  async function handelSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const data = {
      fullname,
      email,
      phonenumber,
      destination,
      service,
      city,
    };
    if (fullname == "") {
      setEmpty("fullname");
      setLoading(false);
    } else if (email == "") {
      setEmpty("email");
      setLoading(false);
    } else if (phonenumber == "") {
      setEmpty("message");
      setLoading(false);
    } else if (destination == "") {
      setEmpty("message");
      setLoading(false);
    } else if (service == "") {
      setEmpty("message");
      setLoading(false);
    } else if (city == "") {
      setEmpty("message");
      setLoading(false);
    } else {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setLoading(false);
        setFullname("");
        setEmail("");
        setPhonenumber("");
        setDestination("");
        setCity("");
        setService("");
        toast.success("Enquiry sent successfully");
        console.log("Enquiry sent successfully");
      }
      if (!response.ok) {
        setLoading(false);
        setLoading(false);
        setFullname("");
        setEmail("");
        setPhonenumber("");
        setDestination("");
        setCity("");
        setService("");
        toast.error("Enquiry not sent");
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
    <div className="absolute  w-full h-full bg-black/60 flex flex-col justify-center items-center">
      <div
        ref={modalRef}
        className="w-[90%] md:w-[70%]  bg-white  rounded-md flex flex-col gapy-4 p-10 "
      >
        <h1 className="text-[30px] font-[600]">Enquiry Form</h1>
        <form action="" onSubmit={handelSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <h1>Full Name</h1>
              <input
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                type="text"
                placeholder="Enter Your Name"
                className="border border-gray-300 p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1>Your City</h1>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                placeholder="Enter your City"
                className="border border-gray-300 p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1>Email</h1>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter your Email"
                className="border border-gray-300 p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1>Preferred Destination</h1>
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                type="text"
                placeholder="Enter Preferred Destination"
                className="border border-gray-300 p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1>Phone Number</h1>
              <input
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                type="text"
                placeholder="Enter Phone Number"
                className="border border-gray-300 p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1>Are you looking for which service?</h1>
              <input
                value={service}
                onChange={(e) => setService(e.target.value)}
                type="text"
                placeholder="Enter service"
                className="border border-gray-300 p-3 rounded-lg"
              />
            </div>
          </div>
          <div className="mx-auto mt-4 w-1/2">
            <button className="p-4 flex w-full justify-center items-center text-center text-white bg-[#FFA800] rounded-md">
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
  );
};

export default EnquiryForm;
