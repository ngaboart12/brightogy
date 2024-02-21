import React from "react";
import Image from "next/image";

const Parteners = () => {
  return (
    <div class="w-full  py-[47px]  justify-center items-center inline-flex">
      <div class="self-stretch flex-col justify-start items-center gap-4 inline-flex">
        <div class="text-amber-500 text-2xl text-center font-semibold ">
          Trusted by Leading Institutions
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2  w-full">
              <div className="w-[120px]">
                <Image
                  src={"/image/vistula.png"}
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <div className="w-[120px]">
                <Image
                  src={"/image/britis.png"}
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <div className="w-[120px]">
                <Image
                  src={"/image/online.png"}
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <div className="w-[120px]">
                <Image
                  src={"/image/auniveristy.png"}
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <div className="w-[120px]">
                <Image
                  src={"/image/name.png"}
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <div className="w-[120px]">
                <Image
                  src={"/image/alte.png"}
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
            </div>
      </div>
    </div>
  );
};

export default Parteners;
