import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../styles/AboutSection.module.css";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className={styles.aboutSection}>
      <section className={styles.section}>
        <Link href="/about" passHref>
          <h2 className={styles.h2}>About me:</h2>
        </Link>
        <p className={styles.p}>
          Oh, you&apos;re still here? You actually want to know some stuff about
          me, cool. I&apos;m a former physiotherapist turned web-developer. I
          love to see design come to life, and to make stuff that makes life
          easier! Head into the About page for more info if you are so inclined.
        </p>
      </section>
    </div>
  );
}
