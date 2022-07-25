import { useEffect, useState, useContext } from "react";
import styles from "./RegisterPage.module.scss";
import Button from "../../globals/button/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import Axios from "axios";
import Image from "next/image";
import google from "../../../public/google.svg";
import apple from "../../../public/apple.svg";
import facebook from "../../../public/facebook.svg";
import RegisterContext from "../../../context/register-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  checkEmail,
  checkPasswordStrength,
} from "../../globals/funtions/FormValidate";
import axios from "axios";

// const router = useRouter();
const RegisterPage = (props) => {
  const router = useRouter();
  const ctx = useContext(RegisterContext);
  console.log(ctx);
  // Form data is an object which stores email and password of the user from the input fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPass: "",
    error: false,
    remember: false,
  });

  const [formValid, setFormValid] = useState({
    email: true,
    emailExists: false,
    password: true,
    strongPassword: true,
    confirmPass: true,
  });

  const [passVisible, setPassVisible] = useState(false);

  const { email, password, confirmPass, error, remember } = formData;

  useEffect(() => {
    // console.log(formData);
  }, [formData]);

  // This function updates the formData object
  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
    if (field === "email") {
      setFormValid({ ...formValid, [field]: false });
    } else {
      setFormValid({ ...formValid, [field]: true });
    }
  };
  const handlePasswordToggle = () => {
    let temp = passVisible ? false : true;
    setPassVisible(temp);
  };

  // const handleRemember = () => {
  //   remember
  //     ? setFormData({ ...formData, remember: false })
  //     : setFormData({ ...formData, remember: true });
  // };

  const handleValidation = async () => {
    console.log("inside handle validation");
    console.log(email);
    let res = await axios.get(
      // 44.203.60.242
      "http://44.203.60.242:8000/seller-api/sellers/emailExists?email=" + email
    );
    console.log(res.data);
    let userExists = res.data;
    if (userExists) {
      setFormValid({ ...formValid, ["emailExists"]: true });
      return false;
    } else {
      setFormValid({ ...formValid, ["emailExists"]: false });
    }
    if (!checkEmail(email)) {
      setFormValid({ ...formValid, ["email"]: false });
      return false;
    }
    if (!checkPasswordStrength(password)) {
      setFormValid({ ...formValid, ["strongPassword"]: false });
      return false;
    }
    if (password === "") {
      setFormValid({ ...formValid, [password]: false });
      return false;
    }
    if (password != confirmPass && password != "") {
      console.log("checking the pass");
      setFormValid({ ...formValid, [confirmPass]: false });
      alert("Password mismatch");
      return false;
    }

    return true;
  };

  // Function to send data to the backend
  //! If error:- Show the error
  //* If success:- Redirect to the user dashboard or homepage
  const handleSubmit = async (event) => {
    event.preventDefault();
    let isFormValid = await handleValidation();
    console.log("form valid status:" + isFormValid);
    if (isFormValid) {
      console.log("helllloooo");
      console.log(formData);
      ctx.getData(formData);
      router.push("/register/seller-type");
    }
  };

  return (
    <div className={styles.register}>
      <h3>{props.title}</h3>
      <h1>Register</h1>
      <p className={styles.p}>
        Register now to start your journey as seller with company name
      </p>
      {formValid.emailExists ? (
        <p className={styles.errorMessage}>Email already exists !!</p>
      ) : (
        ""
      )}
      {formValid.email ? (
        ""
      ) : (
        <p className={styles.errorMessage}>Please enter a valid email !!</p>
      )}
      {formValid.strongPassword ? (
        ""
      ) : (
        <p className={styles.errorMessage}>
          Please enter a password with atleast: one Upper Case letter one small
          case one number one special character and minmimum 8 characters !!
        </p>
      )}
      <form>
        <div className={styles.formGroup}>
          <input
            style={{
              border: formValid.email ? "" : "1px solid red",
            }}
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChange("email")}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type={passVisible ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handleChange("password")}
            required
          />
          <span className={styles.toggleVisible} onClick={handlePasswordToggle}>
            <FontAwesomeIcon icon={passVisible ? faEye : faEyeSlash} />
          </span>
          <span>{formValid.password}</span>
        </div>

        <div className={styles.formGroup}>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={handleChange("confirmPass")}
            style={{
              border: formValid.confirmPass ? "" : "1px solid red",
            }}
            required
          />
        </div>
        {/* <div className={styles.remember}>
          <div onClick={handleRemember}></div>
          <p>Keep me remembered</p>
        </div> */}
        <Button onClick={handleSubmit}>Register</Button>
      </form>
      {/* <p className={styles.or}>Or join with</p>
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
      </div> */}
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
