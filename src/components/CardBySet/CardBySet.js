import React from "react";
import { SetGallery, SetName } from "./CardBySet.styled";

export default function CardBySet(props) {
  const noDuplicates = [
    ...new Map(props.sets.map((setName) => [setName, setName])).values(),
  ];
  const setList = noDuplicates.map((set) => (
    <SetName key={set} to={`/sets/${set}`}>
      {set}
    </SetName>
  ));
  return <SetGallery>{setList}</SetGallery>;
}
