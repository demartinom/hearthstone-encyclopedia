import styled from "styled-components";
import { Link } from "react-router-dom";

export const SetGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const SetName = styled(Link)`
    font-size: 1rem;
 
`;
