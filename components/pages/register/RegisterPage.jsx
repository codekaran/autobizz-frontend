import { useEffect, useState, useContext } from "react";
import styles from "./RegisterPage.module.scss";
import Button from "../../globals/button/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthContext from "../../../context/Auth/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "/axios/index.js";
import { FaSign } from "react-icons/fa";
import AlertContext from "../../../context/Alert/AlertContext";
import { RegisterPageSchema } from "../../../utils/validations/validation";

const RegisterPage = (props) => {
  //Contexts&
  const router = useRouter();
  const { setRegisterForm, registerFormData } = useContext(AuthContext);
  const { page1Filled } = registerFormData;
  const { createAlert } = useContext(AlertContext);
  // Form data is an object which stores email and password of the user from the input fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  // This function updates the formData object
  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };
  const [passVisible, setPassVisible] = useState(false);

  const { email, password, confirmPass } = formData;

  useEffect(() => {
    if (!page1Filled) router.push("/register");
  }, []);

  const handlePasswordToggle = () => {
    let temp = passVisible ? false : true;
    setPassVisible(temp);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    RegisterPageSchema.validate(formData)
      .then((values) => {
        axios
          .get("/seller-api/sellers/emailExists?email=" + values.email)
          .then((res) => {
            if (res.data) {
              createAlert("Email Already Exists", "E");
              return;
            } else {
              setRegisterForm({
                email: values.email,
                password: values.password,
                confirmPass: values.confirmPass,
                page2Filled: true,
              });
              router.push("/register/seller-type");
            }
          });
      })
      .catch((err) => createAlert(err.message, "W"));
  };

  return (
    <div className={styles.register}>
      <h3>{props.title}</h3>
      <h1>Register</h1>
      <p className={styles.p}>
        Register now to start your journey as seller with company name
      </p>
      <form>
        <div className={styles.formGroup}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleChange("email")}
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type={passVisible ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handleChange("password")}
          />
          <span className={styles.toggleVisible} onClick={handlePasswordToggle}>
            <FontAwesomeIcon icon={passVisible ? faEye : faEyeSlash} />
          </span>
        </div>

        <div className={styles.formGroup}>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={handleChange("confirmPass")}
          />
        </div>
        <Button
          margin="10px 0px 0px 0px"
          onClick={handleSubmit}
          icon={<FaSign />}
        >
          Register
        </Button>
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
