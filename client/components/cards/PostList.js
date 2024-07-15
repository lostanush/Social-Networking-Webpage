const PostList = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-5">
            <div className="card-header">
              <div>images / name / date</div>
            </div>
            <div className="card-body">content...</div>
            <div className="card-footer">likes/unlikes/comments</div>
          </div>
        ))}
    </>
  );
};

export default PostList;
