import Link from "next/link";
import styles from "./Register.module.scss";
import { useContext } from "react";
import RegisterContext from "../../../context/register-context";
import Button from '../../globals/button/Button'

const Register = () => {
  let ctx = useContext(RegisterContext);
  console.log(ctx);
  return (
    <div className={styles.register}>
      <h3>Seller - buyer</h3>
      <h1>Register</h1>
      <p>Register now to start your journey as seller with company name</p>
      <Link href="/register/seller" passHref>
        <Button 
          theme='light'
          padding='10px 60px'
          margin='20px 0px 10px 0px'
          onClick={() => {
            ctx.getData({ RegistrationType: "Seller" });
          }}
        >
          Register as Seller
        </Button>
      </Link>
      <Link href="/register/buyer" passHref>
        <Button 
          theme='light'
          padding='10px 60px'
          margin='10px 0px 20px 0px'
          onClick={() => {
            ctx.getData({ RegistrationType: "Buyer" });
          }}
        >
          Register as Buyer
        </Button>
      </Link>
      <p className={styles.sm}>
        Already registered?{" "}
        <Link href="/login" passHref>
          Log In
        </Link>
      </p>
    </div>
  );
};

export default Register;
