import renderHTML from "react-render-html";
import moment from "moment";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  HeartOutlined,
  CommentOutlined,
  DislikeOutlined,
} from "@ant-design/icons";

import { Avatar } from "antd";
import { Card, Flex } from "antd";
import PostImage from "../images/PostImage";

const PostList = ({ posts }) => {
  return (
    <Flex wrap gap="small" align="start" vertical={false} className="py-1">
      {posts &&
        posts.map((post) => (
          <div key={post._id}>
            <Card
              hoverable
              style={{
                width: 366,
                // border: "1px solid crimson",
              }}
              title={
                <div
                  className="d-flex align-item-center justify-content-between"
                  // align={"center"}
                  // justify={"space-between"}
                  style={
                    {
                      // height: "100%",
                      // width: "100%",
                      // border: "1px solid crimson", //
                      // padding: "0",
                      // marginTop: "-24px",
                      // padding: "-24px",
                      // marginLeft: "-24px",
                      // marginBottom: "-20px",
                      // marginRight: "-24px",
                      // height: "100%",
                      // width: "100%",
                    }
                  }
                >
                  {
                    <Avatar
                      style={{
                        backgroundColor: "#fde3cf",
                        verticalAlign: "middle",
                        color: "#f56a00",
                      }}
                    >
                      {post.postedBy.name[0]}
                    </Avatar>
                  }

                  {post.postedBy.name}

                  <small className="text-muted">
                    {moment(post.createdAt).fromNow()}
                  </small>
                </div>
              }
            >
              <div
                className="p-0"
                // align={"center"}
                // justify={"space-between"}
                style={{
                  // height: "100%",
                  // width: "100%",
                  // border: "1px solid crimson", //
                  // padding: "0",
                  marginTop: "-24px",
                  padding: "-24px",
                  marginLeft: "-24px",
                  marginBottom: "-24px",
                  marginRight: "-24px",
                }}
              >
                {" "}
                <div className="p-2">{renderHTML(post.content)}</div>
                <div>{post.image && <PostImage url={post.image.url} />}</div>
                <div
                  // style={{ border: " 1px solid green" }}
                  className="d-flex justify-content-start align-items-end p-1"
                >
                  <div className="p-1 marginRight-5">
                    <big className="ml-10">
                      {" "}
                      <HeartOutlined />
                    </big>{" "}
                    <small className="text-muted">Like</small>
                  </div>
                  <div className="p-1 marginRight-5">
                    <big className="p-1">
                      <DislikeOutlined />
                    </big>
                    Dislike
                  </div>
                  <div className="p-1 marginRight-5">
                    <big className="p-1">
                      <CommentOutlined />
                    </big>
                    Comments
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
    </Flex>
  );
};

export default PostList;
