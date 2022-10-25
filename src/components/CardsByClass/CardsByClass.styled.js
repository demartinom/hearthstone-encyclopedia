import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardsByClassStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-hearthstone);
  h1 {
    margin-top: 1rem;
    font-size: 2.5rem;
  }
`;

export const ClassList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 0.5rem 2rem;
`;

export const CardContainer = styled(Link)``;
