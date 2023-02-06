import { formatWithValidation } from "next/dist/shared/lib/utils";

export const formValidate = (form) => {
  for (const key in form) {
    if (form[key] === "") {
      return 0;
    }
  }
  if (!/^\d{10}$/.test(form["phone"])) {
    return 0;
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form["email"])) {
    return 0;
  }
  return 1;
};

export const checkEmail = (email) => {
  console.log("validating the mail");
  if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    return true;
  }
  return false;
};

// atleast one CAP one small number and special character length >=8
export const checkPasswordStrength = (password) => {
  if (
    password.match(
      "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
    )
  ) {
    console.log("strong");
    return true;
  }
};

export const validateForm = (form, sellerType) => {
  let validFieldsObj = {
    companyName: true,
    fname: true,
    lname: true,
    phone: true,
    street: true,
    country: true,
    zipCode: true,
    city: true,
    countryCode: true,
  };

  // if the Owner is getting registered
  if (sellerType === "Owner") {
    console.log("checking for ", sellerType);
    if (!form.fname.match(/^\w/)) {
      validFieldsObj["fname"] = false;
      return {
        validFieldsObj,
        isFormValid: false,
        message: "Invalid First Name!",
      };
    }
    if (!form.lname.match(/^\w/)) {
      validFieldsObj["lname"] = false;
      return {
        validFieldsObj,
        isFormValid: false,
        message: "Invalid Last Name!",
      };
    }
  }
  // if Dealer is getting registered
  if (sellerType === "Dealer") {
    if (!form.companyName.match(/^\w/)) {
      validFieldsObj["companyName"] = false;
      return {
        validFieldsObj,
        isFormValid: false,
        message: "Invalid Company Name!",
      };
    }
  }
  if (!form.phone.match(/[0-9]{10}/i) || form.phone.length !== 10) {
    validFieldsObj["phone"] = false;
    return {
      validFieldsObj,
      isFormValid: false,
      message: "Invalid mobile number!",
    };
  }
  if (!form.street.match(/^\w/)) {
    validFieldsObj["street"] = false;
    return {
      validFieldsObj,
      isFormValid: false,
      message: "Invalid Street Name!",
    };
  }
  if (!form.country.match(/^\w/)) {
    validFieldsObj["country"] = false;
    return {
      validFieldsObj,
      isFormValid: false,
      message: "Invalid Country Name!",
    };
  }
  if (!form.zipCode.match(/[0-9]{4}/) || form.zipCode.length !== 4) {
    validFieldsObj["zipCode"] = false;
    return {
      validFieldsObj,
      isFormValid: false,
      message: "Invalid Zipcode!",
    };
  }
  if (!form.city.match(/^\w/)) {
    validFieldsObj["city"] = false;
    return {
      validFieldsObj,
      isFormValid: false,
      message: "Invalid City Name!",
    };
  }
  if (!form.city.match(/^\w/)) {
    validFieldsObj["countryCode"] = false;
    return {
      validFieldsObj,
      isFormValid: false,
      message: "Invalid country code name!",
    };
  }
  return { validFieldsObj, isFormValid: true, message: "no-error" };
};
