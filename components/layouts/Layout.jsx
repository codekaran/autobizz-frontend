import Header from "../globals/header/Header";
import Footer from "../globals/footer/Footer";
import styles from "./Layout.module.scss";
import AuthState from "../../context/Auth/AuthState";
import setAuthToken from "../../utils/setAuthToken";
import {useEffect} from 'react'
import AlertState from "../../context/Alert/AlertState";
import Alerts from "../globals/Alerts/Alerts";


const Layout = ({ children }) => {
  useEffect(() => {
    window.localStorage.getItem('token') && setAuthToken(window.localStorage.getItem('token'));
  }, [])
  
  return (
    <div className={styles.layout}>
      
      <AuthState>
      <AlertState>
        <Header></Header>
        <Alerts/>
        {children}
        <Footer></Footer>
        </AlertState>
      </AuthState>
      
    </div>
  );
};

export default Layout;
