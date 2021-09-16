import styles from "../styles/HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className={styles.background}>
      <h1 className={styles.heroName}>
        Physiotherapist
        <br />
        turned
        <br />
        web-developer
      </h1>
      <h2 className={styles.tagline}>
        <span className={styles.code}>code</span>{" "}
        <span className={styles.plus}>+ </span>
        <span className={styles.ux}>ux</span>{" "}
        <span className={styles.plus}>+ </span>
        <span className={styles.health}>health</span>
      </h2>
      <div className={styles.triangle}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
    </div>
  );
}
