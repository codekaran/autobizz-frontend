import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import AuthContext from "../../../context/auth-context";
import { useContext } from "react";
import axios from "axios";
import { server } from "../../../variables/server";
const Header = () => {
  useEffect(() => {
    console.log(window.innerWidth);
    handleUserData();
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);
  // let session = window.local;
  let ctx = useContext(AuthContext);
  const [isBurgerMenuClicked, setIsBurgerMenuClicked] = useState(true);
  const [mobileView, setMobileView] = useState(false);
  const [userData, setUserData] = useState({});
  // function to handle the resize of the window.
  const handleResize = () => {
    if (window.innerWidth > 700) {
      console.log("setting true");
      setIsBurgerMenuClicked(true);
      setMobileView(false);
    } else {
      setIsBurgerMenuClicked(false);
      setMobileView(true);
    }
  };
  const handleBurgerClick = () => {
    if (mobileView) {
      let status = isBurgerMenuClicked ? false : true;
      setIsBurgerMenuClicked(status);
    }
    // let status = isBurgerMenuClicked ? false : true;
    // setIsBurgerMenuClicked(status);
  };
  const handleUserData = async () => {
    if (window.localStorage.getItem("userData")) {
      let sessionUser = JSON.parse(window.localStorage.getItem("userData"));
      console.log("in session setting", sessionUser.decodedToken);
      ctx.setLoggedInStatus({
        status: sessionUser.status,
        token: sessionUser.token,
      });
      let response = await axios.get(
        `${server.serverURL}/seller-api/sellers/userData/` +
        sessionUser.decodedToken.id
      );
      setUserData({
        status: sessionUser.status,
        ...response.data
      });
    }
  };

  return (
    <div className={styles.header}>
      {console.log('header userdata')}
      {console.log(userData)}
      <div className={styles.company_logo}>
        <div></div>
      </div>
      {/* burger for mobile view */}
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
          <Link href="/">
            <p onClick={handleBurgerClick}>Home</p>
          </Link>
          <Link href="/about">
            <p onClick={handleBurgerClick}>About</p>
          </Link>
          <Link href="/ads/create/step-1">
            <p onClick={handleBurgerClick}>Sell</p>
          </Link>
        </div>
        <div className={styles.container}>
          {ctx.isLoggedIn.status ? (
            <Link href="/user">
              <button onClick={handleBurgerClick}>Hi! {userData.sellerType==='Owner' ? userData.firstName : userData.companyName}</button>
            </Link>
          ) : userData.status ? (
            <Link href="/user">
              <button onClick={handleBurgerClick}>Hi! {userData.sellerType==='Owner' ? userData.firstName : userData.companyName}</button>
            </Link>
          ) : (
            <Link href="/login" passHref>
              <button onClick={handleBurgerClick}>Login/Register</button>
            </Link>
          )}

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
