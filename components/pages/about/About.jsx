import HeroSection from "../home/HeroSection";
import styles from "./About.module.scss";
import Carousel from "../../layouts/carousel/Carousel";
import Button from "../../globals/button/Button";
import {FaArrowRight} from 'react-icons/fa';

const About = (props) => {
  return (
    <div className={styles.aboutContainer}>
      <HeroSection text="About us"></HeroSection>
      <div className={styles.aboutText}>
        <div className={styles.section1}>
          <h4>Who we are</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            eleifend velit amet, in ante laoreet. Enim adipiscing ullamcorper
            placerat consectetur etiam ut a, eu id. Urna quis odio commodo donec
            felis. Dictum lacus, ac cum ut est eu. Elit velit eget nulla egestas
            justo at et. Purus mauris nascetur pellentesque quam fringilla
            ultrices. Quis dui convallis lacus, sit.
            <br />
            Nulla diam elementum rhoncus amet, ipsum arcu. At metus porta arcu
            sit consequat. Cursus viverra orci aenean viverra auctor sit
            elementum vel. Ligula
          </p>
        </div>
        <div className={styles.section2}>
          <h4>What we have done?</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            aliquet mauris pretium senectus. Cras egestas pretium hendrerit
            suspendisse. Congue nulla diam vulputate fermentum pellentesque in.
            Nunc mattis quam imperdiet venenatis mollis consequat.
          </p>
        </div>
        <div className={styles.section3}>
          <div className={styles.stats}>
            <p className={styles.number}>245</p>
            <p className={styles.name}>TOTAL CARS SOLD</p>
          </div>
          <div className={styles.stats}>
            <p className={styles.number}>365</p>
            <p className={styles.name}>TOTAL CARS PURCHASED</p>
          </div>
          <div className={styles.stats}>
            <p className={styles.number}>25</p>
            <p className={styles.name}>TOTAL CARS PURCHASED</p>
          </div>
        </div>
      </div>
      <Carousel cars={props.carsArray} title="Car details" />
      <div className={styles.ad}></div>
      <div className={styles.contactInfo}>
        <div className={styles.card}>
          <div className={styles.image1}></div>
          <div className={styles.text}>
            <h5>Address</h5>
            <p>
              L1st Floor,, 3 North Avenue, Maker Maxity, Bandra Kurla Complex,
              Bandra East, Mumbai, 400051, India. +91-22-66117150.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image2}></div>
          <div className={styles.text}>
            <h5>Contact</h5>
            <p>+634 6355753937</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image3}></div>
          <div className={styles.text}>
            <h5>Email</h5>
            <p>laurentwallyn@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.left}>
          <h4>How can we help you?</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            eleifend velit amet, in ante laoreet. Enim adipiscing ullamcorper
            placerat consectetur etiam ut a, eu id. Urna quis odio commodo donec
            felis. Dictum lacus, ac cum ut est eu. Elit velit eget nulla egestas
            justo at et. Purus mauris nascetur pellentesque quam fringilla
            ultrices. Quis dui convallis lacus, sit.
          </p>
        </div>
        <div className={styles.right}>
          <input placeholder="Name" type="text" />
          <input placeholder="Email" type="text" />
          <textarea placeholder="Message" />
          <Button icon={<FaArrowRight/>}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
