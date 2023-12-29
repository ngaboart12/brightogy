"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import LinkComponent from "components/LinkComponet";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import ReactLoading from "react-loading";
import Image from "next/image";

const Single = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        if (id) {
          const postDocRef = doc(db, "offers", id); // Replace "yourCollectionName" with the actual name of your Firestore collection
          const postDocSnapshot = await getDoc(postDocRef);

          if (postDocSnapshot.exists()) {
            setPostData(postDocSnapshot.data());
            setLoading(false);
          } else {
            console.error("Post not found");
          }
        }
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    if (id) {
      fetchPostData();
    }
  }, [id]);
  const handleDownload = () => {
    if (postData && postData.pdfURL) {
      // Use anchor element to trigger the download
      const link = document.createElement("a");
      link.href = postData.pdfURL;
      link.target = "_blank";

      // Set the Content-Disposition header to force download
      link.setAttribute("download", "file.pdf");

      // Trigger the click event
      link.click();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  w-full">
      <LinkComponent />
      <Navbar />
      <div className="py-10 w-full max-w-7xl flex flex-col gap-10 px-[10px] md:px-20">
        <h1 className="text-[24px] text-[#123E6C] font-[500] text-center">
          SPECIAL OFFER
        </h1>
        {loading ? (
          <div className="w-full items-center justify-center py-10 flex">
            <ReactLoading type="spin" color="#123E6C" height={50} width={50} />
          </div>
        ) : (
          <div className="flex flex-row gap-2">
            <div className="flex w-full md:w-1/2 flex-col gap-4">
              <div className="flex flex-row gap-2">
                <span className="text-[#C8C8C8] text-[18px] font-[300]">
                  Special Offers
                </span>
                <span className="text-black text-[18px] font-[500]">
                  / {postData.offerName}
                </span>
              </div>
              <h1 className="text-[24px] font-[600] text-[#123E6C] uppercase">
                {postData.offerName}
              </h1>
              <span className="text-[#6E6E6E] font-[200] max-w-[800px]">
                {postData.offerDescription}
              </span>
              <button
                onClick={handleDownload}
                className="p-4 hover:scale-110 transition-all bg-[#123E6C] text-white rounded-[20px] w-[200px]"
              >
                View Document
              </button>
            </div>
            <div className="w-full md:w-1/2 flex">
              <div className="w-full h-full p-20">
                <Image
                  src={"/image/acom1.png"}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Single;
