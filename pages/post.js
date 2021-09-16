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
              <article key={post.slug.current} className={styles.post}>
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
    </main>
  );
}
