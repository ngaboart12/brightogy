"use client";
import React, { useState } from "react";
import Ass1 from "../../components/assessement/Ass1";
import Ass2 from "../../components/assessement/Ass2";
import Ass3 from "../../components/assessement/Ass3";
import Ass4 from "../../components/assessement/Ass4";
import Asss5 from "../../components/assessement/Asss5";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import Navbar from "../../components/Navbar";
import LinkComponent from "../../components/LinkComponet";
import Footer from "../../components/Footer";

const Assessment = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personInfo: {
      firstName: "",
      lastName: "",
      emailAdrress: "",
      nationality: "",
      countryResidence: "",
      Age: "",
      levelOfEducation: "",
      faculty: "",
      phoneNumber: "",
      provideBankStatementsEquivalent: "",
      livingExpensesWhileYouWtudyInCanada: "",
      letterOfAdmission: "",
    },
    educationProgram: {
      programs: [],
    },
    cannadian: {
      firstOfficialLanguage: "",
      firstReadProficiency: "",
      firstWritingProficiency: "",
      firstSpeakingProficiency: "",
      firstListeningProficiency: "",
      secondOfficialLanguage: "",
      secondReadProficiency: "",
      secondWritingProficiency: "",
      secondSpeakingProficiency: "",
      secondListeningProficiency: "",
    },
    other: {
      criminalRecord: "",
      seriousCondition: "",
      FirstofficialLanguage: "",
      Message: "",
    },
    backgroundInfo: {
      haveYouRefusedVisa: "",
      yourSponsor: "",
      validStudyPermit: "",
    },
  });

  const handleInputChange = (stage, inputName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [stage]: {
        ...prevData[stage],
        [inputName]: value,
      },
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.backgroundInfo.haveYouRefusedVisa !== "" &&
      formData.backgroundInfo.yourSponsor !== "" &&
      formData.validStudyPermit !== ""
    ) {
      try {
        // Add data to Firestore
        const docRef = await addDoc(collection(db, "assessments"), formData);
        console.log("Document written with ID: ", docRef.id);

        // You can redirect the user or perform any other action upon successful submission.
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      alert("all filed are required");
    }
  };

  const handleNext = () => {
    if (step == 1) {
      if (
        formData.personInfo.firstName !== "" &&
        formData.personInfo.lastName !== "" &&
        formData.personInfo.emailAdrress !== "" &&
        formData.personInfo.nationality !== "" &&
        formData.personInfo.countryResidence !== "" &&
        formData.personInfo.Age !== "" &&
        formData.personInfo.levelOfEducation !== "" &&
        formData.personInfo.faculty !== "" &&
        formData.personInfo.phoneNumber !== "" &&
        formData.personInfo.provideBankStatementsEquivalent !== "" &&
        formData.personInfo.livingExpensesWhileYouWtudyInCanada !== "" &&
        formData.personInfo.letterOfAdmission !== ""
      ) {
        setStep((prevStep) => prevStep + 1);
      } else {
        alert("all filed are required");
      }
    } else if (step == 2) {
      if (formData.educationProgram.programs !== "") {
        setStep((prevStep) => prevStep + 1);
      } else {
        alert("all filed are required");
      }
    } else if (step == 3) {
      if (
        formData.cannadian.firstOfficialLanguage !== "" &&
        formData.cannadian.firstReadProficiency !== "" &&
        formData.cannadian.firstWritingProficiency !== "" &&
        formData.cannadian.firstListeningProficiency !== "" &&
        formData.cannadian.firstSpeakingProficiency !== "" &&
        formData.cannadian.secondOfficialLanguage !== "" &&
        formData.cannadian.secondReadProficiency !== "" &&
        formData.cannadian.secondWritingProficiency !== "" &&
        formData.cannadian.secondListeningProficiency !== "" &&
        formData.cannadian.secondSpeakingProficiency !== ""
      ) {
        setStep((prevStep) => prevStep + 1);
      } else {
        alert("all filed are required");
      }
    } else if (step == 4) {
      if (
        formData.other.criminalRecord !== "" &&
        formData.other.seriousCondition !== "" &&
        formData.other.FirstofficialLanguage !== "" &&
        formData.other.Message !== ""
      ) {
        setStep((prevStep) => prevStep + 1);
      } else {
        alert("all filed are required");
      }
    }
  };
  console.log(formData.backgroundInfo);
  const handlePrev = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <div className="w-full max-w-7xl flex flex-col items-center justify-center">
      <LinkComponent />
      <Navbar />
      <div className="px-[20px] md:px-[100px] flex flex-col  lg:px-[30vh] w-full py-2">
        <form
          action=""
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-2 w-full"
        >
          {step === 1 && (
            <Ass1 formData={formData} handleInputChange={handleInputChange} />
          )}
          {step === 2 && (
            <Ass2 formData={formData} handleInputChange={handleInputChange} />
          )}
          {step === 3 && (
            <Ass3 formData={formData} handleInputChange={handleInputChange} />
          )}
          {step === 4 && (
            <Ass4 formData={formData} handleInputChange={handleInputChange} />
          )}
          {step === 5 && (
            <Asss5 formData={formData} handleInputChange={handleInputChange} />
          )}

          <div className="flex  gap-2  py-2 justify-end px-10">
            {step > 1 && (
              <div
                onClick={handlePrev}
                className="py-2 px-10 bg-gray-400 rounded-md"
              >
                Back
              </div>
            )}
            {step < 5 && (
              <div
                onClick={handleNext}
                className="py-2 px-10 bg-[#FFCD21] rounded-md"
              >
                next
              </div>
            )}
            {step == 5 && (
              <button
                className="py-2 px-10 bg-[#FFCD21] rounded-md"
                type="submit"
              >
                submit
              </button>
            )}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Assessment;
