"use client";
import React from "react";
import Input from "../Input";

const Step2 = ({ formData, handleInputChange, isEmail }) => {
  return (
    <div className="flex w-full items-center flex-col pb-4 gap-6">
    

      <div className="flex flex-col w-full">
        <h1 className="text-black font-[600] text-[18px]">Passport</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
          <Input
            placeholder="Enter Passport number"
            label="Passport number"
            type="number"
            value={formData.stage2.passportNumber}
            onChange={(e) =>
              handleInputChange("stage2", "passportNumber", e.target.value)
            }
          />
          <Input
            placeholder="issued by"
            label="Passport Issued by"
            type="text"
            value={formData.stage2.passportIssuedBy}
            onChange={(e) =>
              handleInputChange("stage2", "passportIssuedBy", e.target.value)
            }
          />
          <Input
            placeholder="expiry date"
            label="Passport Issued date"
            type="date"
            value={formData.stage2.passportExpiryDate}
            onChange={(e) =>
              handleInputChange("stage2", "passportExpiryDate", e.target.value)
            }
          />
          <Input
            placeholder="Enter date"
            label="Valid To"
            type="date"
            value={formData.stage2.ValidTo}
            onChange={(e) =>
              handleInputChange("stage2", "ValidTo", e.target.value)
            }
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h1 className="text-black font-[600] text-[18px]">Address</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
          <Input
            placeholder="Enter Country"
            label="Country"
            type="text"
            value={formData.stage2.country}
            onChange={(e) =>
              handleInputChange("stage2", "country", e.target.value)
            }
          />
          <Input
            placeholder="Enter district"
            label="District/City"
            type="text"
            value={formData.stage2.district}
            onChange={(e) =>
              handleInputChange("stage2", "district", e.target.value)
            }
          />
          <Input
            placeholder="Enter Street number"
            label="Street number"
            type="text"
            value={formData.stage2.streetNumber}
            onChange={(e) =>
              handleInputChange("stage2", "streetNumber", e.target.value)
            }
          />
          <Input
            placeholder="Enter Contact number"
            label="Contact number"
            type="number"
            value={formData.stage2.contactNumber}
            onChange={(e) =>
              handleInputChange("stage2", "contactNumber", e.target.value)
            }
          />
          <Input
            isEmail={isEmail}
            placeholder="Enter Email"
            label="Email"
            type="email"
            value={formData.stage2.email}
            onChange={(e) =>
              handleInputChange("stage2", "email", e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;
