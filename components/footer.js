import styles from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <a className={styles.a}>
        © 2021 Hans Martin Bjørkevoll. All rights reserved
      </a>
    </div>
  );
};

export default Footer;
