import Navbar from "./navbar";
import Footer from "./footer";

export const Layout = ({ children, pageProps }) => {
  return (
    <>
      <Navbar id="top" />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
