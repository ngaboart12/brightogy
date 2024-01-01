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

        setOffers(offersData.slice(0, 2));
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
    <div className="   bg-gray-200 w-full justify-center  flex">
      <div className="flex flex-col py-[81px] px-[10px]  items-center w-full max-w-7xl">
        <div data-aos="fade-right" className="flex flex-col gap-10">
          <h1 className="text-3xl text-center text-[#FFA800] font-[700]">
            Our special offers
          </h1>
          <p className="text-[16px] leading-4 text-center text-[#3C3B3B] font-[300] max-w-[500px]">
            Take advantage of our specially designed offerings that are
            exclusively for you to unlock the doors to academic success. It
            gives us great pleasure to offer special, time-limited options that
            mix quality and affordability from our educational consultant. With
            these alluring incentives created to enhance your educational
            journey, find a route to academic success
          </p>
        </div>

        <div
          data-aos="fade-left"
          className="flex flex-col md:flex-row gap-4 py-10"
        >
          {offerss.map((item, index) => {
            return (
              <div className="flex flex-col bg-white rounded-md gap-2  items-center md:items-start py-6 px-2 md:px-6 ">
                <span className="text-[#123E6C] text-[14px] font-[300]">
                  {item.offerDate}
                </span>
                <h1 className="text-[#123E6C] font-[600] text-[20px]">
                  {item.offerName}
                </h1>
                <p className="text-[#707070] text-[14px] line-clamp-2 text-center md:text-start font-[300] leading-4 mt-2 max-w-[375px]">
                  {item.offerDescription}
                </p>
                <p
                  onClick={() => goToPostPage(item.id)}
                  className="bg-[#123E6C] cursor-pointer w-[150px] rounded-2xl flex items-center justify-center py-2 text-white hover:scale-110"
                >
                  Learn More
                </p>
              </div>
            );
          })}
        </div>
        <div>
          <a
            href="/special"
            className=" hover:scale-110 transition-all py-[10px] w-[150px] text-white font-[300] md:py-[10px] md:px-[31px] text-[14px] bg-[#FFA800] rounded-lg md:w-[160px] flex justify-center items-center"
          >
            Discover more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ourspecialoffers;
