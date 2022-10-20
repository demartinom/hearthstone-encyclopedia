import React from "react";
import { options } from "../../API-Options";
import { Link } from "react-router-dom";

export default function Search() {
  const [search, setSearch] = React.useState("");
  const [buttonClicked, setButtonClicked] = React.useState(false);
  const [results, setResults] = React.useState([]);
  React.useEffect(() => {
    if (buttonClicked === true) {
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
        .catch((err) => console.error(err));
    }
  }, [buttonClicked]);
  function updateSearch(e) {
    setSearch(e.target.value);
  }
  function changeButton() {
    setButtonClicked(true);
  }
  const searchResults = results.map((card) => (
    <Link key={card.cardId} to={`/${card.playerClass}/${card.name}`}>
      <img src={card.img} alt="" />
    </Link>
  ));
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      changeButton();
    }
  }
  return (
    <div>
      <h1>Find a card</h1>
      <input
        type="search"
        name="Search"
        id="Search"
        onChange={updateSearch}
        onKeyUp={handleKeyPress}
      />
      <button onClick={changeButton}>Search</button>
      {results.length > 0 && searchResults}
    </div>
  );
}
