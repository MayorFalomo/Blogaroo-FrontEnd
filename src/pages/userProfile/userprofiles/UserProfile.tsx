import axios from "axios";
import React, { useEffect, useState,} from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import Leftlight from "../../../components/leftlight/Leftlight";
import Navbar from "../../../components/Navbar/Navbar";
import Profile from "../profile/Profile";
import Userdetails from "../userdetails/Userdetails";
import { UserStyled } from "./Userprofile.styled";

type Props = {};

const UserProfile = (props: any) => {

  const pathname = useParams().username;

  const [userPosts, setUserPosts] = useState<any>([]);
   const [userInfo, setUserInfo] = useState<any>([]);
   const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      await axios
        .get(`/posts/get-post/${pathname}`)
        .then((res) => setUserPosts(res.data)).catch((err) => console.log(err));  
      setCompleted(true)
    };
    fetchProfile();
    
    //OR JUST USE THIS method JEJELY
    // axios.get(`/posts/get-post/${pathname}`).then((res) => {
    //   console.log(res.data);
    //   setUserPosts(res.data);
    // });
  }, []);

  

  useEffect(() => {
    axios
      .get(`/users/get-user/${pathname}`)
      .then((res) => setUserInfo(res.data))
      .catch((err) => console.log(err));
  }, []);  
  
  

  return (
    <UserStyled>
      {!completed ? (
        <div className="contain">
          {!loading ? (
            <div className="loaders">
              <span className="loader"></span>
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      ) : (
        <>
          <div className="userProfileContainer" >
        
            <Navbar />
            <div className="detailsContainer" >
              {userInfo.map((user: any) => (
                <div className="subDetailsContainer" key={user._id}>
                  <Userdetails user={user} />
                </div>
              ))}
            </div>
      
            <div className="userConProfile">
              {userPosts.posts?.reverse().map((userPost: any) => (
                <div className="userPostMap" key={userPost._id}>
                  <Profile userPost={userPost} />{" "}
                </div>
              ))}
              <div className="noPost">{userPosts.posts.length === 0 && <h1  >THIS USER HAS NO POST</h1>}</div>
            </div>
           
            <Leftlight />
            <Footer />
          </div>
        </>
      )}
    </UserStyled>
  );
};

export default UserProfile;
