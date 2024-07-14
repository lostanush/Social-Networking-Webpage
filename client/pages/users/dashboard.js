import { useContext, useState } from "react";
import { UserContext } from "../../context";
import UserRoute from "../../components/router/UserRoute";
import CreatePostForm from "../../components/CreatePostForm";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const dashboard = () => {
  const [state] = useContext(UserContext);
  const [content, setContent] = useState("");
  const router = useRouter();

  const postSubmit = async (e) => {
    e.preventDefault();
    console.log("post : ", content);
    try {
      const { data } = await axios.post("/create-post", { content });
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Post created");
        setContent("");
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
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    // formData.append("content", content);
    console.log([...formData]);
    try {
      const { data } = axios.post("/upload-image", formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserRoute>
      <div className="container-fluid">
        <div className="row py-5 bg-default-img text-light">
          <div className="col text-center">
            <h1>Newsfeed</h1>
          </div>
        </div>

        <div className="row py-3">
          <div className="col-md-8">
            <CreatePostForm
              content={content}
              setContent={setContent}
              postSubmit={postSubmit}
              handleImage={handleImage}
            />
          </div>
          <div className="col-md-4">Sidebar</div>
        </div>
      </div>
    </UserRoute>
  );
};
export default dashboard;
