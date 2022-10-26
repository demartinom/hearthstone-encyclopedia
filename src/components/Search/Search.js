import React from "react";
import { options } from "../../API-Options";
import { Link } from "react-router-dom";
import { CardGallery } from "../../GlobalStyles";
import { StyledSearch } from "./Search.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const [search, setSearch] = React.useState("");
  const [buttonClicked, setButtonClicked] = React.useState(false);
  const [results, setResults] = React.useState([]);
  React.useEffect(
    () => {
      if (buttonClicked === true) {
        setResults("loading");
        fetch(
          `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${search}?collectible=1`,
          options
        )
          .then((response) => response.json())
          .then((response) =>
            setResults(
              response.filter(
                (card) => !(card.type === "Hero" && card.rarity !== "Legendary")
              )
            )
          )
          .then(setButtonClicked(false))
          .catch((err) => setResults("no results"));
      }
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [buttonClicked]
  );
  function updateSearch(e) {
    setSearch(e.target.value);
  }
  function changeButton() {
    setButtonClicked(true);
  }
  let searchResults = "";
  function typeofResult() {
    if (results === "loading") {
      searchResults = <h1>Loading</h1>;
    } else if (results === "no results") {
      searchResults = <h1>No cards found</h1>;
    } else if (typeof results === "object") {
      const noDuplicates = [
        ...new Map(results.map((card) => [card.name, card])).values(),
      ];
      noDuplicates.sort((a, b) => (a.name > b.name ? 1 : -1));
      searchResults = noDuplicates.map((card) => (
        <Link key={card.cardId} to={`/${card.playerClass}/${card.name}`}>
          <img src={card.img} alt="" />
        </Link>
      ));
    }
  }
  typeofResult();
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      changeButton();
    }
  }
  return (
    <>
      <StyledSearch>
        <h1>Find a card</h1>
        <input
          type="search"
          name="Search"
          id="Search"
          onChange={updateSearch}
          onKeyUp={handleKeyPress}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
      </StyledSearch>
      <CardGallery>{results.length > 0 && searchResults}</CardGallery>
    </>
  );
}
