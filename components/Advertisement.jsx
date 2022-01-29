import { useState } from "react";
import Image from "next/image";
import private_png from "../public/private.png";
import commercial_png from "../public/commercial.png";
import add_png from "../public/add.png";
import styles from "./Advertisement.module.scss";

const Advertisement = () => {
  const [showStep2, setShowStep2] = useState(false);
  const handleProceed = () => {
    setShowStep2(true);
  };
  // Step 1
  const step1 = () => {
    return (
      <div className={styles.step1}>
        <h3>Step 1</h3>
        <form action="">
          <h2 className={styles.big_heading}>Vehicle Information</h2>
          <select className={styles.brand}>
            <option value="0">Select a brand</option>
          </select>
          <p className={styles.small_heading}>Popular brands</p>
          <div className={styles.brand_container}>
            <div className={styles.brand_logo}></div>
            <div className={styles.brand_logo}></div>
            <div className={styles.brand_logo}></div>
            <div className={styles.brand_logo}></div>
            <div className={styles.brand_logo}></div>
            <div className={styles.brand_logo}></div>
            <div className={styles.brand_logo}></div>
          </div>
          <select className={styles.model}>
            <option value="0">Select a Model</option>
          </select>
          <input
            type="number"
            placeholder="Date of registration"
            className={styles.registration}
          />
          <input
            type="number"
            placeholder="Mileage"
            className={styles.mileage}
          />
          <select className={styles.fuel}>
            <option value="0">Type fuel varient</option>
          </select>
          <input
            type="number"
            placeholder="Horse Power"
            className={styles.horsepower}
          />
          <button type="submit" className={styles.btn} onClick={handleProceed}>
            Proceed
          </button>
        </form>
      </div>
    );
  };

  // Step 2
  const step2 = () => {
    return (
      <div className={styles.step2}>
        <h3>Step 2</h3>
        <form action="">
          <h2 className={styles.big_heading} style={{ marginBottom: "16px" }}>
            Seller Info
          </h2>
          <p className={styles.small_heading}>
            Sellers Personal will not be publish in the ads, only the contact
            number given while advertise will be shown on ads.
          </p>
          <input
            type="number"
            placeholder="Phone number"
            className={styles.phone}
          />
          <h4 className={styles.heading}>Type of sale?</h4>
          <div className={styles.container}>
            <div className={styles.box}>
              <Image src={private_png} alt="Image" />
              Private
            </div>
            <div className={styles.box}>
              <Image src={commercial_png} alt="Image" />
              Commercial
            </div>
          </div>
          <h4 className={styles.heading}>Upload Picture</h4>
          <p className={styles.small_heading}>
            Picture should be less than 2MB each
          </p>
          <div className={styles.container}>
            <div className={styles.image}>
              <Image src={add_png} alt="Image" />
            </div>
            <div className={styles.image}>
              <Image src={add_png} alt="Image" />
            </div>
            <div className={styles.image}>
              <Image src={add_png} alt="Image" />
            </div>
          </div>
          <button type="submit" className={styles.btn}>
            Create Ad
          </button>
        </form>
      </div>
    );
  };

  return (
    <main className={styles.advertisement}>
      <h1>Advertisement</h1>
      {showStep2 ? step2() : step1()}
    </main>
  );
};

export default Advertisement;
