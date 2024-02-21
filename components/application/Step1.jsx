"use client";
import React, { useEffect, useState } from "react";
import Input from "../Input";

const Step1 = ({ formData, handleInputChange }) => {
  const [countryName, setCountryName] = useState("");
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    // Fetch the list of all countries when the component mounts
    const fetchAllCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        if (response.ok) {
          const sortedCountries = data.sort((a, b) => {
            const nameA = a.name.common.toUpperCase();
            const nameB = b.name.common.toUpperCase();
            return nameA.localeCompare(nameB);
          });
          setAllCountries(sortedCountries);
        } else {
          console.error("Error fetching countries:", data.message);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchAllCountries();
  }, []);

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
          <div className="flex flex-col  gap-1 text-black">
            <span>Nationality</span>
            <select
              className="border py-3 rounded-md px-4 outline-none text-[#07294D]"
              value={formData.stage1.nationality}
              onChange={(e) =>
                handleInputChange("stage1", "nationality", e.target.value)
              }
            >
              <option value="" disabled>
                Select a country
              </option>
              {allCountries.map((country) => (
                <option key={country.name.common} value={country.name.common}>
                  {country.name.common}
                </option>
              ))}
            </select>
          </div>

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
