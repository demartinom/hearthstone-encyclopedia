import React from "react";
import { CardBySetStyled, SetGallery, SetName } from "./CardBySet.styled";
import { setArray } from "../../SetObject";

export default function CardBySet() {
  const setList = setArray.reverse().map((set) => (
    <SetName key={set.name} to={`/sets/${set.name}`}>
      <img src={set.logo} alt="" />
      {set.name}
    </SetName>
  ));
  return (
    <CardBySetStyled>
      <h1>Hearthstone Sets</h1>
      <SetGallery>{setList}</SetGallery>
    </CardBySetStyled>
  );
}
