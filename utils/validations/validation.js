import * as Yup from "yup";

//----------------------------------------------PhoneNumberModal.jsx---------------------------------------------------//
export const phoneNumberModalSchema = Yup.object().shape({
  mobile: Yup.string()
    .required("Please enter a valid mobile number!")
    .matches(/^\d{10}$/, "Please enter a valid mobile number!"),
});

//----------------------------------------------NameModal.jsx---------------------------------------------------//
export const customerNameModalSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Please enter first name")
    .max(15, "Name cant be greater than 15 characters"),
  lastName: Yup.string().max(15, "Name cant be greater than 15 characters"),
});

//----------------------------------------------NameModal.jsx---------------------------------------------------//
export const companyNameModalSchema = Yup.object().shape({
  companyName: Yup.string()
    .required("Please enter company name")
    .max(15, "Name cant be greater than 15 characters"),
});

//----------------------------------------------AddressModal.jsx---------------------------------------------------//
export const AddressModalSchema = Yup.object().shape({
  address: Yup.string().required().max(60),
  postalCode: Yup.string()
    .required()
    .matches(/^\d{4}$/),
  country: Yup.string().required(),
});

//-----------------------------------------------EmailModal.jsx---------------------------------------------------//
export const EmailModalSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter all fields")
    .email("Please enter a valid email"),
  currentPassword: Yup.string().required("Please enter all fields"),
});

//-----------------------------------------------RegisterPage.jsx---------------------------------------------------//
export const RegisterPageSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter all fields")
    .email("Please enter a valid email"),
  password: Yup.string().required("Please enter all fields"),
  confirmPass: Yup.string().required("Please enter all fields"),
});
