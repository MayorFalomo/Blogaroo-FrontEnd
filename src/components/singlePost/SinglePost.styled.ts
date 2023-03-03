import styled from "styled-components";

export const SinglePostStyled = styled.div`
  .singlePostContainer {
    margin: 170px auto;
    .singlePostTags {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }
  }
  .iconFlexContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 2px red solid; */
  }
  .singlePostImg {
    width: 95%;
    height: 60vh;
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    /* border: 2px red solid; */
  }
  .iconFlex {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .singlePostIconFlex {
    display: flex;
    justify-content: center;
    margin: auto;
    .singlePostTitleInput {
      padding: 10px 25px;
      font-size: 20px;
      border-radius: 10px;
      width: 400px;
      border: none;
      outline: none;
    }
    h1 {
      display: flex;
      justify-content: center;
      text-align: center;
      max-width: 500px;
      margin: 20px auto;
      letter-spacing: 1px;
      font-size: 35px;
    }
  }
  .singlePostInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    justify-content: center;
    span {
      margin: 30px auto;
    }
    b {
      color: red;
      cursor: pointer;
      font-size: 23px;
      text-decoration: underline;
    }
    p {
      font-size: 20px;
    }
    .updateSinglePostDescInput {
      max-width: 600px;
      width: 100%;
      height: 300px;
      padding: 20px 30px;
      font-size: 20px;
      border-radius: 10px;
      border: none;
      outline: none;
    }
    .postUpdateBtn {
      padding: 10px 25px;
      font-size: 20px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
    }
    .Author {
      /* border: 2px red solid; */
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .authorsInfo {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 2px;
    }
  }
  .singlePostInfo .authorImg {
    background-color: black;
    background-image: url("../desert.jpg");
    /* background-image: url("./desert.jpg"); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 70px;
    width: 70px;
    border-radius: 50%;
  }
  .singlePostDescription {
    font-size: 23px;
    width: 80%;
    line-height: 35px;
  }
`;
