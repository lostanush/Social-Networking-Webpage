import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import UserRoute from "../../../components/router/UserRoute";
import CreatePostForm from "../../../components/CreatePostForm";
import { toast } from "react-toastify";

const EditPost = () => {
  const [post, setPost] = useState({});
  const [content, setContent] = useState("");
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);

  const router = useRouter();
  // console.log("router : ", router);
  const _id = router.query._id;

  useEffect(() => {
    if (_id) fetchPost();
    // console.log(_id);
  }, [_id]);

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(`/user-post/${_id}`);
      // console.log(data);
      setPost(data);
      setContent(data.content);
      setImage(data.image);
    } catch (err) {
      console.log(err);
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
      //COMMENT
    }
  };

  const postSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/update-post/${_id}`, {
        content,
        image,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("post created");
        router.push("/users/dashboard");
      }
    } catch (err) {
      console.log(err);
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
          <div className="col-md-8 offset-md-2">
            <CreatePostForm
              content={content}
              setContent={setContent}
              postSubmit={postSubmit}
              handleImage={handleImage}
              image={image}
              uploading={uploading}
            />

            {/* <PostList posts={posts} /> */}
          </div>

          {/* <pre>{JSON.stringify(posts, null, 4)}</pre> */}

          {/* <div className="col-md-4">Sidebar</div> */}
        </div>
      </div>
    </UserRoute>
  );
};

export default EditPost;
