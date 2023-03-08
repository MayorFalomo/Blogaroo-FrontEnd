import styled from "styled-components";

export const StyledNav = styled.div`
  .NavContainer {
    position: relative;
    .bgLight {
      position: fixed;
      right: -120px;
      top: -400px;
      z-index: -1;
    }
  }
  nav {
    /* border: 2px green solid; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    position: fixed;
    top: 0;
    z-index: 9;
    width: 100%;
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.9px);
    -webkit-backdrop-filter: blur(6.9px);
 .navHeader{
    display: flex;
    align-items: center;
    gap: 5px;
    .logo{
      display: flex;
      font-size: 35px;
      padding: 3px 5px;
      background-color: #121b2a;
      border-radius: 5px;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    }
  
 }

    .subNavContainer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
  }
 
  @media(max-width:980px) {
    .subNavContainer{
      position: absolute;
      right: -150vw;
      top: 0;
      height: 100vh;
      display: flex;
      flex-direction: column;
      transition: all 0.5s ease;
      gap: 20px;
    }
    .hamburgerMode{
      display: flex;
      flex-direction: column;
      position: fixed;
      right: 0;
      top: 0;
      width: 70%;
      height: 100vh;
      transition: 0.5s all ease;
      background-color: #283241;
      z-index: 999;
    }
    .burger{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      height: 50vh;
      /* border: 2px green solid; */
    }
    span{
      display:flex;
      position: absolute;
      right: 5%;
      top: 30px;
      z-index: 999999;
      font-size: 40px;
    }
    .hamburger-form{
      display: flex;
      flex-direction: column;
      margin-top: 30px;
    }
  }
  }
  nav h1 {
    font-size: 35px;
  }
  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    position: relative;
    z-index: 9;
    /* border: 2px blue solid; */
    width: 100%;
  }
  li {
    list-style: none;
    font-size: 22px;
    cursor: pointer;
  }
  span {
    display: none;
  }
  .input {
    position: relative;
  }
  input {
    padding: 8px 10px;
    border-radius: 15px;
    border: none;
    outline: none;
    font-size: 16px;
    color: #fff;
    background-color: #283241;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }
  input::placeholder {
    padding: 5px 5px;
    padding-left: 20px;
  }
  .search {
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px 5px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    /* color: #2d3746; */
    /* border: 2px red solid; */
  }

  form {
    display: flex;
    gap: 20px;
    align-items: center;
    /* border-radius: 2px red solid; */
  }

  .picture {
    width: 50px;
    border-radius: 50%;
    cursor: pointer;
  }
  .profileImg {
    /* background-image: url("../profile1.jpg"); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 70px;
    width: 70px;
    border-radius: 50%;
  }
`;
