"use client";
import React, { useEffect, useState } from "react";
import Input from "../Input";

const Ass1 = ({ formData, handleInputChange }) => {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const fetchAllCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        if (response.ok) {
          setAllCountries(data);
        } else {
          console.error("Error fetching countries:", data.message);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchAllCountries();
  }, []);
  const levelEducation = [
    { name: "Less than secondary sechool" },
    { name: "Secondary Diploma" },
    { name: "One-year post-secondary program" },
    { name: "Two-year post-secondary program" },
    { name: "Bacherol's Degree" },
    { name: "Two or More post-secondary programs" },
    { name: "Master's Degree" },
    { name: "Doctor Level univeristy" },
  ];
  return (
    <div className="container gap-10 flex flex-col mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-[#07294D] text-center text-xl leading-4 md:text-4xl lg:text-4xl font-bold  md:leading-8">
        BrightForth Career <br /> Consulting Assessment
      </h1>
      <div className="flex flex-col gap-4 justify-center  py-4">
        <h1 className="font-semibold  text-xl sm:text-2xl text-[#07294D] pb-2">
          Personal Information
        </h1>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
          <Input
            placeholder="Enter First Name"
            label="First Name"
            type="text"
            value={formData.personInfo.firstName}
            onChange={(e) =>
              handleInputChange("personInfo", "firstName", e.target.value)
            }
          />

          <Input
            placeholder="Enter Last Name"
            label="Last Name"
            type="text"
            value={formData.personInfo.lastName}
            onChange={(e) =>
              handleInputChange("personInfo", "lastName", e.target.value)
            }
          />
          <Input
            placeholder="Enter Email"
            label="Email Address"
            type="email"
            value={formData.personInfo.emailAdrress}
            onChange={(e) =>
              handleInputChange("personInfo", "emailAdrress", e.target.value)
            }
          />

          <div className="flex flex-col  gap-1 text-black">
            <span>Nationality</span>
            <select
              className="border py-3 rounded-md px-4 outline-none text-[#07294D]"
              value={formData.personInfo.nationality}
              onChange={(e) =>
                handleInputChange("personInfo", "nationality", e.target.value)
              }
            >
              <option value="" disabled>
                Select Nationality
              </option>
              {allCountries.map((country) => (
                <option key={country.name.common} value={country.name.common}>
                  {country.name.common}
                </option>
              ))}
            </select>
          </div>
          <Input
            placeholder="Country of Residence"
            label="Country of Residence"
            type="Text"
            value={formData.personInfo.countryResidence}
            onChange={(e) =>
              handleInputChange(
                "personInfo",
                "countryResidence",
                e.target.value
              )
            }
          />
          <Input
            placeholder="Age"
            label="Enter Age"
            type="number"
            value={formData.personInfo.Age}
            onChange={(e) =>
              handleInputChange("personInfo", "Age", e.target.value)
            }
          />

          <div className="flex flex-col  gap-1 text-black">
            <span>Highest Level of Education</span>
            <select
              className="border py-3 rounded-md px-4 outline-none text-[#07294D] "
              value={formData.personInfo.levelOfEducation}
              onChange={(e) =>
                handleInputChange(
                  "personInfo",
                  "levelOfEducation",
                  e.target.value
                )
              }
            >
              <option value="" disabled>
                Please Select
              </option>
              {levelEducation.map((level) => (
                <option
                  key={level.name}
                  value={level.name}
                  className="text-[14px]"
                >
                  {level.name}
                </option>
              ))}
            </select>
          </div>
          <Input
            placeholder="Enter Faculty"
            label="Faculty"
            type="text"
            value={formData.personInfo.faculty}
            onChange={(e) =>
              handleInputChange("personInfo", "faculty", e.target.value)
            }
          />
          <Input
            placeholder="Enter Phone Number"
            label="Phone Number"
            type="number"
            value={formData.personInfo.phoneNumber}
            onChange={(e) =>
              handleInputChange("personInfo", "phoneNumber", e.target.value)
            }
          />
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start  justify-between p-6 bg-[#07294D] rounded-md     gap-4 mt-4 sm:mt-8 lg:mt-12">
          <div className=" items-center h-full justify-center my-auto">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M50 25C50 38.81 38.8075 50 25 50C11.1925 50 0 38.81 0 25C0 11.195 11.1925 0 25 0C38.8075 0 50 11.195 50 25Z"
                fill="#FFA800"
              />
              <path
                d="M24.9961 32.3218C26.2286 32.3218 27.2086 33.3043 27.2086 34.5093C27.2086 35.7143 26.2286 36.6968 25.0211 36.6968C23.8086 36.6968 22.8211 35.7143 22.8211 34.5093C22.8211 33.3043 23.7986 32.3218 24.9961 32.3218ZM24.9961 13.3398C26.2011 13.3398 27.1836 14.3223 27.1836 15.5273V26.5773C27.1836 27.7823 26.2011 28.7648 24.9961 28.7648C23.7911 28.7648 22.8086 27.7823 22.8086 26.5773V15.5273C22.8086 14.3223 23.7911 13.3398 24.9961 13.3398Z"
                fill="#FFA800"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-4 items-center md:items-center">
            <span className="text-white text-[14px] font-[100] text-center md:text-start">
              Are you, or a family member, able to provide bank statements
              equivalent of
            </span>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="less"
                  value="Less than - 5,000 USD"
                  onChange={(e) =>
                    handleInputChange(
                      "personInfo",
                      "provideBankStatementsEquivalent",
                      e.target.value
                    )
                  }
                />
                <span className="text-white">Less than - 5,000 USD</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="less"
                  value="5,000 USD - 15,000 USD"
                  onChange={(e) =>
                    handleInputChange(
                      "personInfo",
                      "provideBankStatementsEquivalent",
                      e.target.value
                    )
                  }
                />
                <span className="text-white">5,000 USD - 15,000 USD</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="less"
                  value="35,000 USD - Above"
                  onChange={(e) =>
                    handleInputChange(
                      "personInfo",
                      "provideBankStatementsEquivalent",
                      e.target.value
                    )
                  }
                />
                <span className="text-white">35,000 USD - Above</span>
              </div>
            </div>

            <div className="flex flex-col  gap-1 text-black ">
              <span className="text-white text-[14px] text-center md:text-start">
                To cover your living expenses while you study Abroad?
              </span>
              <div className="flex gap-2 w-full  justify-center md:justify-start ">
                <div className="flex gap-4  px-6 py-3 rounded-md bg-[#072F5A]">
                  <input
                    type="radio"
                    className="w-4"
                    name="Hon"
                    value="Yes"
                    onChange={(e) =>
                      handleInputChange(
                        "personInfo",
                        "livingExpensesWhileYouWtudyInCanada",
                        e.target.value
                      )
                    }
                  />{" "}
                  <label htmlFor="" className="text-white">
                    Yes
                  </label>
                </div>
                <div className="flex gap-4  px-6 py-3 rounded-md bg-[#072F5A]">
                  <input
                    type="radio"
                    className="w-4"
                    name="Hon"
                    value="No"
                    onChange={(e) =>
                      handleInputChange(
                        "personInfo",
                        "livingExpensesWhileYouWtudyInCanada",
                        e.target.value
                      )
                    }
                  />{" "}
                  <label htmlFor="" className="text-white">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-2 text-black items-center ">
            <span className="text-white text-[14px] text-center md:text-start leading-4">
              Do you already have a letter of admission/Acceptance to an
              Overseas Educational Institution
            </span>
            <div className="flex flex-col md:flex-row w-[150px]   gap-2 md:w-full justify-center md:justify-start ">
              <div className="flex gap-4  px-6 py-3 rounded-md bg-[#072F5A]">
                <input
                  type="radio"
                  className="w-4"
                  name="Honeee"
                  value="Yes"
                  onChange={(e) =>
                    handleInputChange(
                      "personInfo",
                      "letterOfAdmission",
                      e.target.value
                    )
                  }
                />{" "}
                <label htmlFor="" className="text-white">
                  Yes
                </label>
              </div>
              <div className="flex gap-4  px-6 py-3 rounded-md bg-[#072F5A]">
                <input
                  type="radio"
                  className="w-4"
                  name="Honeee"
                  value="No"
                  onChange={(e) =>
                    handleInputChange(
                      "personInfo",
                      "letterOfAdmission",
                      e.target.value
                    )
                  }
                />{" "}
                <label htmlFor="" className="text-white">
                  No
                </label>
              </div>
              <div className="flex gap-2  px-1 items-center py-3 rounded-md bg-[#072F5A]">
                <input
                  type="radio"
                  className="w-4"
                  name="Honeee"
                  value="i'm not sure"
                  onChange={(e) =>
                    handleInputChange(
                      "personInfo",
                      "letterOfAdmission",
                      e.target.value
                    )
                  }
                />{" "}
                <label htmlFor="" className="text-white text-[12px]">
                  I'm not sure
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ass1;
