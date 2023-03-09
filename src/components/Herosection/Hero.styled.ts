import styled from "styled-components";

export const StyledHero = styled.div`
  .heroPostContainer{
    margin: 150px auto;
  }
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
    width: 100%;
  }
  .dp {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: black;
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
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
    border: 1px green red;
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
   .loaders{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
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
  @media (max-width: 950px) {
    .heroContainer{
      display: flex;
      flex-direction: column;
    }
    .heroCard{
      text-align: center;
      width: 90%;
    }
    ul{
      display: flex;
      justify-content:center;
    }
    .profileFlex{
      display: flex;
      justify-content: center;
    }
  }
`;
