import Image from "next/image";
import styles from "../styles/BlogSection.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import sanityClient from "../client";

export default function BlogSection(props) {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt desc) [0..3]{
          publishedAt, title, blurb, slug, mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);

  return (
    <main className={styles.blogSection} id="blogSection">
      <section className={styles.section}>
        <h2 className={styles.h2}>Latest blog posts</h2>
        <Link href={"/post"} passHref>
          <h3 className={styles.h3}>(Click here to view all blog posts)</h3>
        </Link>
        <div className={styles.recentPosts}>
          {postData &&
            postData.map((post) => (
              <article key={post.slug.current} className={styles.postCard}>
                <Link
                  href={"/post/" + post.slug.current}
                  key={post.slug.current}
                  passHref
                >
                  <span>
                    <Image
                      src={post.mainImage.asset.url}
                      alt=""
                      width="400px"
                      height="267px"
                      className={styles.image}
                    />
                    <span>
                      <h3 className={styles.title}>{post.title}</h3>
                      <p className={styles.p}>{post.blurb}</p>
                    </span>
                  </span>
                </Link>
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
            d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
    </main>
  );
}
