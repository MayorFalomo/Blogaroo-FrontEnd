import styled from "styled-components";

export const SinglePostStyled = styled.div`
  .singlePostContainer {
    margin: 170px auto;
    position: relative;
    .singlePostTags {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }
  }
  .iconFlexContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 2px red solid; */
  }
  .singlePostImg {
    width: 95%;
    height: 70vh;
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
  }
  .iconFlex {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .singlePostIconFlex {
    display: flex;
    justify-content: center;
    margin: auto;
    .singlePostTitleInput {
      padding: 10px 25px;
      font-size: 20px;
      border-radius: 10px;
      width: 400px;
      border: none;
      outline: none;
    }
    h1 {
      display: flex;
      justify-content: center;
      text-align: center;
      max-width: 500px;
      margin: 20px auto;
      letter-spacing: 1px;
      font-size: 35px;
    }
  }
  .singlePostInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    justify-content: center;
    span {
      margin: 30px auto;
    }
    b {
      color: red;
      cursor: pointer;
      font-size: 23px;
      text-decoration: underline;
    }
    p {
      font-size: 20px;
    }
    .updateSinglePostDescInput {
      width: 70%;
      height: 400px;
      padding: 20px 30px;
      font-size: 20px;
      border-radius: 10px;
      border: none;
      outline: none;
    }
    .postUpdateBtn {
      padding: 10px 25px;
      font-size: 20px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
    }
    .Author {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .authorsInfo {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 2px;
    }
  }
  .singlePostInfo .authorImg {
    background-color: black;
    /* background-image: url("../desert.jpg"); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 70px;
    width: 70px;
    border-radius: 50%;
  }
  .singlePostDescription {
    font-family: Inter;
    font-size: 20px;
    width: 95%;
    line-height: 35px;
    white-space: pre-wrap;
  }
  .loaders{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
    .loader {
        transform: rotateZ(45deg);
        perspective: 1000px;
        border-radius: 50%;
        width: 72px;
        height: 72px;
        color: #fff;
      }
        .loader:before,
        .loader:after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: inherit;
          height: inherit;
          border-radius: 50%;
          transform: rotateX(70deg);
          animation: 1s spin linear infinite;
        }
        .loader:after {
          color: #FF3D00;
          transform: rotateY(70deg);
          animation-delay: .4s;
        }

      @keyframes rotate {
        0% {
          transform: translate(-50%, -50%) rotateZ(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotateZ(360deg);
        }
      }

      @keyframes rotateccw {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotate(-360deg);
        }
      }

      @keyframes spin {
        0%,
        100% {
          box-shadow: .2em 0px 0 0px currentcolor;
        }
        12% {
          box-shadow: .2em .2em 0 0 currentcolor;
        }
        25% {
          box-shadow: 0 .2em 0 0px currentcolor;
        }
        37% {
          box-shadow: -.2em .2em 0 0 currentcolor;
        }
        50% {
          box-shadow: -.2em 0 0 0 currentcolor;
        }
        62% {
          box-shadow: -.2em -.2em 0 0 currentcolor;
        }
        75% {
          box-shadow: 0px -.2em 0 0 currentcolor;
        }
        87% {
          box-shadow: .2em -.2em 0 0 currentcolor;
        }
      }
`;
