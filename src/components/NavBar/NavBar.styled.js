import styled from "styled-components";
import background from "../../images/nav-background.jpg";

export const NavBarStyled = styled.nav`
  display: flex;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  font-family: var(--font-serif);
  font-weight: 900;
  font-size: 1.25rem;
  color: var(--color-gold);
  background: url(${background});
  background-size: cover;
`;

export const Headings = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
`;
