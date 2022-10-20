import React from "react";
import { Link } from "react-router-dom";

export default function Favorites(props) {
  if (props.favorites.length === 0) {
    return <h1>No favorites yet!</h1>;
  } else {
    const favoriteCards = props.favorites.map((card) => (
      <Link key={card.cardId} to={`/${card.playerClass}/${card.name}`}>
        <img src={card.img} alt="" />
      </Link>
    ));
    return <div>{favoriteCards}</div>;
  }
}
