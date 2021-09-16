import styles from "../styles/HamburgerButton.module.css";

const HamburgerButton = (props) => {
  return (
    <button
      alt="Button to toggle menu on mobile devices"
      className={styles.toggleButton}
    >
      <div className={styles.toggleButtonLine}></div>
      <div className={styles.toggleButtonLine}></div>
      <div className={styles.toggleButtonLine}></div>
    </button>
  );
};

export default HamburgerButton;
