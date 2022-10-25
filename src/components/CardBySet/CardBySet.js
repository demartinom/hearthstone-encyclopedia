import React from "react";
import { SetGallery, SetName } from "./CardBySet.styled";
import { setArray } from "../../SetObject";

export default function CardBySet() {
  const setList = setArray.reverse().map((set) => (
    <SetName key={set.name} to={`/sets/${set.name}`}>
      <img src={set.logo} alt="" />
      {set.name}
    </SetName>
  ));
  return <SetGallery>{setList}</SetGallery>;
}