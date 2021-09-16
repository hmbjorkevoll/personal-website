import Link from "next/link";
import styles from "../styles/Footer.module.css";
import HomeIcon from "./IconHomeNavbar";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <a className={styles.a}>© 2021</a>
      <a className={styles.a}>Hans Martin Bjørkevoll</a>
      <a className={styles.a}>All Rights Reserved</a>
    </div>
  );
};

export default Footer;
