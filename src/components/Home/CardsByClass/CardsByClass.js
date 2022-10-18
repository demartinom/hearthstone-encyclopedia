import React from "react";

export default function CardsByClass(props) {
  const classesList = props.classes.map((gameClass) => <h1 key={gameClass}>{gameClass}</h1>);
  return <div>
    {classesList}
  </div>;
}
