"use client";
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase";
import Navbar from "../../components/Navbar";
import LinkComponent from "../../components/LinkComponet";
import Footer from "../../components/Landing/Footer";
import Success from "components/home/Success";
import { useRouter } from "next/navigation";
import {
  BasickInfomationYup,
  FamilyInformationYup,
  PassportAddressYup,
  SchoolInformationYup,
} from "./components/validation/validation";
import { useFormik } from "formik";
import BasicInfomation from "./components/steps/BasicInfomation";
import PassportAddress from "./components/steps/PassportAddress";
import FamilyInformation from "./components/steps/FamilyInformation";
import SchoolInformation from "./components/steps/SchoolInfomation";
import Applica from "./components/steps/Applica";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Apply = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMesasage, setErrorMessage] = useState();
  const [formDataUpdated, setFormDataUpdated] = useState(false);
  const [step, setStep] = useState(1);

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const [isEmail, setIsEmail] = useState(false);

  const [filesImage, setFilesImage] = useState({
    stage1: {
      passport: "",
      diploma: "",
      transcript: "",
      EligibilityLetterports: "",
      NonCriminalRecord: "",
      EnglishProficiency: "",
    },
  });

  const [formData, setFormData] = useState({
    stage1: {
      firstName: "",
      middelName: "",
      lastName: "",
      dateOfBirth: "",
      placeOfBirth: "",
      nationality: "",
      sex: "",
      firstLaguage: "",
    },
    stage2: {
      passportNumber: "",
      passportIssuedBy: "",
      passportExpiryDate: "",
      ValidTo: "",
      country: "",
      district: "",
      streetNumber: "",
      contactNumber: "",
      email: "",
    },
    stage3: {
      fatherName: "",
      fatherContact: "",
      motherName: "",
      motherContact: "",
      emrgencyName: "",
      relationship: "",
      emargencyContact: "",
      emrgencyEmail: "",
    },
    stage4: {
      countryOfPrevSchool: "",
      namePfPrevSchool: "",
      levelOfEducation: "",
      graduationDate: "",
      primaryLaguage: "",
      schoolFrom: "",
      schoolTo: "",
      degreeName: "",
      IHaveFromThiSschool: "",
      applicationSchool: [],
    },
    stage5: {
      diploma: "",
      passport: "",
      transcript: "",
      EligibilityLetterports: "",
      NonCriminalRecord: "",
      EnglishProficiency: "",
    },
  });

  const BasicInfomationFormik = useFormik({
    initialValues: {
      firstName: "",
      middelName: "",
      lastName: "",
      dateOfBirth: "",
      placeOfBirth: "",
      nationality: "",
      sex: "",
      contactNumber: "",
      firstLanguage: "",
    },
    validationSchema: BasickInfomationYup,
    onSubmit: () => {
      setStep(2);
    },
  });

  const PassportAddressFormik = useFormik({
    initialValues: {
      passportNumber: "",
      passportIssuedBy: "",
      passportExpiryDate: "",
      ValidTo: "",
      country: "",
      district: "",
      streetNumber: "",
      contactNumber: "",
      email: "",
    },
    validationSchema: PassportAddressYup,
    onSubmit: () => {
      setStep(3);
    },
  });

  const FamilyInformationFormik = useFormik({
    initialValues: {
      fatherName: "",
      fatherContact: "",
      motherName: "",
      motherContact: "",
      emrgencyName: "",
      relationship: "",
      emergencyContact: "",
      emergencyEmail: "",
    },
    validationSchema: FamilyInformationYup,
    onSubmit: () => {
      setStep(4);
    },
  });

  const SchoolInformationFormik = useFormik({
    initialValues: {
      countryOfPrevSchool: "",
      namePfPrevSchool: "",
      levelOfEducation: "",
      graduationDate: "",
      primaryLaguage: "",
      schoolFrom: "",
      schoolTo: "",
      degreeName: "",
      IHaveFromThiSschool: "",
      applicationSchool: [],
    },
    validationSchema: SchoolInformationYup,
    onSubmit: () => {
      setStep(5);
    },
  });

  // UseEffect for syncing formik values to formData

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      stage1: {
        ...prev.stage1,
        ...BasicInfomationFormik.values,
      },
    }));
  }, [BasicInfomationFormik.values]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      stage2: {
        ...prev.stage2,
        ...PassportAddressFormik.values,
      },
    }));
  }, [PassportAddressFormik.values]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      stage3: {
        ...prev.stage3,
        ...FamilyInformationFormik.values,
      },
    }));
  }, [FamilyInformationFormik.values]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      stage4: {
        ...prev.stage4,
        ...SchoolInformationFormik.values,
      },
    }));
  }, [SchoolInformationFormik.values]);

  console.log(formData.stage4.applicationSchool);

  const metadata = {
    contentDisposition: "attachment",
  };

  const handleInputChange = (stage, inputName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [stage]: {
        ...prevData[stage],
        [inputName]: value,
      },
    }));
  };
  const filesInputHandel = (stage, inputName, value) => {
    const file = value;
    console.log(file);

    // Check isf the file size is less than or equal to 1 MB
    if (file && file.size / (1024 * 1024) > 1) {
      alert(`File size should be less than or equal to 1 MB`);
      value = null; // Clear the input
      return;
    }
    setFilesImage((prevData) => ({
      ...prevData,
      [stage]: {
        ...prevData[stage],
        [inputName]: value,
      },
    }));
  };
  useEffect(() => {
    const createFirestoreDocument = async () => {
      try {
        const docRef = await addDoc(collection(db, "Application"), formData);
        setLoading(false);
        router.push("/success");
        console.log("Document written with ID:", docRef.id);
      } catch (error) {
        console.error("Error adding document:", error);
        setLoading(false);
        window.alert("sorry your application not sent");
      }
    };

    if (formDataUpdated) {
      createFirestoreDocument();
      setFormDataUpdated(false);
    }
  }, [formData, formDataUpdated]);

  const handelSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (
      formData.stage4.applicationSchool != [] &&
      filesImage.stage1.diploma !== "" &&
      filesImage.stage1.passport != "" &&
      filesImage.stage1.transcript !== ""
    ) {
      try {
        setLoading(true);
        const diplomaStorageRef = ref(
          storage,
          `diplomas/${formData.stage1.lastName}`
        );
        const passportStorageRef = ref(
          storage,
          `passports/${formData.stage1.lastName}`
        );
        const transcriptStorageRef = ref(
          storage,
          `transcripts/${formData.stage1.lastName}`
        );
        const EligibilityLetterportsStorageRef = ref(
          storage,
          `EligibilityLetterports/${formData.stage1.lastName}`
        );
        const NonCriminalRecordStorageRef = ref(
          storage,
          `NonCriminalRecord/${formData.stage1.lastName}`
        );
        const EnglishProficiencyStorageRef = ref(
          storage,
          `EnglishProficiency/${formData.stage1.lastName}`
        );
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Upload files and get download URLs
        const [
          diplomaUrl,
          passportUrl,
          transcriptUrl,
          EligibilityLetterportsUrl,
          NonCriminalRecordUrl,
          EnglishProficiencyUrl,
        ] = await Promise.all([
          uploadAndGetUrl(
            diplomaStorageRef,
            filesImage.stage1.diploma,
            metadata
          ),
          uploadAndGetUrl(
            passportStorageRef,
            filesImage.stage1.passport,
            metadata
          ),
          uploadAndGetUrl(
            transcriptStorageRef,
            filesImage.stage1.transcript,
            metadata
          ),
          uploadAndGetUrl(
            EligibilityLetterportsStorageRef,
            filesImage.stage1.EligibilityLetterports,
            metadata
          ),
          uploadAndGetUrl(
            NonCriminalRecordStorageRef,
            filesImage.stage1.NonCriminalRecord,
            metadata
          ),
          uploadAndGetUrl(
            EnglishProficiencyStorageRef,
            filesImage.stage1.EnglishProficiency,
            metadata
          ),
        ]);

        // Update the state within the then block of getDownloadURL
        setFormData((prevData) => ({
          ...prevData,
          stage5: {
            diploma: diplomaUrl,
            passport: passportUrl,
            transcript: transcriptUrl,
            EligibilityLetterports: EligibilityLetterportsUrl,
            NonCriminalRecord: NonCriminalRecordUrl,
            EnglishProficiency: EnglishProficiencyUrl,
          },
        }));

        if (diplomaUrl && passportUrl && transcriptUrl) {
          setFormDataUpdated(true);
        }
      } catch (error) {
        setLoading(false);
        console.error("Error adding document:", error);
      }
    } else {
      setLoading(false);
      setErrorMessage("Please fill All required files");

      alert("Please fill all required field");
    }
  };

  const uploadAndGetUrl = async (storageRef, file, metadata) => {
    await uploadBytes(storageRef, file, metadata);
    return getDownloadURL(storageRef);
  };

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleNext = () => {
    if (step === 1) {
      BasicInfomationFormik.handleSubmit();
    } else if (step === 2) {
      PassportAddressFormik.handleSubmit();
    } else if (step === 3) {
      FamilyInformationFormik.handleSubmit();
    } else if (step === 4) {
      SchoolInformationFormik.handleSubmit();
    }
  };

  return (
    <div className="flex flex-col items-center  w-full overflow-hidden bg-white relative">
      <LinkComponent />
      <Navbar />

      <div className="px-[20px] md:px-[100px] flex w-full flex-col gap-10 items-center justify-center py-10">
        {isModalOpen && <Success onClose={closeModal} />}

        <div className="py-[12px] w-[90%] md:w-1/2 flex items-center justify-center bg-[#07294D] rounded-md ">
          <span className="text-white text-[20px] font-[300]">Application</span>
        </div>

        <div className="w-full  md:pl-[100px] grid grid-cols-3 md:grid-cols-5  ">
          <div className="flex flex-row gap-[20px]">
            <div className="flex flex-col gap-2 items-center">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="28" cy="28" r="28" fill="#07294D" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M35.84 34.1931C35.84 37.4891 31.32 37.8701 27.921 37.8701L27.6778 37.8699C25.5122 37.8646 20 37.7279 20 34.1731C20 30.9444 24.3384 30.5129 27.7115 30.4966L28.1642 30.4963C30.3296 30.5016 35.84 30.6383 35.84 34.1931ZM27.921 31.9961C23.66 31.9961 21.5 32.7281 21.5 34.1731C21.5 35.6311 23.66 36.3701 27.921 36.3701C32.181 36.3701 34.34 35.6381 34.34 34.1931C34.34 32.7351 32.181 31.9961 27.921 31.9961ZM27.921 17.9997C30.849 17.9997 33.23 20.3817 33.23 23.3097C33.23 26.2377 30.849 28.6187 27.921 28.6187H27.889C24.967 28.6097 22.6 26.2267 22.61 23.3067C22.61 20.3817 24.992 17.9997 27.921 17.9997ZM27.921 19.4277C25.78 19.4277 24.038 21.1687 24.038 23.3097C24.031 25.4437 25.76 27.1837 27.892 27.1917L27.921 27.9057V27.1917C30.061 27.1917 31.802 25.4497 31.802 23.3097C31.802 21.1687 30.061 19.4277 27.921 19.4277Z"
                  fill="#FFFDFD"
                />
              </svg>

              <div className="flex flex-col items-center leading-3">
                <span className="text-[#777777] text-[12px] font-[300]">
                  Setp 1
                </span>
                <span className="text-[12px] font-[400] text-[#07294D]">
                  Personal info
                </span>
              </div>
            </div>
            <span className="pt-8">
              <svg
                width="50"
                height="3"
                viewBox="0 0 87 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L86 2"
                  stroke="#07294D"
                  stroke-width="2"
                  stroke-dasharray="20 20"
                />
              </svg>
            </span>
          </div>

          {/* setp 2 */}
          <div className="flex flex-row gap-[20px]">
            <div className="flex flex-col gap-2 items-center">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="28"
                  cy="28"
                  r="28"
                  fill={step >= 2 ? "#07294D" : "#E0EFFF"}
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M35.84 34.1931C35.84 37.4891 31.32 37.8701 27.921 37.8701L27.6778 37.8699C25.5122 37.8646 20 37.7279 20 34.1731C20 30.9444 24.3384 30.5129 27.7115 30.4966L28.1642 30.4963C30.3296 30.5016 35.84 30.6383 35.84 34.1931ZM27.921 31.9961C23.66 31.9961 21.5 32.7281 21.5 34.1731C21.5 35.6311 23.66 36.3701 27.921 36.3701C32.181 36.3701 34.34 35.6381 34.34 34.1931C34.34 32.7351 32.181 31.9961 27.921 31.9961ZM27.921 17.9997C30.849 17.9997 33.23 20.3817 33.23 23.3097C33.23 26.2377 30.849 28.6187 27.921 28.6187H27.889C24.967 28.6097 22.6 26.2267 22.61 23.3067C22.61 20.3817 24.992 17.9997 27.921 17.9997ZM27.921 19.4277C25.78 19.4277 24.038 21.1687 24.038 23.3097C24.031 25.4437 25.76 27.1837 27.892 27.1917L27.921 27.9057V27.1917C30.061 27.1917 31.802 25.4497 31.802 23.3097C31.802 21.1687 30.061 19.4277 27.921 19.4277Z"
                  fill={`${step >= 2 ? "white" : "#123E6C"}`}
                />
              </svg>

              <div className="flex flex-col items-center leading-3">
                <span className="text-[#777777] text-[12px] font-[300]">
                  Setp 2
                </span>
                <span className="text-[12px] text-center font-[400] text-[#07294D]">
                  Passport & Addresses
                </span>
              </div>
            </div>
            <span className="pt-8">
              <svg
                width="50"
                height="3"
                viewBox="0 0 87 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L86 2"
                  stroke="#07294D"
                  stroke-width="2"
                  stroke-dasharray="20 20"
                />
              </svg>
            </span>
          </div>

          {/* setp 3 */}
          <div className="flex flex-row gap-[20px]">
            <div className="flex flex-col gap-2 items-center">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="28"
                  cy="28"
                  r="28"
                  fill={step >= 3 ? "#07294D" : "#E0EFFF"}
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.8866 30.414L27.9995 30.414L28.2521 30.4149C30.1827 30.4276 34.5946 30.6226 34.5946 33.613C34.5946 36.5837 30.3365 36.7775 28.2822 36.7901L27.5211 36.7901C25.5904 36.7774 21.1776 36.5826 21.1776 33.596C21.1776 30.6215 25.5904 30.4275 27.5211 30.4149L27.7737 30.414C27.8129 30.414 27.8505 30.414 27.8866 30.414ZM27.8866 31.914C25.5106 31.914 22.6776 32.206 22.6776 33.596C22.6776 34.9545 25.3415 35.2722 27.6694 35.2902L27.8866 35.291C30.2626 35.291 33.0946 35 33.0946 33.613C33.0946 32.209 30.2626 31.914 27.8866 31.914ZM35.8402 30.0082C38.2632 30.3712 38.7722 31.5092 38.7722 32.4002C38.7722 32.9442 38.5582 33.9372 37.1282 34.4822C37.0402 34.5152 36.9502 34.5312 36.8612 34.5312C36.5592 34.5312 36.2742 34.3472 36.1602 34.0482C36.0122 33.6612 36.2072 33.2272 36.5942 33.0802C37.2722 32.8222 37.2722 32.5372 37.2722 32.4002C37.2722 31.9622 36.7152 31.6562 35.6172 31.4922C35.2082 31.4302 34.9252 31.0492 34.9862 30.6382C35.0472 30.2282 35.4272 29.9552 35.8402 30.0082ZM20.786 30.6382C20.847 31.0492 20.564 31.4302 20.155 31.4922C19.057 31.6562 18.5 31.9622 18.5 32.4002C18.5 32.5372 18.5 32.8212 19.179 33.0802C19.566 33.2272 19.761 33.6612 19.613 34.0482C19.499 34.3472 19.214 34.5312 18.912 34.5312C18.823 34.5312 18.733 34.5152 18.645 34.4822C17.214 33.9362 17 32.9432 17 32.4002C17 31.5102 17.509 30.3712 19.933 30.0082C20.346 29.9562 20.724 30.2282 20.786 30.6382ZM27.8866 20C30.4066 20 32.4556 22.05 32.4556 24.569C32.4556 27.088 30.4066 29.138 27.8866 29.138H27.8596C26.6396 29.134 25.4966 28.656 24.6406 27.792C23.7826 26.929 23.3136 25.783 23.3186 24.566C23.3186 22.05 25.3676 20 27.8866 20ZM27.8866 21.5C26.1946 21.5 24.8186 22.877 24.8186 24.569C24.8156 25.389 25.1296 26.156 25.7046 26.735C26.2796 27.314 27.0456 27.635 27.8616 27.638L27.8866 28.388V27.638C29.5786 27.638 30.9556 26.262 30.9556 24.569C30.9556 22.877 29.5786 21.5 27.8866 21.5ZM34.0756 20.9795C35.8336 21.2685 37.1106 22.7725 37.1106 24.5555C37.1066 26.3505 35.7656 27.8905 33.9906 28.1395C33.9556 28.1445 33.9206 28.1465 33.8866 28.1465C33.5186 28.1465 33.1976 27.8755 33.1446 27.5005C33.0876 27.0895 33.3726 26.7105 33.7836 26.6535C34.8236 26.5075 35.6086 25.6055 35.6106 24.5535C35.6106 23.5105 34.8626 22.6285 33.8316 22.4595C33.4236 22.3925 33.1466 22.0065 33.2136 21.5975C33.2816 21.1885 33.6646 20.9145 34.0756 20.9795ZM22.5596 21.5975C22.6266 22.0065 22.3496 22.3925 21.9416 22.4595C20.9106 22.6285 20.1626 23.5105 20.1626 24.5555C20.1646 25.6055 20.9496 26.5085 21.9886 26.6535C22.3996 26.7105 22.6846 27.0895 22.6276 27.5005C22.5746 27.8755 22.2536 28.1465 21.8856 28.1465C21.8516 28.1465 21.8166 28.1445 21.7816 28.1395C20.0066 27.8905 18.6666 26.3505 18.6626 24.5575C18.6626 22.7725 19.9396 21.2685 21.6976 20.9795C22.1186 20.9135 22.4916 21.1905 22.5596 21.5975Z"
                  fill={`${step >= 3 ? "white" : "#123E6C"}`}
                />
              </svg>

              <div className="flex flex-col items-center leading-3">
                <span className="text-[#777777] text-[12px] font-[300]">
                  Setp 3
                </span>
                <span className="text-[12px] text-center font-[400] text-[#07294D]">
                  Family's information &Emergency
                </span>
              </div>
            </div>
            <span className="pt-8 hidden md:flex">
              <svg
                width="50"
                height="3"
                viewBox="0 0 87 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L86 2"
                  stroke="#07294D"
                  stroke-width="2"
                  stroke-dasharray="20 20"
                />
              </svg>
            </span>
          </div>

          {/* setp 4 */}
          <div className="flex flex-row gap-[20px]">
            <div className="flex flex-col gap-2 items-center">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="28"
                  cy="28"
                  r="28"
                  fill={step >= 4 ? "#07294D" : "#E0EFFF"}
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.717 31.2913C30.921 31.2913 31.901 32.2643 31.901 33.4603V36.5363C31.901 36.7933 32.107 36.9993 32.371 37.0053H34.277C35.779 37.0053 37 35.7993 37 34.3173V25.5933C36.993 25.0833 36.75 24.6033 36.333 24.2843L29.74 19.0263C28.855 18.3253 27.617 18.3253 26.729 19.0283L20.181 24.2823C19.748 24.6113 19.505 25.0913 19.5 25.6103V34.3173C19.5 35.7993 20.721 37.0053 22.223 37.0053H24.147C24.418 37.0053 24.638 36.7903 24.638 36.5263C24.638 36.4683 24.645 36.4103 24.657 36.3553V33.4603C24.657 32.2713 25.631 31.2993 26.826 31.2913H29.717ZM34.277 38.5053H32.353C31.251 38.4793 30.401 37.6143 30.401 36.5363V33.4603C30.401 33.0913 30.094 32.7913 29.717 32.7913H26.831C26.462 32.7933 26.157 33.0943 26.157 33.4603V36.5263C26.157 36.6013 26.147 36.6733 26.126 36.7413C26.018 37.7313 25.172 38.5053 24.147 38.5053H22.223C19.894 38.5053 18 36.6263 18 34.3173V25.6033C18.01 24.6093 18.468 23.6993 19.259 23.1003L25.794 17.8553C27.233 16.7153 29.238 16.7153 30.674 17.8533L37.256 23.1033C38.029 23.6923 38.487 24.6003 38.5 25.5823V34.3173C38.5 36.6263 36.606 38.5053 34.277 38.5053Z"
                  fill={`${step >= 4 ? "white" : "#123E6C"}`}
                />
              </svg>

              <div className="flex flex-col items-center leading-3">
                <span className="text-[#777777] text-[12px] font-[300]">
                  Setp 4
                </span>
                <span className="text-[12px] text-center font-[400] text-[#07294D]">
                  School Information
                </span>
              </div>
            </div>
            <span className="pt-8">
              <svg
                width="50"
                height="3"
                viewBox="0 0 87 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L86 2"
                  stroke="#07294D"
                  stroke-width="2"
                  stroke-dasharray="20 20"
                />
              </svg>
            </span>
          </div>

          {/* setp 4 */}
          <div className="flex flex-row gap-[20px]">
            <div className="flex flex-col gap-2 items-center">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="28"
                  cy="28"
                  r="28"
                  fill={step >= 4 ? "#07294D" : "#E0EFFF"}
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28 18C33.514 18 38 22.486 38 28C38 33.514 33.514 38 28 38C22.486 38 18 33.514 18 28C18 22.486 22.486 18 28 18ZM28 19.5C23.313 19.5 19.5 23.313 19.5 28C19.5 32.687 23.313 36.5 28 36.5C32.687 36.5 36.5 32.687 36.5 28C36.5 23.313 32.687 19.5 28 19.5ZM28.0039 30.7959C28.5569 30.7959 29.0039 31.2429 29.0039 31.7959C29.0039 32.3489 28.5569 32.7959 28.0039 32.7959C27.4509 32.7959 26.9989 32.3489 26.9989 31.7959C26.9989 31.2429 27.4419 30.7959 27.9939 30.7959H28.0039ZM27.9941 23.454C28.4081 23.454 28.7441 23.79 28.7441 24.204V28.623C28.7441 29.037 28.4081 29.373 27.9941 29.373C27.5801 29.373 27.2441 29.037 27.2441 28.623V24.204C27.2441 23.79 27.5801 23.454 27.9941 23.454Z"
                  fill={`${step >= 4 ? "white" : "#123E6C"}`}
                />
              </svg>

              <div className="flex flex-col items-center leading-3">
                <span className="text-[#777777] text-[12px] font-[300]">
                  Setp 5
                </span>
                <span className="text-[12px] text-center font-[400] text-[#07294D]">
                  Documents
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          {step == 1 && (
            <BasicInfomation BasicInfomationFormik={BasicInfomationFormik} />
          )}
          {step == 2 && (
            <PassportAddress PassportAddressFormik={PassportAddressFormik} />
          )}
          {step == 3 && (
            <FamilyInformation
              FamilyInformationFormik={FamilyInformationFormik}
            />
          )}
          {step == 4 && (
            <SchoolInformation
              SchoolInformationFormik={SchoolInformationFormik}
            />
          )}
          {step == 5 && (
            <Applica
              SchoolInformationFormik={SchoolInformationFormik}
              filesImage={filesImage}
              filesInputHandel={filesInputHandel}
              handleInputChange={handleInputChange}
            />
          )}
        </div>
        <div className="flex flex-row w-full justify-end">
          <div className="flex flex-row gap-[20px]">
            <button className="p-3 px-10 bg-[#D9D9D9] rounded-[6px]  text-black">
              Cancel
            </button>
            <button
              onClick={step === 5 ? handelSubmit : handleNext}
              className="p-3 px-10 bg-[#FFCD21] rounded-[6px]  text-black"
            >
              {loading ? "Loading.." : <>{step === 5 ? "Submit" : "Next"}</>}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Apply;
