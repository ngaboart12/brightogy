"use client"
import React from "react";
import Input from "../Input";

const Ass3 = ({ formData, handleInputChange }) => {
  const level = [
    { name: "NONE" },
    { name: "BEGINNER" },
    { name: "INTERMEDIATE" },
    { name: "ADVANCED" },
    { name: "EXPERT" },
  ];
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[22px] md:text-[32px] leading-6 text-[#07294D] font-bold">
        Canadian Language Proficiency
      </h1>
      <div className="flex flex-col gap-2">
        <div className="w-[300px]">
          <div className="flex flex-col  gap-1 text-black">
            <span>First Official Language</span>
            <select
              className="border py-3 rounded-md px-4 outline-none text-[#07294D] "
              value={formData.cannadian.firstOfficialLanguage}
              onChange={(e) =>
                handleInputChange(
                  "cannadian",
                  "firstOfficialLanguage",
                  e.target.value
                )
              }
            >
              <option value="" disabled>
                Please Select
              </option>
              <option value="English">ENGLISH</option>
              <option value="French">FRENCH</option>
            </select>
          </div>
        </div>
        <div className="grid  sm:grid-cols-2 blg:grid-cols-4 gap-2">
          <div className="flex flex-col  gap-1 text-black">
            <span>Read Proficiency</span>
            <select
              className="border py-3 rounded-md px-4 outline-none text-[#07294D] "
              value={formData.cannadian.firstReadProficiency}
              onChange={(e) =>
                handleInputChange(
                  "cannadian",
                  "firstReadProficiency",
                  e.target.value
                )
              }
            >
              <option value="" disabled>
                Please Select
              </option>
              {level.map((item, index) => (
                <option value={item.name} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col  gap-1 text-black">
            <span>Writing Proficiency</span>
            <select
              className="border py-3 rounded-md px-4 outline-none text-[#07294D] "
              value={formData.cannadian.firstWritingProficiency}
              onChange={(e) =>
                handleInputChange(
                  "cannadian",
                  "firstWritingProficiency",
                  e.target.value
                )
              }
            >
              <option value="" disabled>
                Please Select
              </option>
              {level.map((item, index) => (
                <option value={item.name} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col  gap-1 text-black">
            <span>Speaking Proficiency</span>
            <select
              className="border py-3 rounded-md px-4 outline-none text-[#07294D] "
              value={formData.cannadian.firstSpeakingProficiency}
              onChange={(e) =>
                handleInputChange(
                  "cannadian",
                  "firstSpeakingProficiency",
                  e.target.value
                )
              }
            >
              <option value="" disabled>
                Please Select
              </option>
              {level.map((item, index) => (
                <option value={item.name} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col  gap-1 text-black">
            <span>Listening Proficiency</span>
            <select
              className="border py-3 rounded-md px-4 outline-none text-[#07294D] "
              value={formData.cannadian.firstListeningProficiency}
              onChange={(e) =>
                handleInputChange(
                  "cannadian",
                  "firstListeningProficiency",
                  e.target.value
                )
              }
            >
              <option value="" disabled>
                Please Select
              </option>
              {level.map((item, index) => (
                <option value={item.name} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-[300px]">
          <div className="flex flex-col  gap-1 text-black">
            <span>Second official language</span>
            <select
              className="border py-3 rounded-md px-4 outline-none text-[#07294D] "
              value={formData.cannadian.secondOfficialLanguage}
              onChange={(e) =>
                handleInputChange(
                  "cannadian",
                  "secondOfficialLanguage",
                  e.target.value
                )
              }
            >
              <option value="" disabled>
                Please Select
              </option>
              <option value="English">ENGLISH</option>
              <option value="French">FRENCH</option>
              <option value="None">NONE</option>
            </select>
          </div>
        </div>
        <div className="grid  sm:grid-cols-2 blg:grid-cols-4 gap-2">
          <div className="flex flex-col  gap-1 text-black">
            <span>Read Proficiency</span>
            <select
              className="border py-3 rounded-md px-4 outline-none text-[#07294D] "
              value={formData.cannadian.secondReadProficiency}
              onChange={(e) =>
                handleInputChange(
                  "cannadian",
                  "secondReadProficiency",
                  e.target.value
                )
              }
            >
              <option value="" disabled>
                Please Select
              </option>
              {level.map((item, index) => (
                <option value={item.name} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col  gap-1 text-black">
            <span>Writing Proficiency</span>
            <select
              className="border py-3 rounded-md px-4 outline-none text-[#07294D] "
              value={formData.cannadian.secondWritingProficiency}
              onChange={(e) =>
                handleInputChange(
                  "cannadian",
                  "secondWritingProficiency",
                  e.target.value
                )
              }
            >
              <option value="" disabled>
                Please Select
              </option>
              {level.map((item, index) => (
                <option value={item.name} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col  gap-1 text-black">
            <span>Speaking Proficiency</span>
            <select
              className="border py-3 rounded-md px-4 outline-none text-[#07294D] "
              value={formData.cannadian.secondSpeakingProficiency}
              onChange={(e) =>
                handleInputChange(
                  "cannadian",
                  "secondSpeakingProficiency",
                  e.target.value
                )
              }
            >
              <option value="" disabled>
                Please Select
              </option>
              {level.map((item, index) => (
                <option value={item.name} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col  gap-1 text-black">
            <span>Listening Proficiency</span>
            <select
              className="border py-3 rounded-md px-4 outline-none text-[#07294D] "
              value={formData.cannadian.secondListeningProficiency}
              onChange={(e) =>
                handleInputChange(
                  "cannadian",
                  "secondListeningProficiency",
                  e.target.value
                )
              }
            >
              <option value="" disabled>
                Please Select
              </option>
              {level.map((item, index) => (
                <option value={item.name} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ass3;
