import React from "react";
import { options } from "../../API-Options";

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
        .then((response) => setResults(response))
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
    <img src={card.img} alt="" key={card.cardId}></img>
  ));
  return (
    <div>
      <h1>Find a card</h1>
      <input type="search" name="Search" id="Search" onChange={updateSearch} />
      <button onClick={changeButton}>Search</button>
      {results.length > 0 && searchResults}
    </div>
  );
}
