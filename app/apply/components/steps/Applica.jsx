"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase";

const Applica = ({
  filesImage,
  filesInputHandel,
  handleInputChange,
  SchoolInformationFormik,
}) => {
  const [faculties, setFaculties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const facultiesRef = collection(db, "faculties");
        const querySnapshot = await getDocs(facultiesRef);
        const facultiesData = [];
        querySnapshot.forEach((doc) => {
          facultiesData.push({ id: doc.id, ...doc.data() });
        });
        setFaculties(facultiesData);
      } catch (error) {
        console.error("Error fetching faculties:", error.message);
      }
    };

    fetchFaculties();
  }, []);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFaculties = faculties.filter((faculty) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      faculty.facultyName.toLowerCase().includes(lowerCaseSearchTerm) ||
      faculty.country.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });
  const handleResultClick = (faculty) => {
    const { id, facultyName, country, tuitionFees } = faculty;
    setSelectedFaculty({
      id,
      facultyName,
      country,
      fees: tuitionFees,
    });
    const currentApplications =
      SchoolInformationFormik.values.applicationSchool || [];
    const newApplication = {
      id,
      facultyName,
      country,
      fees: tuitionFees,
    };
    SchoolInformationFormik.setFieldValue("applicationSchool", [
      ...currentApplications,
      newApplication,
    ]);
    setSearchTerm("");
  };
  return (
    <div className="flex w-full items-center flex-col pb-4 gap-6">
      <div className="flex flex-col w-full">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search faculties"
            value={searchTerm}
            onChange={handleSearch}
            className="border p-3 border-gray-500 rounded-md"
          />
          {searchTerm && (
            <div className="py-4">
              {filteredFaculties.map((faculty) => (
                <div
                  key={faculty.id}
                  className="mb-2 grid grid-cols-3 gap-2 p-2 bg-gray-100/40 cursor-pointer hover:bg-gray-100 rounded-[6px]"
                  onClick={() => handleResultClick(faculty)}
                >
                  <p>
                    <b>Name: </b>
                    {faculty.facultyName}
                  </p>
                  <p>
                    <b>country: </b>
                    {faculty.country}
                  </p>
                  <div className="flex flex-col  ">
                    <p>
                      <b>Tuition Fees : </b>
                      {faculty.tuitionFees}$
                    </p>
                  </div>

                  <hr />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="py-4">
          {selectedFaculty != null ? (
            <p className="font-bold text-[20px]">
              Faculity:{selectedFaculty.facultyName}
            </p>
          ) : (
            <p className="text-orange-500">
              Please search and select your faculity
            </p>
          )}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-10 w-full justify-center ">
          <div className="flex flex-col gap-2">
            <h1 className="text-black font-[600]">Diploma</h1>
            <label
              htmlFor=""
              for="inputfile"
              className={`${
                filesImage.stage1.diploma === "" ? "" : "border-green"
              } cursor-pointer flex border-2 py-4 border-dashed rounded-lg items-center justify-between px-4 w-[250px]`}
            >
              <div className="flex gap-2 ">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M15.7161 16.7234H8.49609"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.7161 12.5369H8.49609"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.2511 8.36011H8.49609"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9085 3.24976C15.9085 3.24976 8.23149 3.25376 8.21949 3.25376C5.45949 3.27076 3.75049 5.08676 3.75049 7.85676V17.0528C3.75049 19.8368 5.47249 21.6598 8.25649 21.6598C8.25649 21.6598 15.9325 21.6568 15.9455 21.6568C18.7055 21.6398 20.4155 19.8228 20.4155 17.0528V7.85676C20.4155 5.07276 18.6925 3.24976 15.9085 3.24976Z"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="flex flex-col">
                  <span>Upload doc</span>
                </div>
              </div>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.367 8.2325C7.781 8.2325 8.117 8.5685 8.117 8.9825C8.117 9.3965 7.781 9.7325 7.367 9.7325H6.426C4.812 9.7325 3.5 11.0435 3.5 12.6565V17.5415C3.5 19.1605 4.816 20.4765 6.435 20.4765H17.575C19.187 20.4765 20.5 19.1635 20.5 17.5515V12.6675C20.5 11.0485 19.183 9.7325 17.566 9.7325H16.634C16.22 9.7325 15.884 9.3965 15.884 8.9825C15.884 8.5685 16.22 8.2325 16.634 8.2325H17.566C20.011 8.2325 22 10.2225 22 12.6675V17.5515C22 19.9915 20.014 21.9765 17.575 21.9765H6.435C3.99 21.9765 2 19.9875 2 17.5415V12.6565C2 10.2165 3.985 8.2325 6.426 8.2325H7.367ZM12.0008 3.5C12.4148 3.5 12.7508 3.836 12.7508 4.25L12.75 14.476L14.3858 12.834C14.6778 12.54 15.1518 12.54 15.4458 12.832C15.7388 13.124 15.7398 13.599 15.4478 13.893L12.5385 16.8137C12.5101 16.8429 12.4794 16.8698 12.4466 16.8941L12.5318 16.82C12.4996 16.8527 12.4646 16.882 12.4275 16.9078C12.4048 16.9234 12.3818 16.9376 12.358 16.9506C12.3465 16.9568 12.3344 16.963 12.3222 16.9687C12.3004 16.9791 12.278 16.9885 12.2551 16.9967C12.2436 17.0008 12.2321 17.0046 12.2206 17.0081C12.1924 17.0169 12.1635 17.0239 12.1339 17.0292C12.1272 17.0303 12.1212 17.0313 12.1151 17.0323C12.0912 17.036 12.0663 17.0386 12.0411 17.0399C12.0275 17.0406 12.0142 17.041 12.0008 17.041L11.961 17.038L11.8991 17.0341C11.8947 17.0336 11.8903 17.0329 11.8859 17.0322L12.0008 17.041C11.9561 17.041 11.9118 17.037 11.8683 17.0292C11.8382 17.0239 11.8093 17.0169 11.7811 17.0083C11.7699 17.0047 11.7588 17.0011 11.7478 16.9971C11.7249 16.989 11.7022 16.9796 11.6801 16.9691C11.6666 16.9627 11.6533 16.9559 11.6401 16.9487C11.6217 16.9385 11.6039 16.9277 11.5866 16.9162C11.5747 16.9084 11.5629 16.9 11.5512 16.8913C11.5227 16.8698 11.4957 16.8464 11.4705 16.8212L11.4698 16.82L8.5538 13.893C8.2618 13.599 8.2628 13.124 8.5558 12.832C8.8498 12.54 9.3238 12.54 9.6158 12.834L11.25 14.476L11.2508 4.25C11.2508 3.836 11.5868 3.5 12.0008 3.5Z"
                  fill="#A5A5A5"
                />
              </svg>
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-black font-[600]">passport</h1>
            <label
              htmlFor=""
              for="inputfile2"
              className={`${
                filesImage.stage1.passport === "" ? "" : "border-green"
              } cursor-pointer flex border-2 py-4 border-dashed rounded-lg items-center justify-between px-4  w-[250px]`}
            >
              <div className="flex gap-2 ">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7161 16.7234H8.49609"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.7161 12.5369H8.49609"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.2511 8.36011H8.49609"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9085 3.24976C15.9085 3.24976 8.23149 3.25376 8.21949 3.25376C5.45949 3.27076 3.75049 5.08676 3.75049 7.85676V17.0528C3.75049 19.8368 5.47249 21.6598 8.25649 21.6598C8.25649 21.6598 15.9325 21.6568 15.9455 21.6568C18.7055 21.6398 20.4155 19.8228 20.4155 17.0528V7.85676C20.4155 5.07276 18.6925 3.24976 15.9085 3.24976Z"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="flex flex-col">
                  <span>Upload doc</span>
                </div>
              </div>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.367 8.2325C7.781 8.2325 8.117 8.5685 8.117 8.9825C8.117 9.3965 7.781 9.7325 7.367 9.7325H6.426C4.812 9.7325 3.5 11.0435 3.5 12.6565V17.5415C3.5 19.1605 4.816 20.4765 6.435 20.4765H17.575C19.187 20.4765 20.5 19.1635 20.5 17.5515V12.6675C20.5 11.0485 19.183 9.7325 17.566 9.7325H16.634C16.22 9.7325 15.884 9.3965 15.884 8.9825C15.884 8.5685 16.22 8.2325 16.634 8.2325H17.566C20.011 8.2325 22 10.2225 22 12.6675V17.5515C22 19.9915 20.014 21.9765 17.575 21.9765H6.435C3.99 21.9765 2 19.9875 2 17.5415V12.6565C2 10.2165 3.985 8.2325 6.426 8.2325H7.367ZM12.0008 3.5C12.4148 3.5 12.7508 3.836 12.7508 4.25L12.75 14.476L14.3858 12.834C14.6778 12.54 15.1518 12.54 15.4458 12.832C15.7388 13.124 15.7398 13.599 15.4478 13.893L12.5385 16.8137C12.5101 16.8429 12.4794 16.8698 12.4466 16.8941L12.5318 16.82C12.4996 16.8527 12.4646 16.882 12.4275 16.9078C12.4048 16.9234 12.3818 16.9376 12.358 16.9506C12.3465 16.9568 12.3344 16.963 12.3222 16.9687C12.3004 16.9791 12.278 16.9885 12.2551 16.9967C12.2436 17.0008 12.2321 17.0046 12.2206 17.0081C12.1924 17.0169 12.1635 17.0239 12.1339 17.0292C12.1272 17.0303 12.1212 17.0313 12.1151 17.0323C12.0912 17.036 12.0663 17.0386 12.0411 17.0399C12.0275 17.0406 12.0142 17.041 12.0008 17.041L11.961 17.038L11.8991 17.0341C11.8947 17.0336 11.8903 17.0329 11.8859 17.0322L12.0008 17.041C11.9561 17.041 11.9118 17.037 11.8683 17.0292C11.8382 17.0239 11.8093 17.0169 11.7811 17.0083C11.7699 17.0047 11.7588 17.0011 11.7478 16.9971C11.7249 16.989 11.7022 16.9796 11.6801 16.9691C11.6666 16.9627 11.6533 16.9559 11.6401 16.9487C11.6217 16.9385 11.6039 16.9277 11.5866 16.9162C11.5747 16.9084 11.5629 16.9 11.5512 16.8913C11.5227 16.8698 11.4957 16.8464 11.4705 16.8212L11.4698 16.82L8.5538 13.893C8.2618 13.599 8.2628 13.124 8.5558 12.832C8.8498 12.54 9.3238 12.54 9.6158 12.834L11.25 14.476L11.2508 4.25C11.2508 3.836 11.5868 3.5 12.0008 3.5Z"
                  fill="#A5A5A5"
                />
              </svg>
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-black font-[600]">transcript</h1>
            <label
              htmlFor=""
              for="inputfile3"
              className={`${
                filesImage.stage1.transcript === "" ? "" : "border-green"
              } cursor-pointer flex border-2 py-4 border-dashed rounded-lg items-center justify-between px-4  w-[250px]`}
            >
              <div className="flex gap-2 ">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7161 16.7234H8.49609"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.7161 12.5369H8.49609"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.2511 8.36011H8.49609"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9085 3.24976C15.9085 3.24976 8.23149 3.25376 8.21949 3.25376C5.45949 3.27076 3.75049 5.08676 3.75049 7.85676V17.0528C3.75049 19.8368 5.47249 21.6598 8.25649 21.6598C8.25649 21.6598 15.9325 21.6568 15.9455 21.6568C18.7055 21.6398 20.4155 19.8228 20.4155 17.0528V7.85676C20.4155 5.07276 18.6925 3.24976 15.9085 3.24976Z"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="flex flex-col">
                  <span>Upload doc</span>
                </div>
              </div>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.367 8.2325C7.781 8.2325 8.117 8.5685 8.117 8.9825C8.117 9.3965 7.781 9.7325 7.367 9.7325H6.426C4.812 9.7325 3.5 11.0435 3.5 12.6565V17.5415C3.5 19.1605 4.816 20.4765 6.435 20.4765H17.575C19.187 20.4765 20.5 19.1635 20.5 17.5515V12.6675C20.5 11.0485 19.183 9.7325 17.566 9.7325H16.634C16.22 9.7325 15.884 9.3965 15.884 8.9825C15.884 8.5685 16.22 8.2325 16.634 8.2325H17.566C20.011 8.2325 22 10.2225 22 12.6675V17.5515C22 19.9915 20.014 21.9765 17.575 21.9765H6.435C3.99 21.9765 2 19.9875 2 17.5415V12.6565C2 10.2165 3.985 8.2325 6.426 8.2325H7.367ZM12.0008 3.5C12.4148 3.5 12.7508 3.836 12.7508 4.25L12.75 14.476L14.3858 12.834C14.6778 12.54 15.1518 12.54 15.4458 12.832C15.7388 13.124 15.7398 13.599 15.4478 13.893L12.5385 16.8137C12.5101 16.8429 12.4794 16.8698 12.4466 16.8941L12.5318 16.82C12.4996 16.8527 12.4646 16.882 12.4275 16.9078C12.4048 16.9234 12.3818 16.9376 12.358 16.9506C12.3465 16.9568 12.3344 16.963 12.3222 16.9687C12.3004 16.9791 12.278 16.9885 12.2551 16.9967C12.2436 17.0008 12.2321 17.0046 12.2206 17.0081C12.1924 17.0169 12.1635 17.0239 12.1339 17.0292C12.1272 17.0303 12.1212 17.0313 12.1151 17.0323C12.0912 17.036 12.0663 17.0386 12.0411 17.0399C12.0275 17.0406 12.0142 17.041 12.0008 17.041L11.961 17.038L11.8991 17.0341C11.8947 17.0336 11.8903 17.0329 11.8859 17.0322L12.0008 17.041C11.9561 17.041 11.9118 17.037 11.8683 17.0292C11.8382 17.0239 11.8093 17.0169 11.7811 17.0083C11.7699 17.0047 11.7588 17.0011 11.7478 16.9971C11.7249 16.989 11.7022 16.9796 11.6801 16.9691C11.6666 16.9627 11.6533 16.9559 11.6401 16.9487C11.6217 16.9385 11.6039 16.9277 11.5866 16.9162C11.5747 16.9084 11.5629 16.9 11.5512 16.8913C11.5227 16.8698 11.4957 16.8464 11.4705 16.8212L11.4698 16.82L8.5538 13.893C8.2618 13.599 8.2628 13.124 8.5558 12.832C8.8498 12.54 9.3238 12.54 9.6158 12.834L11.25 14.476L11.2508 4.25C11.2508 3.836 11.5868 3.5 12.0008 3.5Z"
                  fill="#A5A5A5"
                />
              </svg>
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-black font-[600]">Eligibility letterports</h1>
            <label
              htmlFor=""
              for="inputfile4"
              className={`${
                filesImage.stage1.EligibilityLetterports === ""
                  ? ""
                  : "border-green"
              } cursor-pointer flex border-2 py-4 border-dashed rounded-lg items-center justify-between px-4  w-[250px]`}
            >
              <div className="flex gap-2 ">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7161 16.7234H8.49609"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.7161 12.5369H8.49609"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.2511 8.36011H8.49609"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9085 3.24976C15.9085 3.24976 8.23149 3.25376 8.21949 3.25376C5.45949 3.27076 3.75049 5.08676 3.75049 7.85676V17.0528C3.75049 19.8368 5.47249 21.6598 8.25649 21.6598C8.25649 21.6598 15.9325 21.6568 15.9455 21.6568C18.7055 21.6398 20.4155 19.8228 20.4155 17.0528V7.85676C20.4155 5.07276 18.6925 3.24976 15.9085 3.24976Z"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="flex flex-col">
                  <span>Upload doc</span>
                </div>
              </div>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.367 8.2325C7.781 8.2325 8.117 8.5685 8.117 8.9825C8.117 9.3965 7.781 9.7325 7.367 9.7325H6.426C4.812 9.7325 3.5 11.0435 3.5 12.6565V17.5415C3.5 19.1605 4.816 20.4765 6.435 20.4765H17.575C19.187 20.4765 20.5 19.1635 20.5 17.5515V12.6675C20.5 11.0485 19.183 9.7325 17.566 9.7325H16.634C16.22 9.7325 15.884 9.3965 15.884 8.9825C15.884 8.5685 16.22 8.2325 16.634 8.2325H17.566C20.011 8.2325 22 10.2225 22 12.6675V17.5515C22 19.9915 20.014 21.9765 17.575 21.9765H6.435C3.99 21.9765 2 19.9875 2 17.5415V12.6565C2 10.2165 3.985 8.2325 6.426 8.2325H7.367ZM12.0008 3.5C12.4148 3.5 12.7508 3.836 12.7508 4.25L12.75 14.476L14.3858 12.834C14.6778 12.54 15.1518 12.54 15.4458 12.832C15.7388 13.124 15.7398 13.599 15.4478 13.893L12.5385 16.8137C12.5101 16.8429 12.4794 16.8698 12.4466 16.8941L12.5318 16.82C12.4996 16.8527 12.4646 16.882 12.4275 16.9078C12.4048 16.9234 12.3818 16.9376 12.358 16.9506C12.3465 16.9568 12.3344 16.963 12.3222 16.9687C12.3004 16.9791 12.278 16.9885 12.2551 16.9967C12.2436 17.0008 12.2321 17.0046 12.2206 17.0081C12.1924 17.0169 12.1635 17.0239 12.1339 17.0292C12.1272 17.0303 12.1212 17.0313 12.1151 17.0323C12.0912 17.036 12.0663 17.0386 12.0411 17.0399C12.0275 17.0406 12.0142 17.041 12.0008 17.041L11.961 17.038L11.8991 17.0341C11.8947 17.0336 11.8903 17.0329 11.8859 17.0322L12.0008 17.041C11.9561 17.041 11.9118 17.037 11.8683 17.0292C11.8382 17.0239 11.8093 17.0169 11.7811 17.0083C11.7699 17.0047 11.7588 17.0011 11.7478 16.9971C11.7249 16.989 11.7022 16.9796 11.6801 16.9691C11.6666 16.9627 11.6533 16.9559 11.6401 16.9487C11.6217 16.9385 11.6039 16.9277 11.5866 16.9162C11.5747 16.9084 11.5629 16.9 11.5512 16.8913C11.5227 16.8698 11.4957 16.8464 11.4705 16.8212L11.4698 16.82L8.5538 13.893C8.2618 13.599 8.2628 13.124 8.5558 12.832C8.8498 12.54 9.3238 12.54 9.6158 12.834L11.25 14.476L11.2508 4.25C11.2508 3.836 11.5868 3.5 12.0008 3.5Z"
                  fill="#A5A5A5"
                />
              </svg>
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-black font-[600]">English proficiency</h1>
            <label
              htmlFor=""
              for="inputfile6"
              className={`${
                filesImage.stage1.EnglishProficiency === ""
                  ? ""
                  : "border-green"
              } cursor-pointer flex border-2 py-4 border-dashed rounded-lg items-center justify-between px-4  w-[250px]`}
            >
              <div className="flex gap-2 ">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7161 16.7234H8.49609"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.7161 12.5369H8.49609"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.2511 8.36011H8.49609"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9085 3.24976C15.9085 3.24976 8.23149 3.25376 8.21949 3.25376C5.45949 3.27076 3.75049 5.08676 3.75049 7.85676V17.0528C3.75049 19.8368 5.47249 21.6598 8.25649 21.6598C8.25649 21.6598 15.9325 21.6568 15.9455 21.6568C18.7055 21.6398 20.4155 19.8228 20.4155 17.0528V7.85676C20.4155 5.07276 18.6925 3.24976 15.9085 3.24976Z"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="flex flex-col">
                  <span>Upload doc</span>
                </div>
              </div>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.367 8.2325C7.781 8.2325 8.117 8.5685 8.117 8.9825C8.117 9.3965 7.781 9.7325 7.367 9.7325H6.426C4.812 9.7325 3.5 11.0435 3.5 12.6565V17.5415C3.5 19.1605 4.816 20.4765 6.435 20.4765H17.575C19.187 20.4765 20.5 19.1635 20.5 17.5515V12.6675C20.5 11.0485 19.183 9.7325 17.566 9.7325H16.634C16.22 9.7325 15.884 9.3965 15.884 8.9825C15.884 8.5685 16.22 8.2325 16.634 8.2325H17.566C20.011 8.2325 22 10.2225 22 12.6675V17.5515C22 19.9915 20.014 21.9765 17.575 21.9765H6.435C3.99 21.9765 2 19.9875 2 17.5415V12.6565C2 10.2165 3.985 8.2325 6.426 8.2325H7.367ZM12.0008 3.5C12.4148 3.5 12.7508 3.836 12.7508 4.25L12.75 14.476L14.3858 12.834C14.6778 12.54 15.1518 12.54 15.4458 12.832C15.7388 13.124 15.7398 13.599 15.4478 13.893L12.5385 16.8137C12.5101 16.8429 12.4794 16.8698 12.4466 16.8941L12.5318 16.82C12.4996 16.8527 12.4646 16.882 12.4275 16.9078C12.4048 16.9234 12.3818 16.9376 12.358 16.9506C12.3465 16.9568 12.3344 16.963 12.3222 16.9687C12.3004 16.9791 12.278 16.9885 12.2551 16.9967C12.2436 17.0008 12.2321 17.0046 12.2206 17.0081C12.1924 17.0169 12.1635 17.0239 12.1339 17.0292C12.1272 17.0303 12.1212 17.0313 12.1151 17.0323C12.0912 17.036 12.0663 17.0386 12.0411 17.0399C12.0275 17.0406 12.0142 17.041 12.0008 17.041L11.961 17.038L11.8991 17.0341C11.8947 17.0336 11.8903 17.0329 11.8859 17.0322L12.0008 17.041C11.9561 17.041 11.9118 17.037 11.8683 17.0292C11.8382 17.0239 11.8093 17.0169 11.7811 17.0083C11.7699 17.0047 11.7588 17.0011 11.7478 16.9971C11.7249 16.989 11.7022 16.9796 11.6801 16.9691C11.6666 16.9627 11.6533 16.9559 11.6401 16.9487C11.6217 16.9385 11.6039 16.9277 11.5866 16.9162C11.5747 16.9084 11.5629 16.9 11.5512 16.8913C11.5227 16.8698 11.4957 16.8464 11.4705 16.8212L11.4698 16.82L8.5538 13.893C8.2618 13.599 8.2628 13.124 8.5558 12.832C8.8498 12.54 9.3238 12.54 9.6158 12.834L11.25 14.476L11.2508 4.25C11.2508 3.836 11.5868 3.5 12.0008 3.5Z"
                  fill="#A5A5A5"
                />
              </svg>
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-black font-[600]">Non criminal record</h1>
            <label
              htmlFor=""
              for="inputfile5"
              className={`${
                filesImage.stage1.NonCriminalRecord === "" ? "" : "border-green"
              } cursor-pointer flex border-2 py-4 border-dashed rounded-lg items-center justify-between px-4  w-[250px]`}
            >
              <div className="flex gap-2  ">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7161 16.7234H8.49609"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.7161 12.5369H8.49609"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.2511 8.36011H8.49609"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9085 3.24976C15.9085 3.24976 8.23149 3.25376 8.21949 3.25376C5.45949 3.27076 3.75049 5.08676 3.75049 7.85676V17.0528C3.75049 19.8368 5.47249 21.6598 8.25649 21.6598C8.25649 21.6598 15.9325 21.6568 15.9455 21.6568C18.7055 21.6398 20.4155 19.8228 20.4155 17.0528V7.85676C20.4155 5.07276 18.6925 3.24976 15.9085 3.24976Z"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="flex flex-col">
                  <span>Upload doc</span>
                </div>
              </div>
              <svg
                className=" rotate-180"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.367 8.2325C7.781 8.2325 8.117 8.5685 8.117 8.9825C8.117 9.3965 7.781 9.7325 7.367 9.7325H6.426C4.812 9.7325 3.5 11.0435 3.5 12.6565V17.5415C3.5 19.1605 4.816 20.4765 6.435 20.4765H17.575C19.187 20.4765 20.5 19.1635 20.5 17.5515V12.6675C20.5 11.0485 19.183 9.7325 17.566 9.7325H16.634C16.22 9.7325 15.884 9.3965 15.884 8.9825C15.884 8.5685 16.22 8.2325 16.634 8.2325H17.566C20.011 8.2325 22 10.2225 22 12.6675V17.5515C22 19.9915 20.014 21.9765 17.575 21.9765H6.435C3.99 21.9765 2 19.9875 2 17.5415V12.6565C2 10.2165 3.985 8.2325 6.426 8.2325H7.367ZM12.0008 3.5C12.4148 3.5 12.7508 3.836 12.7508 4.25L12.75 14.476L14.3858 12.834C14.6778 12.54 15.1518 12.54 15.4458 12.832C15.7388 13.124 15.7398 13.599 15.4478 13.893L12.5385 16.8137C12.5101 16.8429 12.4794 16.8698 12.4466 16.8941L12.5318 16.82C12.4996 16.8527 12.4646 16.882 12.4275 16.9078C12.4048 16.9234 12.3818 16.9376 12.358 16.9506C12.3465 16.9568 12.3344 16.963 12.3222 16.9687C12.3004 16.9791 12.278 16.9885 12.2551 16.9967C12.2436 17.0008 12.2321 17.0046 12.2206 17.0081C12.1924 17.0169 12.1635 17.0239 12.1339 17.0292C12.1272 17.0303 12.1212 17.0313 12.1151 17.0323C12.0912 17.036 12.0663 17.0386 12.0411 17.0399C12.0275 17.0406 12.0142 17.041 12.0008 17.041L11.961 17.038L11.8991 17.0341C11.8947 17.0336 11.8903 17.0329 11.8859 17.0322L12.0008 17.041C11.9561 17.041 11.9118 17.037 11.8683 17.0292C11.8382 17.0239 11.8093 17.0169 11.7811 17.0083C11.7699 17.0047 11.7588 17.0011 11.7478 16.9971C11.7249 16.989 11.7022 16.9796 11.6801 16.9691C11.6666 16.9627 11.6533 16.9559 11.6401 16.9487C11.6217 16.9385 11.6039 16.9277 11.5866 16.9162C11.5747 16.9084 11.5629 16.9 11.5512 16.8913C11.5227 16.8698 11.4957 16.8464 11.4705 16.8212L11.4698 16.82L8.5538 13.893C8.2618 13.599 8.2628 13.124 8.5558 12.832C8.8498 12.54 9.3238 12.54 9.6158 12.834L11.25 14.476L11.2508 4.25C11.2508 3.836 11.5868 3.5 12.0008 3.5Z"
                  fill="#A5A5A5"
                />
              </svg>
            </label>
          </div>
          <input
            type="file"
            id="inputfile"
            className="hidden"
            value={filesImage.stage1.diplomma}
            onChange={(e) =>
              filesInputHandel("stage1", "diploma", e.target.files[0])
            }
          />
          <input
            type="file"
            id="inputfile2"
            className="hidden"
            defaultValue={filesImage.stage1.passport}
            onChange={(e) =>
              filesInputHandel("stage1", "passport", e.target.files[0])
            }
          />
          <input
            type="file"
            id="inputfile3"
            className="hidden"
            defaultValue={filesImage.stage1.transcript}
            onChange={(e) =>
              filesInputHandel("stage1", "transcript", e.target.files[0])
            }
          />
          <input
            type="file"
            id="inputfile4"
            className="hidden"
            defaultValue={filesImage.stage1.EligibilityLetterports}
            onChange={(e) =>
              filesInputHandel(
                "stage1",
                "EligibilityLetterports",
                e.target.files[0]
              )
            }
          />
          <input
            type="file"
            id="inputfile5"
            className="hidden"
            defaultValue={filesImage.stage1.NonCriminalRecord}
            onChange={(e) =>
              filesInputHandel("stage1", "NonCriminalRecord", e.target.files[0])
            }
          />
          <input
            type="file"
            id="inputfile6"
            className="hidden"
            defaultValue={filesImage.stage1.EnglishProficiency}
            onChange={(e) =>
              filesInputHandel(
                "stage1",
                "EnglishProficiency",
                e.target.files[0]
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Applica;
