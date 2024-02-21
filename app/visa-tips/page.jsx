import LinkComponent from "components/LinkComponet";
import Navbar from "components/Navbar";
import React from "react";
import Image from "next/image";
import Footer from "../../components/Landing/Footer";

const VisaTips = () => {
  const gridItem = [
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#FFA800" fill-opacity="0.4" />
          <circle cx="20" cy="20" r="14" fill="#FFA800" />
          <path
            d="M19.8373 26.3721V15.2681H21.3253V26.3721H19.8373ZM17.5653 16.6121V15.2681H21.1653V16.6121H17.5653Z"
            fill="black"
          />
        </svg>
      ),
      title: "Check you need a visa",
      desc: "Each country has different visa requirements and depending on your country of origin you might not need a visa to enter your host country. For example, EU students will typically not need a visa to study in another EU country, whilst students of selected nationalities will not need a visa to enter Malaysia. You should double check the specific visa and immigration requirements of each country on their national immigration body website: even if you don’t need a visa, you will most likely need some kind of student pass or accreditation to be able to study abroad in a foreign country.",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#FFA800" fill-opacity="0.4" />
          <circle cx="20" cy="20" r="14" fill="#FFA800" />
          <path
            d="M17.5973 25.4601L21.6933 21.1401C22.1093 20.7134 22.4347 20.3454 22.6693 20.0361C22.904 19.7161 23.0693 19.4227 23.1653 19.1561C23.272 18.8894 23.3253 18.6121 23.3253 18.3241C23.3253 17.7587 23.144 17.3161 22.7813 16.9961C22.4187 16.6761 21.9493 16.5161 21.3733 16.5161C20.808 16.5161 20.312 16.6547 19.8853 16.9321C19.4587 17.1987 19.08 17.6147 18.7493 18.1801L17.6933 17.3001C18.1307 16.5747 18.6587 16.0307 19.2773 15.6681C19.896 15.2947 20.6107 15.1081 21.4213 15.1081C22.104 15.1081 22.696 15.2414 23.1973 15.5081C23.7093 15.7747 24.104 16.1481 24.3813 16.6281C24.6587 17.1081 24.7973 17.6681 24.7973 18.3081C24.7973 18.7667 24.7387 19.1774 24.6213 19.5401C24.5147 19.9027 24.3173 20.2761 24.0293 20.6601C23.752 21.0334 23.3627 21.4814 22.8613 22.0041L19.5493 25.4121L17.5973 25.4601ZM17.5973 26.3721V25.4601L18.8773 25.0281H25.0533V26.3721H17.5973Z"
            fill="black"
          />
        </svg>
      ),
      title: "English language test scores",
      desc: "You might be required to produce scores of English Language proficiency tests as part of your visa application. If this is the case, you should make sure that the test scores will still be valid at the time of your visa application, and for at least a few months afterwards. If your scores are set to expire during your study programme you should be prepared to re-sit the exam if necessary. Both TOEFL and IELTS test scores are valid for 2 years after the test date.",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#FFA800" fill-opacity="0.4" />
          <circle cx="20" cy="20" r="14" fill="#FFA800" />
          <path
            d="M19.8373 26.3721V15.2681H21.3253V26.3721H19.8373ZM17.5653 16.6121V15.2681H21.1653V16.6121H17.5653Z"
            fill="black"
          />
        </svg>
      ),
      title: "Blank pages",
      desc: "You should make sure that your passport has at least 4-6 blank pages when you apply for a student visa. Whilst the visa itself will only take up one page, many consulates require that you have at least two blank, functional pages within your valid passport. If your passport does not have enough blank space, then you may be required to renew it before you can apply for a visa. This will only make your study abroad preparation process longer by at least a few weeks, but it is also likely to incur additional fees.",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#FFA800" fill-opacity="0.4" />
          <circle cx="20" cy="20" r="14" fill="#FFA800" />
          <path
            d="M19.8373 26.3721V15.2681H21.3253V26.3721H19.8373ZM17.5653 16.6121V15.2681H21.1653V16.6121H17.5653Z"
            fill="black"
          />
        </svg>
      ),
      title: "Passport photos and documents",
      desc: "It might seem obvious but be sure to read the documentation requirements thoroughly and have everything in order before you submit. If your documents do not meet requirements you will simply not be granted a visa and will have to go through the entire process again, and maybe even pay another set of application fees. Be sure to double check passport photo requirements, too: some countries have differing and strict requirements and will not accept photos that do not meet them.",
    },
  ];
  const gridSecond = [
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#FFA800" fill-opacity="0.4" />
          <circle cx="20" cy="20" r="14" fill="#FFA800" />
          <path
            d="M19.8373 26.3721V15.2681H21.3253V26.3721H19.8373ZM17.5653 16.6121V15.2681H21.1653V16.6121H17.5653Z"
            fill="black"
          />
        </svg>
      ),
      title: "Check translations",
      desc: "All your application documents need to be translated into English and should be signed by a relevant authority. Some consulates will provide translation services and sign the documents themselves, but this must be done before you actually submit your visa application. Most of the time you will need to make a separate appointment for a translation service, and so you should check and organise this directly with your consulate or home university ahead of time.",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#FFA800" fill-opacity="0.4" />
          <circle cx="20" cy="20" r="14" fill="#FFA800" />
          <path
            d="M17.5973 25.4601L21.6933 21.1401C22.1093 20.7134 22.4347 20.3454 22.6693 20.0361C22.904 19.7161 23.0693 19.4227 23.1653 19.1561C23.272 18.8894 23.3253 18.6121 23.3253 18.3241C23.3253 17.7587 23.144 17.3161 22.7813 16.9961C22.4187 16.6761 21.9493 16.5161 21.3733 16.5161C20.808 16.5161 20.312 16.6547 19.8853 16.9321C19.4587 17.1987 19.08 17.6147 18.7493 18.1801L17.6933 17.3001C18.1307 16.5747 18.6587 16.0307 19.2773 15.6681C19.896 15.2947 20.6107 15.1081 21.4213 15.1081C22.104 15.1081 22.696 15.2414 23.1973 15.5081C23.7093 15.7747 24.104 16.1481 24.3813 16.6281C24.6587 17.1081 24.7973 17.6681 24.7973 18.3081C24.7973 18.7667 24.7387 19.1774 24.6213 19.5401C24.5147 19.9027 24.3173 20.2761 24.0293 20.6601C23.752 21.0334 23.3627 21.4814 22.8613 22.0041L19.5493 25.4121L17.5973 25.4601ZM17.5973 26.3721V25.4601L18.8773 25.0281H25.0533V26.3721H17.5973Z"
            fill="black"
          />
        </svg>
      ),
      title: "Photocopies",
      desc: "Be sure to make photocopies of all the official documents you submit and bring to your visa interview, even if the consulate says they will send them back to you after your visa has been approved. Documents such as your passport and national ID card are some of the most important credentials you can hold, and you should ALWAYS take backup precautions in making sure you’ll always be able to access their details. It’s also a good idea to make additional digital copies to take with you when you do travel overseas.",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#FFA800" fill-opacity="0.4" />
          <circle cx="20" cy="20" r="14" fill="#FFA800" />
          <path
            d="M19.8373 26.3721V15.2681H21.3253V26.3721H19.8373ZM17.5653 16.6121V15.2681H21.1653V16.6121H17.5653Z"
            fill="black"
          />
        </svg>
      ),
      title: "Keep informed",
      desc: "In some cases, as with US student visas, you will be required to complete an interview as part of the application process. If this is the case, you should make sure you’re well informed about your study programme, host university and be ready to explain why you want to complete your particular course of study. If you’re unable to answer a few basic questions about your study abroad plans it will be difficult to convince immigration officials that you are travelling to their country to study rather than immigrate.",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#FFA800" fill-opacity="0.4" />
          <circle cx="20" cy="20" r="14" fill="#FFA800" />
          <path
            d="M19.8373 26.3721V15.2681H21.3253V26.3721H19.8373ZM17.5653 16.6121V15.2681H21.1653V16.6121H17.5653Z"
            fill="black"
          />
        </svg>
      ),
      title: "Stay calm",
      desc: "Applying for a student visa might seem stressful, but if you have all your documents and fees in order then there’s no reason why you shouldn’t be granted one. If you appear agitated, argumentative or defensive then it might give immigration officials a reason to scrutinize your application unnecessarily and further delay the processing procedure. Remember: consulates and embassies provide services that intend to help you and applying for a student visa is an administrative process just like any other.",
    },
  ];
  return (
    <div className="flex flex-col  gap-10 w-full bg-white min-h-[100vh]">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-4 items-center w-full px-[10px] md:px-[100px]">
        <div className="w-full md:w-1/2 flex flex-col gap-4 items-start py-20">
          <div className="flex flex-col md:items-start items-center w-full">
            <h1 className="text-[24px] font-[700] text-[#123E6C]">
              Top 10 tips
            </h1>
            <span className="text-black text-[16px] font-[300]">
              Applying for a student visa
            </span>
          </div>
          <div className="w-full">
            <Image src={`/image/visa-tips.png`} width={400} height={500} />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start gap-8">
          <span className="text-[16px] font-[300] text-black text-center md:text-start">
            Don’t feel prepared to apply for your student visa? Our top ten tips
            are here to help you no matter where you are applying to study
          </span>
          <div>
            <p className="text-center md:text-start">
              Applying for a student visa can feel like the most stressful part
              of the study abroad planning process. Between getting all your
              documents in order and scouring the fine print on government
              websites, all you want to do is pack your bags and board the
              plane. Whilst it’s cumbersome, it’s important you pay close
              attention to your specific immigration requirements and follow
              procedure diligently; otherwise you might have trouble entering
              your host country in time to start your study programme.
            </p>
          </div>
          <span className="text-[16px] text-[#123E6C] text-center md:text-start">
            Let our ten visa application tips help break down the process.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-[10px] md:px-[100px]">
        {gridItem.map((item, index) => {
          return (
            <div
              className={`flex flex-col items-start p-[4px] md:p-4 ${
                index === 0 || index === 3 ? "bg-[#F4F4F4]" : ""
              }`}
            >
              <div className="flex flex-row items-center justify-center md:justify-start w-full gap-2">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="20"
                    fill="#FFA800"
                    fill-opacity="0.4"
                  />
                  <circle cx="20" cy="20" r="14" fill="#FFA800" />
                  <path
                    d="M19.8373 26.3721V15.2681H21.3253V26.3721H19.8373ZM17.5653 16.6121V15.2681H21.1653V16.6121H17.5653Z"
                    fill="black"
                  />
                </svg>
                <span className="text-[24px] text-[#07294D] font-[600]">
                  {item.title}
                </span>
              </div>
              <div className="flex flex-col items-start p-6 text-center md:text-start">
                <span className="text-[14px]">{item.desc}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-[10px] md:px-[100px] bg-[#07294D] py-6 w-full flex flex-col md:flex-row gap-4 items-center">
        <div className="flex flex-col p-4 items-start w-full md:w-1/2 bg-[#08305A]">
          <div className="w-full flex flex-row items-center gap-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20"
                cy="20"
                r="20"
                fill="#FFA800"
                fill-opacity="0.4"
              />
              <circle cx="20" cy="20" r="14" fill="#FFA800" />
              <path
                d="M21.1333 26.5481C20.3547 26.5481 19.624 26.4147 18.9413 26.1481C18.2693 25.8707 17.7093 25.4761 17.2613 24.9641L18.8933 23.3481C19.096 23.6467 19.3893 23.8921 19.7733 24.0841C20.168 24.2654 20.5947 24.3561 21.0533 24.3561C21.4587 24.3561 21.8107 24.2867 22.1093 24.1481C22.408 23.9987 22.6427 23.7907 22.8133 23.5241C22.984 23.2467 23.0693 22.9267 23.0693 22.5641C23.0693 22.1907 22.984 21.8707 22.8133 21.6041C22.6427 21.3374 22.4027 21.1347 22.0933 20.9961C21.7947 20.8467 21.4533 20.7721 21.0693 20.7721C20.6853 20.7721 20.3333 20.8254 20.0133 20.9321C19.6933 21.0281 19.4 21.1774 19.1333 21.3801L19.3413 19.7801C19.5867 19.5881 19.8213 19.4334 20.0453 19.3161C20.2693 19.1881 20.5147 19.0921 20.7813 19.0281C21.048 18.9641 21.3627 18.9321 21.7253 18.9321C22.5573 18.9321 23.256 19.1027 23.8213 19.4441C24.3973 19.7854 24.8293 20.2387 25.1173 20.8041C25.416 21.3694 25.5653 21.9934 25.5653 22.6761C25.5653 23.4227 25.3787 24.0894 25.0053 24.6761C24.6427 25.2627 24.1307 25.7214 23.4693 26.0521C22.808 26.3827 22.0293 26.5481 21.1333 26.5481ZM19.1333 21.3801L18.0453 20.3721L18.5893 15.0761H20.8613L20.2693 20.3241L19.1333 21.3801ZM18.9253 17.2041L18.5893 15.0761H24.9413V17.2041H18.9253Z"
                fill="black"
              />
            </svg>
            <span className="text-[24px] font-[700] text-[#FFA800]">
              Be ready to pay
            </span>
          </div>
          <div className="py-2">
            <span className="text-white font-[400] ">
              When you apply for a visa you will always need to pay some kind of
              processing fee. This fee is usually payable when you actually
              submit your application and can be payable in cash when you
              complete your interview. Whilst some countries permit online
              applications and payment via credit or debit card, often you will
              be required to go to an office in person and either collect your
              visa or submit additional documents. You should always check if
              there are any additional fees payable in person, and if this is
              the case then you should always be ready to pay in cash. Being in
              the middle of a visa interview with no ATM in sight is unlikely to
              bode well with busy immigration officials.
            </span>
          </div>
        </div>
        <div className="flex flex-col p-4 items-start w-full md:w-1/2 ">
          <div className="w-full flex flex-row items-center gap-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20"
                cy="20"
                r="20"
                fill="#FFA800"
                fill-opacity="0.4"
              />
              <circle cx="20" cy="20" r="14" fill="#FFA800" />
              <path
                d="M21.6613 26.5481C20.872 26.5481 20.1573 26.3721 19.5173 26.0201C18.888 25.6681 18.3867 25.1987 18.0133 24.6121C17.6507 24.0147 17.4693 23.3481 17.4693 22.6121C17.4693 21.6521 17.8053 20.6814 18.4773 19.7001L21.6613 15.0761H24.4933L20.9573 20.0041L20.0133 20.0841C20.1627 19.8281 20.3173 19.6094 20.4773 19.4281C20.648 19.2361 20.8613 19.0921 21.1173 18.9961C21.3733 18.8894 21.6987 18.8361 22.0933 18.8361C22.7973 18.8361 23.4267 19.0014 23.9813 19.3321C24.5467 19.6521 25 20.0947 25.3413 20.6601C25.6827 21.2147 25.8533 21.8547 25.8533 22.5801C25.8533 23.3161 25.6667 23.9881 25.2933 24.5961C24.92 25.1934 24.4187 25.6681 23.7893 26.0201C23.16 26.3721 22.4507 26.5481 21.6613 26.5481ZM21.6613 24.3561C21.992 24.3561 22.2907 24.2761 22.5573 24.1161C22.824 23.9561 23.032 23.7374 23.1813 23.4601C23.3307 23.1827 23.4053 22.8734 23.4053 22.5321C23.4053 22.1801 23.3307 21.8707 23.1813 21.6041C23.032 21.3267 22.824 21.1134 22.5573 20.9641C22.2907 20.8041 21.992 20.7241 21.6613 20.7241C21.32 20.7241 21.016 20.8041 20.7493 20.9641C20.4933 21.1134 20.2907 21.3267 20.1413 21.6041C19.992 21.8707 19.9173 22.1801 19.9173 22.5321C19.9173 22.8734 19.992 23.1827 20.1413 23.4601C20.2907 23.7374 20.4933 23.9561 20.7493 24.1161C21.016 24.2761 21.32 24.3561 21.6613 24.3561Z"
                fill="black"
              />
            </svg>

            <span className="text-[24px] font-[700] text-[#FFA800]">
              Apply early
            </span>
          </div>
          <div className="py-2">
            <span className="text-white font-[400] ">
              Your visa may take time to process and may be subject to
              administrative procedures beyond your control. If your visa isn’t
              ready in time, you simply won’t be able to enter your host
              country, regardless of whether classes are starting or not. Some
              websites will give you an estimated visa processing time but to be
              safe you should account for it to take longer: your visa will be
              set to start in alignment with the commencement of your study
              abroad programme, so whether you get it a few days or a few weeks
              before you fly out won’t change anything except make your planning
              process infinitely less stressful.
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-[10px] md:px-[100px]">
        {gridSecond.map((item, index) => {
          return (
            <div
              className={`flex flex-col items-start p-[4px] md:p-4 ${
                index === 0 || index === 3 ? "bg-[#F4F4F4]" : ""
              }`}
            >
              <div className="flex flex-row items-center justify-center md:justify-start w-full gap-2">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="20"
                    fill="#FFA800"
                    fill-opacity="0.4"
                  />
                  <circle cx="20" cy="20" r="14" fill="#FFA800" />
                  <path
                    d="M19.8373 26.3721V15.2681H21.3253V26.3721H19.8373ZM17.5653 16.6121V15.2681H21.1653V16.6121H17.5653Z"
                    fill="black"
                  />
                </svg>
                <span className="text-[24px] text-[#07294D] font-[600]">
                  {item.title}
                </span>
              </div>
              <div className="flex flex-col items-start p-6 text-center md:text-start">
                <span className="text-[14px]">{item.desc}</span>
              </div>
            </div>
          );
        })}
      </div>

      <Footer/>
    </div>
  );
};

export default VisaTips;
