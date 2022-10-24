import styled from "styled-components";

export const HomeStyled = styled.div`
  font-family: var(--font-hearthstone);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding: 0 3rem;
  text-align: center;
  img {
    height: 12rem;
  }
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const HomeLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const BodyText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
