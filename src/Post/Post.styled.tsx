import styled from "styled-components";

export const PostStyled = styled.div`
  /* border: 2px red solid; */
  .postContainer {
    display: flex;
    align-items: center;
  }
  .subContainer {
    /* border: 3px red solid; */
    width: 400px;
  }
  .postTitle {
    font-size: 30px;
    text-align: center;
  }
  .subContainer ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    /* justify-content: space-between; */
    padding: 20px 5px;
  }
  .subContainer .desc {
    padding: 20px 5px;
    line-height: 30px;
    /* border: 2px red solid; */
    width: 100%;
    /* color: #555c68; */
    color: rgb(85, 92, 110);
    font-size: 23px;
    /* overflow: hidden; */
  }
  .image {
    /* background-image: url("../desert.jpg"); */
    max-width: 400px;
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 15px;
  }
  .profilePic {
    height: 70px;
    width: 70px;
    background-color: black;
    background-image: url("../profile3.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
  }
  .profile {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .names {
    display: flex;
    flex-direction: column;
    gap: 7px;
    .postUsername {
      font-size: 23px;
    }
    .postUsername:hover {
      text-decoration: underline;
    }
    span {
      font-size: 20px;
    }
  }
  .catAndDate {
    display: flex;
    align-items: center;
    gap: 40px;
    font-size: 20px;
  }

  .catAndDate p {
    cursor: pointer;
  }
  .likeAndComment {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .likeIcon {
    font-size: 25px;
    cursor: pointer;
  }
  .likesText{
    font-size: 16px;
    margin: 15px auto;
  }
`;
