import Navbar from "components/Navbar";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2">
      <Navbar />
      <div className="w-full flex-col py-20 flex items-center justify-center ">
        <div className="flex flex-col md:flex-row items-center md:gap-10">
          <div className="w-[100px] md:w-[200px]">
            <Image
              src={`/image/not.png`}
              width={500}
              height={500}
              alt="page not found"
              className="w-full"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col items-center md:leading-[60px]">
              <h1 className=" text-[50px] md:text-[100px] font-[900] text-[#123E6C]">
                404
              </h1>
              <span className="text-[900] text-[#123E6C] text-[20px]">
                Page not found
              </span>
            </div>
            <span className="text-[20px] text-[#353535] max-w-[300px] text-center">
              Sorry ,we could not find page you are looking for
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
