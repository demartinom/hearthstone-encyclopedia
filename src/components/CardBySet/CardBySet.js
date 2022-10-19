import React from "react";
import { Link } from "react-router-dom";

export default function CardBySet(props) {
  const noDuplicates = [
    ...new Map(props.sets.map((setName) => [setName, setName])).values(),
  ];
  const setList = noDuplicates.map((set) => (
    <Link key={set} to={`/sets/${set}`}>
      <h1>{set}</h1>
    </Link>
  ));
  return <div>{setList}</div>;
}
