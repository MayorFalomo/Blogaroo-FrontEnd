import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import { AppContext, Context } from "../../../helper/Context";
import Profile from "../profile/Profile";
import { UserStyled } from "./Userprofile.styled";

type Props = {};

const UserProfile = (props: any) => {
  // const [posts, setPost] = useState<any>([]);

  const pathname = useParams().username;

  // console.log(pathname);

  const [userPosts, setUserPosts] = useState<any>([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = axios
        .get(`/posts/get-post/${pathname}`)
        .then((res) => setUserPosts(res.data));
      console.log(res);
    };
    fetchProfile();
    //OR JUST USE THIS method JEJELY
    // axios.get(`/posts/get-post/${pathname}`).then((res) => {
    //   console.log(res.data);
    //   setUserPosts(res.data);
    // });
  }, []);

  // console.log(userPosts);

  return (
    <UserStyled>
      <div>
        <Navbar />
        <div className="userProfile">
          {userPosts.map((userPost: any) => (
            <div key={userPost._id}>
              <Profile userPost={userPost} />{" "}
            </div>
          ))}
        </div>
      </div>
    </UserStyled>
  );
};

export default UserProfile;
