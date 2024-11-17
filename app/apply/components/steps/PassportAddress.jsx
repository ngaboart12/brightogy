import React from "react";
import { useFormik } from "formik";

const PassportAddress = ({ PassportAddressFormik }) => {
  return (
    <div className="flex w-full items-center flex-col pb-4 gap-10">
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-[10px]">
        <h1 className="text-[18px] font-[800] text-black">Passport</h1>
          <div className="grid gap-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 w-full">
            {/* Passport Number Input */}
            <div className="flex flex-col gap-1 text-black">
              <label htmlFor="">Passport Number</label>
              <input
                type="text"
                name="passportNumber"
                placeholder="Enter Passport Number"
                value={PassportAddressFormik.values.passportNumber}
                onChange={PassportAddressFormik.handleChange}
                onBlur={PassportAddressFormik.handleBlur}
                className="border py-3 rounded-md px-4  text-[#07294D]"
              />
              {PassportAddressFormik.touched.passportNumber &&
              PassportAddressFormik.errors.passportNumber ? (
                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                  {PassportAddressFormik.errors.passportNumber}
                </p>
              ) : null}
            </div>

            {/* Passport Issued By Input */}
            <div className="flex flex-col gap-1 text-black">
              <label htmlFor="">Passport Issued By</label>
              <input
                type="text"
                name="passportIssuedBy"
                placeholder="Enter Issuing Authority"
                value={PassportAddressFormik.values.passportIssuedBy}
                onChange={PassportAddressFormik.handleChange}
                onBlur={PassportAddressFormik.handleBlur}
                className="border py-3 rounded-md px-4  text-[#07294D]"
              />
              {PassportAddressFormik.touched.passportIssuedBy &&
              PassportAddressFormik.errors.passportIssuedBy ? (
                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                  {PassportAddressFormik.errors.passportIssuedBy}
                </p>
              ) : null}
            </div>

            {/* Passport Expiry Date Input */}
            <div className="flex flex-col gap-1 text-black">
              <label htmlFor="">Passport Expiry Date</label>
              <input
                type="date"
                name="passportExpiryDate"
                value={PassportAddressFormik.values.passportExpiryDate}
                onChange={PassportAddressFormik.handleChange}
                onBlur={PassportAddressFormik.handleBlur}
                className="border py-3 rounded-md px-4  text-[#07294D]"
              />
              {PassportAddressFormik.touched.passportExpiryDate &&
              PassportAddressFormik.errors.passportExpiryDate ? (
                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                  {PassportAddressFormik.errors.passportExpiryDate}
                </p>
              ) : null}
            </div>

            {/* Valid To Input */}
            <div className="flex flex-col gap-1 text-black">
              <label htmlFor="">Valid To</label>
              <input
                type="date"
                name="ValidTo"
                value={PassportAddressFormik.values.ValidTo}
                onChange={PassportAddressFormik.handleChange}
                onBlur={PassportAddressFormik.handleBlur}
                className="border py-3 rounded-md px-4  text-[#07294D]"
              />
              {PassportAddressFormik.touched.ValidTo &&
              PassportAddressFormik.errors.ValidTo ? (
                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                  {PassportAddressFormik.errors.ValidTo}
                </p>
              ) : null}
            </div>
          </div>
         <h1 className="text-[18px] font-[800] text-black">Address</h1>
          <div className="grid gap-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 w-full">
            {/* Country Input */}
            <div className="flex flex-col gap-1 text-black">
              <label htmlFor="">Country</label>
              <input
                type="text"
                name="country"
                placeholder="Enter Country"
                value={PassportAddressFormik.values.country}
                onChange={PassportAddressFormik.handleChange}
                onBlur={PassportAddressFormik.handleBlur}
                className="border py-3 rounded-md px-4  text-[#07294D]"
              />
              {PassportAddressFormik.touched.country &&
              PassportAddressFormik.errors.country ? (
                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                  {PassportAddressFormik.errors.country}
                </p>
              ) : null}
            </div>

            {/* District Input */}
            <div className="flex flex-col gap-1 text-black">
              <label htmlFor="">District</label>
              <input
                type="text"
                name="district"
                placeholder="Enter District"
                value={PassportAddressFormik.values.district}
                onChange={PassportAddressFormik.handleChange}
                onBlur={PassportAddressFormik.handleBlur}
                className="border py-3 rounded-md px-4  text-[#07294D]"
              />
              {PassportAddressFormik.touched.district &&
              PassportAddressFormik.errors.district ? (
                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                  {PassportAddressFormik.errors.district}
                </p>
              ) : null}
            </div>

            {/* Street Number Input */}
            <div className="flex flex-col gap-1 text-black">
              <label htmlFor="">Street Number</label>
              <input
                type="text"
                name="streetNumber"
                placeholder="Enter Street Number"
                value={PassportAddressFormik.values.streetNumber}
                onChange={PassportAddressFormik.handleChange}
                onBlur={PassportAddressFormik.handleBlur}
                className="border py-3 rounded-md px-4  text-[#07294D]"
              />
              {PassportAddressFormik.touched.streetNumber &&
              PassportAddressFormik.errors.streetNumber ? (
                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                  {PassportAddressFormik.errors.streetNumber}
                </p>
              ) : null}
            </div>

            {/* Contact Number Input */}
            <div className="flex flex-col gap-1 text-black">
              <label htmlFor="">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                placeholder="Enter Contact Number"
                value={PassportAddressFormik.values.contactNumber}
                onChange={PassportAddressFormik.handleChange}
                onBlur={PassportAddressFormik.handleBlur}
                className="border py-3 rounded-md px-4  text-[#07294D]"
              />
              {PassportAddressFormik.touched.contactNumber &&
              PassportAddressFormik.errors.contactNumber ? (
                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                  {PassportAddressFormik.errors.contactNumber}
                </p>
              ) : null}
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-1 text-black">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={PassportAddressFormik.values.email}
                onChange={PassportAddressFormik.handleChange}
                onBlur={PassportAddressFormik.handleBlur}
                className="border py-3 rounded-md px-4  text-[#07294D]"
              />
              {PassportAddressFormik.touched.email &&
              PassportAddressFormik.errors.email ? (
                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                  {PassportAddressFormik.errors.email}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassportAddress;
