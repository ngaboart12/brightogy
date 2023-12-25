"use client";
import React, { useEffect, useState } from "react";
import LinkComponent from "../../components/LinkComponet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";
import ReactLoading from "react-loading";

const Special = () => {
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

        setOffers(offersData);
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
    <div className="flex flex-col items-center justify-center  w-full">
      <LinkComponent />
      <Navbar />

      {/*  */}
      <div className="flex flex-col w-full max-w-7xl items-center px-[20px] md:px-20 lg:px-40 py-10">
        <h1 className="text-[32px] text-[#123E6C] font-[600]">
          SPECIAL OFFERS
        </h1>
        {loading ? (
          <div className="py-20">
            <ReactLoading type="spin" color="#123E6C" height={50} width={50} />
          </div>
        ) : (
          <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-3 gap-10 py-10">
            {offerss.map((item) => (
              <div className="flex flex-col gap-2  sm:items-start">
                <span className="text-[16px] text-[#123E6C] px-4">
                  {item.offerDate}
                </span>
                <h1 className="text-[20px] font-[600] text-[#123E6C]">
                  {item.offerName}
                </h1>
                <span className="text-[#707070] text-[14px]  sm:items-start line-clamp-4">
                  {item.offerDescription}
                </span>
                <p
                  onClick={() => goToPostPage(item.id)}
                  className="bg-[#123E6C] w-[150px] rounded-2xl flex items-center justify-center py-2 text-white hover:scale-110"
                >
                  Learn More
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Special;
