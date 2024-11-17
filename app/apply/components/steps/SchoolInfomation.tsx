import React from "react";
import { useFormik } from "formik";

const SchoolInformation = ({ SchoolInformationFormik }) => {
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
    <div className="flex w-full items-center flex-col pb-4 gap-10">
      <div className="flex flex-col w-full">
        <div className="grid gap-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 w-full">

          {/* Country of Previous School Input */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">Country of Previous School</label>
            <input
              type="text"
              name="countryOfPrevSchool"
              placeholder="Enter Country"
              value={SchoolInformationFormik.values.countryOfPrevSchool}
              onChange={SchoolInformationFormik.handleChange}
              onBlur={SchoolInformationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
            />
            {SchoolInformationFormik.touched.countryOfPrevSchool && SchoolInformationFormik.errors.countryOfPrevSchool ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {SchoolInformationFormik.errors.countryOfPrevSchool}
              </p>
            ) : null}
          </div>

          {/* Name of Previous School Input */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">Name of Previous School</label>
            <input
              type="text"
              name="namePfPrevSchool"
              placeholder="Enter School Name"
              value={SchoolInformationFormik.values.namePfPrevSchool}
              onChange={SchoolInformationFormik.handleChange}
              onBlur={SchoolInformationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
            />
            {SchoolInformationFormik.touched.namePfPrevSchool && SchoolInformationFormik.errors.namePfPrevSchool ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {SchoolInformationFormik.errors.namePfPrevSchool}
              </p>
            ) : null}
          </div>

          {/* Level of Education Input */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">Level of Education</label>
            <select
              name="levelOfEducation"
              className="border py-3 rounded-md px-4  text-[#07294D] "
              onChange={SchoolInformationFormik.handleChange}
              onBlur={SchoolInformationFormik.handleBlur}
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
            {SchoolInformationFormik.touched.levelOfEducation && SchoolInformationFormik.errors.levelOfEducation ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {SchoolInformationFormik.errors.levelOfEducation}
              </p>
            ) : null}
          </div>

          {/* Graduation Date Input */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">Graduation Date</label>
            <input
              type="date"
              name="graduationDate"
              value={SchoolInformationFormik.values.graduationDate}
              onChange={SchoolInformationFormik.handleChange}
              onBlur={SchoolInformationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
            />
            {SchoolInformationFormik.touched.graduationDate && SchoolInformationFormik.errors.graduationDate ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {SchoolInformationFormik.errors.graduationDate}
              </p>
            ) : null}
          </div>

          {/* Primary Language Input */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">Primary Language</label>
            <input
              type="text"
              name="primaryLaguage"
              placeholder="Enter Primary Language"
              value={SchoolInformationFormik.values.primaryLaguage}
              onChange={SchoolInformationFormik.handleChange}
              onBlur={SchoolInformationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
            />
            {SchoolInformationFormik.touched.primaryLaguage && SchoolInformationFormik.errors.primaryLaguage ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {SchoolInformationFormik.errors.primaryLaguage}
              </p>
            ) : null}
          </div>

          {/* School From Date Input */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">School From</label>
            <input
              type="date"
              name="schoolFrom"
              value={SchoolInformationFormik.values.schoolFrom}
              onChange={SchoolInformationFormik.handleChange}
              onBlur={SchoolInformationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
            />
            {SchoolInformationFormik.touched.schoolFrom && SchoolInformationFormik.errors.schoolFrom ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {SchoolInformationFormik.errors.schoolFrom}
              </p>
            ) : null}
          </div>

          {/* School To Date Input */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">School To</label>
            <input
              type="date"
              name="schoolTo"
              value={SchoolInformationFormik.values.schoolTo}
              onChange={SchoolInformationFormik.handleChange}
              onBlur={SchoolInformationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
            />
            {SchoolInformationFormik.touched.schoolTo && SchoolInformationFormik.errors.schoolTo ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {SchoolInformationFormik.errors.schoolTo}
              </p>
            ) : null}
          </div>

          {/* Degree Name Input */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">Degree Name</label>
            <input
              type="text"
              name="degreeName"
              placeholder="Enter Degree Name"
              value={SchoolInformationFormik.values.degreeName}
              onChange={SchoolInformationFormik.handleChange}
              onBlur={SchoolInformationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
            />
            {SchoolInformationFormik.touched.degreeName && SchoolInformationFormik.errors.degreeName ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {SchoolInformationFormik.errors.degreeName}
              </p>
            ) : null}
          </div>

          {/* I Have from This School Input */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">I Have from This School</label>
            <input
              type="text"
              name="IHaveFromThiSschool"
              placeholder="Enter What You Have from This School"
              value={SchoolInformationFormik.values.IHaveFromThiSschool}
              onChange={SchoolInformationFormik.handleChange}
              onBlur={SchoolInformationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
            />
            {SchoolInformationFormik.touched.IHaveFromThiSschool && SchoolInformationFormik.errors.IHaveFromThiSschool ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {SchoolInformationFormik.errors.IHaveFromThiSschool}
              </p>
            ) : null}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SchoolInformation;
