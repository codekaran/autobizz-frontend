import {useState,useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./Info.module.scss";
import Button from "../../globals/button/Button";
import { validateForm } from "../../globals/funtions/FormValidate";
import { useContext } from "react";
import {FaSign} from 'react-icons/fa';
import AuthContext from "../../../context/Auth/AuthContext";
import AlertContext from "../../../context/Alert/AlertContext";

const SellerInfo = () => {
  const router = useRouter();
  // variables to store the form data
  const [sellerInfo, setSellerInfo] = useState({
    companyName: "",
    fname: "",
    lname: "",
    phone: "",
    street: "",
    country: "",
    zipCode: "",
    city: "",
  });
  const { companyName, fname, lname, phone, street, country, zipCode, city } =
    sellerInfo;

  //Contexts
  const AuthCtx = useContext(AuthContext);
  const {register, setRegisterForm, registerFormData} = AuthCtx;
  const {page2Filled}= registerFormData;
  const {createAlert} = useContext(AlertContext);

  //
  useEffect(() => {
    !page2Filled && router.push('/register');
  }, [])
  
  
  // variable to check valid form fields
  const [formValid, setFormValid] = useState({
    companyName: true,
    fname: true,
    lname: true,
    phone: true,
    street: true,
    country: true,
    zipCode: true,
    city: true,
  });

  const [errorMessage, setErrorMessage] = useState("no-error");

  const handleChange = (field) => (event) => {
    console.log(event.target.value);
    setSellerInfo({ ...sellerInfo, [field]: event.target.value });
    setFormValid({ ...formValid, [field]: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //setRegisterForm(sellerInfo);  

    let dataObject = {};
    // check if the form is valid
    
    let { validFieldsObj, isFormValid, message } = validateForm(
      sellerInfo,
      registerFormData.sellerType
    );
    console.log(validFieldsObj);
    setFormValid(validFieldsObj);
    
    if (isFormValid) {
      register({...registerFormData,...sellerInfo});
    }
    else{
      createAlert(message,'W');
    }
  };
  return (
    <div className={styles.info}>
      <h3>Seller</h3>
      <h1>Info</h1>
      <p>Provide some personal info for smooth and easy journey</p>
      <p
        style={{ opacity: errorMessage === "no-error" ? 0 : 1 }}
        className={styles.errorMessage}
      >
        {errorMessage}!
      </p>
      <form action="">
        {registerFormData.sellerType == "Owner" ? (
          <>
            {" "}
            <input
              style={{ border: formValid.fname ? "" : "1px solid red" }}
              type="text"
              placeholder="First Name"
              value={fname}
              onChange={handleChange("fname")}
            />
            <input
              type="text"
              style={{ border: formValid.lname ? "" : "1px solid red" }}
              placeholder="Last Name"
              value={lname}
              onChange={handleChange("lname")}
              required
            />
          </>
        ) : (
          <>
            {formValid.companyName}
            <input
              style={{
                border: formValid.companyName ? "" : "1px solid red",
                flex: "1",
              }}
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={handleChange("companyName")}
              // style={{ }}
              required
            />
          </>
        )}

        <div className={styles.formGroup}>
          <input
            type="tel"
            style={{ border: formValid.phone ? "" : "1px solid red" }}
            placeholder="Phone Number"
            value={phone}
            onChange={handleChange("phone")}
          />
          <p>This number will not be shown on ads</p>
        </div>
        <input
          style={{ border: formValid.street ? "" : "1px solid red" }}
          type="text"
          placeholder="Street, House no."
          value={street}
          onChange={handleChange("street")}
        />
        <input
          style={{ border: formValid.country ? "" : "1px solid red" }}
          type="text"
          placeholder="Country"
          value={country}
          onChange={handleChange("country")}
        />
        <input
          type="text"
          placeholder="Zip Code"
          value={zipCode}
          onChange={handleChange("zipCode")}
        />
        <input
          // style={{}}
          type="text"
          placeholder="City"
          value={city}
          onChange={handleChange("city")}
          style={{
            flex: registerFormData.sellerType != "Owner" ? 1 : 0.5,
            border: formValid.city ? "" : "1px solid red",
          }}
        />

        <Button width='100%' onClick={handleSubmit} icon={<FaSign/>}>Get Started</Button>
      </form>
    </div>
  );
};

export default SellerInfo;
