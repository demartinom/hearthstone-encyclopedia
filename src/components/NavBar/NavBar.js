import React from "react";
import { Headings, NavBarStyled } from "./NavBar.styled";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <NavBarStyled>
      <Link to={"/"}>
        <p>HearthStone Encyclopedia</p>
      </Link>
      <Headings>
        <p>Sets</p>
        <p>Classes</p>
        <p>Search</p>
        <p>Favorites</p>
      </Headings>
    </NavBarStyled>
  );
}
