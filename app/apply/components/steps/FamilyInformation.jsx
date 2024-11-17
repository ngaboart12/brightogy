import React from 'react';

const FamilyInformation = ({ FamilyInformationFormik }) => {
  return (
    <div className="flex w-full items-center flex-col pb-4 gap-10">
      <div className="flex flex-col w-full">
        <div className="grid gap-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 w-full">

          {/* Father's Name */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">Father's Name</label>
            <input
              type="text"
              name="fatherName"
              placeholder="Enter Father's Name"
              value={FamilyInformationFormik.values.fatherName}
              onChange={FamilyInformationFormik.handleChange}
              onBlur={FamilyInformationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
            />
            {FamilyInformationFormik.touched.fatherName && FamilyInformationFormik.errors.fatherName ? (
              <p className="text-red-600 text-[10px]">{FamilyInformationFormik.errors.fatherName}</p>
            ) : null}
          </div>

          {/* Father's Contact */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">Father's Contact</label>
            <input
              type="text"
              name="fatherContact"
              placeholder="Enter Father's Contact"
              value={FamilyInformationFormik.values.fatherContact}
              onChange={FamilyInformationFormik.handleChange}
              onBlur={FamilyInformationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
            />
            {FamilyInformationFormik.touched.fatherContact && FamilyInformationFormik.errors.fatherContact ? (
              <p className="text-red-600 text-[10px]">{FamilyInformationFormik.errors.fatherContact}</p>
            ) : null}
          </div>

          {/* Mother's Name */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">Mother's Name</label>
            <input
              type="text"
              name="motherName"
              placeholder="Enter Mother's Name"
              value={FamilyInformationFormik.values.motherName}
              onChange={FamilyInformationFormik.handleChange}
              onBlur={FamilyInformationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
            />
            {FamilyInformationFormik.touched.motherName && FamilyInformationFormik.errors.motherName ? (
              <p className="text-red-600 text-[10px]">{FamilyInformationFormik.errors.motherName}</p>
            ) : null}
          </div>

          {/* Mother's Contact */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">Mother's Contact</label>
            <input
              type="text"
              name="motherContact"
              placeholder="Enter Mother's Contact"
              value={FamilyInformationFormik.values.motherContact}
              onChange={FamilyInformationFormik.handleChange}
              onBlur={FamilyInformationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
            />
            {FamilyInformationFormik.touched.motherContact && FamilyInformationFormik.errors.motherContact ? (
              <p className="text-red-600 text-[10px]">{FamilyInformationFormik.errors.motherContact}</p>
            ) : null}
          </div>

          {/* Emergency Contact Name */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">Emergency Contact Name</label>
            <input
              type="text"
              name="emrgencyName"
              placeholder="Enter Emergency Contact Name"
              value={FamilyInformationFormik.values.emrgencyName}
              onChange={FamilyInformationFormik.handleChange}
              onBlur={FamilyInformationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
            />
            {FamilyInformationFormik.touched.emrgencyName && FamilyInformationFormik.errors.emrgencyName ? (
              <p className="text-red-600 text-[10px]">{FamilyInformationFormik.errors.emrgencyName}</p>
            ) : null}
          </div>

          {/* Relationship */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">Relationship</label>
            <input
              type="text"
              name="relationship"
              placeholder="Enter Relationship"
              value={FamilyInformationFormik.values.relationship}
              onChange={FamilyInformationFormik.handleChange}
              onBlur={FamilyInformationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
            />
            {FamilyInformationFormik.touched.relationship && FamilyInformationFormik.errors.relationship ? (
              <p className="text-red-600 text-[10px]">{FamilyInformationFormik.errors.relationship}</p>
            ) : null}
          </div>

          {/* Emergency Contact */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">Emergency Contact</label>
            <input
              type="text"
              name="emergencyContact"
              placeholder="Enter Emergency Contact"
              value={FamilyInformationFormik.values.emergencyContact}
              onChange={FamilyInformationFormik.handleChange}
              onBlur={FamilyInformationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
            />
            {FamilyInformationFormik.touched.emergencyContact && FamilyInformationFormik.errors.emergencyContact ? (
              <p className="text-red-600 text-[10px]">{FamilyInformationFormik.errors.emergencyContact}</p>
            ) : null}
          </div>

          {/* Emergency Email */}
          <div className="flex flex-col gap-1 text-black">
            <label htmlFor="">Emergency Email</label>
            <input
              type="email"
              name="emergencyEmail"
              placeholder="Enter Emergency Email"
              value={FamilyInformationFormik.values.emergencyEmail}
              onChange={FamilyInformationFormik.handleChange}
              onBlur={FamilyInformationFormik.handleBlur}
              className="border py-3 rounded-md px-4  text-[#07294D]"
            />
            {FamilyInformationFormik.touched.emergencyEmail && FamilyInformationFormik.errors.emergencyEmail ? (
              <p className="text-red-600 text-[10px]">{FamilyInformationFormik.errors.emergencyEmail}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyInformation;
