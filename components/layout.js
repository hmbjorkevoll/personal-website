import Navbar from "./navbar";
import Footer from "./footer";

export const Layout = ({ children, pageProps }) => {
  return (
    <>
      <Navbar id="top" />
      <main pageProps={pageProps}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
