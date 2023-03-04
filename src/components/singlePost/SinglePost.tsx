import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { SinglePostStyled } from "./SinglePost.styled";
import { AiOutlineEdit } from "react-icons/ai";
import desert from "./desert.jpg";
import { Context } from "../../helper/Context";

type Props = {};

const SinglePost = (props: any) => {
  const [post, setPost] = useState<any>({});
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [updateMode, setUpdateMode] = useState<boolean>(false);

  const [userPosts, setUserPosts] = useState<any>([]);

  const { user } = useContext(Context);

  //Using useParams is better than using useLocation and saying split("/") just to get the id from the URL, useParams() does the exact same thing but more straightforward
  const location = useParams();
  //OR USE THIS, WE CALL postId straightUp
  // const { postId } = useParams();

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + location.postId);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setTags(res.data.tags);
    };
    getPost();
  }, [location.postId]);

  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + location.postId, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
        tags,
      });
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SinglePostStyled>
      <div className="singlePostContainer">
        <Navbar />
        <div className="singlePostContainer">
          <div className="singlePostTags">
            {tags}{" "}
            <ul>
              <li> {new Date(post?.createdAt).toDateString()} </li>{" "}
            </ul>
          </div>
          <div className="iconFlexContainer">
            <div className="singlePostIconFlex">
              {updateMode ? (
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="singlePostTitleInput"
                  autoFocus
                />
              ) : (
                <h1>{title} </h1>
              )}
            </div>
          </div>
          <div className="singlePostInfo">
            <div className="Author">
              <div className="authorImg"> </div>
              <div className="authorsInfo">
                <Link to={`/get-post/${post.username}`}>
                  <b>{post?.username} </b>
                </Link>
                <p>{post?.profession} </p>
              </div>
            </div>

            <div
              className="singlePostImg"
              style={{ backgroundImage: `url(${post.photo})` }}
            ></div>
            {post.username === user?.username && (
              <div className="iconFlex">
                <span>
                  {
                    <AiOutlineEdit
                      onClick={() => setUpdateMode(true)}
                      style={{ fontSize: 30, cursor: "pointer" }}
                    />
                  }{" "}
                </span>
                <span onClick={handleDelete}>
                  {<MdDelete style={{ fontSize: 30, cursor: "pointer" }} />}{" "}
                </span>
              </div>
            )}
            {updateMode ? (
              <textarea
                typeof="text"
                value={desc}
                className="updateSinglePostDescInput"
                onChange={(e) => setDesc(e.target.value)}
                style={{whiteSpace: "pre-wrap"}}
              />
            ) : (
              <p className="singlePostDescription" >{desc} </p>
            )}
            {updateMode ? (
              <button className="postUpdateBtn" onClick={handleUpdate}>
                Update{" "}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </SinglePostStyled>
  );
};

export default SinglePost;
