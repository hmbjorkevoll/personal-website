import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeroSection from "../components/heroSection";
import BlogSection from "../components/blogSection";
import ProjectsSection from "../components/projectsSection";
import AboutSection from "../components/aboutSection";

export default function Home(pageProps) {
  return (
    <div>
      <Head>
        <title>Hans Martin Bjørkevoll - web developer</title>
      </Head>
      <HeroSection />
      <div className={styles.sections}>
        <BlogSection classsName={styles.blogSection} id="blogSection" />
        <ProjectsSection id="projectsSection" />
        <AboutSection id="aboutSection" />
      </div>
    </div>
  );
}
