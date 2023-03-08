import styled from "styled-components";

export const ProfileStyled = styled.div`

  .profileSubContainer {
    .userTitleAndDesc{
      width: 100%;
    }
    .userTitleAndDesc span {
      font-size: 30px;
      display: flex;
      line-height: 30px;
      text-align: center;
      margin: 0 10px;
    }
    .userTitleAndDesc p {
      line-height: 30px;
      font-size: 23px;
      margin: 10px auto;
      width: 90%;
    }
    .tagsAndDate {
      display: flex;
      align-items: center;
      gap: 30px;
      margin: 20px 10px;
    }
    .postImage {
      background-color: black;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
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
