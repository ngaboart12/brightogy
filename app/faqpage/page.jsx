"use client";
import React, { useState } from "react";
import Footer from "../../components/Landing/Footer";
import LinkComponent from "../../components/LinkComponet";
import Navbar from "../../components/Navbar";
import { FaHandPointRight } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";

const Page = () => {
  const [whichOpen, setWhichOpen] = useState();
  const questions = [
    {
      titel:
        "When is the right time for submitting an application to the Universities?",
      answer:
        "Every foreign University/College has their intakes during a year. Some have two intakes while others may have three or only one or a rolling intake during the academic year. Majority Institutions in a particular country follow the same intake. Hence, you should initiate steps for admission process at least one year in advance for the respective intake. In some cases, you could begin these steps 3-4 months in advance as well.",
    },
    {
      titel: "What is an application package?",
      answer:
        "An application package consists of the material required by the University. It consists of Application forms, Application  fees, Recommendations Transcripts and mark sheets Essays Financial aid form",
    },
    {
      titel: "What are the entry requirements to be accepted into a course?",
      answer:
        "Every University has it’s set of eligibility criteria which mostly includes minimum academic requirements, English language and entrance test requirements, relevant work experience etc.Your education counsellor can help you identify relevant programs as per your profWhat if one does not have the minimum entry qualifications? For Undergraduate Studies If the student does not have formal qualifications, he/she can undertake a Foundation course, which usually lasts one academic year. Many colleges run the Foundation courses, as do many Universities. For Postgraduate Studies Students who do not have a formal degree or relevant work experience, but have satisfied the course tutor that they have a flair for the particular course, may be admitted to a Postgraduate Certificate program. A PG Certificate program usually lasts six months and comprises the first semester of the appropriate master’s degree. On showing good performance in the postgraduate certificate program, one can claim admission to postgraduate diploma and subsequently to a master degree, without any waste of time.",
    },
    {
      titel:
        "Student has below average grades in high school or college. Will he/she get admission?",
      answer:
        "Learning Management System (LMS) advantages include the ability to capture compliance training, reduce the amount of time and effort to managing organizational-wide learning, reduce skills gaps with to a better way to distribute and encourage a learning culture, and increase visibility to learning effectiveness to optimize programs.",
    },
    {
      titel: "Can one work while studying overseas?",
      answer:
        "It depends on the length and type of program you will be attending. Your eligibility to work will be shown on the immigration stamp in your passport.International students are allowed to work for 20 hours per week during term days and full time during holidays. Many institutions have ‘Job shop’ to help students find part-time jobs. Job vacancies are also advertised in newspapers and online. There are also many national and regional employment agencies, run by both government and private organizations, which can advise on the broad range of opportunities available to their client businesses and industries. Most employers will want to see your resume and sometimes; they take an interview before hiring.",
    },
    {
      titel: "What are Sandwich and Foundation programs?",
      answer:
        "Sandwich programs are made-up of a combination of periods of study and time spent in Industry. The course duration extends to 4-years instead of the usual 3-years, for all bachelors courses. Foundation programs are of a 1-year length and are tailored for students as an alternative route to bridge between their qualification and that, which is required for entry into a degree program at the International University or College.",
    },
    {
      titel: "Can students change their major upon reaching the University.",
      answer:
        "Yes, certainly. In fact, most undergraduate students change their major at least once during their four-year course of study. Most Universities abroad allow students the flexibility to change their major as they wish.",
    },
    {
      titel: "How can one apply for financial aid?",
      answer:
        "Your education counsellor coordinates with the Universities, to send the financial aid form, which you should finish and submit before the financial aid deadline date mentioned in the application package of the respective University.",
    },
    {
      titel: "What is TA(Teaching Assistantship)?",
      answer:
        "Teaching assistants assist a professor by teaching an undergraduate class or checking exam papers. They are paid for this job, which covers most of their expenses while at the University.",
    },
    {
      titel: "What is RA(Research Assistantship)?",
      answer:
        "Research fellowship/assistantship is an award that allows you to work in the capacity of an assistant to a professor on the research project assigned to him. As a research assistant, the student receives the tuition waiver or pays in-state tuition fees and earns additionally to sustain living expenses through their education. covers most of their expenses while at the University.",
    },
    {
      titel: "What are tuition-waivers?",
      answer:
        "Tuition waivers are awards that waive one’s tuition fees. These could range from partial to complete tuition waivers. Your education counsellor can help you identify and apply to such Universities",
    },
    {
      titel: "Is it tough to get Visas?",
      answer:
        "Student visas can be obtained given proper documentation. Most of the applicants from India who provide a confirmed offer from a University/College abroad and evidence of financial support for tuition fees and living costs are issued visas.",
    },
    {
      titel: "From where can one get the Visa application form?",
      answer:
        "The Visa application form is available, free of charge, from the Consulate. Alternatively, you could collect the same from your education counsellor.",
    },
    {
      titel:
        "How much money do I need to show at the time of applying for Visa?",
      answer:
        "There is no upper-limit to an amount of funds that you should show for your Visa Interview. However, you should show a little more than is necessary to cover your expenses abroad",
    },
    {
      titel: "What question will they ask me in the Visa interview?",
      answer:
        "Relax, there is absolutely no need to be nervous about the ‘Student Visa Interview.’ The people at the counter are friendly and will not grill you or have you for lunch! However, you should be thoroughly prepared for the questions. Your counsellor will help you prepare for the same.",
    },
  ];
  return (
    <div className="flex flex-col items-center   overflow-hidden  relative  w-full bg-gray-100 overflow-y-auto">
      <LinkComponent />
      <Navbar />
      <div className="flex flex-col gap-10 w-full max-w-7xl px-[20px] md:px-20 lg:px-40 pb-20 ">
        <div className=" gap-2 mx-auto flex flex-col py-4 text-center md:text-start">
          <h1 className="text-[28px] leading-8 md:le md:text-[32px] text-[#123E6C] font-bold">
            Frequently asked questions(FAQ)
          </h1>
          <span className="text-[20px] text-[#777] text-center">
            Explore quick answers to your questions here.
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-20">
          <div className="flex flex-row md:flex-col gap-2">
            <div className="flex flex-row gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.266 13.516C19.4975 13.3369 19.6849 13.1071 19.8138 12.8443C19.9427 12.5815 20.0097 12.2927 20.0097 12C20.0097 11.7073 19.9427 11.4185 19.8138 11.1557C19.6849 10.8929 19.4975 10.6631 19.266 10.484C16.2686 8.16463 12.9215 6.33648 9.35002 5.068L8.69702 4.836C7.44902 4.393 6.13002 5.237 5.96102 6.526C5.48891 10.1601 5.48891 13.8399 5.96102 17.474C6.13102 18.763 7.44902 19.607 8.69702 19.164L9.35002 18.932C12.9215 17.6635 16.2686 15.8354 19.266 13.516Z"
                  fill="black"
                />
              </svg>
              <h1 className="text-[18px] text-black">General</h1>
            </div>
            <div className="flex flex-row gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.266 13.516C19.4975 13.3369 19.6849 13.1071 19.8138 12.8443C19.9427 12.5815 20.0097 12.2927 20.0097 12C20.0097 11.7073 19.9427 11.4185 19.8138 11.1557C19.6849 10.8929 19.4975 10.6631 19.266 10.484C16.2686 8.16463 12.9215 6.33648 9.35002 5.068L8.69702 4.836C7.44902 4.393 6.13002 5.237 5.96102 6.526C5.48891 10.1601 5.48891 13.8399 5.96102 17.474C6.13102 18.763 7.44902 19.607 8.69702 19.164L9.35002 18.932C12.9215 17.6635 16.2686 15.8354 19.266 13.516Z"
                  fill="black"
                />
              </svg>
              <h1 className="text-[18px] text-black">Package</h1>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.266 13.516C19.4975 13.3369 19.6849 13.1071 19.8138 12.8443C19.9427 12.5815 20.0097 12.2927 20.0097 12C20.0097 11.7073 19.9427 11.4185 19.8138 11.1557C19.6849 10.8929 19.4975 10.6631 19.266 10.484C16.2686 8.16463 12.9215 6.33648 9.35002 5.068L8.69702 4.836C7.44902 4.393 6.13002 5.237 5.96102 6.526C5.48891 10.1601 5.48891 13.8399 5.96102 17.474C6.13102 18.763 7.44902 19.607 8.69702 19.164L9.35002 18.932C12.9215 17.6635 16.2686 15.8354 19.266 13.516Z"
                  fill="black"
                />
              </svg>
              <h1 className="text-[18px] text-black">General</h1>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {questions.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-2">
                  {whichOpen === index ? (
                    <div
                      onClick={() => setWhichOpen(null)}
                      className="flex flex-row gap-2 items-center cursor-pointer hover:opacity-60"
                    >
                      <div>
                        <FiMinus color="#123E6C" />
                      </div>

                      <h1 className="text-[16px] text-[#123E6C] ">
                        {item.titel}
                      </h1>
                    </div>
                  ) : (
                    <div
                      onClick={() => setWhichOpen(index)}
                      className="flex flex-row gap-2 items-center cursor-pointer hover:opacity-60"
                    >
                      <div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.998H13V10.998H19V12.998Z"
                            fill="black"
                          />
                        </svg>
                      </div>

                      <h1 className="text-[16px] text-black">{item.titel}</h1>
                    </div>
                  )}

                  <div
                    className={`${
                      whichOpen == index ? "flex" : "hidden"
                    } px-6 flex flex-row gap-2 text-[14px] `}
                  >
                    <span className="py-1">
                      <FaHandPointRight color="gray" />
                    </span>
                    <h1 className="text-black/50">{item.answer}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Page;
