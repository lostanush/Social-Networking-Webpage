import { Avatar } from "antd";
import { CameraFilled, LoadingOutlined } from "@ant-design/icons";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const CreatePostForm = ({
  content,
  setContent,
  postSubmit,
  handleImage,
  uploading,
  image,
}) => {
  return (
    <div className="card mb-3">
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
          {image && image.url ? (
            <Avatar size={30} src={image.url} />
          ) : uploading ? (
            <LoadingOutlined className="mt-2" />
          ) : (
            <CameraFilled className="mt-2" />
          )}
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
