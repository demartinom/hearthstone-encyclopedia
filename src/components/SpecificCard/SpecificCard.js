import React from "react";
import { options } from "../../API-Options";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as outlineStar } from "@fortawesome/free-regular-svg-icons";

export default function SpecificCard(props) {
  const { name } = useParams();
  const [cardData, setCardData] = React.useState(null);
  React.useEffect(() => {
    fetch(
      `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${name}?collectible=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setCardData(response))
      .catch((err) => console.error(err));
  }, []);
  if (cardData === null) {
    return <h1>Loading</h1>;
  } else {
    const cardInfo = cardData[0];
    console.log(cardInfo)
    const noSymbols = cardInfo.text
      .replace("[x]", "")
      .replace("$", "")
      .replace("__", "")
      .replace("._", ".")
      .replace("-$", "-")
      .replace("(@)", "(<b>Invoke</b> twice to upgrade.)")
      .replace("@", "")
      .replace("the_", "the");
    function addToFavorites() {
      props.setFavorite((prevFavorites) => [...prevFavorites, cardInfo]);
    }
    return (
      <div>
        <img src={cardInfo.img} alt="" />
        {props.favorites.filter((e) => e.name === cardInfo.name).length ===
          0 && <FontAwesomeIcon icon={outlineStar} onClick={addToFavorites} />}
        {props.favorites.filter((e) => e.name === cardInfo.name).length > 0 && (
          <FontAwesomeIcon icon={solidStar} />
        )}
        <h1>{cardInfo.name}</h1>
        <h2>{cardInfo.cardSet}</h2>
        <h2>{cardInfo.rarity}</h2>
        {cardInfo.race && <p>Race: {cardInfo.race}</p>}
        {cardInfo.spellSchool && <p>Spell School: {cardInfo.spellSchool}</p>}
        {cardInfo.type === "Location" && <p>Type: {cardInfo.type}</p>}
        <p>{ReactHtmlParser(noSymbols)}</p>
      </div>
    );
  }
}
