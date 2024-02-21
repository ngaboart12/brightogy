import React from "react";
import Navbar from "../../components/Navbar";
import LinkComponent from "../../components/LinkComponet";

import Footer from "../../components/Landing/Footer";
import Image from "next/image";

const SpecialOffers = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10  w-full">
      <LinkComponent />
      <Navbar />
      {/* heders */}
      <div class="w-[90%]  px-[20px] md:px-40    pt-9 pb-[37px] bg-slate-50 rounded-3xl justify-center items-center inline-flex">
        <div class="self-stretch flex-col  items-center gap-[17px] inline-flex">
          <div class=" py-3 px-4 bg-orange-100 rounded-[14px] justify-center items-center inline-flex">
            <div class="text-amber-500 md:text-xl font-medium ">
              Study & Work
            </div>
          </div>
          <div class="text-sky-900 text-[16px] md:text-[30px] font-bold ">
            {" "}
            Full-Scholarships
          </div>
        </div>
      </div>

      {/* hero */}
      <div class="max-w-7xl w-full md:px-20 px-[20px] flex-col justify-start items-start gap-10 inline-flex">
        <div class="flex-col justify-start items-center md:items-start gap-6 flex">
          <div class="flex-col justify-start items-start gap-6 flex">
            <div class="w-[65px] h-2 bg-amber-500"></div>
          </div>
          <div class="justify-start items-center md:items-start gap-[100px] flex flex-col md:flex-row">
            <div class="max-w-[517px] text-center md:text-start text-sky-900 text-[32px] font-semibold ">
              Why Choose this offer
            </div>
            <div class="max-w-[584px] md:pl-24 text-center md:text-start text-black text-2xl font-normal ">
              For non-EU students scholarships are granted as from 2nd year of
            </div>
          </div>
        </div>
        <div class="justify-start items-center gap-[50px] flex flex-col md:flex-row">
          <div className="max-w-[472px] h-[250px]">
            <Image
              class=""
              className="w-full h-full object-cover"
              src={`/image/special.png`}
              width={500}
              height={500}
            />
          </div>

          <div class="flex-col justify-start items-start gap-6 inline-flex">
            <div>
              <span className="text-black text-xl font-medium ">
                Scholarships
              </span>
              <span className="text-black text-2xl font-bold "> </span>
              <span className="text-black text-2xl font-medium ">include:</span>
            </div>
            <div class="justify-start items-start gap-6 flex flex-col sm:flex-row">
              <div class="flex-col justify-start items-start gap-4 inline-flex">
                <div class="justify-start items-center gap-4 inline-flex">
                  <div class="h-8 py-1.5  rounded-lg justify-center items-center flex">
                    <div class="text-sky-900 text-base font-normal ">1</div>
                  </div>
                  <div class="max-[250px] text-neutral-700 text-[14px] font-normal ">
                    Full coverage of the annual tuition fees
                  </div>
                </div>
                <div class="justify-start items-center gap-4 inline-flex">
                  <div class="h-8 pl-[13px] pr-2.5 py-1.5  rounded-lg justify-center items-center flex">
                    <div class="text-sky-900 text-base font-normal ">2</div>
                  </div>
                  <div class="max-w-[250px] text-neutral-700 text-[14px] font-normal ">
                    Accommodation in employee dormitories
                  </div>
                </div>
                <div class="justify-start items-center gap-4 inline-flex">
                  <div class="h-8 pl-[13px] pr-2.5 py-1.5  rounded-lg justify-center items-center flex">
                    <div class="text-sky-900 text-base font-normal ">3</div>
                  </div>
                  <div class="text-neutral-700 text-[14px] font-normal ">
                    Practice / Internship /Work
                  </div>
                </div>
                <div class="justify-start items-center gap-4 inline-flex">
                  <div class="h-8 pl-[13px] pr-[9px] py-1.5  rounded-lg justify-end items-center flex">
                    <div class="text-sky-900 text-base font-normal ">4</div>
                  </div>
                  <div class="text-neutral-700 text-[14px] font-normal ">
                    Two meals daily
                  </div>
                </div>
              </div>
              <div class="flex-col justify-start items-start gap-4 inline-flex">
                <div class="justify-start items-center gap-4 inline-flex">
                  <div class="h-8 pl-[13px] pr-2.5 py-1.5  rounded-lg justify-center items-center flex">
                    <div class="text-sky-900 text-base font-normal ">5</div>
                  </div>
                  <div class="max-w-[250px] text-neutral-700 text-[14px] font-normal ">
                    Monthly pocket money from €300
                  </div>
                </div>
                <div class="justify-start items-center gap-4 inline-flex">
                  <div class="h-8 pl-[13px] pr-[9px] py-1.5 bg-blue-50 rounded-lg justify-end items-center flex">
                    <div class="text-sky-900 text-base font-normal ">6</div>
                  </div>
                  <div class="max-w-[250px] text-neutral-700 text-[14px] font-normal ">
                    Medical care (National Health System)
                  </div>
                </div>
                <div class="justify-start items-center gap-4 inline-flex">
                  <div class="h-8 pl-[13px] pr-2.5 py-1.5 bg-blue-50 rounded-lg justify-center items-center flex">
                    <div class="text-sky-900 text-base font-normal ">7</div>
                  </div>
                  <div class="max-w-[250px] text-neutral-700 text-[14px] font-normal ">
                    Full employment (4-year work permit) upon graduation Other
                    benefits
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* academic program */}
      <div class="max-w-7xl w-full  px-[20px] md:px-40 py-20  flex-col justify-start items-center gap-8 inline-flex">
        <div class="flex-col justify-start items-center gap-4 flex">
          <div class="w-[65px] h-2 bg-amber-500"></div>
          <div class="text-sky-900 text-[24px] md:text-[40px] font-bold ">
            Academic Programs of Study:
          </div>
        </div>
        <div class=" gap-x-20 gap-y-10 grid grid-cols-1 md::grid-cols-2 lg:grid-cols-4">
          <div class="pl-[6px] pr-[6px] max-w-[200px]  pb-7  justify-start items-center flex">
            <div class="self-stretch flex-col justify-start items-start gap-2 inline-flex">
              <div class=" text-sky-900 text-mds font-semibold ">
                Hotel, Casino & Resort Management
              </div>
              <div class="text-neutral-500 text-base font-normal ">
                4 years bachelor’s degree
              </div>
            </div>
          </div>
          <div class="pl-[6px] pr-[6px]  max-w-[200px]   justify-center items-center flex">
            <div class="self-stretch flex-col justify-start items-start gap-2 inline-flex">
              <div class=" text-sky-900 text-md font-semibold ">
                Hotel Management
              </div>
              <div class="text-neutral-500 text-base font-normal ">
                3 years higher diploma
              </div>
            </div>
          </div>
          <div class="pl-[6px] pr-[6px] max-w-[200px]   justify-center items-center flex">
            <div class="self-stretch flex-col justify-start items-start gap-2 inline-flex">
              <div class=" text-sky-900 text-md font-semibold ">
                Business Administration (hospitality direction)
              </div>
              <div class="text-neutral-500 text-md font-normal ">
                4 years bachelor’s degree
              </div>
            </div>
          </div>
          <div class="pl-[6px] pr-[6px] max-w-[200px]  pb-6  justify-center items-center flex">
            <div class="self-stretch flex-col justify-start items-start gap-2 inline-flex">
              <div class=" text-sky-900 text-md font-medium ">
                Hospitality Operations Management
              </div>
              <div class="text-stone-500 text-md font-normal ">
                {" "}
                2 years diploma
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* language requiremet */}
      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full px-[20px] md:px-40 gap-x-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-[24px] text-center sm:text-start text-[#123E6C] font-[600]">
            Password Skills Test Plus
          </h1>
          <p className="text-[16px] text-[#545454] text-center sm:text-start">
            Currently valid version of previously Password English Test exam
            with minimum grade required at 5.5.
          </p>
          <span className="text-[14px] text-[#545454] px-4 text-center sm:text-start">
            Results given within 3, max. 5 working days. Cost: €95.
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[24px] text-center sm:text-start text-[#123E6C] font-[600]">
            Anglia Examinations – Intermediate
          </h1>
          <p className="text-[16px] text-[#545454] text-center sm:text-start">
            The results are published and distributed to the schools/candidates
            4 weeks after the exam date
          </p>
          <span className="text-[14px] text-[#545454] px-4 text-center sm:text-start">
            The current exam fee for the paper-based Intermediate (B1) writing
            exam is €65 and €35 for the oral exam (optional)
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[24px] text-[#123E6C] font-[600] text-center sm:text-start">
              IELTS
            </h1>
            <p className="text-[16px] text-[#545454] text-center sm:text-start">
              International English Language Testing System
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[24px] text-[#123E6C] sm:text-start text-center font-[600]">
              IELTS
            </h1>
            <p className="text-[16px] text-center sm:text-start text-[#545454]">
              Test of English as a Foreign Language
            </p>
          </div>
        </div>
      </div>

      {/* addmission requirement  */}
      <div className="flex px-[20px] md:px-40 flex-col gap-4 py-10 w-full max-w-7xl items-center">
        <div class="text-center text-sky-900 text-[20px] md:text-[40px] font-bold ">
          Admission requirements
          <br />
          Steps
        </div>
        <div class="w-full ] flex-col justify-start items-center gap-[34px] inline-flex">
          <div class="pl-14 pr-[57px] pt-[11px] pb-3 bg-orange-100 rounded-lg justify-center items-center inline-flex">
            <div class="text-amber-500 text-xl font-medium ">Step ONE</div>
          </div>
          <div class="max-w-[511px] text-center text-sky-900 text-2xl font-semibold ">
            Student applies for admission to an academic program by submitting
          </div>
          <div class="justify-start md:items-start gap-8 flex flex-col md:flex-row items-center">
            <div class="w-full md:w-1/2 flex-col justify-start items-start gap-6 inline-flex">
              <div class="flex-col justify-start items-start gap-4 flex">
                <div class="justify-start items-start gap-2 inline-flex">
                  <div class="justify-start items-start gap-2 flex">
                    <div class="w-[30px] text-black text-lg font-normal ">
                      A
                    </div>
                  </div>
                  <div class="flex-col justify-start items-start gap-2 inline-flex">
                    <div class="max-w-[364px] text-black text-lg font-medium ">
                      The Application Form
                    </div>
                    <div class="max-w-[364px] text-zinc-600 text-lg font-normal ">
                      Applicants should come to our office to pick up the form
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-col justify-start items-start gap-4 flex">
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-start items-start gap-2 flex">
                    <div class="w-[30px] text-black text-lg font-normal ">
                      B
                    </div>
                  </div>
                  <div class="max-w-[364px] text-black text-lg font-normal ">
                    Copy of passport
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2  flex-col justify-start items-start gap-4 inline-flex">
              <div class="flex-col justify-start items-start gap-4 flex">
                <div class="justify-start items-start gap-2 inline-flex">
                  <div class="justify-start items-start gap-2 flex">
                    <div class="w-[30px] text-black text-lg font-normal ">
                      C
                    </div>
                  </div>
                  <div class="flex-col justify-start items-start gap-2 inline-flex">
                    <div class="max-w-[364px] text-black text-lg font-medium ">
                      Copy of Higher Secondary School Certificate
                    </div>
                    <div class="max-w-[364px] text-zinc-600 text-lg font-normal ">
                      Marks Sheet with minimum grade 50/100)
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-col justify-start items-start gap-4 flex">
                <div class="justify-start items-start gap-2 inline-flex">
                  <div class="justify-start items-start gap-2 flex">
                    <div class="w-[30px] text-black text-lg font-normal ">
                      D
                    </div>
                  </div>
                  <div class="flex-col justify-start items-start gap-2 inline-flex">
                    <div class="max-w-[395px] text-black text-lg font-medium ">
                      Copy of English Language Certificate if available
                    </div>
                    <div class="max-w-[364px] text-zinc-600 text-lg font-normal ">
                      e.g., IELTS or Password Test or equivalent, as attached
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* admiision requirement setp 2 */}
      <div className="flex  flex-col gap-6 w-full items-center max-w-7xl py-10 px-[20px] md:px-40">
        <div className="w-[200px] h-12 pl-14 pr-12 pt-[11px] pb-3 bg-orange-100 rounded-lg justify-end items-center inline-flex">
          <div className="text-amber-500 text-xl font-medium ">Step TWO</div>
        </div>

        <span className="max-w-[800px] text-[20px] text-[#123E6C] font-[600] text-center ">
          Once the Unconditional Acceptance Letter is granted, student should
          prepare and attest the following documents, which are required to
          apply to Migration Department in Cyprus for
        </span>

        <div className="flex flex-col gap-8 py-10">
          <h1 className="text-center text-sky-900 text-2xl font-semibold ">
            Entry Permit (student visa)
          </h1>
          <span className="text-black text-[20px] font-[400] text-center">
            Required documents:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="flex  flex-col gap-4 bg-[#F4F9FF] p-4 rounded-md">
              <span className="h-[20vh] text-[18px] text-[#123E6C]">
                Duly certified copy of passport or other travel document, with a
                validity of: at least two years
              </span>
              <div className="px-4">
                <span>
                  The shortest period of validity of any of the above mentioned
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#F4F9FF] p-4 rounded-md">
              <span className="h-[20vh] text-[16px] text-[#123E6C]">
                Duly certified original confirmation letter from a Banking
                Institution in his country of residence and bank statements with
                the ending balance of at least €7000
              </span>
              <div className="px-4">
                <span>(valid for 6 months).</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#F4F9FF] p-4 rounded-md">
              <span className=" h-[20vh] text-[18px] text-[#123E6C]">
                Duly certified original police clearance certificate (valid for
                6 months) from the official authorities of the country of
                residence with official translation in Greek or English.
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 w-full">
            <div className="p-4 flex flex-col gap-4 rounded-md bg-[#F4F9FF] w-full md:w-1/2">
              <h1 className="text-[16px] text-[#123E6C]">
                Duly certified original medical examinations for:
              </h1>
              <div className="flex flex-row gap-8">
                <div className="flex flex-col g">
                  <span className="text-[16px] text-[#545454]">
                    HBV or HBsAg or HBS
                  </span>
                  <span className="text-[16px] text-[#545454]">
                    HCV or Anti HCV
                  </span>
                </div>
                <div className="flex flex-col g">
                  <span className="text-[16px] text-[#545454]">AIDS – HIV</span>
                  <span className="text-[16px] text-[#545454]">
                    VDRL or RPR
                  </span>
                </div>
              </div>

              <h1 className="text-[16px] text-[#545454]">
                X-rays or TPHA or Tuberculosis (valid for 4 months) from country
                of origin with validity of four months
              </h1>
            </div>

            <div className="p-4 flex flex-col gap-4 rounded-md bg-[#F4F9FF] w-full md:w-1/2">
              <h1 className="text-[16px] text-[#123E6C]">
                Duly certified copy of secondary school and higher secondary
                school certificates including mark sheet.
              </h1>
              <h1 className="text-[16px] text-[#123E6C]">
                Duly certified copy of certificate of success in examinations
                IELTS or other equivalent English Language Certificate (i.e.,
                IGCSE, TOEFL, Password Test etc.), to certify the ability of the
                candidate students to study academic level courses in English
                language.
              </h1>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-md bg-[#F4F9FF]">
              <h1 className="text-[14px] font-[600] text-[#123E6C]">
                Receipt of payment of registration fees to the Educational
                Institution. Arrange for the bank transferof the amount showing
                on acceptance letter to the College account on student’s name
                (and passport number).
              </h1>
            </div>
            <div className="flex items-center justify-center flex-col sm:flex-row p-4 bg-[#F4F9FF] rounded-md ">
              <div>
                <svg
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.0006 4.83325C15.6843 4.83325 4.83398 15.6836 4.83398 28.9999C4.83398 42.3162 15.6843 53.1666 29.0006 53.1666C42.317 53.1666 53.1673 42.3162 53.1673 28.9999C53.1673 15.6836 42.317 4.83325 29.0006 4.83325ZM27.0279 20.369C27.0279 19.3826 27.7677 18.3962 29.0006 18.3962C30.2336 18.3962 30.9734 19.136 30.9734 20.369V30.2329C30.9734 31.2194 30.2336 32.2056 29.0006 32.2056C27.7677 32.2056 27.0279 31.4659 27.0279 30.2329V20.369ZM29.0006 40.0968C27.7677 40.0968 26.5347 38.8638 26.5347 37.6308C26.5347 36.3978 27.7677 35.1648 29.0006 35.1648C30.2336 35.1648 31.4666 36.3978 31.4666 37.6308C31.4666 38.8638 30.2336 40.0968 29.0006 40.0968Z"
                    fill="#123E6C"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[14px] text-[#123E6C] font-[600]">
                  Declaration for “No reason exists for applying political
                  asylum after arrival to Cyprus” letter.
                </h1>
                <h1 className="text-[14px] text-[#123E6C] font-[600]">
                  Declaration for “No reason exists for applying political
                  asylum after arrival to Cyprus” letter.
                </h1>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col sm:flex-row p-4 bg-[#F4F9FF] rounded-md ">
              <h1 className="text-[14px] font-[600] text-[#123E6C]">
                Once all required attested documents are sent to School, Office
                of Student Affairs prepares and submits the M58 Application for
                Entry Permit (student visa).
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* admiision requirement setp 3 */}
      <div className="flex  flex-col gap-6 w-full items-center max-w-7xl py-10 px-[20px] md:px-40">
        <div className="w-[200px] h-12 pl-14 pr-[43px] pt-[11px] pb-3 bg-orange-100 rounded-lg justify-end items-center inline-flex">
          <span className="text-amber-500 text-xl font-medium ">
            Step Three
          </span>
        </div>

        <span className="max-w-[800px] font-[600] text-[20px] text-[#123E6C]  text-center ">
          Once the Entry Permit is received, our Office of Student Affairs sends
          a copy to the student, who should book his/her flight ticket to
          Cyprus. After arrival student will be taken to local Migration
          Department for registration and student ID card.
        </span>

        <span className="text-[20px] text-[#123E6C] font-[600] ">
          About Payment:
        </span>

        <div className="flex flex-col items-center sm:items-start sm:flex-row gap-10 py-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-black text-[20px] font-[600]">Accommodation</h1>
            <span className=" max-w-[300px] text-black text-[18px] font-[600]">
              250 Euro-325 Euro Including Cleaning fees (Monthly)
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-black text-[20px] font-[600]">Accommodation</h1>
            <span className=" max-w-[300px] text-black text-[16px] font-[600]">
              - Tuition fee paid 4000Euro via transfer
            </span>
            <span className=" max-w-[300px] text-black text-[16px] font-[600]">
              - 1000 Euros upon arrival at school
            </span>
          </div>
        </div>
      </div>

      {/* footer */}

      <Footer />
    </div>
  );
};

export default SpecialOffers;
