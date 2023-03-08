import styled from "styled-components";

export const UserDetailsStyled = styled.div`
  .userDetailsContainer {
    border-bottom: 1px rgba(255, 255, 255, 0.12) solid;
    .bgColor {
      height: 300px;
      background-color: black;
      position: relative;
      /* border: 3px red solid; */
    }
    .userImage {
      background-color: black;
      /* background-image: url("../desert.jpg"); */
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border: 2px white solid;
      height: 250px;
      width: 250px;
      border-radius: 50%;
      position: absolute;
      bottom: -70px;
      left: 20px;
    }
    .bioContainer {
      margin: 100px 10px;
      h1 {
        font-size: 40px;
        margin: 10px auto;
      }
      div {
        font-size: 20px;
        margin: 10px auto;
      }
      p {
        font-size: 20px;
      }
      .email {
        margin-bottom: 10px;
      }
    }
    .bio {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .userFormBioContainer {
      /* display: flex; */
      /* justify-content: space-between;
      align-items: center; */
      /* gap: 50px; */
      /* border: 2px red solid; */
    }
    .bioMessage {
      color: green;
      margin-top: 20px;
      text-align: center;
    }
    .updateBioBtn {
      padding: 5px 10px;
    }
    .bioInput {
      padding: 5px 10px;
      border: none;
      outline: none;
    }
  }
`;
