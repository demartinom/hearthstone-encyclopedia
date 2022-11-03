import React from "react";
import { Link } from "react-router-dom";
import { HomeStyled, HomeLinks, BodyText } from "./Home.styled";
import logo from "../../images/logo.webp";
export default function Home() {
  return (
    <HomeStyled>
      <img src={logo} alt="hearthstone logo" />
      <h1>Hearthstone Encyclopedia</h1>
      <BodyText>
        <h2>Welcome! </h2>
        <h2>
          Here you can find a database of all cards found within the game of
          Hearthstone produced by Blizzard Entertainment.
        </h2>
      </BodyText>
      <h2>
        Use the buttons below to begin discovering the world of Hearthstone.
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
