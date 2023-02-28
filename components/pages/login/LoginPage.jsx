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
import Input from "../../globals/input/Input";
import { LoginPageSchema } from "../../../utils/validations/validation";
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
  

  // Form data is an object which stores email and password of the user from the Input fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  // This function updates the formData object
  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  // Function to send data to the backend
  //! If error:- Show the error
  //* If success:- Redirect to the user dashboard or homepage
  const handleSubmit = async (event) => {
      event.preventDefault();
      LoginPageSchema.validate(formData).then((values)=>{
        login(values);
      }).catch(err=>createAlert(err.message,'W'))
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
        Login now to start your journey
      </p>
      <form>
        
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChange("email")}
          />
          <Input
            type='password'
            showPassFunc={true}
            placeholder="Password"
            value={password}
            onChange={handleChange("password")}
          />
        <div className={styles.remember}>
          <div></div>
          <p>Keep me remembered</p>
        </div>
        <Button theme='light' onClick={handleSubmit} icon={<BiLogInCircle/>}>Log In</Button>
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
