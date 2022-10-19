import React from "react";
import { options } from "../../API-Options";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SpecificSet() {
  const { set } = useParams();
  const [setData, setSetData] = React.useState(null);
  React.useEffect(() => {
    fetch(
      `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${set}?collectible=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setSetData(response))
      .catch((err) => console.error(err));
  }, []);
  if (setData === null) {
    return <h1>Loading</h1>;
  } else {
    const setCards = setData.map((card) => (
      <Link key={card.cardId} to={`/${card.className}/${card.name}`}>
        <img src={card.img} alt="" />
      </Link>
    ));
    return <div>{setCards}</div>;
  }
}
