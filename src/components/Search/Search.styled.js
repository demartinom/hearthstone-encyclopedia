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
    height: 2.25rem;
    font-size: 1.75rem;
    font-weight: 100;
  }
`;

export const SearchFeature = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 0.5rem;
`;

export const Icon = styled.div`
  background-color: var(--color-brown);
  border-radius: 0.25rem;
  width: 3rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;
