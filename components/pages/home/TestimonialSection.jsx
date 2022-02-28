import React from "react";
import styles from "./HomePage.module.scss";

const TestimonialSection = () => {
  return (
    <div className={styles.testimonialSection}>
      <div className={styles.chooseUs}>
        <h3>Why choose us?</h3>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.circle}></div>
            <p>Millions of customers ready to buy</p>
          </div>
          <div className={styles.box}>
            <div className={styles.circle}></div>
            <p>Best price promised</p>
          </div>
          <div className={styles.box}>
            <div className={styles.circle}></div>
            <p>Lightning fast deals</p>
          </div>
          <div className={styles.box}>
            <div className={styles.circle}></div>
            <p>Tested and validated vehicles only</p>
          </div>
        </div>
      </div>
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
      <div className={styles.googleAd}>Google ads</div>
    </div>
  );
};

export default TestimonialSection;
