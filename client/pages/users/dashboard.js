import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";
import UserRoute from "../../components/router/UserRoute";
import CreatePostForm from "../../components/CreatePostForm";
import PostList from "../../components/cards/PostList";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const dashboard = () => {
  const [state] = useContext(UserContext);
  //state
  const [content, setContent] = useState("");
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  const [posts, setPosts] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (state?.token) fetchUserPosts();
  }, [state?.token]); // Simplify to state?.token

  const fetchUserPosts = async () => {
    try {
      const { data } = await axios.get("/user-posts");
      console.log("userPosts : ", data);
      console.log("Av : ", data[0].postedBy.name[0]);

      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const postSubmit = async (e) => {
    e.preventDefault();
    // console.log("post : ", content);
    // console.log("image : ", image);

    try {
      const { data } = await axios.post("/create-post", { content, image });
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Post created");
        setContent("");
        setImage({});
        setUploading(false);
      }
    } catch (err) {
      console.error(
        "Error creating post:",
        err.response ? err.response.data : err.message
      );
    }
  };

  //Uploading Image
  const handleImage = async (e) => {
    const file = e.target.files[0]; // console.log("Selected image:", file); // Log the selected image file
    if (!file) {
      console.error("No file selected");
      return;
    }
    let formData = new FormData();
    formData.append("image", file);
    // formData.append("content", content);
    // console.log("Form data:", [...formData]); // Log the form data

    setUploading(true);
    try {
      const { data } = await axios.post("/upload-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // console.log("url : ", data);
      setImage({
        url: data.url,
        public_id: data.public_id,
      });
    } catch (err) {
      setUploading(false);
      console.error(
        "Error uploading image:",
        err.response ? err.response.data : err.message
      );
      toast.error("Failed to upload image");
    }
  };

  return (
    <UserRoute>
      <div className="container-fluid mb-5 ">
        <div className="row py-5 bg-default-img text-light">
          <div className="col text-center">
            <h1>Newsfeed</h1>
          </div>
        </div>

        <div className="row py-3 ">
          <div className="col-md-8">
            <CreatePostForm
              content={content}
              setContent={setContent}
              postSubmit={postSubmit}
              handleImage={handleImage}
              image={image}
              uploading={uploading}
            />

            <PostList posts={posts} />
          </div>

          {/* <pre>{JSON.stringify(posts, null, 4)}</pre> */}

          <div className="col-md-4">Sidebar</div>
        </div>
      </div>
    </UserRoute>
  );
};
export default dashboard;
