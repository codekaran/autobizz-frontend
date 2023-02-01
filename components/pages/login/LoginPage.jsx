import React, { useState ,useEffect} from "react";
import styles from "./LoginPage.module.scss";
import Button from "../../globals/button/Button";
import Link from "next/link";
import AuthContext from "../../../context/Auth/AuthContext";
import { useContext } from "react";
import { useRouter } from "next/router";
import {BiLogInCircle} from 'react-icons/bi';
import AlertContext from "../../../context/Alert/AlertContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginPage = (props) => {
  const {login,error,isAuthenticated} = useContext(AuthContext);
  const router = useRouter();
  const {createAlert} = useContext(AlertContext);
  const [passwordVisibile, setPasswordVisible] = useState(false);

  //useEffect
  useEffect(() => {
  if(error==='password error' || error ==='Seller Does not exists'){
    createAlert('Please use correct credentials','E');
  }
  if(isAuthenticated){
    createAlert('Logged in successfully', 'S');
  }
  }, [error,isAuthenticated])
  

  // Form data is an object which stores email and password of the user from the input fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    emailErr: false,
    passwordErr: false,
  });
  const { email, password} = formData;

  // This function updates the formData object
  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  // Function to send data to the backend
  //! If error:- Show the error
  //* If success:- Redirect to the user dashboard or homepage
  const handleSubmit = async (event) => {
      event.preventDefault();
      if(email==="" || password===""){ createAlert("Please fill all fields",'W'); return;}
      if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){ createAlert("Please enter valid E-mail",'W'); return; }
      login(formData);
  };

  // Show when email is incorrect
  const errEmail = () => {
    return <p>Enter a valid email ID</p>;
  };

  // Show when password is incorrect
  const errPassword = () => {
    return <p>Password should contain atleast 8 characters</p>;
  };

  return (
    <div className={styles.login}>
      <h3>{props.title}</h3>
      <h1>Log In</h1>
      <p className={styles.description}>
        Register now to start your journey as seller with company name
      </p>
      <form>
        <div className={styles.formGroup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChange("email")}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type={passwordVisibile ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handleChange("password")}
          />
          <span className={styles.toggleVisible} onClick={()=>{setPasswordVisible(!passwordVisibile)}}>
            <FontAwesomeIcon icon={passwordVisibile ? faEye : faEyeSlash} />
          </span>
        </div>
        <div className={styles.remember}>
          <div></div>
          <p>Keep me remembered</p>
        </div>
        <Button theme='light' margin='10px 0px 20px 0px' onClick={handleSubmit} icon={<BiLogInCircle/>}>Log In</Button>
      </form>

      <p className={styles.forgot}>
        <Link href="/forgot-password" passHref>
          Forget password
        </Link>
      </p>
      <p className={styles.redirect}>
        Not yet registered?{" "}
        <Link href="/register" passHref>
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
