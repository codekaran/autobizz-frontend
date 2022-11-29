import Header from "../globals/header/Header";
import Footer from "../globals/footer/Footer";
import { AuthContexProvider } from "../../context/auth-context";
const Layout = ({ children }) => {
  return (
    <>
      <AuthContexProvider>
        <Header></Header>
        {children}
        <Footer></Footer>
      </AuthContexProvider>
    </>
  );
};

export default Layout;
