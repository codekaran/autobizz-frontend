import * as Yup from "yup";

//----------------------------------------------PhoneNumberModal.jsx---------------------------------------------------//
export const phoneNumberModalSchema = Yup.object().shape({
  mobile: Yup.string()
    .required("Please enter a valid mobile number!")
    .matches(/^\d{10}$/, "Please enter a valid mobile number!"),
});

//----------------------------------------------NameModal.jsx---------------------------------------------------//
export const customerNameModalSchema = Yup.object().shape({
  firstName: Yup.string().required().max(15),
  lastName: Yup.string().max(15),
});

//----------------------------------------------NameModal.jsx---------------------------------------------------//
export const companyNameModalSchema = Yup.object().shape({
  companyName: Yup.string().required().max(15),
});

//----------------------------------------------AddressModal.jsx---------------------------------------------------//
export const AddressModalSchema = Yup.object().shape({
  address: Yup.string().required().max(60),
  postalCode: Yup.string()
    .required()
    .matches(/^\d{4}$/),
  country: Yup.string().required(),
});
