import styles from "./UserData.module.scss";
import AuthContext from "../../../context/auth-context";
import { useContext, useEffect, useState } from "react";
import { getSession } from "../../globals/funtions/helper";
import { useRouter } from "next/router";
import axios from "axios";
import TextSkeleton from "../../globals/skeletons/text";
import { server } from "../../../variables/server";
const UserData = (props) => {
  let ctx = useContext(AuthContext);
  const router = useRouter();
  const [contentLoaded, setContentLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState({
    decodedToken: {
      firstName: "",
    },
    status: false,
  });
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    mobile: "",
  });
  const [changePassword, setChangePassword] = useState(false);
  const [profileEditMode, setProfileEditMode] =useState(false);
  useEffect(async () => {
    userLoggedInStatus();
  }, []);

  // get data of the user from conttext or local storage
  const userLoggedInStatus = async () => {
    let data = getSession(ctx);
    if (data) {
      setIsLoggedIn(data);
      console.log(data);
      let response = await axios.get(
        `${server.serverURL}/seller-api/sellers/userData/` +
          data.decodedToken.id
      );
      console.log(response);
      setUserData({
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        mobile: response.data.mobile,
        address: response.data.address + " " + response.data.postalCode,
      });
      setContentLoaded(true);
    } else {
      router.push("/login");
    }
  };
  const handlePasswordChangeView = () => {
    setChangePassword(true);
  };

  const handleEditMode = () => (event) => {
    setProfileEditMode(!profileEditMode);
    console.log(profileEditMode);
  };

  return (
    <div className={styles.userData}>
      {console.log(userData)}
      <div className={styles.userDetails}>
        <h3>Profile details <span className={styles.edit} onClick={handleEditMode()}></span></h3>
        <div className={styles.info}>
          <div className={styles.row}>
            <div className={styles.col}>
              <h6>First Name</h6>
              {profileEditMode ? <input className={styles.inputBox} value={userData.firstName} type="text" /> : <p>{userData.firstName}</p>}
              {!contentLoaded && <TextSkeleton></TextSkeleton>}
            </div>
            <div className={styles.col}>
              <h6>Last Name</h6>
              {profileEditMode ? <input className={styles.inputBox} value={userData.lastName} type="text" /> : <p>{userData.lastName}</p>}
              {!contentLoaded && <TextSkeleton></TextSkeleton>}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <h6>Phone</h6>
              {profileEditMode ? <input className={styles.inputBox} value={userData.mobile} type="text" /> : <p>{userData.mobile}</p>}
              {!contentLoaded && <TextSkeleton></TextSkeleton>}
            </div>
            <div className={styles.col}>
              <h6>Email</h6>
              {profileEditMode ? <input className={styles.inputBox} value={userData.email} type="text" /> : <p>{userData.email}</p>}
              {!contentLoaded && <TextSkeleton></TextSkeleton>}
            </div>
            <div className={styles.col}>
              <h6>Address</h6>
              {profileEditMode ? <input className={styles.inputBox} value={userData.address} type="text" /> : <p>{userData.address  }</p>}
              {!contentLoaded && <TextSkeleton></TextSkeleton>}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.password}>
        <h3>Password</h3>
        {changePassword ? (
          <div className={styles.changePassword}>
            <div className={styles.inputPassword}>
              <input placeholder="Current Password" type="password" />
              <input placeholder="New Password" type="password" />
              <input placeholder="Confirm Password" type="password" />
            </div>
            <div className={styles.btn}>
              <p>Forgot password? Change password through email</p>
              <div className={styles.button}>Update</div>
            </div>
          </div>
        ) : (
          <p onClick={handlePasswordChangeView}>Change Password</p>
        )}
      </div>
    </div>
  );
};

export default UserData;
