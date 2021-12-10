import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { FaHome, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import HamburgerButton from "./hamburgerButton";
import { useState, useEffect } from "react";
import MobileNavbar from "./mobileNavbar";

export const Navbar = ({ href, name }) => {
  const [isOpen, setOpen] = useState(false);
  const [scrollable, setScrollable] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
    setScrollable(!scrollable);
    function noScroll() {
      if (scrollable == false) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
    noScroll();
  };

  const homeIconCloseMenu = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <div className={styles.top}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <Link passHref href="/#top">
            <FaHome className={styles.navLink} onClick={homeIconCloseMenu} />
          </Link>
          <div className={styles.hamburgerIcon} onClick={toggleMenu}>
            <HamburgerButton />
          </div>
          <div>{isOpen ? <MobileNavbar changeState={toggleMenu} /> : null}</div>
          <ul className={styles.menuItems}>
            <li className={styles.desktop}>
              <Link passHref href="/#blogSection">
                <a className={styles.blog}>Blog</a>
              </Link>
            </li>
            <li className={styles.desktop}>
              <Link passHref href="/#projectsSection">
                <a className={styles.projects}>Projects</a>
              </Link>
            </li>
            <li className={styles.desktop}>
              <Link href="/#aboutSection">
                <a className={styles.about}>About</a>
              </Link>
            </li>
            <li className={styles.desktop}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.github.com/hmbjorkevoll"
              >
                <FaGithub
                  alt="Github logo"
                  target="_blank"
                  className={styles.navLink}
                />
              </a>
            </li>
            <li className={styles.desktop}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/hans-martin-bj%C3%B8rkevoll/"
              >
                <FaLinkedin alt="Linkedin logo" className={styles.navLink} />
              </a>
            </li>
            <li className={styles.desktop}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/hmbjorkevoll"
              >
                <FaTwitter alt="Twitter logo" className={styles.navLink} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
