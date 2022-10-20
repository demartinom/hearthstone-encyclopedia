import React from "react";
import { options } from "../../API-Options";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as outlineStar } from "@fortawesome/free-regular-svg-icons";

export default function SpecificCard() {
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
    const noSymbols = cardInfo.text
      .replace("[x]", "")
      .replace("$", "")
      .replace("__", "")
      .replace("._", ".")
      .replace("-$", "-")
      .replace("(@)", "(<b>Invoke</b> twice to upgrade.)")
      .replace("@", "");
    return (
      <div>
        <img src={cardInfo.img} alt="" />
        <h1>{cardInfo.name}</h1>
        <h2>{cardInfo.cardSet}</h2>
        <h2>{cardInfo.rarity}</h2>
        {cardInfo.race && <p>{cardInfo.race}</p>}
        {cardInfo.spellSchool && <p>{cardInfo.spellSchool}</p>}
        {cardInfo.type === "Location" && <p>{cardInfo.type}</p>}
        <p>{ReactHtmlParser(noSymbols)}</p>
      </div>
    );
  }
}
