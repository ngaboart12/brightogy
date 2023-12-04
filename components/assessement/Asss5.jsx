"use client"
import React from "react";

const Asss5 = ({ formData, handleInputChange }) => {
  return (
    <div className="flex flex-col gap-6 pb-10">
      <h1 className="text-[32px] font-bold text-[#123E6C] mt-10">
        Background informaton
      </h1>
      <div className="grid sm:grid-cols-2 gap-y-10">
        <div className="flex flex-col  gap-1 text-black">
          <span>Have you refused a Visa?</span>
          <div className="flex gap-2 w-full">
            <div className="flex gap-4 border px-6 py-3 rounded-md">
              <input
                type="radio"
                className="w-4"
                name="visa"
                value="Yes"
                onChange={(e) =>
                  handleInputChange(
                    "backgroundInfo",
                    "haveYouRefusedVisa",
                    e.target.value
                  )
                }
              />{" "}
              <label htmlFor="">Yes</label>
            </div>
            <div className="flex gap-4 border px-6 py-3 rounded-md">
              <input
                type="radio"
                className="w-4"
                name="visa"
                value="no"
                onChange={(e) =>
                  handleInputChange(
                    "backgroundInfo",
                    "haveYouRefusedVisa",
                    e.target.value
                  )
                }
              />{" "}
              <label htmlFor="">No</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-1 text-black">
          <span>Who will be your sponsor</span>
          <div className="flex gap-2 w-full">
            <div className="flex gap-4 border px-4 py-3 rounded-md items-center">
              <input
                type="radio"
                className="w-4"
                name="sponsor"
                value="parent"
                onChange={(e) =>
                  handleInputChange(
                    "backgroundInfo",
                    "yourSponsor",
                    e.target.value
                  )
                }
              />{" "}
              <label htmlFor="" className="text-[14px]">
                Parent
              </label>
            </div>
            <div className="flex gap-2 border px-2 py-3 rounded-md items-center">
              <input
                type="radio"
                className="w-4"
                name="sponsor"
                value="Family Member"
                onChange={(e) =>
                  handleInputChange(
                    "backgroundInfo",
                    "yourSponsor",
                    e.target.value
                  )
                }
              />{" "}
              <label htmlFor="" className="text-[12px]">
                Family members
              </label>
            </div>
            <div className="flex gap-4 border px-4 py-3 rounded-md items-center">
              <input
                type="radio"
                className="w-4"
                name="sponsor"
                value="Other"
                onChange={(e) =>
                  handleInputChange(
                    "backgroundInfo",
                    "yourSponsor",
                    e.target.value
                  )
                }
              />{" "}
              <label htmlFor="" className="text-[14px]">
                Others
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-1 text-black">
          <span>Do you have a valid study permit/Visa?</span>
          <div className="flex gap-2 w-full">
            <div className="flex gap-4 border px-6 py-3 rounded-md">
              <input
                type="radio"
                className="w-4"
                name="permit"
                value="Yes"
                onChange={(e) =>
                  handleInputChange(
                    "backgroundInfo",
                    "validStudyPermit",
                    e.target.value
                  )
                }
              />{" "}
              <label htmlFor="">Yes</label>
            </div>
            <div className="flex gap-4 border px-6 py-3 rounded-md">
              <input
                type="radio"
                className="w-4"
                name="permit"
                value="No"
                onChange={(e) =>
                  handleInputChange(
                    "backgroundInfo",
                    "validStudyPermit",
                    e.target.value
                  )
                }
              />{" "}
              <label htmlFor="">No</label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white">
              If you answered yest to any question of the question above, please
              provide more details
            </span>
            <textarea
              className="flex p-4 outline-none w-full border rounded-md"
              name=""
              id=""
              cols="200"
              rows="2"
              placeholder="Details"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asss5;
