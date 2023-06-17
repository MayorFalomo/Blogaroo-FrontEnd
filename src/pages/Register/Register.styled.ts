import styled from "styled-components";

export const RegisterStyled = styled.div`
.registerContainer{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
  object-fit: cover;
}
 .registerCon {
    padding: 20px 45px;
    background-color: #fff;
    color: black;
    border-radius: 10px;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
      max-width: 70%;
      width: 600px;
      @media (max-width: 550px ) {
        max-width: 95%;
      }
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    .labelCon{
      position: relative;
      /* border: 2px red solid; */
      width: 100%;
       .generateBtn{
                position: absolute;
                right: -50px;
                top: 10px;
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
    padding: 10px 20px;
    border: none;
    outline: none;
    border-radius: 7px;
    margin: 10px auto;
    background-color: #000;
    /* background-color: #2d3746; */
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
 
  .registerBtn {
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 10px 25px;
    margin-top: 20px;
    border: none;
    outline: none;
    border-radius: 8px;
    font-size: 18px;
    background-color: transparent;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    /* width: 100%; */
    width: 200px;
    cursor: pointer;
    transition: all 0.4s ease;
  }
  .registerBtn:hover {
    border: 1px black solid;
    transition: 0.4s ease;
  }
  h3 {
    font-size: 30px;
    margin: 20px auto;
  }
  .login{
    margin: 0 auto;
    font-size: calc(14px + 0.25vw ) ;
    font-weight: 500;
  }
  .loginBtn {
    cursor: pointer;
    padding: 10px 25px;
    border: none;
    outline: none;
    position: absolute;
    right: 25px;
    top: 90px;
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
      top: 20px;
      color: white;
    }
  }
`;
