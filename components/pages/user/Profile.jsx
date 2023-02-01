import styles from "./Profile.module.scss";
import { useContext, useEffect, useState } from "react";
import { getSession } from "../../globals/funtions/helper";
import { useRouter } from "next/router";
import UserAds from "./UserAds";
import ProfileDetails from "../../globals/profileDetails/ProfileDetails";
import { CgProfile } from "react-icons/cg";
import {IoCarSport} from 'react-icons/io5';

const Profile = () => {
  // variables
  // state for the right seciton
  const menuArr = [<ProfileDetails/>,<UserAds></UserAds>];
  const [rightPart, setRightPart] = useState(<ProfileDetails/>);
  // state for highlighting active block
  const [activeNav, setActiveNav] = useState("personal");
  const router = useRouter();
  // functions
  const handleClick = (data) => (event) => {
    console.log(data);
    if (data == "ad") {
      setRightPart(<UserAds></UserAds>);
    } else if (data == "personal") {
      setRightPart(<ProfileDetails/>);
    }
    setActiveNav(data);
  };

  return (
    <div className={styles.profile}>
      <div className={styles.left}>
        <div
          onClick={handleClick("personal")}
          className={styles.navPersonalDetails} 
          id={activeNav === "personal" ? styles.active : ""}
        >
          Account details <CgProfile/>
        </div>
        <div
          id={activeNav === "ad" ? styles.active : ""}
          onClick={handleClick("ad")}
          className={styles.navMyAds}
        >
          My ads <IoCarSport/>
        </div>
      </div>
      <div className={styles.right}>{rightPart}</div>
    </div>
  );
};

export default Profile;
