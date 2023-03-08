import styled from "styled-components";

export const WriteStyled = styled.div`
  form {
    /* border: 2px red solid; */
    /* width: 80%; */
  }
  .writeStyle{
    position: relative;
  }
  .WriteContainer {
    /* border: 2px red solid; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    /* gap: 40px; */
  }
  .writeFormGroup {
    display: flex;
    align-items: center;
    gap: 30px;
    /* border: 2px red solid; */
  }
  .writeIcon {
    font-size: 30px;
    border: 1px white solid;
    border-radius: 50%;
    cursor: pointer;
  }
  .writeInput {
    max-width: 600px;
    width: 100%;
    padding: 15px 40px;
    background-color: #121b2a;
    /* background-color: #2d3746; */
    border: none;
    outline: none;
    border-radius: 10px;
    color: #fff;
    font-size: 25px;
    /* border: 2px green solid; */
  }
  .writeInput::placeholder {
    font-size: 25px;
    color: #fff;
  }
  .writeSubmitBtn {
    padding: 7px 25px;
    border-radius: 7px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    margin: auto;
    /* background-color: #2d3746;
    color: #fff; */
    border: none;
    outline: none;
    cursor: pointer;
  }
  .textInput {
    max-width: 600px;
    width: 100%;
    height: 100px;
    margin: 30px 10px;
    background-color: #121b2a;
    /* background-color: #2d3746; */
    color: #fff;
    border: none;
    outline: none;
    font-size: 25px;
    white-space: pre-wrap;
  }
  .textInput::placeholder {
    font-size: 25px;
    padding: 10px 20px;
    color: #fff;
  }
  .category {
    /* border: 2px red solid; */
    padding: 10px 20px;
    background-color: #121b2a;
    /* background-color: #2d3746; */
    color: #fff;
    border-radius: 8px;
    border: none;
    outline: none;
    display: flex;
    justify-content: flex-start;
    width: 300px;
    margin: 20px 2px;
    font-size: 18px;
  }
  .category::placeholder {
    color: #fff;
    font-size: 16px;
    letter-spacing: 2px;
  }
`;
