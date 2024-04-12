"use client";
import LinkComponent from "components/LinkComponet";
import Navbar from "components/Navbar";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

import ReactLoading from "react-loading";
import { useSearchParams } from "next/navigation";
import Footer from "../../components/Landing/Footer";

const Program = () => {
  const [faculties, setFaculties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  useEffect(() => {
    const fetchData = async () => {
      const facultiesCollection = collection(db, "faculties");

      try {
        const facultiesSnapshot = await getDocs(facultiesCollection);
        const facultiesData = facultiesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // If ID is present, filter faculties based on it
        if (id) {
          const selectedFaculty = facultiesData.find(
            (faculty) => faculty.id === id
          );
          setFaculties(selectedFaculty ? [selectedFaculty] : []);
        } else {
          // Otherwise, set all faculties
          setFaculties(facultiesData);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // const handleSearch = (e) => {
  //   const searchTerm = e.target.value.toLowerCase();
  //   setSearchTerm(searchTerm);
  //afaculties = faculties.filter((faculty) => {
  //   const lowerCaseSearchTerm = searchTerm.toLowerCase();
  //   return (
  //     faculty.facultyName.toLowerCase().includes(lowerCaseSearchTerm) ||
  //     faculty.country.toLowerCase().includes(lowerCaseSearchTerm)
  //   );
  // });
  return (
    <div className="flex flex-col items-center   w-full">
      <LinkComponent />
      <Navbar />
      <div className="flex flex-col gap-2 py-10 w-full px-[20px] md:px-[20vh]">
        {loading ? (
          <div className="w-full items-center justify-center py-10 flex">
            <ReactLoading type="spin" color="#123E6C" height={50} width={50} />
          </div>
        ) : (
          <div className="py-10">
            {faculties.map((item, index) => {
              return (
                <div className="w-full md:w-1/2 font-poppins  rounded-[12px] flex flex-col gap-[30px] p-4 ">
                  <div className="flex flex-row items-center gap-2">
                    <span className="font-[500]">Faculty:  <span className="text-[18px] font-[400] ">
                      {item.facultyName}
                    </span></span>
                   
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <span className="font-[500]">Duration:  <span className="text-[18px] font-[400]">
                      {item.duration} years
                    </span></span>
                   
                  </div>
                  <div className="flex flex-row items-center gap-2">
                  <span className="font-[500]">Tuition Fees: <span>${item.tuitionFees}</span></span>

                  </div>
                  <div className="flex flex-row items-center gap-2">
                  <span className="font-[500]">Degree: <span>{item.grade}</span></span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                  <span className="font-[500]">Country:</span><span>{item.country}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Footer/>
     
    </div>
  );
};

export default Program;
