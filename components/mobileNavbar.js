import styles from "../styles/MobileNavbar.module.css";
import Link from "next/link";
import { FaHome, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState } from "react";

const MobileNavbar = ({ changeState, ...rest }) => {
  return (
    <nav className={styles.mobileNavbar}>
      <ul className={styles.menuItems}>
        <li className={styles.mobile}>
          <Link passHref href="/">
            <FaHome
              className={styles.navLink}
              onClick={() => changeState(true)}
            />
          </Link>
        </li>
        <li className={styles.mobile}>
          <Link passHref href="/post">
            <a className={styles.blog} onClick={() => changeState(true)}>
              Blog
            </a>
          </Link>
        </li>
        <li className={styles.mobile}>
          <Link passHref href="/projects">
            <a className={styles.projects} onClick={() => changeState(true)}>
              Projects
            </a>
          </Link>
        </li>
        <li className={styles.mobile}>
          <Link href="/about">
            <a className={styles.about} onClick={() => changeState(true)}>
              About
            </a>
          </Link>
        </li>
        <li className={styles.mobile}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/hmbjorkevoll"
            onClick={() => changeState(true)}
          >
            <FaGithub target="_blank" className={styles.navLink} />
          </a>
        </li>
        <li className={styles.mobile}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/hans-martin-bj%C3%B8rkevoll/"
            onClick={() => changeState(true)}
          >
            <FaLinkedin className={styles.navLink} />
          </a>
        </li>
        <li className={styles.mobile}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/hmbjorkevoll"
            onClick={() => changeState(true)}
          >
            <FaTwitter className={styles.navLink} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
