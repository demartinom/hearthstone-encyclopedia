import styled from "styled-components";

export const HomeStyled = styled.div`
  font-family: var(--font-hearthstone);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding: 0 3rem;
  text-align: center;
  color: var(--color-brown);
  img {
    height: 12rem;
  }
  h1 {
    font-size: 2.5rem;
    margin: 1rem 0;
  }
`;

export const BodyText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const HomeLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;
  a {
    font-size: 1.5rem;
    text-decoration: underline;
  }
`;
