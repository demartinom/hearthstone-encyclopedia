import styled from "styled-components";

export const LoadingStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  img {
    height: 40vh;
  }
  h1{
    font-size: 5rem;
    font-family: var(--font-hearthstone);
    color: var(--color-brown)
  }
`;
