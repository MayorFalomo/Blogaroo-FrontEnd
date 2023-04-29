import styled from "styled-components";

export const PostStyled = styled.div`
  .postContainer {
    display: flex;
    align-items: center;
  }
  .subContainer {
    width: 400px;
  }
  .postTitle {
    font-size: 32px;
    text-align: left;
    color: white;
    line-height: 40px;
    font-family: 'Josefin sans';
  }
  .postTitle:hover{
    text-decoration: underline;
  }
  .subContainer ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    padding: 20px 5px;
  }
  .subContainer .desc {
    padding: 20px 5px;
    line-height: 30px;
    width: 100%;
    color: rgb(85, 92, 110);
    font-size: 23px;
    font-family: 'Inter';
  }
  .image {
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
      color: rgb(85, 92, 110);
    }
    h3{
      color: #fff;
    }
  }
  .catAndDate {
    display: flex;
    align-items: center;
    gap: 40px;
    font-size: 20px;
    /* margin: 0 5px; */
  }

  .likeAndComment {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    .noOfComments{
      position: absolute;
      right: 30px;
      top: -10px;
      color:white;
    }
  }
  .likeIcon {
    font-size: 25px;
    cursor: pointer;
  }
  .likesText{
    font-size: 18px;
    margin: 15px 5px;
        color: rgb(85, 92, 110);

  }

  @media (max-width:400px) {
    .catAndDate{
      font-size: 16px;
      display: flex;
      gap: 20px;
    }
    .postTitle{
      font-size: 30px;
    }
  }
`;
