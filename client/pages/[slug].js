import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export async function getStaticPaths() {
  const paths = [
    { params: { slug: "first-post" } },
    { params: { slug: "second-post" } },
  ];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log("getStaticProps called with params:", params);
  const postData = await fetch(`https://api.example.com/posts/${params.slug}`);
  const post = await postData.json();

  return {
    props: {
      post,
    },
  };
}

// Ensure the component is correctly defined and exported as default
const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
