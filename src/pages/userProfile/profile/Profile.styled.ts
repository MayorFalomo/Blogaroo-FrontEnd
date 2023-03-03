import styled from "styled-components";

export const ProfileStyled = styled.div`
  .subContainer {
    /* border: 3px red solid; */
    width: 400px;
    max-height: 700px;
    margin: 20px 20px;
    .userTitleAndDesc span {
      font-size: 30px;
      display: flex;
      line-height: 30px;
    }
    .userTitleAndDesc p {
      line-height: 30px;
      font-size: 18px;
      margin: 10px auto;
      /* border: 2px green solid; */
    }
    .tagsAndDate {
      display: flex;
      align-items: center;
      gap: 30px;
      margin: 10px auto;
    }
    .postImage {
      background-color: blue;
      background-image: url("../desert.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      max-width: 400px;
      width: 100%;
      height: 300px;
      border-radius: 20px;
    }
    .userDp {
      background-color: blue;
      background-image: url("../desert.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    .userDetails {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;
