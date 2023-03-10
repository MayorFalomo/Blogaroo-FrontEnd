import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

a{
    text-decoration: none;
    color: green;
}

img{
    width: 100%;
}
body{
    overflow-x: hidden;
    background-color: #121b2a;
    font-family: 'Patrick-Hand';
    color: white;
}

`;

export default GlobalStyle;
