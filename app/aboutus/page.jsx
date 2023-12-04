import React from "react";

import Navbar from "../../components/Navbar";

import LinkComponent from "../../components/LinkComponet";
import Footer from "../../components/Footer";
import Image from "next/image"
import Parteners from "../../components/Parteners";


const Aboutus = () => {
  const members = [
    {
      name: "Jonny Brewer",
      url: `/image/member1.png`,
      title: "CEO",
    },
    {
      name: "Jonny Brewer",
      url: `/image/member2.png`,
      title: "CEO",
    },
    {
      name: "Jonny Brewer",
      url: `/image/member3.png`,
      title: "CEO",
    },
    {
      name: "Jonny Brewer",
      url: `/image/member4.png`,
      title: "CEO",
    },
  ];
  return (
    <div className="flex flex-col items-center  w-full">
      <LinkComponent />
      <Navbar />

      {/* hero section */}
      <div className="max-w-7xl flex flex-col h items-center lg:flex-row px-[20px] lg:px-20 gap-10 py-10">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h1 className="text-[30px] leading-[40px] font-semibold md:text-[40px] text-[#07294D] max-w-[264px]">
            Welcome to BrightForth
          </h1>
          <div className="flex px-[10px] flex-col gap-10">
            <span className="text-[14px] text-[#414141] leading-5 font-[300]">
              BrightForth Consultants Ltd is an educational consulting company
              that helps young students to choose and find the schools of their
              dreams abroad in an easy and affordable way.
            </span>
            <span className="text-[14px] text-[#414141] leading-5 font-[300]">
              Brightforth is one of the best education consultants in Rwanda.
              The institute is shaping up the global career of the new
              generation of Rwanda at the international platform. Brightforth
              with an endeavor of reviving inner talent is the education
              provider and international student placement company that paves
              the path of the student who aspires to study in foreign countries
              like the UK, Canada, USA, Australia, Ireland. Established in 2022,
              Brightforth provides customized solutions to the student according
              to their academic, financial, and personal profiles for the
              befitted foreign universities. Brightforth also guiding for IELTS,
              TOEFL, GRE, SAT, PTE, communicative English and helps students in
              University selection, documentation, Visa guidance, Essay and SoP
              guidline.
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div class="max-w-[586px]  relative">
            <div className=" w-[335px] h-[226px] sm:w-[435px] sm:h-[284px]">
              <Image
                class=" w-full h-full left-0 top-0 absolute rounded-xl"
                src={'/image/about.png'}
                width={200}
                height={200}
              />
            </div>
            <div class="max-w-[308px] h-44 px-10 py-6 left-[25px] sm:left-[178px] bottom-[-60px] absolute bg-sky-950 rounded-xl flex-col justify-start items-start gap-2.5 inline-flex">
              <div class="flex-col justify-start items-start gap-4 flex">
                <div class="justify-start items-start gap-2 inline-flex">
                  <div class="flex-col justify-start items-start gap-2 inline-flex">
                    <div class="text-yellow-400 text-2xl font-bold ">
                      4,500
                    </div>
                    <div class="w-[140px] text-slate-400 text-sm font-normal ">
                      Total Students
                    </div>
                  </div>
                  <div class="flex-col justify-start items-start gap-2 inline-flex">
                    <div class="text-yellow-400 text-2xl font-bold ">
                      750
                    </div>
                    <div class="w-[140px] text-slate-400 text-sm font-normal ">
                      Universities
                    </div>
                  </div>
                </div>
                <div class="justify-start items-start gap-2 inline-flex">
                  <div class="flex-col justify-start items-start gap-2 inline-flex">
                    <div class="text-yellow-400 text-2xl font-bold ">
                      15
                    </div>
                    <div class="w-[140px] text-slate-400 text-sm font-normal ">
                      Counselors
                    </div>
                  </div>
                  <div class="flex-col justify-start items-start gap-2 inline-flex">
                    <div class="text-yellow-400 text-2xl font-bold ">
                      450
                    </div>
                    <div class="w-[100px] leading-3 text-slate-400 text-sm font-normal ">
                      Available Programs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our team */}
      <div className="w-full max-w-7-xl bg-[#07294D] mt-10 p-[20px] md:p-20  flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="flex flex-col gap-4 w-full md:sw-1/2  ">
            <div className="w-20 h-[4px] bg-[#FFCD21]"></div>
            <h1 className="text-white text-[30px] font-bold">Our Tearm</h1>
            <span className="text-white text-[24px]">Let’s Meet The Team</span>
          </div>
          <div className="md:mt-0 mt-5">
            <span className="text-[16px] text-[#C2C2C2]">
              Team subtract variant style list italic. Pixel vertical arrow blur
              inspect selection invite bold style invite. Rotate flows subtract
              export arrange shadow outline outline connection. Ellipse select
              text arrow pencil ipsum.
            </span>
          </div>
        </div>
        <div className="grid gap-[20px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {members.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-2">
                <div className="w-260px h-[322px]">
                  <Image
                    src={item.url}
                    width={200}
                    height={200}
                    alt=""
                    className="h-full w-full object-cover rounded-sm"
                  />
                </div>
                <div className="flex flex-row w-full justify-between">
                  <div className="flex flex-col">
                    <h1 className="text-[18px] text-white">{item.name}</h1>
                    <span className="text-[18px] text-[#A7A7A7]">
                      {item.title}
                    </span>
                  </div>
                  <div className="flex flex-row gap-2">
                    <a href="#">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.139648 12.7535C0.139648 6.01717 5.60055 0.556274 12.3369 0.556274C19.0733 0.556274 24.5342 6.01717 24.5342 12.7535C24.5342 19.4899 19.0733 24.9508 12.3369 24.9508C5.60055 24.9508 0.139648 19.4899 0.139648 12.7535ZM16.9871 9.32306C17.5207 9.24682 17.9781 9.17059 18.4355 8.94189C18.1306 9.47552 17.6732 9.93292 17.1396 10.2379C17.292 13.8208 14.7001 17.7087 10.0499 17.7087C8.67773 17.7087 7.38177 17.2513 6.23828 16.5652C7.53424 16.7176 8.90643 16.3365 9.82122 15.6504C8.67773 15.6504 7.76294 14.8881 7.45801 13.897C7.83917 13.9733 8.22033 13.897 8.6015 13.8208C7.45801 13.5159 6.61944 12.4486 6.61944 11.3051C7.00061 11.4576 7.38177 11.61 7.76294 11.61C6.69568 10.8477 6.31451 9.39929 7.00061 8.2558C8.29657 9.78045 10.1262 10.7715 12.1844 10.8477C11.8033 9.32306 13.023 7.7984 14.6239 7.7984C15.31 7.7984 15.9961 8.10333 16.4535 8.56073C17.0633 8.40826 17.597 8.2558 18.0544 7.95086C17.9019 8.56073 17.5207 9.01812 16.9871 9.32306Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        width="26"
                        height="25"
                        viewBox="0 0 26 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.797363 12.7536C0.797363 6.01724 6.25826 0.556335 12.9946 0.556335C19.731 0.556335 25.1919 6.01724 25.1919 12.7536C25.1919 19.49 19.731 24.9509 12.9946 24.9509C6.25826 24.9509 0.797363 19.49 0.797363 12.7536ZM7.04846 10.6953V18.8522H9.64038V10.6953H7.04846ZM6.89599 8.10339C6.89599 8.94195 7.50586 9.55182 8.34442 9.55182C9.18298 9.55182 9.79285 8.94195 9.79285 8.10339C9.79285 7.26483 9.18298 6.65497 8.34442 6.65497C7.58209 6.65497 6.89599 7.26483 6.89599 8.10339ZM16.5013 18.8522H18.9408V13.8209C18.9408 11.3052 17.4161 10.4666 15.9677 10.4666C14.6717 10.4666 13.757 11.3052 13.5283 11.8388V10.6953H11.0888V18.8522H13.6807V14.507C13.6807 13.3635 14.443 12.7536 15.2054 12.7536C15.9677 12.7536 16.5013 13.1348 16.5013 14.4307V18.8522Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* why choose us */}
      <div className="max-w-7x w-full px-[] md:px-40 flex flex-col gap-20 py-20">
        <div className="flex w-full flex-col-reverse md:flex-row justify-between gap-10 items-center">
          <div className="w-full md:w-1/2 h-[250px]">
            <Image src={`/image/member1.png`} width={600} height={0} alt="" className="w-[60%] h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h1 className="text-[24px] text-[#07294D] font-[700]">
              Why Choose Us
            </h1>
            <p className="text-[16px] text-[#2B2A2A]">
              BrightForth, a pioneer in the field of ‘GLOBAL EDUCATION’ has
              brought the concept of overseas education to the doorstep of every
              student. Our excellent branch network, association with leading
              institutions worldwide and impeccable reputation helps us to
              deliver top quality education services. We improve the lives of
              students while preparing them to be globally successful citizens
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col md:flex-row justify-between gap-10 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h1 className="text-[24px] text-[#07294D] font-[700]">
              Our Mission
            </h1>
            <div className="flex flex-col gap-4">
              <p className="text-[16px] text-[#2B2A2A]">
                Provide efficient, transparent and authentic services to
                students
              </p>
              <p className="text-[16px] text-[#2B2A2A]">
                Help students make the best education decisions about their
                future depending on their interests, skills, and aptitude.
              </p>
              <p className="text-[16px] text-[#2B2A2A]">
                Help students develop their own independent outlook and
                thinking.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[250px] flex flex-col gap-2 bg-[#07294D] rounded-lg p-10">
            <h1 className="text-[#FFA800] text-[24px] font-bold">Our Goal</h1>
            <p className="text-[14px] text-white leading-4">
              BrighForth offers unbiased, comprehensive, genuine, ethical and
              quality professional education services. We help connect students
              with institutions of higher learning worldwide. As a preferred
              partner for top global educational institutions, we attract the
              best talent in terms of counselors and facilitators without
              distinction of race, religion or social status and offer a great
              working environment. We improve the lives of students while
              preparing them to be globally successful citizens.
            </p>
          </div>
        </div>
      </div>

      {/* parteners */}
      <Parteners />

      <Footer />
    </div>
  );
};

export default Aboutus;
