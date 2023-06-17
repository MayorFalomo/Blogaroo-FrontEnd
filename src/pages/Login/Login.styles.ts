import styled from "styled-components";

export const LoginStyled = styled.div`
  .loginContainer {
    display: flex;
    justify-content: center;
    height: 100vh;
    position: relative;
    background-color: #000;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
  }
  .loginContainer form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .subContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: 2px red solid; */
      /* max-width: 100%; */
      /* width: 800px; */
      width: 100%;

  }
  .shadowCon {
    border-radius: 10px;
    background-color: white;
    color: black;
    padding: 50px 50px;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    width: 600px;
  max-width: 60%;
  @media (max-width: 620px ) {
    max-width: 90%;
  }
  }
  .subContainer form {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .loginTitle {
    font-size: 45px;
    margin: 20px auto;
    text-align: center;
  }
  .userInput{
    width: 100%;
  }
  .hidePassword{
    width: 100%;
    margin-bottom: 30px;
  }
  form input {
    padding: 10px 25px;
    margin: 10px auto;
    border-radius: 7px;
    border: none;
    outline: none;
    background-color: #000;
    color: #fff;
    font-size: 15px;
    width: 100%;
  }
  form input::placeholder {
    color: white;
  }
  form label {
    font-size: 20px;
  }
  form .loginBtn {
    padding: 10px 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: auto;
    border-radius: 10px;
    border: none;
    outline: none;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.4s ease;
    /* border: 3px red solid; */
  }
  form .loginBtn:hover {
    border: 1px black solid;
    transition: 0.4s ease;
  }
  .loginRegisterBtn {
    padding: 10px 25px;
    border: none;
    outline: none;
    border-radius: 7px;
    position: absolute;
    right: 30px;
    top: 30px;
    cursor: pointer;
    font-size: 20px;
  }
  .errorTxt{
    margin: 20px auto;
    color: red;
    text-align: center;
  }
  .signUp{
    margin: 5px auto;
    font-size: calc(14px + 0.25vw);
    font-weight:400;
  }
  .hidePassword{
    /* border: 2px red solid; */
    position: relative;
    .hideIcon{
      position: absolute;
      right: 5px;
      top: 18px;
      color: #fff;
    }
  }
`;
