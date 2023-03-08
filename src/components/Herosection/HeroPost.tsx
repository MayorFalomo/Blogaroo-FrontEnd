import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../helper/Context";
import { StyledHero } from "./Hero.styled";

type Props = {};

const HeroPost = (props: any) => {
  const {user} = useContext(Context)
  return (
    <StyledHero>
      <div className="heroContainer">
        <div
          className="heroImg"
          style={{ backgroundImage: `url(${props.heroPost?.photo})` }}
        ></div>
        <div className="heroCard">
          <ul>
            <p>{props.heroPost.tags} </p>
            <li>{new Date(props.heroPost.createdAt).toDateString()} </li>
          </ul>
          <Link to={`/post/${props?.heroPost._id}`}>
            <h1>{props.heroPost.title}</h1>
          </Link>
          <p className="heroText">{props.heroPost.desc.slice(0, 200)}...</p>
          <div className="profileFlex">
            <div style={{backgroundImage: `url(${props.heroPost?.photo})`}} className="dp"> </div>
            <div className="profileName">
              <Link to={`/get-post/${props.heroPost.username}`}>
                <h2 className="heroUsername">{props.heroPost.username} </h2>
              </Link>
              <p>{props.heroPost.profession} </p>
            </div>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

export default HeroPost;
