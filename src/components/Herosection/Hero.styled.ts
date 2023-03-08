import styled from "styled-components";

export const StyledHero = styled.div`
  .heroPostContainer{
    margin: 150px auto;
  }
  .heroImg {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: black;
    max-width: 600px;
    height: 400px;
    width: 100%;
    border-radius: 10px;
  }
  .heroImg img {
    border-radius: 15px;
    width: 100%;
  }
  .dp {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: black;
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .profileFlex {
    display: flex;
    align-items: center;
    gap: 10px;
    .heroUsername:hover {
      text-decoration: underline;
    }
    .profileName {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }
  }
  .heroContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border: 1px green red;
  }
  .heroCard {
    width: 40%;
  }
  .heroCard .heroText {
    font-size: 20px;
    line-height: 30px;
    margin: 10px auto;
    color: rgb(85, 92, 110);
    font-weight: 700;
  }
  .heroCard ul {
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 18px;
    margin: 20px auto;
  }
  .heroCard {
    font-size: 22px;
  }
  .heroUsername {
    font-size: 23px;
  }
  @media (max-width: 950px) {
    .heroContainer{
      /* border: 2px yellow solid; */
      display: flex;
      flex-direction: column;
    }
    .heroCard{
      /* border: 2px red solid; */
      text-align: center;
      width: 90%;
    }
    ul{
      display: flex;
      justify-content:center;
    }
    .profileFlex{
      display: flex;
      justify-content: center;
    }
  }
`;
