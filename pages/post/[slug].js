import styles from "../../styles/Post.module.css";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../client";
import groq from "groq";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Post = (props) => {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    authorImage,
    body = [],
  } = props;

  return (
    <div className={styles.blogPage}>
      <article className={styles.blogPost}>
        <h1>{title}</h1>
        <span>By {name}</span>
        {categories && (
          <ul>
            Posted in
            {categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        )}
        {authorImage && (
          <div>
            <Image
              width="320px"
              height="240px"
              alt="picture of author"
              src={urlFor(authorImage).width(320).url()}
            />
          </div>
        )}
        <BlockContent
          blocks={body}
          imageOptions={{ w: 450, h: 300, fit: "max" }}
          {...client.config()}
        />
      </article>
    </div>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;
