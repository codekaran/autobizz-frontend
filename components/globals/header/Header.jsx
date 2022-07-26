import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
  useEffect(() => {
    console.log(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const [isBurgerMenuClicked, setIsBurgerMenuClicked] = useState(true);

  // function to handle the resize of the window.
  const handleResize = () => {
    if (window.innerWidth > 700) {
      console.log("setting true");
    } else {
      setIsBurgerMenuClicked(false);
    }
  };
  const handleBurgerClick = () => {
    let status = isBurgerMenuClicked ? false : true;
    setIsBurgerMenuClicked(status);
  };

  return (
    <div className={styles.header}>
      <div className={styles.company_logo}>
        <div></div>
      </div>
      <div
        onClick={handleBurgerClick}
        // style={{ display: this.state.burgerClass }}
        className={styles.burger}
      >
        <div
          style={{
            transform: `${
              isBurgerMenuClicked ? "rotate(45deg) translateY(12px)" : ""
            }`,
          }}
          className={styles.big_line}
        ></div>
        <div
          style={{ opacity: `${isBurgerMenuClicked ? 0 : 1}` }}
          className={styles.small_line}
        ></div>
        <div
          style={{
            transform: `${
              isBurgerMenuClicked ? "rotate(-45deg) translateY(-12px)" : ""
            }`,
          }}
          className={styles.big_line}
        ></div>
      </div>
      <div
        style={{
          transform: `${
            isBurgerMenuClicked ? "translateX(0)" : "translateX(100%)"
          }`,
        }}
        className={styles.flex_box}
      >
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
