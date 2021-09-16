import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../styles/AboutSection.module.css";

export default function AboutSection() {
  return (
    <div className={styles.aboutSection}>
      <section className={styles.section}>
        <h2 className={styles.h2}>About me</h2>
        {/* Insert blog post snippets from latest posts in here */}
        <p className={styles.p}>
          Oh, you're still here? You actually want to know some stuff about me,
          cool. I'm a former physiotherapist turned web-developer. I love to see
          design come to life, and to make stuff that makes life easier! Head
          into the About page for more info if you are so inclined.
        </p>
      </section>
    </div>
  );
}
