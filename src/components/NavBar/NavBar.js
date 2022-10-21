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
        <Link to={"/sets"}>
          <p>Sets</p>
        </Link>
        <Link to={"/classes"}>
          <p>Classes</p>
        </Link>
        <Link to={"/search"}>
          <p>Search</p>
        </Link>
        <Link to={"/favorites"}>
          <p>Favorites</p>
        </Link>
      </Headings>
    </NavBarStyled>
  );
}
