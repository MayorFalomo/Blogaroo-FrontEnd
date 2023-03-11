import styled from "styled-components";

export const LoginStyled = styled.div`
  .loginContainer {
    display: flex;
    justify-content: center;
    height: 100vh;
    position: relative;
  }
  .loginContainer form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .subContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .shadowCon {
    border-radius: 10px;
    background-color: white;
    color: black;
    padding: 50px 50px;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
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
  form input {
    padding: 10px 25px;
    margin: 20px auto;
    border-radius: 7px;
    border: none;
    outline: none;
    background-color: #2d3746;
    color: #fff;
    font-size: 15px;
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
  p{
    margin-top: 20px;
    color: red;
  }
`;
