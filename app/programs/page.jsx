"use client";
import LinkComponent from "components/LinkComponet";
import Navbar from "components/Navbar";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Footer from "components/Footer";
import ReactLoading from "react-loading";

const page = () => {
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
    <div className="flex flex-col items-center justify-center  w-full">
      <LinkComponent />
      <Navbar />
      <div className="flex flex-col gap-2 py-10 w-full px-[20px] md:px-[20vh]">
        <div className="flex flex-row items-center border border-black/30 rounded-md py-2 px-2 gap-2 w-[250px] mx-auto md:mx-0">
          <CiSearch size={30} />
          <input
            type="text"
            className="outline-none"
            placeholder="Search  Program/Country "
            onChange={handleSearch}
          />
        </div>
        {loading ? (
          <div className="w-full items-center justify-center py-10 flex">
            <ReactLoading type="spin" color="#123E6C" height={50} width={50} />
          </div>
        ) : (
          <div className="flex flex-col py-6">
            {searchTerm === "" ? (
              <p className="text-[24px]">
                Search Program, Result are Displayed Here
              </p>
            ) : (
              <table>
                <tr className="text-[12px] h-10">
                  <td>Faculty Name</td>
                  <td>Duration</td>
                  <td>Tuition fees</td>
                  <td>Grade</td>
                  <td>Country</td>
                </tr>

                {filteredFaculties.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="p-4 bg-gray-200 h-14 md:h-10 border-b-4 border-white text-[12px]"
                    >
                      <td className="px-2">{item.facultyName}</td>
                      <td>{item.duration} years</td>
                      <td>${item.tuitionFees}</td>
                      <td>{item.grade}</td>
                      <td>{item.country}</td>
                    </tr>
                  );
                })}
              </table>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default page;
