import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.logo}></div>
        </div>
        <div className={styles.right}>
          <div className={styles.social}>
            <div className={styles.fb}></div>
            <div className={styles.twitter}></div>
            <div className={styles.linkedin}></div>
          </div>
          <div className={styles.address}>
            <p>
              1st Floor, 3 North Avenue,
              <br /> Maker Maxity, Bandra Kurla Complex,
              <br /> Bandra East, Mumbai, 400051, India. +91-22-66117150.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.nav}>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/sell"}>Sell</Link>
        <Link href={"/login"}>Login/Register</Link>
      </div>
    </div>
  );
};

export default Footer;
