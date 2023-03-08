import React from "react";
import { PostStyled } from "./Post.styled";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { IoHeartSharp } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { useContext, useState } from "react";
import { Context } from "../helper/Context";
import axios from "axios";


type Props = {};

const Post = (props: any) => {
  const { user } = useContext(Context);

  const navigate = useNavigate()
  const location = useLocation()

  const details = JSON.parse(localStorage.getItem("BlogarooUser") || "{}");
  const [changeColor, setChangeColor] = useState<any>(false);
  const [likesArray, setLikesArray] = useState(props.post.likes);

  const handleAddLike = async () => {
    const likeData = {
      username: user.username,
      photo: user.photo,
      postId: props.post._id,
    };
    await axios
      .put(`posts/likepost`, likeData)
      .catch((err) => console.log(err));
    //SetLikeArray to the previous array then add the new object to the previous array
    setLikesArray([...likesArray, likeData]);
    // console.log(likeData);
  };

  // console.log(props.post.likes, "This is Liked Array");
  

  

  const removeLike = async () => {
    setChangeColor(false);
    const likeData = {
      username: user.username,
      photo: user.photo,
      postId: props.post._id,
    };
    await axios
      .put("posts/unlike-post", likeData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    let filtered = likesArray.filter(
      (item: any) => item.username !== likeData.username
    );
    setLikesArray(filtered);
  };  
  
  

  return (
    <PostStyled>
      {props.post == "" ? (
        <h1>There is no Result </h1>
      ) : (
        <div className="postContainer">
          <div className="subContainer">
            <div
              className="image"
              style={{ backgroundImage: `url(${props.post?.photo})` }}
            ></div>
            <ul>
              <div className="catAndDate">
                {/* <Link to={`/categories/${props.post.tags}`}> */}
                  <p>{props.post.tags}</p>
                {/* </Link> */}
                <li>{new Date(props.post.createdAt).toDateString()}</li>
              </div>
              <div className="likeAndComment">
                <Link to={`/comments/${props.post?._id}`} ><p>
                  {
                        <FaRegComment
                      className="likeIcon"
                      style={{ cursor: "pointer" }}
                      />
                  }{" "}
                </p></Link>

                {likesArray && (
                  <p>
                    {likesArray.some(
                      (e: any) => e.username === user?.username
                    ) ? (
                      <IoHeartSharp
                        onClick={removeLike}
                        style={{
                          color: "red",
                          fontSize: 25,
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <AiOutlineHeart
                        onClick={handleAddLike}
                        style={{ fontSize: 25, cursor: "pointer" }}
                      />
                    )}
                  </p>
                )}
                <p className='noOfComments' >{props.post?.comments.length} </p>
                </div>
              </ul>
              <div className="likesText" >{likesArray && <p> {likesArray.length === 0 ? `No likes Yet!` : `Liked by ${likesArray[0].username} and ${likesArray.length -1} others`}</p>}</div>
            <Link to={`/post/${props.post?._id}`}>
              <h2 className="postTitle">{props.post.title}</h2>
            </Link>
            <p className="desc">{props.post?.desc.slice(0, 120)}...</p>
            <div className="profile">
              <div
                className="profilePic"
                style={{ backgroundImage: `url(${props.post?.photo})` }}
              ></div>
              <div className="names">
                <Link to={`/get-post/${props.post.username}`}>
                  <h3 className="postUsername">{props.post.username} </h3>
                </Link>
                <span>{props.post.profession} </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </PostStyled>
  );
};

export default Post;
