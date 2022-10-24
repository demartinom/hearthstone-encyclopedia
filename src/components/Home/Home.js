import React from "react";
import { Link } from "react-router-dom";
import { HomeStyled, HomeLinks } from "./Home.styled";
import logo from "../../images/logo.png";
export default function Home() {
  return (
    <HomeStyled>
      <img src={logo} alt="hearthstone logo" />
      <h1>Hearthstone Encyclopedia</h1>
      <h2>
        Welcome to Hearthstone Encyclopedia! Here you can find a database of all
        cards found within the game of Hearthstone produced by Blizzard Entertainment. <br />
        You can begin by searching for cards by set, by class, or by using the
        advanced search.
      </h2>
      <HomeLinks>
        <Link to="/sets">Find Cards by Set</Link>
        <Link to="/classes">Find Cards by Class</Link>
        <Link to={"/search"}>Search for Cards</Link>
        <Link to={"/favorites"}>See Your Saved Favorites</Link>
      </HomeLinks>
    </HomeStyled>
  );
}
