import React from "react";
import { Link } from "react-router-dom";

export default function CardsByClass(props) {
  const classesList = props.classes.map((gameClass) => (
    <Link to={`/classes/${gameClass}/allcards`} key={gameClass}>
      <h2>{gameClass}</h2>
    </Link>
  ));
  return (
    <div>
      <h1>Discover cards by class</h1>
      {classesList}
    </div>
  );
}
