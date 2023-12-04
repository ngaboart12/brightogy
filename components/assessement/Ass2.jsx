"use client"
import React, { useEffect, useState } from "react";
import Input from "../Input";

const Ass2 = ({ formData, handleInputChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Function to handle checkbox change
  const handleOptionChange = (value) => {
    if (selectedOptions.includes(value)) {
      // If the option is already selected, remove it
      setSelectedOptions(
        selectedOptions.filter((selected) => selected !== value)
      );
    } else if (selectedOptions.length < 3) {
      // If the option is not selected and less than 3 options are selected, add it
      setSelectedOptions([...selectedOptions, value]);
    }
  };
  useEffect(() => {
    handleInputChange("educationProgram", "programs", selectedOptions);
  }, [selectedOptions]);
  return (
    <div className="flex flex-col gap-2 justify-center items-center py-4">
      <div className="flex flex-col w-full py-10 ">
        <h1 className=" font-[600] text-[24px] text-[#07294D] pb-4">
          Education Program Available
        </h1>
        <span className="text-black">
          Please select yo top 3 choice for programs to study abroad
        </span>

        <div className="grid gap-4 md:grid-cols-2 w-full py-4 ">
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="program"
              placeholder=""
              value="Healthcare Assistance"
              checked={selectedOptions.includes("Healthcare Assistance")}
              onChange={() => handleOptionChange("Healthcare Assistance")}
            />
            <span className="text-[#4D4D4D]"> Healthcare Assistance</span>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="program"
              placeholder=""
              value="Business Administration/Secretarial"
              checked={selectedOptions.includes(
                "Business Administration/Secretarial"
              )}
              onChange={() =>
                handleOptionChange("Business Administration/Secretarial")
              }
            />
            <span className="text-[#4D4D4D]">
              Business Administration/Secretarial
            </span>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="program"
              placeholder=""
              value="Accounting/Finance"
              checked={selectedOptions.includes("Accounting/Finance")}
              onChange={() => handleOptionChange("Accounting/Finance")}
            />
            <span className="text-[#4D4D4D]">Accounting/Finance</span>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="program"
              placeholder=""
              value="Information Technology/Computer Support"
              checked={selectedOptions.includes(
                "Information Technology/Computer Support"
              )}
              onChange={() =>
                handleOptionChange("Information Technology/Computer Support")
              }
            />
            <span className="text-[#4D4D4D]">
              Information Technology/Computer Support
            </span>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="program"
              placeholder=""
              value="Industrial/Architectural Design"
              checked={selectedOptions.includes(
                "Industrial/Architectural Design"
              )}
              onChange={() =>
                handleOptionChange("Industrial/Architectural Design")
              }
            />
            <span className="text-[#4D4D4D]">
              Industrial/Architectural Design
            </span>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="program"
              placeholder=""
              value="Culinary Arts"
              checked={selectedOptions.includes("Culinary Arts")}
              onChange={() => handleOptionChange("Culinary Arts")}
            />
            <span className="text-[#4D4D4D]">Culinary Arts</span>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="program"
              placeholder=""
              value="Natural Sciences"
              checked={selectedOptions.includes("Natural Sciences")}
              onChange={() => handleOptionChange("Natural Sciences")}
            />
            <span className="text-[#4D4D4D]">Natural Sciences</span>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="program"
              placeholder=""
              value="Social Sciences"
              checked={selectedOptions.includes("Social Sciences")}
              onChange={() => handleOptionChange("Social Sciences")}
            />
            <span className="text-[#4D4D4D]">Social Sciences</span>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="program"
              placeholder=""
              value="Engineering"
              checked={selectedOptions.includes("Engineering")}
              onChange={() => handleOptionChange("Engineering")}
            />
            <span className="text-[#4D4D4D]">Engineering</span>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="program"
              placeholder=""
              value="Web Development/Graphic Design"
              checked={selectedOptions.includes(
                "Web Development/Graphic Design"
              )}
              onChange={() =>
                handleOptionChange("Web Development/Graphic Design")
              }
            />
            <span className="text-[#4D4D4D]">
              Web Development/Graphic Design
            </span>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="program"
              placeholder=""
              value="Electrical Technician"
              checked={selectedOptions.includes("Electrical Technician")}
              onChange={() => handleOptionChange("Electrical Technician")}
            />
            <span className="text-[#4D4D4D]">Electrical Technician</span>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="program"
              placeholder=""
              value="Early Childhood Education"
              checked={selectedOptions.includes("Early Childhood Education")}
              onChange={() => handleOptionChange("Early Childhood Education")}
            />
            <span className="text-[#4D4D4D]">Early Childhood Education</span>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="program"
              placeholder=""
              value="Marketing"
              checked={selectedOptions.includes("Marketing")}
              onChange={() => handleOptionChange("Marketing")}
            />
            <span className="text-[#4D4D4D]">Marketing</span>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="program"
              placeholder=""
              value="Cosmetology/Esthetics"
              checked={selectedOptions.includes("Cosmetology/Esthetics")}
              onChange={() => handleOptionChange("Cosmetology/Esthetics")}
            />
            <span className="text-[#4D4D4D]">Cosmetology/Esthetics</span>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="program"
              placeholder=""
              value="English/French Language Training"
              checked={selectedOptions.includes(
                "English/French Language Training"
              )}
              onChange={() =>
                handleOptionChange("English/French Language Training")
              }
            />
            <span className="text-[#4D4D4D]">
              English/French Language Training
            </span>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="program"
              placeholder=""
              value="Other"
              checked={selectedOptions.includes("Other")}
              onChange={() => handleOptionChange("Other")}
            />
            <span className="text-[#4D4D4D]">Other</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ass2;
