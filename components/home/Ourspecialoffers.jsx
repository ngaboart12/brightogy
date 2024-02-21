"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import ReactLoading from "react-loading";
import { useRouter } from "next/navigation";

const Ourspecialoffers = () => {
  const router = useRouter();
  const [offerss, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const offersCollection = collection(db, "offers");
        const querySnapshot = await getDocs(offersCollection);

        const offersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setOffers(offersData.slice(0, 3));
        setLoading(false);
        console.log(offersData);
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };

    fetchOffers();
  }, []);
  const goToPostPage = (postId) => {
    router.push(`/single?id=${postId}`);
  };
  return (
    <div className=" px-3 md:px-20   w-full justify-center  flex">
      <div className="flex flex-col  py-[8px] px-[10px] gap-2  items-center w-full max-w-7xl">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-3xl text-center text-[#35365d] font-[700]">
            Our special offers
          </h1>
          <p className="text-[16px] text-center leading-5   text-[#3C3B3B] font-[400] font-poppins max-w-[600px]">
            Take advantage of our specially designed offerings that are
            exclusively for you to unlock the doors to academic success. It
            gives us great pleasure to offer special, time-limited options that
            mix quality and affordability from our educational consultant. With
            these alluring incentives created to enhance your educational
            journey, find a route to academic success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
          {offerss.map((item, index) => {
            return (
              <div className="flex flex-col bg-[#F5F5F5] rounded-[12px] gap-2  items-center md:items-start py-6 px-2 md:px-6 ">
                <h1 className="text-black font-[700] text-[18px]">
                  {item.offerName}
                </h1>
                <p className="text-[#707070] text-[14px] line-clamp-2 text-center md:text-start font-[400] leading-4 mt-2 max-w-[375px]">
                  {item.offerDescription}
                </p>
                <p
                  onClick={() => goToPostPage(item.id)}
                  className=" flex flex-row gap-[10px] cursor-pointer w-[150px] rounded-2xl  items-center  py-2 text-green hover:scale-110"
                >
                  Learn More
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.75 11.7256L4.75 11.7256"
                        stroke="#7DB834"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.7002 5.701L19.7502 11.725L13.7002 17.75"
                        stroke="#7DB834"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            );
          })}
        </div>
        <div className=" mx-auto md:ml-auto md:mx-0">
          <a
            href="/special"
            className=" hover:scale-110 transition-all py-[10px] w-[150px] text-white font-[300] md:py-[10px] md:px-[31px] text-[14px] bg-[#7db834] rounded-lg md:w-[160px] flex justify-center items-center"
          >
            Discover more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ourspecialoffers;
