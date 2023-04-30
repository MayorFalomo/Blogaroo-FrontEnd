import styled from "styled-components";

export const RegisterStyled = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    .labelCon{
      position: relative;
       .generateBtn{
                position: absolute;
                right: -50px;
                top: 20px;
                z-index: 1;
                padding: 7px 10px;
                background-color: #000;
                color: #fff;
                border-radius: 7px;
                cursor: pointer;
            }
    }
  }
  form input {
    padding: 10px 25px;
    border: none;
    outline: none;
    border-radius: 7px;
    margin: 20px auto;
    background-color: #2d3746;
    color: #fff;
    font-size: 16px;
    width: 100%;
  }
  form input::placeholder {
    color: #fff;
    font-size: 14px;
  }
  form label {
    font-size: 18px;
  }
  .subContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
  }
  .registerCon {
    padding: 20px 50px;
    background-color: #fff;
    color: black;
    border-radius: 10px;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
      max-width: 500px;
      /* border: 2px red solid; */
  }
  .registerBtn {
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 10px 25px;
    border: none;
    outline: none;
    border-radius: 8px;
    font-size: 18px;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    /* width: 100%; */
    width: 200px;
    cursor: pointer;
  }
  .registerBtn:hover {
    border: 1px black solid;
    transition: 0.4s ease;
  }
  h1 {
    font-size: 40px;
    margin: 20px auto;
  }
  .loginBtn {
    cursor: pointer;
    padding: 10px 25px;
    border: none;
    outline: none;
    position: absolute;
    right: 20px;
    top: 50px;
    border-radius: 7px;
    font-size: 18px;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  }
  .errorMessage{
    margin-top: 20px;
    color: red;
    text-align: center;
  }
  .note{
    margin-top: 10px;
    color: green;
  }
   .hidePassword{
    position: relative;
    .hideIcon{
      position: absolute;
      right: 5px;
      top: 28px;
      color: white;
    }
  }
`;
