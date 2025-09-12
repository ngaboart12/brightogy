"use client";
import React from "react";
import Input from "../Input";

const Step1 = ({ formData, handleInputChange }) => {
  return (
    <div className="flex w-full items-center flex-col pb-4 gap-10">
    
      <div className="flex flex-col w-full">
        <div className="grid gap-4 gap-y-10  sm:grid-cols-2 lg:grid-cols-4 w-full">
          <Input
            placeholder="Enter First Name"
            label="First Name"
            type="text"
            value={formData.stage1.firstName}
            onChange={(e) =>
              handleInputChange("stage1", "firstName", e.target.value)
            }
          />
          <Input
            placeholder="Enter Middle Name"
            label="Middle Name"
            type="text"
            value={formData.stage1.middelName}
            onChange={(e) =>
              handleInputChange("stage1", "middelName", e.target.value)
            }
          />
          <Input
            placeholder="Enter Last Name"
            label="Last Name"
            type="text"
            value={formData.stage1.lastName}
            onChange={(e) =>
              handleInputChange("stage1", "lastName", e.target.value)
            }
          />
          <Input
            placeholder="Date Of Birth"
            label="Date of birth"
            type="date"
            value={formData.stage1.dateOfBirth}
            onChange={(e) =>
              handleInputChange("stage1", "dateOfBirth", e.target.value)
            }
          />

          <Input
            placeholder="Enter place of birth"
            label="Place Of Birth"
            value={formData.stage1.placeOfBirth}
            onChange={(e) =>
              handleInputChange("stage1", "placeOfBirth", e.target.value)
            }
          />
          <Input
            placeholder="Enter Nationality"
            label="Nationality"
            type="text"
            value={formData.stage1.nationality}
            onChange={(e) =>
              handleInputChange("stage1", "nationality", e.target.value)
            }
          />

          <div className="flex flex-col  gap-1 text-black">
            <span>Gender</span>
            <div className="flex gap-2 w-full">
              <div className="flex gap-4 border px-6 py-3 rounded-md">
                <input
                  type="radio"
                  className="w-4"
                  name="sex"
                  value="Male"
                  onChange={(e) =>
                    handleInputChange("stage1", "sex", e.target.value)
                  }
                />{" "}
                <label htmlFor="">Male</label>
              </div>
              <div className="flex gap-4 border px-6 py-3 rounded-md">
                <input
                  type="radio"
                  className="w-4"
                  name="sex"
                  value="Female"
                  onChange={(e) =>
                    handleInputChange("stage1", "sex", e.target.value)
                  }
                />{" "}
                <label htmlFor="">Female</label>
              </div>
            </div>
          </div>
          <Input
            placeholder="Enter first language"
            label="First Language"
            value={formData.stage1.firstLaguage}
            onChange={(e) =>
              handleInputChange("stage1", "firstLaguage", e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Step1;
