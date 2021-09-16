import Navbar from "./navbar";
import Footer from "./footer";
import styles from "../styles/Layout.module.css";

export const Layout = ({ children, pageProps }) => {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
