import design from "../../../public/circles.png";
import Image from "next/image";
import styles from "./AuthLayout.module.scss";

const AuthLayout = ({ children }) => {
  return (
        <div className={styles.auth_layout}>
            <div className={styles.top}>
              <Image src={design} alt="Design" />
            </div>
            {children}
            <div className={styles.bottom}>
              <Image src={design} alt="Design" />
            </div>
        </div>
  );
};

export default AuthLayout;
