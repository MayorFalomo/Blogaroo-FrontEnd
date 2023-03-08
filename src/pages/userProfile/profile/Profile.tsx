import { Link } from "react-router-dom";
import { ProfileStyled } from "./Profile.styled";

type Props = {};

const Profile = (props: any) => {
  

  return (
    <ProfileStyled>
        <div className="profileSubContainer">
          <div className="postImage" style={{backgroundImage: `url(${props.userPost.photo})`}} ></div>
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
    </ProfileStyled>
  );
};

export default Profile;
