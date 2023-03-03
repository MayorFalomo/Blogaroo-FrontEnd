import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Alata&family=Archivo&family=Barlow:wght@600&family=Cabin:wght@500&family=Cinzel:wght@500;800&family=Fraunces:opsz,wght@9..144,700;9..144,900&family=Inter:wght@400;600&family=Josefin+Sans:wght@300;400;600&family=League+Spartan:wght@400;500;700&family=Manrope:wght@300&family=Maven+Pro&family=Merriweather:wght@700&family=Montserrat:ital,wght@0,400;0,600;0,700;1,500&family=Nanum+Gothic&family=Patrick+Hand&family=Playfair+Display:wght@500&family=Poppins&family=Roboto:ital,wght@1,300&family=Rubik:wght@300;400&family=Saira&family=Varela&family=Varela+Round&display=swap');
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
