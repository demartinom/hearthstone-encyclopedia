import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import background from "./images/background.png";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap');
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
:root{
    --font-hearthstone: 'LHF Uncial Caps';
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
  img {
    height: 20rem;
  }
`;
