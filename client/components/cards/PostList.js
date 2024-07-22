import { useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import renderHTML from "react-render-html";
import moment from "moment";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  HeartOutlined,
  CommentOutlined,
  DislikeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import { Avatar } from "antd";
import { Card, Flex } from "antd";
import PostImage from "../images/PostImage";

const PostList = ({ posts, handleDelete }) => {
  const [state] = useContext(UserContext);
  const router = useRouter();

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
                  className="d-flex justify-content-between align-items-end p-1"
                >
                  <div
                    // style={{ border: " 1px solid green" }}
                    className="d-flex align-item-center"
                  >
                    <div className="p-1">
                      <big className="ml-10  mx-1 text-danger">
                        <HeartOutlined />
                      </big>
                      <small className="text-muted">Like</small>
                    </div>

                    <div className="p-1 text-muted">
                      <big className="ml-10  mx-1 ">
                        <DislikeOutlined />
                      </big>
                      <small className="text-muted">dislike</small>
                    </div>

                    <div className="p-1 text-muted">
                      <big className="ml-10  mx-1 ">
                        <CommentOutlined />
                      </big>
                      <small className="text-muted">comments</small>
                    </div>
                  </div>
                  {state &&
                    state.user &&
                    state.user._id === post.postedBy._id && (
                      <div
                        // style={{ border: " 1px solid green" }}
                        className="d-flex justify-content-start align-items-end p-1"
                      >
                        <div className="p-1 marginRight-5">
                          <small className="p-1">
                            <EditOutlined
                              onClick={() => {
                                router.push(`/users/post/${post._id}`);
                              }}
                            />
                          </small>
                        </div>
                        <div className="p-1 marginRight-5">
                          <small className="p-1">
                            <DeleteOutlined
                              className="text-danger"
                              onClick={() => handleDelete(post)}
                            />
                          </small>
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </Card>
          </div>
        ))}
    </Flex>
  );
};

export default PostList;
