import AuthLayout from "./AuthLayout";
import styles from "./Signin.module.scss";
import parent_styles from "./AuthLayout.module.scss";
import Link from "next/link";

const Signin = () => {
  return (
    <AuthLayout>
      <div className={styles.signin}>
        <h3>Seller</h3>
        <h1>Sign In</h1>
        <p>Register now to start your journey as seller with company name</p>
        <form action="">
          <div className={parent_styles.form_group}>
            <input type="email" placeholder="Email" />
            <p className={parent_styles.small_text}>Enter a valid email ID</p>
          </div>
          <div className={parent_styles.form_group}>
            <input type="password" placeholder="Password" />
            <p className={parent_styles.small_text}>
              Password should contain atleast 8 characters
            </p>
          </div>
          <div>
            <p>Keep me remembered</p>
          </div>
          <Link href="/auth/info" passHref><button type="submit">Sign in</button></Link>
        </form>
        <p>Or join with</p>
        <div className={styles.container}>
          <div className={styles.google}></div>
          <div className={styles.google}></div>
          <div className={styles.google}></div>
        </div>
        <p>Not yet registered? Sign up now.</p>
      </div>
    </AuthLayout>
  );
};

export default Signin;
