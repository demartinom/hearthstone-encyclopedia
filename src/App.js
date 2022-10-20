import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import Home from "./components/Home/Home";
import { options } from "./API-Options";
import { Routes, Route } from "react-router-dom";
import CardsByClass from "./components/Home/CardsByClass/CardsByClass";
import SpecificClass from "./components/Home/CardsByClass/SpecificClass";
import SpecificCard from "./components/SpecificCard/SpecificCard";
import CardBySet from "./components/CardBySet/CardBySet";
import SpecificSet from "./components/CardBySet/SpecificSet";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [favorites, setFavorites] = React.useState([]);
  React.useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    setFavorites((prevFavorites) => JSON.parse(savedFavorites));
  }, []);
  React.useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  const [metadata, setMetadata] = React.useState(null);
  React.useState(() => {
    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/info", options)
      .then((response) => response.json())
      .then((response) => setMetadata(response))
      .catch((err) => console.error(err));
  }, []);
  if (metadata === null) {
    return (
      <>
        <GlobalStyle />
        <h1>loading</h1>
      </>
    );
  } else {
    const cardSets = metadata.sets
      .filter(
        (setName) =>
          setName !== "Unknown" &&
          setName !== "Missions" &&
          setName !== "Slush" &&
          setName !== "Demo" &&
          setName !== "System" &&
          setName !== "Credits" &&
          setName !== "Tavern Brawl" &&
          setName !== "Hero Skins" &&
          setName !== "Taverns of Time" &&
          setName !== "Wild Event" &&
          setName !== "Battlegrounds" &&
          setName !== "Mercenaries" &&
          setName !== "Wailing Caverns" &&
          setName !== "Promo"
      )
      .reverse();
    const classesArray = metadata.classes
      .sort()
      .filter(
        (gameClass) =>
          gameClass !== "Death Knight" &&
          gameClass !== "Whizbang" &&
          gameClass !== "Dream" &&
          gameClass !== "Neutral"
      );
    classesArray.push(metadata.classes[6]);
    return (
      <div className="App">
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/classes"
            element={<CardsByClass classes={classesArray} />}
          />
          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} />}
          />
          <Route path="/classes/:name/allcards" element={<SpecificClass />} />
          <Route
            path="/:class/:name"
            element={
              <SpecificCard setFavorite={setFavorites} favorites={favorites} />
            }
          />
          <Route path="/sets" element={<CardBySet sets={cardSets} />} />
          <Route path="/sets/:set" element={<SpecificSet />} />
        </Routes>
      </div>
    );
  }
}

export default App;
