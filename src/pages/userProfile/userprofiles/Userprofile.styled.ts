import styled from "styled-components";

export const UserStyled = styled.div`
.userProfileContainer{
  position: relative;
  width: 100%;
  .userConProfile {
      display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
    width: 95%;
    margin: 100px auto;
      /* border: 2px red solid; */

    .noPost{
      margin: 30px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      text-align: center;
    }
  }
   .userPostMap{
    max-width: 450px;
  }
 
  .subContainer {
    width: 400px;
  }

 
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

@media (max-width: 750px) {

  .userPostMap{
    display: flex;
    justify-content:center;
    align-items: center;
    margin: 0 auto;
  }
}
`;
