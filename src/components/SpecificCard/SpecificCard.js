import React from "react";
import { options } from "../../API-Options";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as outlineStar } from "@fortawesome/free-regular-svg-icons";
import { Card, CardInfo } from "./SpecificCard.styled";

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
    return <h1>Loading</h1>;
  } else {
    const cardInfo = cardData[0];
    const noSymbols = cardInfo.text
      .replace("[x]", "")
      .replace("$", "")
      .replace("__", "")
      .replace("._", ".")
      .replace("-$", "-")
      .replace("(@)", "(<b>Invoke</b> twice to upgrade.)")
      .replace("@", "")
      .replace("the_", "the")
      .replace("ALL_", "ALL");

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
        {props.favorites.filter((e) => e.name === cardInfo.name).length ===
          0 && <FontAwesomeIcon icon={outlineStar} onClick={addToFavorites} />}
        {props.favorites.filter((e) => e.name === cardInfo.name).length > 0 && (
          <FontAwesomeIcon icon={solidStar} onClick={removeFromFavorites} />
        )}
        <CardInfo>
          <h1>{cardInfo.name}</h1>
          <h2>Set: {cardInfo.cardSet}</h2>
          <h2>Rarity: {cardInfo.rarity}</h2>
          {cardInfo.race && <p>Race: {cardInfo.race}</p>}
          {cardInfo.spellSchool && <p>Spell School: {cardInfo.spellSchool}</p>}
          {cardInfo.type === "Location" && <p>Type: {cardInfo.type}</p>}
          <p>
            <em>{ReactHtmlParser(cardInfo.flavor)}</em>
          </p>
          <p>Artist: {cardInfo.artist}</p>
        </CardInfo>
      </Card>
    );
  }
}
