import React from "react";
import { Link } from "react-router-dom";
import { CardGallery } from "../../GlobalStyles";
import { FavoritesStyled } from "./Favorites.styled";

export default function Favorites(props) {
  if (props.favorites.length === 0) {
    return (
      <FavoritesStyled>
        <h2>No favorites yet!</h2>
      </FavoritesStyled>
    );
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
      <>
        <FavoritesStyled>
          <button onClick={removeAllFavorites}>Clear all favorites</button>
          <h1>Your Favorites</h1>
        </FavoritesStyled>
        <CardGallery>{favoriteCards}</CardGallery>
      </>
    );
  }
}
