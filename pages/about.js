import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../styles/AboutPage.module.css";
import profilePic from "../public/Profilepicture.jpg";

export default function About() {
  return (
    <div className={styles.aboutPage}>
<div className={styles.triangle}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className={styles.shapeFill}></path>
    </svg>
</div>
      <div className={styles.aboutContents}>
        <h2 className={styles.headline}>About me</h2>
        <Image
          src={profilePic}
          alt="profile picture"
          className={styles.image}
        />
        {/* Insert blog post snippets from latest posts in here */}
        <a className={styles.a}>
          {`Oh, you're still here? You actually want to know some stuff about me,
        cool. I'm a former physiotherapist turned web-developer.`}
        </a>
        <p className={styles.p}>
          I love to see design come to life, and to make stuff that makes life
          easier! In a previous chapter of mye life a worked as a
          physiotherapist in a clinic, seeing 8-20 patients each day. In that
          sense I know what it takes to communicate effectively with a wide
          range of other people, and how to change my communication style to
          each person.
        </p>
        <p className={styles.p}>
          Being able to reach more people than just working 1-to-1 is my biggest
          motivation for taking on this journey into the developer-world.
          Helping more people with better technology is a big part my mission,
          and I look forward to applying my people- and coding-skills going
          forward!
        </p>
      </div>
    </div>
  );
}
