import React from "react";
import styles from "./Steps.module.scss";
import Button from "../../globals/button/Button";
import Link from "next/link";

const Step_3 = () => {
  return (
    <div className={styles.step_3}>
      <p className={styles.boldText}>Vehicle Information</p>
      <div className={styles.inputBox}>
        <p className={styles.text}>Condition of vehicle</p>
        <div className={styles.container}>
          <div className={styles.selectBtn}>New</div>
          <div className={styles.selectBtn}>Used</div>
        </div>
      </div>
      <div className={styles.inputBox}>
        <p className={styles.text}>What should be the descrption of ad?</p>
        <textarea placeholder="Enter description here" rows="4" />
      </div>
      <div className={styles.inputBox}>
        <p className={styles.smBoldText}>Upload Picture</p>
        <p className={styles.text}>Picture should be less than 2MB each</p>
        <div className={styles.container}>
          <div className={styles.uploadImage}></div>
          <div className={styles.uploadImage}></div>
          <div className={styles.uploadImage}></div>
        </div>
      </div>
      {/* //TODO: Redirect to ad dashboard */}
      <Link href="/" passHref>
        <Button>Create Ad</Button>
      </Link>
    </div>
  );
};

export default Step_3;
