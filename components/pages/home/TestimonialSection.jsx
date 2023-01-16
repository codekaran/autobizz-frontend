import React from "react";
import styles from "./TestimonialSection.module.scss";
import team from "../../../public/team.png";
import thunderbolt from "../../../public/thunderbolt.png";
import moneybag from "../../../public/money-bag.png";
import Image from "next/image";

const TestimonialSection = () => {
  return (
    <div className={styles.testimonialSection}>
      <div className={styles.textSection}>
        <div className={styles.testimony}>
          <h3>Hear the customer stories</h3>
          <div className={styles.container}>
            <div className={styles.box}>
              <div className={styles.head}>
                <div className={styles.profile}></div>
                <p className={styles.name}>Vikram Thapar</p>
                &#128900;
                <p className={styles.location}>Title, location</p>
              </div>
              <div className={styles.body}>
                @companyname, affiliated and the best cars available only on
                company page ❤️
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.head}>
                <div className={styles.profile}></div>
                <p className={styles.name}>Vikram Thapar</p>
                &#128900;
                <p className={styles.location}>Title, location</p>
              </div>
              <div className={styles.body}>
                @companyname, affiliated and the best cars available only on
                company page ❤️
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.head}>
                <div className={styles.profile}></div>
                <p className={styles.name}>Vikram Thapar</p>
                &#128900;
                <p className={styles.location}>Title, location</p>
              </div>
              <div className={styles.body}>
                @companyname, affiliated and the best cars available only on
                company page ❤️
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.head}>
                <div className={styles.profile}></div>
                <p className={styles.name}>Vikram Thapar</p>
                &#128900;
                <p className={styles.location}>Title, location</p>
              </div>
              <div className={styles.body}>
                @companyname, affiliated and the best cars available only on
                company page ❤️
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.adSection}>
        <div className={styles.googleAd}>Google ads</div>
      </div>
    </div>
  );
};

export default TestimonialSection;
