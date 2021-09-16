import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeroSection from "../components/heroSection";
import BlogSection from "../components/blogSection";
import ProjectsSection from "../components/projectsSection";
import AboutSection from "../components/aboutSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className={styles.sections}>
        <BlogSection classsName={styles.blogSection} id="blogSection" />
        <ProjectsSection id="projectsSection" />
        <AboutSection id="aboutSection" />
      </div>
    </div>
  );
}
