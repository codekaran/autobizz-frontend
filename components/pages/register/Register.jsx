import Link from "next/link";
import styles from "./Register.module.scss";

const Register = () => {
  return (
    <div className={styles.register}>
      <h3>Seller - buyer</h3>
      <h1>Register</h1>
      <p>Register now to start your journey as seller with company name</p>
      <Link href="/register/seller" passHref>
        <button>Register as Seller</button>
      </Link>
      <Link href="/register/buyer" passHref>
        <button>Register as Buyer</button>
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
