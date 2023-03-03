import styled from "styled-components";

export const StyledNav = styled.div`
  .NavContainer {
    position: relative;
    .bgLight {
      position: fixed;
      right: -120px;
      top: -400px;
      z-index: -1;
      /* border: 3px green solid; */
    }
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.9px);
    -webkit-backdrop-filter: blur(6.9px);
  }
  nav h1 {
    font-size: 35px;
  }
  ul {
    display: flex;
    gap: 20px;
    position: relative;
    z-index: 9;
  }
  li {
    list-style: none;
    font-size: 18px;
    cursor: pointer;
  }
  span {
    display: none;
  }
  .input {
    position: relative;
  }
  input {
    padding: 8px 25px;
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
