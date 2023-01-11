import styles from "./UserData.module.scss";
import AuthContext from "../../../context/Auth/AuthContext";
import { useContext, useEffect, useState } from "react";
import Button from '../../globals/button/Button';
import Loader from "../../globals/skeletons/loader";

const UserData = (props) => {
  const AuthCtx = useContext(AuthContext);
  const {user} = AuthCtx;
  const [changePassword, setChangePassword] = useState(false);

  const handlePasswordChangeView = () => {
    setChangePassword(true);
  };

  return (
    <div className={styles.userData}>

      {user === null ? <Loader></Loader> :
      <>
      <div className={styles.userDetails}>
        <h3>Profile details</h3>
        <div className={styles.info}>
          <div className={styles.row}>

            {user && user.sellerType === 'Dealer' ? 
            //Dealer
            <>
            <div className={styles.col}>
              <h6>Company Name</h6>
              {<p>{user.companyName}</p>}

            </div>
            </> : 
            //Owner
            <>
            <div className={styles.col}>
              <h6>First Name</h6>
              {<p>{user.firstName}</p>}
              
            </div>
            <div className={styles.col}>
              <h6>Last Name</h6>
              {<p>{user.lastName}</p>}
              
            </div>
            </>
          }
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <h6>Phone</h6>
              {<p>{user.mobile}</p>}
              
            </div>
            <div className={styles.col}>
              <h6>Email</h6>
              {<p>{user.email}</p>}
              
            </div>
            <div className={styles.col}>
              <h6>{user.sellerType === 'Dealer' && 'Company '}Address</h6>
              {<p>{user.address}</p>}
              
            </div>
            <div className={styles.col}>
              <h6>Postal Code</h6>
              {<p>{user.postalCode }</p>}
              
            </div>
            <div className={styles.col}>
              <h6>Country</h6>
              {<p>{user.country }</p>}
              
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
      </>
      }
    </div>
  );
};

export default UserData;
