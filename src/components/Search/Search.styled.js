import styled from "styled-components";

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  h1 {
    font-family: var(--font-hearthstone);
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  input {
    border: none;
    width: 23rem;
    height: 2rem;
    font-size: 1.75rem;
    font-weight: 100;
  }
`;

export const SearchFeature = styled.div``;

export const Icon = styled.div`
  :hover {
    cursor: pointer;
  }
`;
