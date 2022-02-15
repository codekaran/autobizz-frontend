import { useState } from "react";
import styles from "./RegisterPage.module.scss";
import Button from "../../globals/button/Button";
import Link from "next/link";
import Axios from "axios";

const RegisterPage = ({ title }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:4000/form", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const errEmail = () => {
    return <p>Enter a valid email ID</p>;
  };
  const errPassword = () => {
    return <p>Password should contain atleast 8 characters</p>;
  };

  return (
    <div className={styles.register}>
      <h3>{title}</h3>
      <h1>Register</h1>
      <p>Register now to start your journey as seller with company name</p>
      <form>
        <div className={styles.formGroup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChange("email")}
          />
          {false && errEmail()}
        </div>
        <div className={styles.formGroup}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange("password")}
          />
          {false && errPassword()}
        </div>
        <div className={styles.remember}>
          <div></div>
          <p>Keep me remembered</p>
        </div>
        <Link href="/" passHref>
          <Button onClick={handleSubmit}>Register</Button>
        </Link>
      </form>
      <p className={styles.or}>Or join with</p>
      <div className={styles.container}>
        <div className={styles.google}></div>
        <div className={styles.google}></div>
        <div className={styles.google}></div>
      </div>
      <p className={styles.redirect}>
        Already registered?{" "}
        <Link href="/auth/signup" passHref>
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
