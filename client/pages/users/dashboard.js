import { useContext, useState } from "react";
import { UserContext } from "../../context";
import UserRoute from "../../components/router/UserRoute";
import CreatePostForm from "../../components/CreatePostForm";
import { useRouter } from "next/router";
import axios from "axios";

const dashboard = () => {
  const [state] = useContext(UserContext);
  const [content, setContent] = useState("");
  const router = useRouter();

  const postSubmit = (e) => {
    e.preventDefault();
    // console.log("post", content);
    try {
      const { data } = axios.post("/create-post", { content });
      console.log("create post responce : ", data);
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
            />
          </div>
          <div className="col-md-4">Sidebar</div>
        </div>
      </div>
    </UserRoute>
  );
};
export default dashboard;
