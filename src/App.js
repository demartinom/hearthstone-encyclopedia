import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import Home from "./components/Home/Home";
import { options } from "./API-Options";
import { Routes, Route } from "react-router-dom";
import CardsByClass from "./components/Home/CardsByClass/CardsByClass";

function App() {
  const [metadata, setMetadata] = React.useState(null);
  React.useState(() => {
    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/info", options)
      .then((response) => response.json())
      .then((response) => setMetadata(response))
      .catch((err) => console.error(err));
  }, []);
  if (metadata === null) {
    return <h1>loading</h1>;
  } else {
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
          <Route path="/classes" element={<CardsByClass />} />
        </Routes>
      </div>
    );
  }
}

export default App;
