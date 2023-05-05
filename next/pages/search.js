import React, { useEffect } from "react";
import NavBar from "@/components/navBar";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

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
            res.data
              .filter((card) =>
                card.name.includes(
                  search[0].toUpperCase() + search.substring(1)
                )
              )
              .slice(0, 30)
          )
        )
        .then(setButtonClicked(false));
    }
  }, [buttonClicked]);
  let returnedCards = results.map((card) => (
    <Link href={`/cards/${card.slug}`}>
      <Image
        src={card.image}
        width={225}
        height={225}
        key={card.slug}
        alt="card image"
      ></Image>
    </Link>
  ));
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
      <input
        type="search"
        onChange={updateSearch}
        placeholder="Enter Card Name"
      />
      <button onClick={changeButton}>Click</button>
      <div className="grid grid-cols-5 gap-5 text-center items-center px-8 pb-10">
        {returnedCards}
      </div>
    </div>
  );
};

export default Search;
