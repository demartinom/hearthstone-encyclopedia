import React, { useEffect } from "react";
import NavBar from "@/components/navBar";
import axios from "axios";

const Search = () => {
  const [search, setSearch] = React.useState("");
  const [buttonClicked, setButtonClicked] = React.useState(false);
  const [results, setResults] = React.useState([]);

  function changeButton() {
    setButtonClicked(true);
  }
  function updateSearch(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    if (buttonClicked == true) {
      axios
        .get(`/api/search?name=${search}`)
        .then((res) =>
          setResults(
            res.data.filter((card) =>
              card.name.includes(search[0].toUpperCase() + search.substring(1))
            )
          )
        )
        .then(setButtonClicked(false));
    }
  }, [buttonClicked]);

  return (
    <div>
      <NavBar />
      <input
        type="search"
        onChange={updateSearch}
        placeholder="Enter Card Name"
      />
      <button onClick={changeButton}>Click</button>
      {results.map((card) => (
        <h1>{card.name}</h1>
      ))}
    </div>
  );
};

export default Search;
