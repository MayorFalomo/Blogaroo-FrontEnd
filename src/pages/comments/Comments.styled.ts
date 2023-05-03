import styled from "styled-components";

export const CommentStyled = styled.div`
.Comment{
    position: relative;
}
.seeCommentsMap{
  .mapContainer{
    border-radius: 5px;
    display: flex;
    justify-content: flex-start;
    margin: auto;
    width: 40%;
    padding: 20px 20px;
    font-size: 24px;
  }
  .commentsPageContainer{
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;

  }
  .comments{
        border: 3px rgba(255, 255, 255, 0.12) solid;
        padding: 15px 30px;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
  }
}
.commentsContainer{
    margin: 150px auto;
   .singlePostContainer {
    margin: 50px auto;
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
    height: 70vh;
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
    margin:5px auto;

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
    .commentSuccess{
      display: flex;
      justify-content: center;
      color: green;
      font-size: 24px;
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
      width: 70%;
      height: 400px;
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
    /* background-image: url("../desert.jpg"); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 70px;
    width: 70px;
    border-radius: 50%;
  }
  .singlePostDescription {
    font-size: 32px;
    width: 80%;
    line-height: 35px;
    white-space: pre-wrap;
  }
  .singlePostContainer p{
    margin-top: 5px;
  }
  .comment{
    margin: 30px auto;
    display: flex;
    justify-content: center;
  
  }
  .commentInput{
    height: 100px;
    width: 600px;
    background-color: #121b2a;
    color: white;
    border: none;
    outline: none;
    font-size: 24px;
  }
  .commentInput::placeholder{
    color: white;
    font-size: 21px;
    padding: 10px;
  }
  .submitComment{
    padding: 10px 20px;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    margin: auto;
    cursor: pointer;
  }
  .disabledBtn{
    padding: 10px 20px;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    margin: auto;
  }
  .submitComment{
    padding: 10px 20px;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    margin: auto;
    cursor: pointer;
  }
  .commentSuccess{
    display: flex;
    justify-content: center;
    align-items: center;
    color: green;
    font-size: 24px;
    margin: 20px auto;
  }
  .commentsHeading{
    display: flex;
    justify-content: center;
  }
  }

  @media (max-width: 1200px) {
    .seeCommentsMap{
    .mapContainer{
      width: 80%;
    }
  }
}
  @media (max-width: 550px) {
    .seeCommentsMap{
    .mapContainer{
      width: 100%;
    }
  }
}

  @media (max-width: 400px) {
    .comments{
      font-size: 18px;
      line-height: 30px;
    }
  }
`