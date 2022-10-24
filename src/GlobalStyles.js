import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
:root{
    --font-hearthstone: 'LHF Uncial Caps';
    --color-gold: #CAA949ff;
    --color-light-gold: #ECD0A0ff;
    --color-regular-blue: #7490BFff;
    --color-light-blue: #7BE2FDff;
    --color-brown: #6B4A28ff;        
}
`;

export const CardGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  img {
    height: 20rem;
  }
`;
