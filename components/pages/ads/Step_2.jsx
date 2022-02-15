import React from "react";
import styles from "./Steps.module.scss";
import Button from "../../globals/button/Button";
import Link from "next/link";

const Step_2 = () => {
  return (
    <div className={styles.step_2}>
      <p className={styles.boldText}>Vehicle Information</p>
      <div className={styles.inputBox}>
        <p className={styles.text}>Select your model</p>
        <select name="" id="">
          <option value="0">Select your model</option>
          <option value="0">Select your model</option>
          <option value="0">Select your model</option>
          <option value="0">Select your model</option>
          <option value="0">Select your model</option>
        </select>
      </div>
      <div className={styles.container}>
        <div className={styles.inputBox}>
          <p className={styles.text}>Date of Registration</p>
          <input type="date" className={styles.date} />
        </div>
        <div className={styles.inputBox}>
          <p className={styles.text}>Horse Power</p>
          <input type="number" className={styles.number} placeholder="000" />
        </div>
        <div className={styles.inputBox}>
          <p className={styles.text}>Distance driven</p>
          <input type="number" className={styles.number} placeholder="00000" />
        </div>
      </div>
      <div className={styles.inputBox}>
        <p className={styles.text}>Fuel Type</p>
        <div className={styles.container}>
          <div className={styles.selectBtn}>Petrol</div>
          <div className={styles.selectBtn}>Diesel</div>
          <div className={styles.selectBtn}>CNG</div>
        </div>
      </div>
      <div className={styles.inputBox}>
        <p className={styles.text}>Gear Transmission</p>
        <div className={styles.container}>
          <div className={styles.selectBtn}>Manual</div>
          <div className={styles.selectBtn}>Automatic</div>
        </div>
      </div>
      <Link href="/ad/create/step-3" passHref>
        <Button>Next</Button>
      </Link>
    </div>
  );
};

export default Step_2;
