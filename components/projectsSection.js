import Image from "next/image";
import styles from "../styles/ProjectsSection.module.css";
import Link from "next/link";
import noteAppPic from "../public/noteApp.PNG";
import blogPic from "../public/blogPic.PNG";
import socialProofPic from "../public/socialProof.PNG";
import timeTrackingDashboardPic from "../public/screenshot.PNG";
import { FaGlobe, FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import sanityClient from "../client";

export default function ProjectsSection() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] | order(order asc) {
          title, description, slug, sourcecode, liveproject, mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className={styles.projectsSection}>
      <section className={styles.section}>
        <h2 className={styles.h2}>Projects</h2>
        <div className={styles.projects}>
          {projectData &&
            projectData.map((project) => (
              <article
                key={project.slug.current}
                className={styles.projectCard}
              >
                <Image
                  src={project.mainImage.asset.url}
                  alt=""
                  width="400px"
                  height="267px"
                  className={styles.image}
                />
                <span>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.p}>{project.description}</p>
                </span>
                <div className={styles.buttons}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.sourcecode}
                    className={styles.sourceCode}
                  >
                    {`< > View source code`}
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.liveproject}
                    className={styles.link}
                  >
                    <FaGlobe /> View live project
                  </a>
                </div>
              </article>
            ))}
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
