import React from "react";
import Image from "next/image";
import LinkComponent from "../../components/LinkComponet";
import Navbar from "../../components/Navbar";
import Parteners from "../../components/Parteners";
import Footer from "../../components/Footer";

const Toefl = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-full bg-gray-100">
      <LinkComponent />
      <Navbar />

      {/* hero */}
      <div className="w-full max-w-7xl flex flex-col gap-10 px-[20px] sm:px-10 lg:px-40 py-10">
        <div className="w-full flex flex-col md:flex-row  justify-between ">
          <div className="flex w-full md:w-1/2 flex-col gap-4 items-center md:items-start">
            <h1 className="text-[#123E6C] text-[36px] font-[600]">
              TOEFL Training
            </h1>
            <span className="text-[#3D3D3D] text-[16px] font-[400]">
              Test Of English As A Foreign Language)
            </span>
          </div>
          <div className="flex w-full md:w-1/2 text-center md:text-start py-4 md:py-0">
            <span className="text-[#3D3D3D] text-[16px] font-[400]">
              TOEFL is a test of English proficiency and is taken by students
              who plan to study abroad and also those who seek to immigrate to
              English-speaking countries. It is the most widely accepted test
              across the world.
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col  md:flex-row gap-10 justify-between">
          <div className="flex w-full md:w-1/2 flex-col gap-4 items-center md:items-start py-4">
            <Image
              src={`/image/toefl.png`}
              width={400}
              height={100}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-1/2">
            <h1 className="text-[24px] font-[#173F69] font-[600]">
              Features of TOEFL
            </h1>
            <div className="flex flex-row gap-2 items-center">
              <div>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="30" height="29" rx="8" fill="#E0EFFF" />
                  <path
                    d="M14.184 20V10.116H16.368V20H14.184ZM12.28 11.978V10.116H16.228V11.978H12.28Z"
                    fill="#07294D"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-[#707070]">
                There are no minimum passing marks for the test. However, each
                university will have its required score for the test.
              </span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="30" height="29" rx="8" fill="#E0EFFF" />
                  <path
                    d="M12.336 18.768L16.13 14.848C16.3633 14.6147 16.55 14.4 16.69 14.204C16.83 14.008 16.9327 13.826 16.998 13.658C17.0633 13.4807 17.096 13.3033 17.096 13.126C17.096 12.7433 16.97 12.4447 16.718 12.23C16.4753 12.006 16.1533 11.894 15.752 11.894C15.36 11.894 15.0053 12.0013 14.688 12.216C14.38 12.4213 14.0813 12.762 13.792 13.238L12.322 11.964C12.714 11.3013 13.2133 10.802 13.82 10.466C14.4267 10.13 15.122 9.962 15.906 9.962C16.5873 9.962 17.1753 10.088 17.67 10.34C18.174 10.592 18.5613 10.9513 18.832 11.418C19.112 11.8847 19.252 12.4307 19.252 13.056C19.252 13.448 19.2007 13.812 19.098 14.148C18.9953 14.4747 18.8273 14.8013 18.594 15.128C18.37 15.4453 18.0667 15.7953 17.684 16.178L15.052 18.796L12.336 18.768ZM12.336 20V18.768L14.198 18.124H19.448V20H12.336Z"
                    fill="#07294D"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-[#707070]">
                The TOEFL is used for determining eligibility for admission and
                scholarship.
              </span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="30" height="29" rx="8" fill="#E0EFFF" />
                  <path
                    d="M15.542 20.154C14.8607 20.154 14.2353 20.0373 13.666 19.804C13.0967 19.5613 12.616 19.216 12.224 18.768L13.638 17.354C13.8153 17.6153 14.072 17.83 14.408 17.998C14.7533 18.1567 15.1173 18.236 15.5 18.236C15.8453 18.236 16.144 18.1753 16.396 18.054C16.648 17.9327 16.844 17.76 16.984 17.536C17.1333 17.312 17.208 17.046 17.208 16.738C17.208 16.43 17.1333 16.1687 16.984 15.954C16.844 15.73 16.634 15.5573 16.354 15.436C16.0833 15.3147 15.7567 15.254 15.374 15.254C15.1967 15.254 15.01 15.268 14.814 15.296C14.6273 15.3147 14.4687 15.3473 14.338 15.394L15.304 14.176C15.5653 14.1013 15.8127 14.0407 16.046 13.994C16.2887 13.938 16.5127 13.91 16.718 13.91C17.222 13.91 17.6747 14.0313 18.076 14.274C18.4773 14.5073 18.7947 14.8433 19.028 15.282C19.2707 15.7113 19.392 16.2247 19.392 16.822C19.392 17.4753 19.2287 18.054 18.902 18.558C18.5847 19.062 18.1367 19.454 17.558 19.734C16.9887 20.014 16.3167 20.154 15.542 20.154ZM14.338 15.394V14.176L16.746 11.348L19.21 11.334L16.704 14.19L14.338 15.394ZM12.84 11.978V10.116H19.21V11.334L17.488 11.978H12.84Z"
                    fill="#07294D"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-[#707070]">
                You will be assessed for your English language skills at
                listening, reading, and writing.
              </span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="30" height="29" rx="8" fill="#E0EFFF" />
                  <path
                    d="M12.294 16.57L15.542 10.116H17.936L14.618 16.57H12.294ZM12.294 17.802V16.57L13.022 15.94H20.218V17.802H12.294ZM16.956 20V13.882H19.112V20H16.956Z"
                    fill="#07294D"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-[#707070]">
                The total time for taking the test is around four and a half
                hours including the time for checking in?
              </span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="30" height="29" rx="8" fill="#E0EFFF" />
                  <path
                    d="M15.556 20.154C14.8747 20.154 14.2353 20.0373 13.638 19.804C13.05 19.5613 12.56 19.216 12.168 18.768L13.596 17.354C13.7733 17.6153 14.03 17.83 14.366 17.998C14.7113 18.1567 15.0847 18.236 15.486 18.236C15.8407 18.236 16.1487 18.1753 16.41 18.054C16.6713 17.9233 16.8767 17.7413 17.026 17.508C17.1753 17.2653 17.25 16.9853 17.25 16.668C17.25 16.3413 17.1753 16.0613 17.026 15.828C16.8767 15.5947 16.6667 15.4173 16.396 15.296C16.1347 15.1653 15.836 15.1 15.5 15.1C15.164 15.1 14.856 15.1467 14.576 15.24C14.296 15.324 14.0393 15.4547 13.806 15.632L13.988 14.232C14.2027 14.064 14.408 13.9287 14.604 13.826C14.8 13.714 15.0147 13.63 15.248 13.574C15.4813 13.518 15.7567 13.49 16.074 13.49C16.802 13.49 17.4133 13.6393 17.908 13.938C18.412 14.2367 18.79 14.6333 19.042 15.128C19.3033 15.6227 19.434 16.1687 19.434 16.766C19.434 17.4193 19.2707 18.0027 18.944 18.516C18.6267 19.0293 18.1787 19.4307 17.6 19.72C17.0213 20.0093 16.34 20.154 15.556 20.154ZM13.806 15.632L12.854 14.75L13.33 10.116H15.318L14.8 14.708L13.806 15.632ZM13.624 11.978L13.33 10.116H18.888V11.978H13.624Z"
                    fill="#07294D"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-[#707070]">
                A break of 10 minutes will be given to students after they
                complete the Reading and Listening Sections of TOEFL
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* What are the section in toefl */}
      <div className="w-full max-w-7xl px-[10px] sm:px-10 lg:px-40 items-center py-10">
        <div className="w-full px-4 py-10 md:p-10 flex rounded-lg items-center flex-col gap-6 bg-[#07294D]">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-[#FFA800] text-[24px] font-[600] text-center md:text-start">
              What are the sections in TOEFL?
            </h1>
            <span className="text-white font-[600] text-center md:text-start">
              TOEFL examination is divided into the following four sections
            </span>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 py-10">
            <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
              <div>
                <svg
                  width="46"
                  height="45"
                  viewBox="0 0 46 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="46" height="45" rx="8" fill="#0A3563" />
                  <path
                    d="M22.808 29.5V16.792H25.616V29.5H22.808ZM20.36 19.186V16.792H25.436V19.186H20.36Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[16px] text-[#FFA800] text-center md:text-start">
                  Reading
                </span>
                <span className="text-white text-[14px] font-[200] text-center md:text-start ">
                  The Reading section lasts for 60 to 80 minutes and comprises
                  three or four passages taken from various fiction and
                  non-fiction sources which are followed by questions that test
                  your comprehension. It is important to know how to manage your
                  time and answer the questions after understanding the text. It
                  is important to take proper TOEFL training in order to attain
                  the skill required for this section.
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
              <div>
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="46" height="45" rx="8" fill="#0A3563" />
                  <path
                    d="M20.432 28.416L25.31 23.376C25.61 23.076 25.85 22.8 26.03 22.548C26.21 22.296 26.342 22.062 26.426 21.846C26.51 21.618 26.552 21.39 26.552 21.162C26.552 20.67 26.39 20.286 26.066 20.01C25.754 19.722 25.34 19.578 24.824 19.578C24.32 19.578 23.864 19.716 23.456 19.992C23.06 20.256 22.676 20.694 22.304 21.306L20.414 19.668C20.918 18.816 21.56 18.174 22.34 17.742C23.12 17.31 24.014 17.094 25.022 17.094C25.898 17.094 26.654 17.256 27.29 17.58C27.938 17.904 28.436 18.366 28.784 18.966C29.144 19.566 29.324 20.268 29.324 21.072C29.324 21.576 29.258 22.044 29.126 22.476C28.994 22.896 28.778 23.316 28.478 23.736C28.19 24.144 27.8 24.594 27.308 25.086L23.924 28.452L20.432 28.416ZM20.432 30V28.416L22.826 27.588H29.576V30H20.432Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[16px] text-[#FFA800] text-center md:text-start">
                  Listening
                </span>
                <span className="text-white text-[14px] font-[200] text-center md:text-start ">
                  The listening section lasts for 60 to 90 minutes and
                  test-takers need to listen to discussions, seminars, lectures
                  and then answer the questions given in the listening sheet.
                  This section of the text will require you to listen to a lot
                  of matters and at the same time understand the accent and
                  answer accordingly. Our expert faculty at our TOEFL classes
                  will provide you with enough practice sessions to give you
                  confidence and boost your score in this section. 3. Speaking
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
              <div>
                <svg
                  width="46"
                  height="45"
                  viewBox="0 0 46 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="46" height="45" rx="8" fill="#0A3563" />
                  <path
                    d="M20.378 25.09L24.554 16.792H27.632L23.366 25.09H20.378ZM20.378 26.674V25.09L21.314 24.28H30.566V26.674H20.378ZM26.372 29.5V21.634H29.144V29.5H26.372Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[16px] text-[#FFA800] text-center md:text-start">
                  Speaking
                </span>
                <span className="text-white text-[14px] font-[200] text-center md:text-start ">
                  Speaking Section in the TOEFL which is of 20 minutes in
                  duration comprises six tasks. Two of the tasks will include
                  answering questions asked in native English voice and
                  answering the questions about what they have heard. The
                  questioner takes around 15 minutes to ask the question and you
                  will have forty-five minutes to answer the question. The
                  speaking section of the TOEFL exam tests the students on their
                  listening and reading skills as well as their speaking skills
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
              <div>
                <svg
                  width="46"
                  height="45"
                  viewBox="0 0 46 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="46" height="45" rx="8" fill="#0A3563" />
                  <path
                    d="M24.572 29.698C23.696 29.698 22.874 29.548 22.106 29.248C21.35 28.936 20.72 28.492 20.216 27.916L22.052 26.098C22.28 26.434 22.61 26.71 23.042 26.926C23.486 27.13 23.966 27.232 24.482 27.232C24.938 27.232 25.334 27.154 25.67 26.998C26.006 26.83 26.27 26.596 26.462 26.296C26.654 25.984 26.75 25.624 26.75 25.216C26.75 24.796 26.654 24.436 26.462 24.136C26.27 23.836 26 23.608 25.652 23.452C25.316 23.284 24.932 23.2 24.5 23.2C24.068 23.2 23.672 23.26 23.312 23.38C22.952 23.488 22.622 23.656 22.322 23.884L22.556 22.084C22.832 21.868 23.096 21.694 23.348 21.562C23.6 21.418 23.876 21.31 24.176 21.238C24.476 21.166 24.83 21.13 25.238 21.13C26.174 21.13 26.96 21.322 27.596 21.706C28.244 22.09 28.73 22.6 29.054 23.236C29.39 23.872 29.558 24.574 29.558 25.342C29.558 26.182 29.348 26.932 28.928 27.592C28.52 28.252 27.944 28.768 27.2 29.14C26.456 29.512 25.58 29.698 24.572 29.698ZM22.322 23.884L21.098 22.75L21.71 16.792H24.266L23.6 22.696L22.322 23.884ZM22.088 19.186L21.71 16.792H28.856V19.186H22.088Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[16px] text-[#FFA800] text-center md:text-start">
                  Writing
                </span>
                <span className="text-white text-[14px] font-[200] text-center md:text-start ">
                  In this section, you will be given a couple of tasks and you
                  will have to answer them in the form of an essay which is of a
                  200 to 400-word range. The essays should be informative, and
                  should not just be expanded for filling up space. The quality
                  of the essay is important for evaluation. The section will
                  last for 50 minutes and you will need to write relevant
                  material on the topic given in order to do well in this
                  section.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scoring of toefl */}
      <div className="w-full px-[20px] md:px-20 lg:px-40 flex-col justify-start items-center gap-8 inline-flex">
        <div className="flex-col justify-start items-center gap-4 flex">
          <div className="w-[65px] h-2 bg-amber-500" />
          <div className="text-sky-900 text-[40px] font-bold  text-center">
            Scoring of TOEFL
          </div>
          <div className="max-w-[572px] text-center text-neutral-600 text-base font-normal ">
            The TOEFL score ranges between 0 to 130, which are divided amongst
            the four sections in the following manner
          </div>
        </div>
        <div className="justify-center items-center grid grid-cols-2 md:grid-cols-4 gap-20 md:gap-40 ">
          <div className="px-[16px]  pt-[27.50px] pb-[26.50px] bg-blue-50 rounded-[14px] justify-start items-center flex">
            <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
              <div className=" text-sky-900 text-xl font-semibold ">
                0 to 30
              </div>
              <div className="text-neutral-500 text-lg font-normal ">
                Reading
              </div>
            </div>
          </div>
          <div className="px-[16px] pt-[37px] pb-[17px] bg-blue-50 rounded-[14px] justify-center items-center flex">
            <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
              <div className=" text-sky-900 text-xl font-semibold ">
                0 to 30
              </div>
              <div className="text-neutral-500 text-lg font-normal ">
                Listening
              </div>
            </div>
          </div>
          <div className="px-[16px] pt-[25.50px] pb-[26.50px] bg-blue-50 rounded-[14px] justify-center items-center flex">
            <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
              <div className=" text-sky-900 text-xl font-semibold ">
                0 to 30
              </div>
              <div className="text-neutral-500 text-xl font-normal ">
                Speaking
              </div>
            </div>
          </div>
          <div className="px-[16px] pt-[26.50px] pb-[25.50px] bg-blue-50 rounded-[14px] justify-center items-center flex">
            <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
              <div className=" text-sky-900 text-xl font-semibold ">
                0 to 30
              </div>
              <div className="text-stone-500 text-xl font-normal ">Writing</div>
            </div>
          </div>
        </div>
      </div>

      {/* frequently ask question */}
      <div className="w-full px-[20px] md:px-[47px] lg:px-[127px] pt-20 pb-[116px] bg-sky-950 justify-center items-center inline-flex">
        <div className="self-stretch flex-col justify-start items-center gap-12 inline-flex">
          <div className="text-amber-500 text-2xl font-bold ">
            Frequently Asked Question
          </div>
          <div className="flex-col  gap-[74px] w-full flex md:flex-row">
            <div className="justify-start w-full md:w-1/2 items-start gap-12 inline-flex">
              <div className="w-full  flex-col justify-start items-start gap-4 inline-flex">
                <div className="p-4 w-full bg-sky-900 rounded-lg flex-col justify-start items-start gap-2.5 flex">
                  <div className="justify-start items-center gap-4 inline-flex">
                    <div className="max-w-[408px] h-12 text-white text-lg font-normal ">
                      What is the age limit for the TOEFL EXAM?
                    </div>
                    <div className="w-6 h-6 relative origin-top-left -rotate-90" />
                  </div>
                </div>
                <div className="w-full p-4 bg-sky-900 rounded-lg flex-col justify-start items-start gap-2.5 flex">
                  <div className="justify-start items-end gap-4 inline-flex">
                    <div className="max-w-[408px] text-white text-lg font-normal ">
                      What is a good score on the TOEFL?
                    </div>
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="w-full p-4 bg-sky-900 rounded-lg flex-col justify-start items-start gap-2.5 flex">
                  <div className="justify-start items-center gap-4 inline-flex">
                    <div className="max-w-[408px]  text-white text-lg font-normal ">
                      Is there a validity period for TOEFL?
                    </div>
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-1/2">
              <div className="w-full  text-white text-md font-normal ">
                There is no age limit for the TOEFL exam as such but generally,
                you would be recommended to take it only after you reach 16
                years of age
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* parteners */}
      <Parteners />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Toefl;
