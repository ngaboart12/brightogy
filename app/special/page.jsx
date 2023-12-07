import React from "react";
import LinkComponent from "../../components/LinkComponet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Special = () => {
  const offers = [
    {
      date: "14 Jan 2023",
      title: "Study in poland",
      disc: "Loopring EOS waves chiliz hive tether digibyte. Decentraland avalanche avalanche nexo uniswap fa",
    },
    {
      date: "14 Jan 2023",
      title: "Study in poland",
      disc: "Loopring EOS waves chiliz hive tether digibyte. Decentraland avalanche avalanche nexo uniswap fa",
    },
    {
      date: "14 Jan 2023",
      title: "Study in poland",
      disc: "Loopring EOS waves chiliz hive tether digibyte. Decentraland avalanche avalanche nexo uniswap fa",
    },
    {
      date: "14 Jan 2023",
      title: "Study in poland",
      disc: "Loopring EOS waves chiliz hive tether digibyte. Decentraland avalanche avalanche nexo uniswap fa",
    },
    {
      date: "14 Jan 2023",
      title: "Study in poland",
      disc: "Loopring EOS waves chiliz hive tether digibyte. Decentraland avalanche avalanche nexo uniswap fa",
    },
    {
      date: "14 Jan 2023",
      title: "Study in poland",
      disc: "Loopring EOS waves chiliz hive tether digibyte. Decentraland avalanche avalanche nexo uniswap fa",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center  w-full">
      <LinkComponent />
      <Navbar />

      {/*  */}
      <div className="flex flex-col w-full max-w-7xl items-center px-[20px] md:px-20 lg:px-40 py-10">
        <h1 className="text-[32px] text-[#123E6C] font-[600]">
          SPECIAL OFFERS
        </h1>
        <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-3 gap-10 py-10">
          {offers.map((item) => (
            <div className="flex flex-col gap-2  sm:items-start">
              <span className="text-[16px] text-[#123E6C] px-4">
                {item.date}
              </span>
              <h1 className="text-[20px] font-[600] text-[#123E6C]">
                {item.title}
              </h1>
              <span className="text-[#707070] text-[14px]  sm:items-start">
                {item.disc}
              </span>

              <a
                href="#"
                className="bg-[#123E6C]  w-[150px] rounded-2xl flex items-center justify-center py-2 text-white hover:scale-110"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Special;
