import Header from "../globals/header/Header";
import Footer from "../globals/footer/Footer";
import { AuthContexProvider } from "../../context/auth-context";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <AuthContexProvider>
        <Header></Header>
        {children}
        <Footer></Footer>
      </AuthContexProvider>
    </div>
  );
};

export default Layout;
