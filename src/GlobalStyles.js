import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import background from "./images/background.webp";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap');
@font-face {
  font-family: "Uncial";
  src: url("/lhf_uncial_caps-webfont.woff2") format("woff2"),
    url("/lhf_uncial_caps-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
:root{
    --font-hearthstone: 'Uncial';
    --font-serif: 'Merriweather', serif;
    --color-gold: #CAA949ff;
    --color-light-gold: #ECD0A0ff;
    --color-regular-blue: #7490BFff;
    --color-light-blue: #7BE2FDff;
    --color-brown: #4a3321;        
}
body{
  background-image: url(${background});
}
a{
  text-decoration: none;
  color: inherit;
}
`;

export const CardGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 1rem 0 1rem 1rem;
  img {
    height: 20rem;
  }
`;
