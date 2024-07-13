import { Avatar } from "antd";

const CreatePostForm = ({ content, setContent, postSubmit }) => {
  return (
    <div className="card">
      <div className="card-body pb-1">
        <form className="form-group">
          <textarea
            className="form-control"
            placeholder="Write somthing..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </form>
      </div>
      <div className="card-footer">
        <button
          disabled={!content}
          onClick={postSubmit}
          className="btn btn-primary btn-sm mt-1"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePostForm;
