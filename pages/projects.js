import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projectsPage}>
      <h2>Projects</h2>
      {/* List of projects */}
      <ul>LOTS AND LOTS OF PROJECTS HERE</ul>
    </div>
  );
}
