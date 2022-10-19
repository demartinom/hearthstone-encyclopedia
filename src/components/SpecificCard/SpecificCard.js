import React from "react";
import { options } from "../../API-Options";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

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
    return (
      <div>
        <img src={cardInfo.img} alt="" />
        <h1>{cardInfo.name}</h1>
        <h2>{cardInfo.cardSet}</h2>
        <h2>{cardInfo.rarity}</h2>
        <p>{ReactHtmlParser(cardInfo.text)}</p>
      </div>
    );
  }
}
