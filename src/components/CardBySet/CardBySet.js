import React from "react";
import { Link } from "react-router-dom";
import { SetGallery, SetName } from "./CardBySet.styled";

export default function CardBySet(props) {
  const noDuplicates = [
    ...new Map(props.sets.map((setName) => [setName, setName])).values(),
  ];
  const setList = noDuplicates.map((set) => (
    <SetName>
      <Link key={set} to={`/sets/${set}`}>
        {set}
      </Link>
    </SetName>
  ));
  return <SetGallery>{setList}</SetGallery>;
}
