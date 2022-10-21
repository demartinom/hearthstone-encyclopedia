import React from "react";
import { useParams } from "react-router-dom";
import { options } from "../../API-Options";
import { CardContainer } from "./CardsByClass.styled";
import { Link } from "react-router-dom";
import { CardGallery } from "../../GlobalStyles";

export default function SpecificClass() {
  const { name } = useParams();
  const [classCards, setClassCards] = React.useState(null);
  React.useEffect(() => {
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
  }, []);
  if (classCards === null) {
    return <h1>loading</h1>;
  } else {
    const noDuplicates = [
      ...new Map(classCards.map((card) => [card.name, card])).values(),
    ];
    noDuplicates.sort((a, b) => (a.name > b.name ? 1 : -1));
    let cardImages = noDuplicates.map((classCard) => (
      <CardContainer key={classCard.cardId}>
        <Link to={`/${classCard.playerClass}/${classCard.name}`}>
          <img src={classCard.img} alt="" />
        </Link>
      </CardContainer>
    ));
    return (
      <div>
        <h1>{name}</h1>
        <CardGallery>{cardImages}</CardGallery>
      </div>
    );
  }
}
