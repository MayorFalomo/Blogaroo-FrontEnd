import styled from "styled-components";

export const SettingsStyle = styled.div`
  .settingsContainer {
    margin: 150px auto;
    .subContainer {
      display: flex;
      justify-content: center;
      /* height: 50vh; */
    }
  }
  
  .settingsWrapper {
    width: 60%;
  }
 
  .main h2 {
    margin: 10px auto;
  }
  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px auto;
  }
  .heading {
    color: #f08090;
  }
  .heading p {
    cursor: pointer;
  }

  .settingsUpdate {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .hiUser {
    font-size: 25px;
    color: #f08090;
    cursor: pointer;
  }
  form label {
    font-size: 20px;
  }
  form .formInput {
    padding: 10px 25px;
    margin: 30px auto;
    width: 100%;
    color: 20px;
    border: none;
    outline: none;
    border-radius: 7px;
  }
  form input::placeholder {
    font-size: 18px;
  }
  form label {
  }
  .profileImg {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    
  }
  .profileImage {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: black;
    background-position: center;
    background-repeat:no-repeat;
    background-size: cover;
  }

  .file {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .settingsUpdateBtn {
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    margin: 30px auto;
    cursor: pointer;
  }
  .settingsUpdateBtn:hover {
    border: 2px black solid;
    background-color: transparent;
    color: #fff;
  }
 
  .file{
    width: 100%;
    margin: 10px auto;
  }
  @media (max-width:800px) {
    .settingsWrapper{
      width: 90%;
      /* border: 2px red solid; */
      display: flex;
    }
   
    .main{
      /* border: 2px blue solid; */
      width: 100%;
    }
  }
  @media (max-width:500px) {
     .heading p{
     display: none;
    }
  }
`;
