// pages/[slug].js

// This function tells Next.js which paths to pre-render
export async function getStaticPaths() {
    // Fetch data to determine dynamic paths
    const paths = [
        { params: { slug: 'first-post' } },
        { params: { slug: 'second-post' } },
        // Add more dynamic paths as needed
    ];

    return {
        paths,
        fallback: false // or true or 'blocking'
    };
}

// This function fetches data for the specific `slug`
export async function getStaticProps({ params }) {
    // Fetch data using `params.slug`
    const postData = await fetch(`https://api.example.com/posts/${params.slug}`);
    const post = await postData.json();

    return {
        props: {
            post,
        },
    };
}

// Page component that uses the fetched data
function Post({ post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default Post;
