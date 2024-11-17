"use client";
import React, { useEffect, useState } from "react";


const BasicInformation = ({ BasicInfomationFormik }) => {
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
        <div className="grid gap-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 w-full">
          
          {/* First Name Input */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">First name</label>
            <input
              label="First Name"
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={BasicInfomationFormik.values.firstName}
              onChange={BasicInfomationFormik.handleChange}
              onBlur={BasicInfomationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
                // Add any specific styling props you have
            />
            {BasicInfomationFormik.touched.firstName && BasicInfomationFormik.errors.firstName ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {BasicInfomationFormik.errors.firstName}
              </p>
            ) : null}
          </div>

          {/* Middle Name input */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">Middel name</label>
            <input
              label="Middle Name"
              type="text"
              name="middelName"
              placeholder="Enter Middle Name"
              value={BasicInfomationFormik.values.middelName}
              onChange={BasicInfomationFormik.handleChange}
              onBlur={BasicInfomationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
              
            />
            {BasicInfomationFormik.touched.middelName && BasicInfomationFormik.errors.middelName ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {BasicInfomationFormik.errors.middelName}
              </p>
            ) : null}
          </div>

          {/* Last Name input */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">Last name</label>
            <input
              label="Last Name"
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={BasicInfomationFormik.values.lastName}
              onChange={BasicInfomationFormik.handleChange}
              onBlur={BasicInfomationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
              
            />
            {BasicInfomationFormik.touched.lastName && BasicInfomationFormik.errors.lastName ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {BasicInfomationFormik.errors.lastName}
              </p>
            ) : null}
          </div>

          {/* Date of Birth input */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">Date Of Birth</label>
            <input
              label="Date of Birth"
              type="date"
              name="dateOfBirth"
              placeholder="Enter Date of Birth"
              value={BasicInfomationFormik.values.dateOfBirth}
              onChange={BasicInfomationFormik.handleChange}
              onBlur={BasicInfomationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
              
            />
            {BasicInfomationFormik.touched.dateOfBirth && BasicInfomationFormik.errors.dateOfBirth ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {BasicInfomationFormik.errors.dateOfBirth}
              </p>
            ) : null}
          </div>

          {/* Place of Birth input */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">Place Of Birth</label>
            <input
              label="Place of Birth"
              type="text"
              name="placeOfBirth"
              placeholder="Enter Place of Birth"
              value={BasicInfomationFormik.values.placeOfBirth}
              onChange={BasicInfomationFormik.handleChange}
              onBlur={BasicInfomationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
              
            />
            {BasicInfomationFormik.touched.placeOfBirth && BasicInfomationFormik.errors.placeOfBirth ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {BasicInfomationFormik.errors.placeOfBirth}
              </p>
            ) : null}
          </div>

          {/* Nationality Select */}
          <div className="flex flex-col gap-1 text-black">
            <span>Nationality</span>
            <select
              className="border py-3 rounded-md px-4  text-[#07294D]"
              name="nationality"
              value={BasicInfomationFormik.values.nationality}
              onChange={BasicInfomationFormik.handleChange}
              onBlur={BasicInfomationFormik.handleBlur}
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
            {BasicInfomationFormik.touched.nationality && BasicInfomationFormik.errors.nationality ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {BasicInfomationFormik.errors.nationality}
              </p>
            ) : null}
          </div>

          {/* Gender Radio Buttons */}
          <div className="flex flex-col gap-1 text-black">
            <span>Gender</span>
            <div className="flex gap-2 w-full">
              <div className="flex gap-4 border px-6 py-3 rounded-md">
                <input
                  type="radio"
                  name="sex"
                  value="Male"
                  onChange={BasicInfomationFormik.handleChange}
                  checked={BasicInfomationFormik.values.sex === "Male"}
                />
                <label htmlFor="sex">Male</label>
              </div>
              <div className="flex gap-4 border px-6 py-3 rounded-md">
                <input
                  type="radio"
                  name="sex"
                  value="Female"
                  onChange={BasicInfomationFormik.handleChange}
                  checked={BasicInfomationFormik.values.sex === "Female"}
                />
                <label htmlFor="sex">Female</label>
              </div>
            </div>
            {BasicInfomationFormik.touched.sex && BasicInfomationFormik.errors.sex ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {BasicInfomationFormik.errors.sex}
              </p>
            ) : null}
          </div>

          {/* First Language input */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">First language</label>
            <input
              label="First Language"
              type="text"
              name="firstLanguage"
              placeholder="Enter First Language"
              value={BasicInfomationFormik.values.firstLanguage}
              onChange={BasicInfomationFormik.handleChange}
              onBlur={BasicInfomationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
              
            />
            {BasicInfomationFormik.touched.firstLanguage && BasicInfomationFormik.errors.firstLanguage ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {BasicInfomationFormik.errors.firstLanguage}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
