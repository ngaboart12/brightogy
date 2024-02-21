"use client"
import React from "react";
import Input from "../Input";

const Step4 = ({ formData, handleInputChange }) => {
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
    <div className="flex w-full items-center flex-col pb-4 gap-6">
  
      <div className="flex flex-col w-full">
        <div className="grid gap-4 gap-y-10 mt-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
          <Input
            placeholder="Select country"
            label="Country of the Previous school:"
            type="text"
            value={formData.stage4.countryOfPrevSchool}
            onChange={(e) =>
              handleInputChange("stage4", "countryOfPrevSchool", e.target.value)
            }
          />
          <Input
            placeholder="Enter Name of school"
            label="Name of the Previous school:"
            type="text"
            value={formData.stage4.namePfPrevSchool}
            onChange={(e) =>
              handleInputChange("stage4", "namePfPrevSchool", e.target.value)
            }
          />
          <div className="flex flex-col  gap-1 text-black">
            <span>Level Of Eduction</span>
            <select
              className="border py-3 rounded-md px-4 outline-none text-[#07294D] "
              value={formData.stage4.levelOfEducation}
              onChange={(e) =>
                handleInputChange("stage4", "levelOfEducation", e.target.value)
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
            placeholder="Enter Graduation date"
            label="Graduation date"
            type="date"
            value={formData.stage4.graduationDate}
            onChange={(e) =>
              handleInputChange("stage4", "graduationDate", e.target.value)
            }
          />
          <Input
            placeholder="Enter Primary Language"
            label="Primary Language"
            type="text"
            value={formData.stage4.primaryLaguage}
            onChange={(e) =>
              handleInputChange("stage4", "primaryLaguage", e.target.value)
            }
          />
          <Input
            placeholder="Select date"
            label="Attended  school from"
            type="date"
            value={formData.stage4.schoolFrom}
            onChange={(e) =>
              handleInputChange("stage4", "schoolFrom", e.target.value)
            }
          />
          <Input
            placeholder="Select date"
            label="Attended  school to"
            type="date"
            value={formData.stage4.schoolTo}
            onChange={(e) =>
              handleInputChange("stage4", "schoolTo", e.target.value)
            }
          />
          <Input
            placeholder="Enter Degree name"
            label="Degree name"
            type="text"
            value={formData.stage4.degreeName}
            onChange={(e) =>
              handleInputChange("stage4", "degreeName", e.target.value)
            }
          />
          <div className="flex flex-col  gap-1 text-black">
            <span>i have from this school</span>
            <div className="flex gap-2 w-full">
              <div className="flex gap-4 border px-6 py-3 rounded-md">
                <input
                  type="radio"
                  className="w-4"
                  name="fromschool"
                  value="Yes"
                  onChange={(e) =>
                    handleInputChange(
                      "stage4",
                      "IHaveFromThiSschool",
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
                  name="fromschool"
                  value="No"
                  onChange={(e) =>
                    handleInputChange(
                      "stage4",
                      "IHaveFromThiSschool",
                      e.target.value
                    )
                  }
                />{" "}
                <label htmlFor="">No</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
