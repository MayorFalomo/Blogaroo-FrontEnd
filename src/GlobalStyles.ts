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
li{
    /* list-style: none; */
}
img{
    width: 100%;
}
body{
    overflow-x: hidden;
    /* background-color: #2D3746; */
    background-color: #121b2a;
    font-family: 'Patrick-Hand';
;
    color: white;
    /* background-color: ${(props: any) =>
      props.theme === "dark" ? " #020419" : " #E0E5EC"}; */
}
/* .App{
    overflow-x: hidden;
    width: 100%;
     background-color: ${(props: any) =>
       props.theme === "dark" ? " #020419" : " #E0E5EC"};
} */
`;

export default GlobalStyle;
