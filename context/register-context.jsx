import React, { useState } from "react";

const RegisterContext = React.createContext({
  data: "",
  getData: () => {},
});
let data = {
  sellerType: "",
  RegistrationType: "",
  email: "",
  password: "",
  confirmPass: "",
  companyName: "",
  fname: "",
  lname: "",
  phone: "",
  street: "",
  country: "",
  zipCode: "",
  city: "",
};
export const RegisterContextProvider = (props) => {
  // getting data from SellerType, RegisterPage, info, Register
  const getData = (val) => {
    console.log("incoming values", val);
    data = { ...data, ...val };
    console.log(data);
  };

  return (
    <RegisterContext.Provider
      value={{
        getData: getData,
        data: data,
      }}
    >
      {props.children}
    </RegisterContext.Provider>
  );
};

export default RegisterContext;
