export async function getStaticPaths() {
  console.log("getStaticPaths called");
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
