import React from "react";
import styles from "./Steps.module.scss";
import Button from "../../globals/button/Button";
import Link from "next/link";

const Step_1 = () => {
  return (
    <div className={styles.step_1}>
      <p className={styles.boldText}>What is the Brand of your Vehicle?</p>
      <select>
        <option value="0">Select a brand</option>
        <option value="0">Select a brand</option>
        <option value="0">Select a brand</option>
        <option value="0">Select a brand</option>
        <option value="0">Select a brand</option>
        <option value="0">Select a brand</option>
      </select>
      <p className={styles.text}>Popular brands</p>
      <div className={styles.container}>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
      </div>
      <Link href="/ad/create/step-2" passHref>
        <Button>Next</Button>
      </Link>
    </div>
  );
};

export default Step_1;
