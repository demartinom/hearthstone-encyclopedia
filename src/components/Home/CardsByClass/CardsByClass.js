import React from "react";

export default function CardsByClass(props) {
  const classesList = props.classes.map((gameClass) => (
    <h2 key={gameClass}>{gameClass}</h2>
  ));
  return (
    <div>
      <h1>Discover cards by class</h1>
      {classesList}
    </div>
  );
}
