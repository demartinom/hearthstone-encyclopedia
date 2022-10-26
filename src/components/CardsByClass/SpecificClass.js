import React from "react";
import { useParams } from "react-router-dom";
import { options } from "../../API-Options";
import { SpecificClassStyled } from "./CardsByClass.styled";
import { CardGallery } from "../../GlobalStyles";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function SpecificClass() {
  const { name } = useParams();
  const [classCards, setClassCards] = React.useState(null);
  React.useEffect(
    () => {
      fetch(
        `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${name}?collectible=1`,
        options
      )
        .then((response) => response.json())
        .then((response) =>
          setClassCards(
            response.filter(
              (card) =>
                (card.type === "Minion" ||
                  card.type === "Spell" ||
                  card.type === "Location" ||
                  card.type === "Weapon" ||
                  (card.type === "Hero" && card.rarity === "Legendary")) &&
                card.cardSet !== "Unknown"
            )
          )
        )
        .catch((err) => console.error(err));
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (classCards === null) {
    return <Loading />;
  } else {
    const noDuplicates = [
      ...new Map(classCards.map((card) => [card.name, card])).values(),
    ];
    noDuplicates.sort((a, b) => (a.name > b.name ? 1 : -1));
    let cardImages = noDuplicates.map((classCard) => (
      <Link
        to={`/${classCard.playerClass}/${classCard.name}`}
        key={classCard.cardId}
      >
        <img src={classCard.img} alt="" />
      </Link>
    ));
    return (
      <SpecificClassStyled>
        <h1>{name}</h1>
        <CardGallery>{cardImages}</CardGallery>
      </SpecificClassStyled>
    );
  }
}
