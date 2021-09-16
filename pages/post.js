import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Post.module.css";
import sanityClient from "../client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Post(props) {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt desc) {
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
    <main className={styles.feed}>
      <section className={styles.section}>
        <h1 className={styles.headline}>Here are all my blog posts</h1>
        <div className={styles.allPosts}>
          {postData &&
            postData.map((post, index) => (
              <article key={post.slug.current} className={styles.postCard}>
                <Link
                  href={"/post/" + post.slug.current}
                  key={post.slug.current}
                  passHref
                >
                  <span>
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      width="450px"
                      height="300px"
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
