import Link from "next/link";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.login}>
      <h3>Seller - buyer</h3>
      <h1>Log In</h1>
      <p>Register now to start your journey as seller with company name</p>
      <Link href="/login/seller" passHref>
        <button>Log In as Seller</button>
      </Link>
      <Link href="/login/buyer" passHref>
        <button>Log In as Buyer</button>
      </Link>
      <p className={styles.sm}>
        Not yet registered?{" "}
        <Link href="/register" passHref>
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
