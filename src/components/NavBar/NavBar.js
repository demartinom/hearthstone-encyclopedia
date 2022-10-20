import React from "react";
import { Headings, NavBarStyled } from "./NavBar.styled";

export default function NavBar() {
  return (
    <NavBarStyled>
      <p>HearthStone Encyclopedia</p>
      <Headings>
        <p>Sets</p>
        <p>Classes</p>
        <p>Search</p>
        <p>Favorites</p>
      </Headings>
    </NavBarStyled>
  );
}
