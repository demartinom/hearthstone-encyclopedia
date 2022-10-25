import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardBySetStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SetGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.5rem;
  padding: 0.5rem 2rem;
`;

export const SetName = styled(Link)`
  font-size: 2rem;
  font-family: var(--font-hearthstone);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    height: 4rem;
  }
`;
