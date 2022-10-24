import styled from "styled-components";
import { Link } from "react-router-dom";

export const SetGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.75rem;
  text-align: center;
  align-items: center;
  padding: .5rem 2rem;
`;

export const SetName = styled(Link)`
  font-size: 2rem;
  font-family: var(--font-hearthstone);
`;
