import React from "react";
import { SetGallery, SetName } from "./CardBySet.styled";
import { setArray } from "../../SetObject";

export default function CardBySet() {
  const setList = setArray.reverse().map((set) => (
    <SetName key={set.name} to={`/sets/${set.name}`}>
      {set.name}
      <img src={set.logo} alt="" />
    </SetName>
  ));
  return <SetGallery>{setList}</SetGallery>;
}