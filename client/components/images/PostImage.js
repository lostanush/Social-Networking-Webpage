const PostImage = ({ url }) => (
  <div
    style={{
      backgroundImage: `url(${url})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      height: "200px",
      width: "100%",
      padding: "2px",
    }}
  ></div>
);
export default PostImage;
