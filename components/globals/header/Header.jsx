import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import AuthContext from "../../../context/Auth/AuthContext";
import AlertContext from '../../../context/Alert/AlertContext';
import { useContext } from "react";
import { useRouter } from "next/router";
import Button from '../button/Button'
import colors from '../../../variables/colors';
import loadCustomRoutes from "next/dist/lib/load-custom-routes";
import {BiLogInCircle, BiLogOutCircle} from 'react-icons/bi'
const Header = () => {
  const ctx  = useContext(AuthContext);
  const {createAlert} = useContext(AlertContext);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  },[]);
  // let session = window.local;
  
  const router = useRouter();
  const [isBurgerMenuClicked, setIsBurgerMenuClicked] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  
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
          <Link href={ctx.isAuthenticated ? "/ads/create/step-1" : "/login/seller"}>
            <p onClick={handleBurgerClick}>SELL</p>
          </Link>
        </div>
        <div className={styles.container}>
          {ctx.isAuthenticated && ctx.user!==null ? (
            <div>
            <Link href="/user">
              <Button padding='10px 20px'>Hi! &nbsp; <span className={styles.name}>{ctx.user.sellerType==='Owner' ? ctx.user.firstName : ctx.user.companyName}</span></Button>
            </Link>
            <Button onClick={()=>{ctx.logout(); createAlert('Logged out successfully!','S');handleBurgerClick();}} padding='10px 20px' backgroundColor={colors.red} icon={<BiLogOutCircle/>}>Logout</Button>
            </div>
            ) :
             (
            <Link href="/login" passHref>
              <Button padding='10px 20px' onClick={handleBurgerClick} icon={<BiLogInCircle/>}>Login/Register</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;  
