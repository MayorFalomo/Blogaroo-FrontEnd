import axios from "axios";
import { userInfo } from "os";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../helper/Context";
import { ProfileStyled } from "./Profile.styled";
import Userdetails from "../userdetails/Userdetails";

type Props = {};

const Profile = (props: any) => {
  const { user } = useContext(Context);

  const [userInfo, setUserInfo] = useState<any>([]);

  //   console.log(user);
  //   console.log(props.userPost);

  useEffect(() => {
    axios
      .get(`/users/get-user/${props.userPost.username}`)
      .then((res) => setUserInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  // console.log(userInfo);

  return (
    <ProfileStyled>
      <div className="mainContainer">
        <div className="infoContainer">
          {userInfo.map((user: any) => (
            <div key={user._id}>
              <Userdetails user={user} />
            </div>
          ))}
        </div>
        <div className="subContainer">
          <div className="postImage"></div>
          <div className="tagsAndDate">
            <div>{props.userPost.tags}</div>
            <ul>
              <li>{new Date(props.userPost?.createdAt).toDateString()} </li>
            </ul>
          </div>
          <div className="userTitleAndDesc">
            <Link to={`/post/${props.userPost?._id}`}>
              <span>{props.userPost?.title}</span>
            </Link>
            <p>{props.userPost?.desc.slice(0, 120)}... </p>
          </div>
          <div className="userDetails">
            <div className="userDp"></div>
            <div className="flexNames">
              <h3>{props.userPost.username} </h3>
              <span>{props.userPost.profession} </span>
            </div>
          </div>
        </div>
      </div>
    </ProfileStyled>
  );
};

export default Profile;
