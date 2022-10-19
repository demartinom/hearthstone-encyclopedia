import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h1>Hearthstone Encyclopedia</h1>
      <h2>
        Welcome to Hearthstone Encyclopedia! Here you can find a database of all
        cards found within the game of Hearthstone. <br />
        You can begin by searching for cards by set, by class, or by using the
        advanced search.
      </h2>
      <Link to="/sets">Find Cards by Set</Link>
      <Link to="/classes">Find Cards by Class</Link>
    </div>
  );
}
