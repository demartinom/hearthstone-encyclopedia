import React from "react";
import { options } from "../../API-Options";
import { useParams } from "react-router-dom";

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
    return <div></div>;
  }
}
