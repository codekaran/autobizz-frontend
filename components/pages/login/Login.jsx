import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { colors } from "../../../variables/colors";
import styles from "./Login.module.scss";
import Button from '../../globals/button/Button'
const Login = () => {
  const router = useRouter();
  useEffect(() => {
    if(localStorage.getItem('userData')){router.push('/')}
  },[]);

  return (
    <div className={styles.login}>
      <h3>Seller - buyer</h3>
      <h1>Log In</h1>
      <p>Register now to start your journey as seller with company name</p>
      <Link href="/login/seller" passHref>
        <Button 
        theme='light'
        padding='10px 80px'
        margin='10px 0px'
        >Log In as Seller</Button>
      </Link>
      <Link href="/login/buyer" passHref>
        <Button 
        theme='light'
        padding='10px 80px'
        margin='10px 0px'
        >Log In as Buyer</Button>
      </Link>
      <p className={styles.sm}>
        Not yet registered?{" "}
        <Link href="/register" passHref>
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
