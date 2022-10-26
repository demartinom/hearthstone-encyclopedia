import React from "react";
import { options } from "../../API-Options";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as outlineStar } from "@fortawesome/free-regular-svg-icons";
import { Card, CardInfo, CardName } from "./SpecificCard.styled";
import Loading from "../Loading/Loading";

export default function SpecificCard(props) {
  const { name } = useParams();
  const [cardData, setCardData] = React.useState(null);
  React.useEffect(() => {
    fetch(
      `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${name}?collectible=1`,
      options
    )
      .then((response) => response.json())
      .then((response) =>
        setCardData(response.filter((card) => card.cardSet !== "Unknown"))
      )
      .catch((err) => console.error(err));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (cardData === null) {
    return <Loading />;
  } else {
    const cardInfo = cardData[0];
    function addToFavorites() {
      props.setFavorite((prevFavorites) => [...prevFavorites, cardInfo]);
    }
    function removeFromFavorites() {
      props.setFavorite((prevFavorites) =>
        prevFavorites.filter((card) => card.cardId !== cardInfo.cardId)
      );
    }
    return (
      <Card>
        <img src={cardInfo.img} alt="" />
        <CardInfo>
          <CardName>
            {props.favorites.filter((e) => e.name === cardInfo.name).length ===
            0 ? (
              <FontAwesomeIcon
                icon={outlineStar}
                size="2x"
                onClick={addToFavorites}
              />
            ) : (
              <FontAwesomeIcon
                icon={solidStar}
                size="2x"
                onClick={removeFromFavorites}
              />
            )}
            <h1>{cardInfo.name}</h1>
          </CardName>
          <h2>Set: {cardInfo.cardSet}</h2>
          <h2>Rarity: {cardInfo.rarity}</h2>
          {cardInfo.race && <p>Race: {cardInfo.race}</p>}
          {cardInfo.spellSchool && (
            <h3>Spell School: {cardInfo.spellSchool}</h3>
          )}
          {cardInfo.type === "Location" && <h3>Type: {cardInfo.type}</h3>}
          {cardInfo.type === "Weapon" && <h3>Type: {cardInfo.type}</h3>}
          <p>
            <em>{cardInfo.flavor}</em>
          </p>
          <p>Artist: {cardInfo.artist}</p>
        </CardInfo>
      </Card>
    );
  }
}
