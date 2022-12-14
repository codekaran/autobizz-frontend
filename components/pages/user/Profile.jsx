import styles from "./Profile.module.scss";
import AuthContext from "../../../context/auth-context";
import { useContext, useEffect, useState } from "react";
import { getSession } from "../../globals/funtions/helper";
import { useRouter } from "next/router";
import UserData from "./UserData";
import UserAds from "./UserAds";

const Profile = () => {
  // variables
  // state for the right seciton
  const [rightPart, setRightPart] = useState(<UserData></UserData>);
  // state for highlighting active block
  const [activeNav, setActiveNav] = useState("personal");
  const ctx = useContext(AuthContext);
  const router = useRouter();
  // functions
  const handleClick = (data) => (event) => {
    console.log(data);
    if (data == "ad") {
      setRightPart(<UserAds></UserAds>);
    } else if (data == "personal") {
      setRightPart(<UserData></UserData>);
    }
    setActiveNav(data);
  };
  
  return (
    <div className={styles.profile}>
      <div className={styles.left}>
        <div
          onClick={handleClick("personal")}
          className={styles.navPersonalDetails}
          id={activeNav == "personal" ? styles.active : ""}
        >
          Personal details
        </div>
        <div
          id={activeNav == "ad" ? styles.active : ""}
          onClick={handleClick("ad")}
          className={styles.navMyAds}
        >
          My ads
        </div>
      </div>
      <div className={styles.right}>{rightPart}</div>
    </div>
  );
};

export default Profile;
