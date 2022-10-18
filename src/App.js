import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import Home from "./components/Home/Home";
import { options } from "./API-Options";
import { Routes, Route } from "react-router-dom";

function App() {
  const [metadata, setMetadata] = React.useState(null);
  React.useState(() => {
    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/info", options)
      .then((response) => response.json())
      .then((response) => setMetadata(response))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
