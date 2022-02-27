import { useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import styles from "./Info.module.scss";
import Button from "../../globals/button/Button";
import formValidate from "../../globals/funtions/FormValidate";

const SellerInfo = () => {
  const router = useRouter();
  const [sellerInfo, setSellerInfo] = useState({
    fname: "",
    lname: "",
    phone: "",
    street: "",
    country: "",
    zipCode: "",
    city: "",
  });

  const { fname, lname, phone, street, country, zipCode, city } = sellerInfo;

  const handleChange = (field) => (event) => {
    setSellerInfo({ ...sellerInfo, [field]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(sellerInfo);
    // if (formValidate(sellerInfo)) {
    router.push("/register/success");
    // } else {
    // alert("Invalid details");
    // }
    // Axios.post("http://localhost:4000/form", sellerInfo);
  };

  return (
    <div className={styles.info}>
      <h3>Seller</h3>
      <h1>Info</h1>
      <p>Provide some personal info for smooth and easy journey</p>
      <form action="">
        <input
          type="text"
          placeholder="First Name"
          value={fname}
          onChange={handleChange("fname")}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lname}
          onChange={handleChange("lname")}
          required
        />
        <div className={styles.formGroup}>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={handleChange("phone")}
          />
          <p>This number will not be shown on ads</p>
        </div>
        <input
          type="text"
          placeholder="Street, House no."
          value={street}
          onChange={handleChange("street")}
        />
        <input
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
          type="text"
          placeholder="City"
          value={city}
          onChange={handleChange("city")}
        />
        <Button onClick={handleSubmit}>Get Started</Button>
      </form>
    </div>
  );
};

export default SellerInfo;
