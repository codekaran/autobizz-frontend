import { useEffect, useState } from "react";
import styles from "./RegisterPage.module.scss";
import Button from "../../globals/button/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import Axios from "axios";
import Image from "next/image";
import google from "../../../public/google.svg";
import apple from "../../../public/apple.svg";
import facebook from "../../../public/facebook.svg";

const RegisterPage = (props) => {
  const router = useRouter();

  // Form data is an object which stores email and password of the user from the input fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPass: "",
    error: false,
    remember: false,
  });
  const { email, password, confirmPass, error, remember } = formData;

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // This function updates the formData object
  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleRemember = () => {
    remember
      ? setFormData({ ...formData, remember: false })
      : setFormData({ ...formData, remember: true });
  };

  // Function to send data to the backend
  //! If error:- Show the error
  //* If success:- Redirect to the user dashboard or homepage
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    router.push("/register/seller-type");
    Axios.post(props.URL, formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        // Update error field of formData, if any
        console.log(error);
      });
  };

  return (
    <div className={styles.register}>
      <h3>{props.title}</h3>
      <h1>Register</h1>
      <p>Register now to start your journey as seller with company name</p>
      <form>
        <div className={styles.formGroup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChange("email")}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange("password")}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={handleChange("confirmPass")}
            required
          />
        </div>
        <div className={styles.remember}>
          <div onClick={handleRemember}></div>
          <p>Keep me remembered</p>
        </div>
        <Button onClick={handleSubmit}>Register</Button>
      </form>
      <p className={styles.or}>Or join with</p>
      <div className={styles.container}>
        <div className={styles.icon}>
          <Image src={google} />
        </div>
        <div className={styles.icon}>
          <Image src={apple} />
        </div>
        <div className={styles.icon}>
          <Image src={facebook} />
        </div>
      </div>
      <p className={styles.redirect}>
        Already registered?{" "}
        <Link href="/login/seller" passHref>
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
