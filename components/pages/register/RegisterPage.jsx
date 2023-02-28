import { useEffect, useState, useContext } from "react";
import styles from "./RegisterPage.module.scss";
import Button from "../../globals/button/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthContext from "../../../context/Auth/AuthContext";
import axios from "/axios/index.js";
import { FaArrowCircleRight } from "react-icons/fa";
import AlertContext from "../../../context/Alert/AlertContext";
import { RegisterPageSchema } from "../../../utils/validations/validation";
import Input from '../../globals/input/Input'
import SellerType from "./SellerType";
import Info from './Info';
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
  const [active,setActive] = useState(1);
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
              createAlert("This email is already taken", "E");
              return;
            } else {
              setRegisterForm({
                email: values.email,
                password: values.password,
                confirmPass: values.confirmPass,
                page2Filled: true,
              });
              setActive(2)
            }
          });
      })
      .catch((err) => createAlert(err.message, "W"));
  };

  return (
    <div className={styles.register}>
      <h3>{props.title}</h3>
      <h1>Register</h1>
      
      <form>
        <div className={`${styles.step1} ${styles.registerPage} ${active === 1 && styles.active}`}>
        <p>
        Register now to start your journey as seller with us
        </p>
          <div className={styles.formGroup}>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleChange("email")}
            />
          </div>

          <div className={styles.formGroup}>
            <Input
              type='password'
              showPassFunc={true}
              placeholder="Password"
              value={password}
              onChange={handleChange("password")}
            />
          </div>

          <div className={styles.formGroup}>
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPass}
              onChange={handleChange("confirmPass")}
            />
          </div>
          <Button
            onClick={handleSubmit}
            icon={<FaArrowCircleRight />}
          >
            Next
          </Button>
        </div>

        <div className={`${styles.step2} ${active === 2 && styles.active}`}><SellerType setActive={setActive}/></div>
        <div className={`${styles.step3} ${active === 3 && styles.active}`}><Info setActive={setActive}/></div>
      </form>

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
