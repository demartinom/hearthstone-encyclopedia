import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardBySetStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-hearthstone);
  gap: 1rem;
  h1 {
    margin-top: 1rem;
    font-size: 2.5rem;
  }
`;

export const SetGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.5rem;
  padding: 0.5rem 2rem;
`;

export const SetName = styled(Link)`
  font-size: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    height: 4rem;
  }
`;

export const SpecificSetStyled = styled.div`
  font-family: var(--font-hearthstone);
  text-align: center;
  h1 {
    margin-top: 1rem;
    font-size: 2.5rem;
    color: var(--color-brown)
  }
`;
