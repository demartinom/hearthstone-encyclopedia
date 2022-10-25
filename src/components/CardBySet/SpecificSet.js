import React from "react";
import { options } from "../../API-Options";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CardGallery } from "../../GlobalStyles";
import { SpecificSetStyled } from "./CardBySet.styled";

export default function SpecificSet() {
  const { set } = useParams();
  const [setData, setSetData] = React.useState(null);
  React.useEffect(
    () => {
      fetch(
        `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${set}?collectible=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => setSetData(response))
        .catch((err) => console.error(err));
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (setData === null) {
    return <h1>Loading</h1>;
  } else {
    const setCards = setData.map((card) => (
      <Link key={card.cardId} to={`/${card.playerClass}/${card.name}`}>
        <img src={card.img} alt="" />
      </Link>
    ));
    return (
      <SpecificSetStyled>
        <h1>{set}</h1>
        <CardGallery>{setCards}</CardGallery>
      </SpecificSetStyled>
    );
  }
}
