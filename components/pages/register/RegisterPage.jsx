import { useEffect, useState, useContext } from "react";
import styles from "./RegisterPage.module.scss";
import Button from "../../globals/button/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthContext from "../../../context/Auth/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  checkEmail,
  checkPasswordStrength,
} from "../../globals/funtions/FormValidate";
import axios from "axios";
import {server} from '../../../variables/server';
import { FaSign } from "react-icons/fa";
import AlertContext from "../../../context/Alert/AlertContext";

// const router = useRouter();
const RegisterPage = (props) => {
  const router = useRouter();
  const {setRegisterForm} = useContext(AuthContext);
  const {createAlert} = useContext(AlertContext);
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

  

  // This function updates the formData object
  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
    console.log(field);
    if (field === "email") {
      console.log("setting exist");
      setFormValid({ ...formValid, ["emailExists"]: false, ["email"]: true });
    } else {
      setFormValid({ ...formValid, [field]: true });
    }

    console.log(formValid);
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
    if(email===''||password===''||confirmPass===''){
      createAlert("Please fill out all fields",2);
      return;
    }
    let res = await axios.get(
      // localhost
      `${server.serverURL}/seller-api/sellers/emailExists?email=` + email
    );
    console.log(res.data);
    let userExists = res.data;
    if (userExists) {
      setFormValid({ ...formValid, ["emailExists"]: true });
      createAlert('Account with this e-mail already exists!',2);
      return false;
    } else {
      setFormValid({ ...formValid, ["emailExists"]: false });
    }
    if (!checkEmail(email)) {
      setFormValid({ ...formValid, ["email"]: false });
      createAlert('Please enter valid email!',2);
      return false;
    }
    if (!checkPasswordStrength(password)) {
      setFormValid({ ...formValid, ["strongPassword"]: false });
      createAlert('Password doesnt comform to password policy!',2);
      return false;
    }
    if (password != confirmPass && password != "") {
      setFormValid({ ...formValid, [confirmPass]: false });
      createAlert("Password do not match!", 2);
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
      setRegisterForm({email: formData.email,password: formData.password,confirmPass: formData.confirmPass});
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
      {/* {formValid.emailExists ? (
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
      )} */}
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
            required
          />
        </div>
        {/* <div className={styles.remember}>
          <div onClick={handleRemember}></div>
          <p>Keep me remembered</p>
        </div> */}
        <Button padding='10px 20px' margin='10px 0px 0px 0px' onClick={handleSubmit} icon={<FaSign/>}>Register</Button>
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
