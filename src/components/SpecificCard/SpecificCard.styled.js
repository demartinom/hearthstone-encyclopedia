import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4rem;
  margin-top: 3rem;
  justify-content: center;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
  gap: 0.5rem;
  margin-left: 1rem;

  h1 {
    font-family: var(--font-hearthstone);
    font-size: 3rem;
  }
  h2,
  p,
  h3 {
    font-family: var(--font-merriweather);
    font-weight: 900;
    margin-left: 3.25rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1.25rem;
    font-weight: 400;
  }
`;

export const CardName = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
