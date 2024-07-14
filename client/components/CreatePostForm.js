import { Avatar } from "antd";
import { CameraOutlined } from "@ant-design/icons";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const CreatePostForm = ({ content, setContent, postSubmit, handleImage }) => {
  return (
    <div className="card">
      <div className="card-body pb-1">
        <form className="form-group">
          <ReactQuill
            theme="snow"
            className="form-control"
            placeholder="Write somthing..."
            value={content}
            onChange={(e) => setContent(e)}
          />
        </form>
      </div>

      <div className="card-footer d-flex justify-content-between">
        <button
          disabled={!content}
          onClick={postSubmit}
          className="btn btn-primary btn-sm "
        >
          Post
        </button>

        <label>
          <CameraOutlined className="mt-2" />
          <input
            onChange={handleImage}
            type="file"
            accept="images/*"
            hidden
          ></input>
        </label>
      </div>
    </div>
  );
};

export default CreatePostForm;
