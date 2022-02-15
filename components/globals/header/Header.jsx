import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.company_logo}>
        <div></div>
      </div>
      <div className={styles.flex_box}>
        <div className={styles.container}>
          <p>About</p>
          <p>Contact</p>
          <p>Sell</p>
        </div>
        <div className={styles.container}>
          <Link href="/login" passHref>
            <button>Login/Register</button>
          </Link>
          <select>
            <option value="0">En</option>
            <option value="1">Ln</option>
            <option value="2">Fr</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
