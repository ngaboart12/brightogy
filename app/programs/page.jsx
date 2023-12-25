"use client";
import LinkComponent from "components/LinkComponet";
import Navbar from "components/Navbar";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Footer from "components/Footer";

const page = () => {
  const [faculties, setFaculties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const facultiesCollection = collection(db, "faculties");

      try {
        const facultiesSnapshot = await getDocs(facultiesCollection);
        const facultiesData = facultiesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setFaculties(facultiesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const filteredFaculties = faculties.filter((faculty) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      faculty.facultyName.toLowerCase().includes(lowerCaseSearchTerm) ||
      faculty.school.toLowerCase().includes(lowerCaseSearchTerm) ||
      faculty.country.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });
  return (
    <div className="flex flex-col items-center justify-center  w-full">
      <LinkComponent />
      <Navbar />
      <div className="flex flex-col gap-2 py-10 w-full px-[20px] md:px-[20vh]">
        <div className="flex flex-row items-center border border-black/30 rounded-md py-2 px-2 gap-2 w-[250px] mx-auto md:mx-0">
          <CiSearch size={30} />
          <input
            type="text"
            className="outline-none"
            placeholder="Search  Program/University "
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          {filteredFaculties.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-2 p-4 items-center md:flex-row"
              >
                <diV className="flex flex-col md:flex-row items-center  gap-2 w-[300px]">
                  <div className="p-4  rounded-md w-[60px] items-center justify-center bg-blue-200 text-black flex">
                    {item.facultyName.slice(0, 1)}
                  </div>
                  <div className="flex flex-col items-center md:items-start ">
                    <h1 className="font-[300]">{item.facultyName}</h1>
                    <span className="text-[14px] font-[600]">
                      Univeristy:{" "}
                      <span className="font-[200]">{item.school}</span>
                    </span>
                  </div>
                </diV>
                <div className="flex flex-col items-center md:items-start">
                  <h1>
                    Country: <span className="font-[200]">{item.country}</span>
                  </h1>
                  <h1>
                    Fees: <span className="font-[200]">${item.schoolFees}</span>
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
