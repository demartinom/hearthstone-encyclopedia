import React from "react";
import { options } from "../../API-Options";

export default function Search() {
  const [search, setSearch] = React.useState("");
  const [buttonClicked, setButtonClicked] = React.useState(false);
  React.useEffect(() => {
    if (buttonClicked === true) {
      fetch(
        `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${search}?collectible=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => console.log(response))
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
  return (
    <div>
      <h1>Find a card</h1>
      <input type="search" name="Search" id="Search" onChange={updateSearch} />
      <button onClick={changeButton}>Search</button>
    </div>
  );
}
