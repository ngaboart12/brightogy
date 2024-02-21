"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const FindeBetterProgram = () => {
  const [faculties, setFaculties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  };

  const filteredFaculties = faculties.filter((faculty) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      faculty.facultyName.toLowerCase().includes(lowerCaseSearchTerm) ||
      faculty.country.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });
  return (
    <div className="w-full px-[10px] mt-10 sm:px-[50px] md:px-[100px]">
      <div className="flex flex-col py-20 px-[10px] sm:px-10  md:px-20 bg-blueBack w-full relative">
        <div className="w-full h-full absolute top-0 z-10">
          <Image
            src={`/image/Banner.svg`}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-[20px] items-center z-20">
          <h1 className="text-[32px] md:text-[36px] text-white font-[800] text-center leading-[40px] font-Kumbh">
            Find a Better Program <br /> For Your or Your Family With us
          </h1>
          <div className="flex transition-all duration-800 flex-col gap-[10px] items-center p-5 rounded-[14px] bg-[#2182C6] sm:w-[300px] md:w-[600px] ">
            <div className="flex flex-row gap-[10px] w-full items-center">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M22 22L20 20"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <input  onChange={handleSearch} placeholder="Search For Program Or Country" className=" bg-transparent text-white placeholder:text-white font-[300] w-full outline-none" />
            </div>
            {searchTerm !== "" && (
            <div className=" border-t-[1px] border-white w-full py-2 flex flex-col gap-[8px] ">
            {filteredFaculties.map((item, index) => {
                  return (
                    <a href={`/programs?id=${item.id}`} className=" cursor-pointer flex flex-row gap[10px] py-2 px-2 bg-blueBack/50 rounded-[6px]">
                      <h1 className="w-[200px] overflow-hidden text-white">{item.facultyName}</h1><span>({item.country})</span>
                    </a>
                  );
                })}
            </div>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[10px] items-center">
            <span className="text-white font-poppins font-[300]">health related</span>
            <span className="text-white font-poppins font-[300]">Engineering</span>
            <span className="text-white font-poppins font-[300]">Languages</span>
            <span className="text-white font-poppins font-[300]">Engineering</span>
            
          </div>

        </div>

      </div>
    </div>
  );
};

export default FindeBetterProgram;
