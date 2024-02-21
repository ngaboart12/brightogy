import React from "react";
import LinkComponent from "../../components/LinkComponet";
import Navbar from "../../components/Navbar";

import Image from "next/image";
import Footer from "components/Landing/Footer";


const Duolingo = () => {
  const data = [
    {
      name: "Score Validity: 2 years",
    },
    {
      name: "Score Reporting: Unlimited free reporting",
    },
    {
      name: "Registration Mode: Online",
    },
    {
      name: "Official Website: www.englishtest.duolingo.com",
    },
    {
      name: "Mode of payment: Debit Card/ Credit Card",
    },
    {
      name: "Test Administration Frequency: Anytime",
    },
    {
      name: "Test Fee: $ 57 USD",
    },
    {
      name: "Test Repetition Policy:Anytime",
    },
    {
      name: "Nature of Test: Computer Based Test",
    },
    {
      name: "Extra Score Reporting Fee: No fee",
    },
  ];

  return (
    <div className="flex flex-col items-center  w-full overflow-hidden bg-white relative">
      {/* <LinkComponent /> */}
      <Navbar />

      {/* hero */}
      <div className="flex px-[20px] md:px-20 lg:px-40 gap-10 flex-col md:flex-row w-full max-w-7xl py-10">
        <div className="w-full md:w-1/2 p-2">
          <Image
            src={`/image/duolingo.png`}
            width={600}
            height={0}
            alt=""
            className="w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex flex-col gap-4 text-center md:text-start">
            <h1 className="text-[18px] font-[700] text-blueBack">
              Duolingo English Test
            </h1>
            <p className="text-[16px] text-[#4D4D4D] font-[300] leading-5 ">
              Duolingo English Test is a computer based English proficiency test
              which assesses the test taker’s Listening, Reading, Writing and
              Speaking skills. The test is administered using computer adaptive
              technology, meaning that the question difficulty adapts to each
              test taker. The test also integrates a video interview and writing
              sample, which are not graded, but are sent to the institution
              along with your proficiency score when you report your results.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <div className="h-[60px] md:h-full w-2 bg-[#FFA800]"></div>
            <div className="">
              <p className="text-[16px] text-[#4D4D4D] font-[300] leading-5">
                Test Format <br />
                The total duration of Duolingo English Test is 60 minutes,
                divided into three parts. Questions are not in chronological
                order, you can get a question related to any module anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* sections */}
      <div className="w:full px-[20px] md:px-[179px] max-w-7xl  pt-[45px] pb-[67px] bg-blueBack flex-col justify-start items-center gap-[35px] inline-flex mt-10">
        <div className="text-amber-500 text-[32px] font-bold ">Sections</div>
        <div className="self-stretch flex-col justify-start items-center gap-6 inline-flex">
          <div className="justify-start items-start gap-[27px] flex flex-col lg:flex-row">
            <div className="  pl-[38px] pr-[27px] pt-8 pb-[39px] bg-[#2182C6] justify-end items-center flex">
              <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex">
                <div className="text-white text-xl font-bold ">
                  Quick Setup :
                </div>
                <div className="max-w-[496px] text-white text-lg font-normal ">
                  Introduction of the exam, along with the rules and
                  regulations. It also includes checking the function of
                  cameras, Speakers & Microphones and submission of important
                  documents.
                </div>
                <div className="text-amber-500 text-lg font-normal ">
                  To be answered in 5 minutes
                </div>
              </div>
            </div>
            <div className="px-[46px] pt-8 pb-[39px] bg-[#2182C6] justify-center items-center flex">
              <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex">
                <div className="text-white text-xl font-bold ">
                  Adaptive Test :
                </div>
                <div className="max-w-[469px] text-white text-lg font-normal ">
                  Includes a variety of questions related to all the 4 modules-
                  Reading, Listening, Writing and Speaking. The questions appear
                  randomly.
                </div>
                <div className="text-amber-500 text-lg font-normal ">
                  To be answered in 45 minutes
                </div>
              </div>
            </div>
          </div>
          <div className="pl-[43px] pr-[22px] pt-[47px] pb-12 bg-[#2182C6] justify-end items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-[157px] h-6 text-white text-xl font-bold ">
                Video Interview :
              </div>
              <div className="max-w-[496px] text-white text-lg font-normal ">
                This part is not assessed, but the reporting institution
                receives it along with your scores.
              </div>
              <div className="text-amber-500 text-lg font-normal ">
                To be answered in 10 minutes
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* scoring */}
      <div className="w-full px-[20px]   md:px-20 lg:px-40 py-20  justify-start items-start gap-20 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 text-center md:text-start text-sky-950 text-[32px] font-bold ">
          Scoring
        </div>
        <div className="  text-neutral-700 text-lg font-normal text-center md:text-start">
          Duolingo English Test is graded out of 160 in 5-point increments. The
          result is available in 2 days. Generally, 115 is considered to be a
          good score. Test results include an overall score as well as subscores
          of Literacy, Conversation, Comprehension, and Production. Where
          Literacy represents the test taker’s ability to read and write;
          Comprehension represents the test taker’s ability to read and listen;
          Conversation represents the test taker’s ability to listen and speak;
          and Production represents the test taker’s ability to write and speak.
          The test result certificates includes “score range” which represents
          the standard error of measurement (SEM). The SEM represents a range of
          scores within which a test taker’s true score lies. The overall score
          is no
        </div>
      </div>

      {/* miscellaneous */}
      <div className="flex flex-col gap-10 w-full items-center justify-center px-[20px] md:px-20">
        <div className="text-sky-950 text-[32px] font-bold ">Miscellaneous</div>
        <div className="grid grid-cols-2 gap-y-10 gap-x-10">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <span className="text-[14px] font-blueBack text-black">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-40 w-full items-center">
        <div className="flex flex-col gap-6 w-full bg-blueBack py-10 px-[20px] md:px-20 lg:px-40 items-center">
          <h1 className="text-[#FFA800] text-[24px] font-[600]">
            Frequently Asked Question
          </h1>
          <div className="flex w-full flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <div className="p-3 w-full bg-blueFore rounded-md flex flex-row justify-between items-center">
                <span className="max-w-[60%] text-[14px] text-white">
                  Can international students work part-time in Poland while they
                  are in their studies?
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="p-3 w-full bg-blueFore rounded-md flex flex-row justify-between items-center">
                <span className="max-w-[60%] text-[14px] text-white">
                  Do I have to speak Polish?
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="p-3 w-full bg-blueFore rounded-md flex flex-row justify-between items-center">
                <span className="max-w-[60%] text-[14px] text-white">
                  How can you explore a Polish city?
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="p-3 w-full bg-blueFore rounded-md flex flex-row justify-between items-center">
                <span className="max-w-[60%] text-[14px] text-white">
                  How can you explore a Polish city?
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <span className="text-white font-[300] text-[14px]">
                Yes, international students can work in Poland while attending
                their college studies. Non-EU students can work 20 hours maximum
                in a week. Once your study program is completed at a Polish
                university, the conditions change, and you will be required to
                obtain stay-back permits.
              </span>
            </div>
          </div>
          <div className="  justify-start items-center gap-[98px] flex flex-col">
            <div className="justify-start items-start flex">
              <div className="w-[152px] h-[7px] bg-[#2182C6]" />
              <div className="w-[151px] h-[7px] bg-[#256494]" />
            </div>
            <div className="justify-start items-start gap-6 flex">
              <div className="w-10 h-10 p-2 bg-[#2182C6] rounded-lg justify-center items-center flex">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0303 4.46967C16.2966 4.73594 16.3208 5.1526 16.1029 5.44621L16.0303 5.53033L9.561 12L16.0303 18.4697C16.2966 18.7359 16.3208 19.1526 16.1029 19.4462L16.0303 19.5303C15.7641 19.7966 15.3474 19.8208 15.0538 19.6029L14.9697 19.5303L7.96967 12.5303C7.7034 12.2641 7.6792 11.8474 7.89705 11.5538L7.96967 11.4697L14.9697 4.46967C15.2626 4.17678 15.7374 4.17678 16.0303 4.46967Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="w-10 h-10 p-2 bg-[#2182C6] rounded-lg justify-center items-center flex">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer/>
    </div>
  );
};

export default Duolingo;
