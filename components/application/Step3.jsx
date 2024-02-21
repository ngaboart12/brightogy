"use client";
import React from "react";
import Input from "../Input";

const Step3 = ({ formData, handleInputChange }) => {
  return (
    <div className="flex w-full items-center flex-col pb-4 gap-6">
     
      <div className="flex flex-col w-full mb-10">
        <h1 className="text-black font-[600] text-[18px]">Parent</h1>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
          <Input
            placeholder="Enter Father name"
            label="Father's name"
            type="text"
            value={formData.stage3.fatherName}
            onChange={(e) =>
              handleInputChange("stage3", "fatherName", e.target.value)
            }
          />
          <Input
            placeholder="Enter Father Contact"
            label="Father's Contact"
            type="number"
            value={formData.stage3.fatherContact}
            onChange={(e) =>
              handleInputChange("stage3", "fatherContact", e.target.value)
            }
          />
          <Input
            placeholder="Enter Mother Name"
            label="Mother's Name"
            type="text"
            value={formData.stage3.motherName}
            onChange={(e) =>
              handleInputChange("stage3", "motherName", e.target.value)
            }
          />
          <Input
            placeholder="Enter Mother contact"
            label="Mother's Contact"
            type="number"
            value={formData.stage3.motherContact}
            onChange={(e) =>
              handleInputChange("stage3", "motherContact", e.target.value)
            }
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h1 className="text-black font-[600] text-[18px]">Emergency</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
          <Input
            placeholder="Enter name"
            label="Name"
            type="text"
            value={formData.stage3.emrgencyName}
            onChange={(e) =>
              handleInputChange("stage3", "emrgencyName", e.target.value)
            }
          />
          <Input
            placeholder="Relationship"
            label="Relationship"
            type="text"
            value={formData.stage3.relationship}
            onChange={(e) =>
              handleInputChange("stage3", "relationship", e.target.value)
            }
          />
          <Input
            placeholder="Enter Contact"
            label="Contact"
            type="number"
            value={formData.stage3.emargencyContact}
            onChange={(e) =>
              handleInputChange("stage3", "emargencyContact", e.target.value)
            }
          />
          <Input
            placeholder="Enter Email"
            label="Email"
            type="email"
            value={formData.stage3.emrgencyEmail}
            onChange={(e) =>
              handleInputChange("stage3", "emrgencyEmail", e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Step3;
