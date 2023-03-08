import styled from "styled-components";

export const PostsStyled = styled.div`
  .Posts {
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    flex-wrap: wrap;
    gap: 30px 20px;
    margin:0 auto;
    position: relative;
    .postLight {
      position: fixed;
      top: 50px;
      left: 0;
      z-index: -5;
    }
    
  }
   @media (max-width: 460px) {
      .Posts{
       width: 100%;
       margin: auto auto;
      }
      .postsMap{
        width: 100%;
      }
    }
`;
