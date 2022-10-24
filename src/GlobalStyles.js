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
body{
  background-image: url("https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80");
}
`;

export const CardGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  img {
    height: 20rem;
  }
`;
