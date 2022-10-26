import styled from "styled-components";

export const FavoritesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: var(--font-hearthstone);
    font-size: 3rem;
  }
  h2 {
    margin-top: 10rem;
    font-family: var(--font-hearthstone);
    font-size: 3rem;
  }
  button {
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 1rem 0rem 0 1.5rem;
    background: var(--color-brown);
    color: var(--color-gold);
    font-size: 1.5rem;
    font-family: var(--font-merriweather);
    font-weight: 900;
    align-self: flex-start;
  }
`;
