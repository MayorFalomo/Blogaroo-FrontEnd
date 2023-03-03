import styled from "styled-components";

export const StyledHero = styled.div`
  margin: 150px auto;
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
  }
  .dp {
    width: 70px;
    height: 70px;
    border-radius: 50%;
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
`;
