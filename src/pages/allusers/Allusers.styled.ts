import styled from "styled-components";

export const AllUsersStyled = styled.div`
.allUsersContainer{
    position:relative;
}
.allUsersMap{
     display: grid !important;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
   
    margin: 180px auto;
    .subMapContainer{
        padding: 20px 20px;
        border: 2px  #2d3746 solid;
        border-radius:10px;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    }
}
.UserContainer {
    .userImg{
        width: 150px;
        height: 150px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 50%;
        border: 1px solid #ccc;
        background-color: black;
    }
    h1{
        text-align: center;
        margin: 20px auto;
    }
    p{
        text-align: center;
        margin: 20px;
        font-size: 24px;
        /* border: 2px red solid; */
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
`