"use client";
import LinkComponent from "components/LinkComponet";
import Navbar from "components/Navbar";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FaSchool } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { SiCashapp } from "react-icons/si";
import { FaMapLocationDot } from "react-icons/fa6";

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

        if (id) {
          const selectedFaculty = facultiesData.find(
            (faculty) => faculty.id === id
          );
          setFaculties(selectedFaculty ? [selectedFaculty] : []);
        } else {
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

  return (
    <div className="flex flex-col items-center   w-full bg-blue-50/50">
      <LinkComponent />
      <Navbar />
      <div className="flex flex-col gap-2 py-10 w-full px-[20px] md:px-[20vh]">
        {loading ? (
          <div className="w-full items-center justify-center py-10 flex">
            <ReactLoading type="spin" color="#123E6C" height={50} width={50} />
          </div>
        ) : (
          <div className="flex flex-col gap-[10px] ">
            <div className="flex flex-row gap-[20px] items-center">
              <FaSchool size={0} />
              <span className="text-[20px] font-[700]">
                Program Summary ({faculties[0].facultyName})
              </span>
            </div>
            <div className="pb-20 py-4">
              {faculties.map((item, index) => {
                return (
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-col-reverse lg:flex-row gap-[20px] w-full">
                      <div className="w-full lg:w-[70%] font-poppins  rounded-[6px] flex flex-col gap-[10px] p-6 bg-white ">
                        <div className="flex flex-row items-center gap-2">
                          <h1 className="text-[18px] font-[500]">
                            Program Description
                          </h1>
                        </div>
                        <span className="text-[13px] font-[400]">
                          {item.description}
                        </span>
                      </div>
                      <div className=" w-full lg:w-[30%] flex flex-col p-6 bg-white rounded-[6px] gap-[20px]">
                        <div className="flex flex-row gap-[10px] items-center">
                          <BsCalendar2Date size={40} />
                          <div className="flex  flex-col gap-[2px]">
                            <h1 className="text-[16px] font-[600] text-black">
                              {" "}
                              {item.duration} Year graduate certificate{" "}
                            </h1>
                            <span className="text-[13px] text-gray-400">
                              Program length
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center">
                          <SiCashapp size={40} />
                          <div className="flex  flex-col gap-[2px]">
                            <h1 className="text-[16px] font-[600] text-black">
                              {" "}
                              {item.tuitionFees} $ / year{" "}
                            </h1>
                            <span className="text-[13px] text-gray-400">
                              Tuition fees
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center">
                          <FaMapLocationDot size={40} />
                          <div className="flex  flex-col gap-[2px]">
                            <h1 className="text-[16px] font-[600] text-black">
                              {" "}
                              {item.country}
                            </h1>
                            <span className="text-[13px] text-gray-400">
                              Location / country
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-white rounded-[12px] p-4 flex flex-col gap-[2]">
                      <h1 className="text-[18px] font-[500]">
                        Program Requirements
                      </h1>
                      <span className="text-[13px] font-[400]">
                        {item?.requirements}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Program;
