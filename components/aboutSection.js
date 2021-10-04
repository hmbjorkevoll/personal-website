import styles from "../styles/AboutSection.module.css";
import { useState, useEffect } from "react";
import sanityClient from "../client";

export default function AboutSection() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "about"] {
          title, body, mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setAboutData(data))
      .catch(console.error);
  }, []);
  return (
    <div className={styles.aboutSection} id="aboutSection">
      {aboutData &&
        aboutData.map((about) => (
          <section className={styles.section} key={about.title}>
            <h2 className={styles.h2}>{about.title}</h2>
            <p className={styles.p}>{about.body}</p>
          </section>
        ))}
    </div>
  );
}
