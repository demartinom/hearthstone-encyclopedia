import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8rem;
  margin-top: 3rem;
  justify-content: center;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25rem;

  h1 {
    font-family: var(--font-hearthstone);
    font-size: 3rem;
  }
  h2,
  p {
    font-family: var(--font-merriweather);
    font-weight: 900;
  }
  h2 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1.25rem;
  }
`;
