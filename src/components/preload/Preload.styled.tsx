import styled from "styled-components";

export const PreloadStyle = styled.div`
.preloadContainer{
    display: flex;
    justify-content: center;
align-items: center;
height: 100vh;
background-color: #121b2a;
color: #fff;
.preload{
    display: flex;
    align-items: center;
    gap: 10px;
    h1{
        font-size: 40px;
    }
    span{
        color:red;
        font-size: 40px;
    }
}
.letterB{
    border: 2px white solid;
    padding:3px 7px;
    border-radius: 8px;
}
}

@media (max-width:400px) {
    .preload h1{
        font-size: 30px;
    }
    .preload span{
        font-size: 30px
    }
}


@media (max-width: 340px){
 .preload {
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   text-align: center;
 }   
}
`