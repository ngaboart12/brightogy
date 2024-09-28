import * as Yup from "yup";

export const BasickInfomationYup = Yup.object({
  firstName: Yup.string().required("Please enter first name"),
  lastName: Yup.string().required("Please enter last name"),
  dateOfBirth: Yup.date()
    .required("Please enter Birth date")
    .max(
      new Date(new Date().setDate(new Date().getDate() - 1)),
      "Birth date must be past"
    ),
  placeOfBirth: Yup.string().required("Please enter Birth place"),
  nationality: Yup.string().required("Please fill nationality"),
  sex: Yup.string().required("Select Your sex"),
  // contactNumber: Yup.number().required("Please enter your contact number").min(10, "Incorrect number"),
  firstLanguage: Yup.string().required("Please enter language"),
});

export const PassportAddressYup = Yup.object({
  passportNumber: Yup.string().required("Please enter passport number"),
  passportIssuedBy: Yup.string().required("Please enter Issued By"),
  passportExpiryDate: Yup.date().required("Please select expiry date").min(
    new Date(new Date().setDate(new Date().getDate() + 1)),
    "Birth date must be future"
  ),
  ValidTo: Yup.date().required("Please select valid to"),
  country: Yup.string().required("Please select country"),
  district: Yup.string().required("Please enter district "),
  // streetNumber: Yup.string(),
  contactNumber: Yup.number()
    .required("Please enter your contact number")
    .min(10, "Incorrect number"),
  email: Yup.string()
    .required("Please enter email")
    .email("Please enter valid email"),
});
export const FamilyInformationYup = Yup.object({
  fatherName: Yup.string().required("Please enter father name"),
  motherName: Yup.string().required("Please enter mother name"),
  emrgencyName: Yup.string().required("Please enter emergency name"),
  relationship: Yup.string().required("Please enter relationship"),
  emergencyContact: Yup.string().required("Please enter emergency contact"),
  emergencyEmail: Yup.string()
    .required("Please enter  email ")
    .email("Please enter valida email"),
});
export const SchoolInformationYup = Yup.object({
  countryOfPrevSchool: Yup.string().required("Field is Required"),
  namePfPrevSchool: Yup.string().required("Field is Required"),
  levelOfEducation: Yup.string().required("Field is Required"),
  graduationDate: Yup.date().required("Field is Required"),
  primaryLaguage: Yup.string().required("Field is Required"),
  schoolFrom: Yup.string().required("Field is Required"),
  schoolTo: Yup.string().required("Field is Required"),
  degreeName: Yup.string().required("Field is Required"),
  IHaveFromThiSschool: Yup.string().required("Field is Required"),
});
