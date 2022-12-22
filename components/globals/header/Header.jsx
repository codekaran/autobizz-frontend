import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import AuthContext from "../../../context/auth-context";
import { useContext } from "react";
import { useRouter } from "next/router";
import Button from '../button/Button'

const Header = () => {
  useEffect(() => {
    handleUserData();
    window.addEventListener("resize", handleResize);
    handleResize();
  },[]);
  // let session = window.local;
  let ctx = useContext(AuthContext);
  const router = useRouter();
  const [isBurgerMenuClicked, setIsBurgerMenuClicked] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [userData, setUserData] = useState({});
  
  // function to handle the resize of the window.
  const handleResize = () => {
    if (window.innerWidth > 700) {
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
  };
  
  const handleUserData = () => {
    if (window.localStorage.getItem("userData")) {
      let sessionUser = JSON.parse(window.localStorage.getItem("userData"));
      console.log("in session setting", sessionUser.decodedToken);
      ctx.setLoggedInStatus({
        status: sessionUser.status,
        token: sessionUser.token,
      });
      console.log('coming from handle user data')
      console.log(ctx);
      setUserData({
        status: sessionUser.status,
        ...sessionUser.decodedToken
      });
      console.log(userData)
    }
  };
  
  const handleLogout = ()=>{
    ctx.setLoggedInStatus(
      {decodedToken: {},
      status: false,
      token: "",});
      setUserData({status:false})
      router.push("/login");
  }

  return (
    <div className={styles.header}>
      <div className={styles.company_logo} >
        <div>
          <Link href='/'>
            <p>Home</p>
          </Link>
        </div>
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
            <p onClick={handleBurgerClick}>HOME</p>
          </Link>
          <Link href="/about">
            <p onClick={handleBurgerClick}>ABOUT</p>
          </Link>
          <Link href="/ads/create/step-1">
            <p onClick={handleBurgerClick}>SELL</p>
          </Link>
        </div>
        <div className={styles.container}>
          {ctx.isLoggedIn.status ? (
            <Link href="/user">
              <Button onClick={handleBurgerClick}>Hi! {ctx.isLoggedIn.decodedToken.sellerType==='Owner' ? ctx.isLoggedIn.decodedToken.firstName : ctx.isLoggedIn.decodedToken .companyName}</Button>
            </Link>
            ) :
             (
            <Link href="/login" passHref>
              <Button padding='10px 20px' onClick={handleBurgerClick}>Login/Register</Button>
            </Link>
          )}
          {ctx.isLoggedIn.status ? <Button backgroundColor='#fff' color="#990000" onClick={(e)=>handleLogout()}>Logout</Button> : userData.status ? <Button style={{backgroundColor:'#990000',}} onClick={(e)=>handleLogout()}>Logout</Button> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Header;
