import styled from "styled-components";

export const PostsStyled = styled.div`
  .Posts {
    /* display: grid; */
    /* grid-template-columns: auto auto auto auto auto; */
    /* grid-template-columns: 450px 450px; */
    display: flex;
    /* justify-content: center; */
    margin: auto;
    flex-wrap: wrap;
    gap: 20px;
    margin: auto 30px;
    position: relative;
    z-index: 2;
    /* border: 2px red solid; */
    .postLight {
      position: fixed;
      top: 200px;
      left: 0;
      /* border: 2px red solid; */
      z-index: -1;
    }
  }
`;
