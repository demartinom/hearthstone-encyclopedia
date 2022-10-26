import React from "react";
import { Link } from "react-router-dom";
import { CardGallery } from "../../GlobalStyles";
import { FavoritesStyled } from "./Favorites.styled";

export default function Favorites(props) {
  if (props.favorites.length === 0) {
    return <h1>No favorites yet!</h1>;
  } else {
    function removeAllFavorites() {
      props.setFavorites([]);
    }
    const favoriteCards = props.favorites.map((card) => (
      <Link key={card.cardId} to={`/${card.playerClass}/${card.name}`}>
        <img src={card.img} alt="" />
      </Link>
    ));
    return (
      <FavoritesStyled>
        <button onClick={removeAllFavorites}>Clear all favorites</button>
        <CardGallery>{favoriteCards}</CardGallery>
      </FavoritesStyled>
    );
  }
}
