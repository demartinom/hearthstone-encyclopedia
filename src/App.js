import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import Home from "./components/Home/Home";
import { options } from "./API-Options";
import { Routes, Route } from "react-router-dom";
import CardsByClass from "./components/CardsByClass/CardsByClass";
import SpecificClass from "./components/CardsByClass/SpecificClass";
import SpecificCard from "./components/SpecificCard/SpecificCard";
import CardBySet from "./components/CardBySet/CardBySet";
import SpecificSet from "./components/CardBySet/SpecificSet";
import Favorites from "./components/Favorites/Favorites";
import Search from "./components/Search/Search";
import NavBar from "./components/NavBar/NavBar";
import Loading from "./components/Loading/Loading";

function App() {
  const [favorites, setFavorites] = React.useState(null);
  React.useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites === null) {
      setFavorites([]);
    } else {
      setFavorites(JSON.parse(savedFavorites));
    }
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
        <NavBar />
        <Loading />
      </>
    );
  } else {
    return (
      <div className="App">
        <GlobalStyle />
        <NavBar />
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<CardsByClass />} />
          <Route
            path="/favorites"
            element={
              <Favorites favorites={favorites} setFavorites={setFavorites} />
            }
          />
          <Route path="/classes/:name/allcards" element={<SpecificClass />} />
          <Route
            path="/:class/:name"
            element={
              <SpecificCard setFavorite={setFavorites} favorites={favorites} />
            }
          />
          <Route path="/sets" element={<CardBySet />} />
          <Route path="/sets/:set" element={<SpecificSet />} />
        </Routes>
      </div>
    );
  }
}

export default App;
