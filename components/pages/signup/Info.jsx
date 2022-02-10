import { useState } from "react";
import Axios from "axios";
import styles from "./Info.module.scss";
import Button from "../../globals/button/Button";

const SellerInfo = () => {
  const [sellerInfo, setSellerInfo] = useState({
    fname: "Rishabh",
    lname: "Prakash",
    phone: "123456789",
    street: "xyz",
    country: "abc",
    zipCode: "123456",
    city: "fhg",
  });

  const { fname, lname, phone, street, country, zipCode, city } = sellerInfo;

  const handleChange = (field) => (event) => {
    setSellerInfo({ ...sellerInfo, [field]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(sellerInfo);
    Axios.post("http://localhost:4000/form", sellerInfo);
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
          type="number"
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
