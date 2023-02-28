import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./Info.module.scss";
import Button from "../../globals/button/Button";
import { validateForm } from "../../globals/funtions/FormValidate";
import { useContext } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import AuthContext from "../../../context/Auth/AuthContext";
import AlertContext from "../../../context/Alert/AlertContext";
import Input from "../../globals/input/Input";
import { MdAssignment } from "react-icons/md";
import { InfoPageSchemaCompany, InfoPageSchemaOwner } from "../../../utils/validations/validation";
import Select from "../../globals/Select/Select";
import { countries } from "../../../utils/staticData";

const SellerInfo = ({setActive}) => {
  const router = useRouter();
  // variables to store the form data
  const [sellerInfo, setSellerInfo] = useState({
    companyName: "",
    fname: "",
    lname: "",
    phone: "",
    street: "",
    country: "",
    postalCode: "",
    city: "",
    countryCode: "",
  });
  const {
    companyName,
    fname,
    lname,
    phone,
    street,
    country,
    postalCode,
    city,
    countryCode,
  } = sellerInfo;

  //Contexts
  const AuthCtx = useContext(AuthContext);
  const { register, setRegisterForm, registerFormData } = AuthCtx;
  const { page2Filled } = registerFormData;
  const { createAlert } = useContext(AlertContext);

  //
  useEffect(() => {
    // !page2Filled && router.push("/register");
  }, []);

  // variable to check valid form fields
  const [formValid, setFormValid] = useState({
    companyName: true,
    fname: true,
    lname: true,
    phone: true,
    street: true,
    country: true,
    postalCode: true,
    city: true,
    countryCode: true,
  });

  const [errorMessage, setErrorMessage] = useState("no-error");

  const handleChange = (field) => (event) => {
    setSellerInfo({ ...sellerInfo, [field]: event.target.value });
    setFormValid({ ...formValid, [field]: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(registerFormData.sellerType==='Owner')InfoPageSchemaOwner.validate(sellerInfo).then((values)=> register({ ...registerFormData, ...values })).catch(err=> createAlert(err.message,'W'))
    else InfoPageSchemaCompany.validate(sellerInfo).then((values)=> register({ ...registerFormData, ...values })).catch(err=> createAlert(err.message,'W'))

  };
  return (
    <div className={styles.info}>
      <p>Provide some personal info for smooth and easy journey</p>
      <form action="">
        {registerFormData.sellerType == "Owner" ? (
          <>
            {" "}
            <Input
              type="text"
              placeholder="First Name*"
              value={fname}
              onChange={handleChange("fname")}
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={lname}
              onChange={handleChange("lname")}
            />
          </>
        ) : (
          <>
            {formValid.companyName}
            <Input
              
              type="text"
              placeholder="Company Name*"
              value={companyName}
              onChange={handleChange("companyName")}
              // style={{ }}
              
            />
          </>
        )}
        <div className={styles.formGroup}>
        <Select
          options={countries.map(country=> country.code)}
          value={countryCode}
          onChange={handleChange("countryCode")}
        />
          <Input
            type="tel"
            
            placeholder="Phone Number*"
            value={phone}
            onChange={handleChange("phone")}
          />
        </div>
        <Input
          
          type="text"
          placeholder="Street, House no.*"
          value={street}
          onChange={handleChange("street")}
        />
        <Select
          placeholder="Country*"
          options={countries.map(country=> country.country)}
          value={country}
          onChange={handleChange("country")}
        />
        <Input
          type="text"
          placeholder="Postal Code*"
          value={postalCode}
          onChange={handleChange("postalCode")}
        />
        <Input
          // style={{}}
          type="text"
          placeholder="City*"
          value={city}
          onChange={handleChange("city")}
          
        />
        <div className={styles.buttonGroup}>
        <Button onClick={(e)=>{e.preventDefault();setActive(2)}} icon={<FaArrowAltCircleLeft/>}>Back</Button>
        <Button onClick={handleSubmit} icon={<MdAssignment/>}>
          Register
        </Button>
        </div>
      </form>
    </div>
  );
};

export default SellerInfo;
