import Head from "next/head";
import Image from "next/image";
import ProjectsSection from "../components/projectsSection";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return <ProjectsSection className={styles.projects} />;
}
