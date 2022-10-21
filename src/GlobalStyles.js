import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
:root{
    --font-hearthstone: 'LHF Uncial Caps'
}
`;

export const CardGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
