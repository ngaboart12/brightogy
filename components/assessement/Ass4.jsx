"use client";
import React from "react";
import Input from "../Input";

const Ass4 = ({ formData, handleInputChange }) => {
  return (
    <div className="flex flex-col gap-2 pb-10">
      <div className="flex flex-col gap-10">
        <h1 className="text-[#07294D] text-[24px] font-bold">Other</h1>
        <div className="flex flex-col gap-4 justify-center md:flex-row bg-[#07294D] py-8 px-10 items-center">
          <div className="flex flex-col gap-2">
            <span className="text-white text-[18px] font-light">
              I have criminal record
            </span>
            <div className="flex gap-2">
              <div className="flex gap-2 bg-[#072F5A] p-4 px-8 rounded-lg">
                <input
                  type="radio"
                  name="criminal"
                  value="yes"
                  onChange={(e) =>
                    handleInputChange("other", "criminalRecord", e.target.value)
                  }
                  className="border border-white w-4"
                />
                <span className="text-[white]">Yes</span>
              </div>
              <div className="flex gap-2 bg-[#072F5A] p-4 px-8 rounded-lg">
                <input
                  type="radio"
                  name="criminal"
                  value="no"
                  onChange={(e) =>
                    handleInputChange("other", "criminalRecord", e.target.value)
                  }
                  className="border border-white w-4"
                />
                <span className="text-[white]">No</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white text-[18px] font-light">
              I have a serious medical condition
            </span>
            <div className="flex gap-2">
              <div className="flex gap-2 bg-[#072F5A] p-4 px-8 rounded-lg">
                <input
                  type="radio"
                  name="condition"
                  value="yes"
                  onChange={(e) =>
                    handleInputChange(
                      "other",
                      "seriousCondition",
                      e.target.value
                    )
                  }
                  className="border border-white w-4"
                />
                <span className="text-[white]">Yes</span>
              </div>
              <div className="flex gap-2 bg-[#072F5A] p-4 px-8 rounded-lg">
                <input
                  type="radio"
                  name="condition"
                  value="no"
                  onChange={(e) =>
                    handleInputChange(
                      "other",
                      "seriousCondition",
                      e.target.value
                    )
                  }
                  className="border border-white w-4"
                />
                <span className="text-[white]">No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-2 md:grid-cols-2  ">
          <Input
            placeholder="select language"
            label="First Official Language"
            value={formData.other.FirstofficialLanguage}
            onChange={(e) =>
              handleInputChange(
                "other",
                "FirstofficialLanguage",
                e.target.value
              )
            }
          />
          <Input
            placeholder="Message Here"
            label="Message"
            value={formData.other.Message}
            onChange={(e) =>
              handleInputChange("other", "Message", e.target.value)
            }
          />
        </div>
        <div className="flex flex-col gap-4 py-8 items-center px-4 bg-[#07294D] md:flex-row md:px-20">
          <div>
            <svg
              width="59"
              height="58"
              viewBox="0 0 59 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M53.6663 28.9997C53.6663 42.3493 42.8469 53.1663 29.4997 53.1663C16.1524 53.1663 5.33301 42.3493 5.33301 28.9997C5.33301 15.6548 16.1524 4.83301 29.4997 4.83301C42.8469 4.83301 53.6663 15.6548 53.6663 28.9997Z"
                fill="#FFA800"
              />
              <path
                d="M29.4876 36.0773C30.679 36.0773 31.6264 37.027 31.6264 38.1919C31.6264 39.3567 30.679 40.3065 29.5118 40.3065C28.3397 40.3065 27.3851 39.3567 27.3851 38.1919C27.3851 37.027 28.33 36.0773 29.4876 36.0773ZM29.4876 17.728C30.6525 17.728 31.6022 18.6778 31.6022 19.8426V30.5243C31.6022 31.6891 30.6525 32.6389 29.4876 32.6389C28.3228 32.6389 27.373 31.6891 27.373 30.5243V19.8426C27.373 18.6778 28.3228 17.728 29.4876 17.728Z"
                fill="#FFA800"
              />
            </svg>
          </div>
          <span className="text-white text-center md:text-start">
            By Submitting this assessment you agree to receive important
            immigration news updates from BrightForth
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ass4;
