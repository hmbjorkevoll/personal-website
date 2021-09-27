import Head from "next/head";
import Image from "next/image";
import styles from "../styles/ProjectsSection.module.css";
import Link from "next/link";
import noteAppPic from "../public/noteApp.PNG";
import blogPic from "../public/blogPic.PNG";
import socialProofPic from "../public/socialProof.PNG";
import timeTrackingDashboardPic from "../public/screenshot.PNG";
import { FaGlobe, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsSection() {
  return (
    <main className={styles.projectsSection}>
      <section className={styles.section}>
        <Link href="/projects" passHref>
          <h2 className={styles.h2}>Projects:</h2>
        </Link>
        <div className={styles.projects}>
          <article className={styles.projectCard}>
            <span>
              <Image
                src={noteAppPic}
                alt=""
                width="400px"
                height="267px"
                className={styles.image}
              />
              <span>
                <h3 className={styles.title}>Note taking app</h3>
                <p className={styles.p}>
                  Simple app for taking notes from favourite podcasts, storing
                  the notes in localStorage. Built with HTML and vanilla JSS.
                  Still tweaking the functionality.
                </p>
              </span>
              <div className={styles.buttons}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/hmbjorkevoll/NotesApp"
                  className={styles.sourceCode}
                >
                  {`< > View source code`}
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://hmbjorkevoll.github.io/NotesApp/"
                  className={styles.link}
                >
                  <FaGlobe /> View live project
                </a>
              </div>
            </span>
          </article>
          <article className={styles.projectCard}>
            <span>
              <Image
                src={timeTrackingDashboardPic}
                alt=""
                width="400px"
                height="267px"
                layout="responsive"
                className={styles.image}
              />
              <span>
                <h3 className={styles.title}>
                  Time tracking dashboard - Frontend Mentor
                </h3>
                <p className={styles.p}>
                  Made with Next.js. Training project found on Frontend Mentor.
                  Responsive design, using state to dynamically update cards.
                </p>
              </span>
              <div className={styles.buttons}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/hmbjorkevoll/frontend-mentor/tree/main/time-tracking-dashboard"
                  className={styles.sourceCode}
                >
                  {`< > View source code`}
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://timetracking-dashboard.vercel.app/"
                  className={styles.link}
                >
                  <FaGlobe /> View live project
                </a>
              </div>
            </span>
          </article>
          <article className={styles.projectCard}>
            <span>
              <Image
                src={blogPic}
                alt=""
                width="400px"
                height="267px"
                className={styles.image}
              />
              <span>
                <h3 className={styles.title}>Personal homepage</h3>
                <p className={styles.p}>
                  Made with Next.js and Sanity.io as a learning project, and a
                  way to document and share what I have learned on the way.
                </p>
              </span>
              <div className={styles.buttons}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/hmbjorkevoll/personal-website"
                  className={styles.sourceCode}
                >
                  {`< > View source code`}
                </a>
                <Link href="/" passHref>
                  <a className={styles.link}>
                    <FaGlobe /> View live project
                  </a>
                </Link>
              </div>
            </span>
          </article>
          <article className={styles.projectCard}>
            <span>
              <Image
                src={socialProofPic}
                alt=""
                width="400px"
                height="267px"
                className={styles.image}
              />
              <span>
                <h3 className={styles.title}>
                  Social proof page - Frontend Mentor
                </h3>
                <p className={styles.p}>
                  Made with plain HTML and CSS. Training project found on
                  Frontend Mentor. ONLY OPTIMIZED FOR WIDTHS OF 375px and
                  1440px!
                </p>
              </span>
              <div className={styles.buttons}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/hmbjorkevoll/frontend-mentor/tree/main/socialproof_frontendmentor-main"
                  className={styles.sourceCode}
                >
                  {`< > View source code`}
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://frontend-mentor-silk.vercel.app/"
                  className={styles.link}
                >
                  <FaGlobe /> View live project
                </a>
              </div>
            </span>
          </article>
        </div>
      </section>
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
    </main>
  );
}
