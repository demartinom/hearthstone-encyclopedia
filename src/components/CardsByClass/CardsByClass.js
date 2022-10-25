import React from "react";
import {
  ClassList,
  CardsByClassStyled,
  ClassInfo,
} from "./CardsByClass.styled";
import { classArray } from "../../classObject";

export default function CardsByClass(props) {
  const classesList = classArray.map((gameClass) => (
    <ClassInfo to={`/classes/${gameClass.name}/allcards`} key={gameClass}>
      <h2>{gameClass.name}</h2>
      <img src={gameClass.logo} alt="" />
    </ClassInfo>
  ));
  return (
    <CardsByClassStyled>
      <h1>Discover cards by class</h1>
      <ClassList>{classesList}</ClassList>
      <ClassInfo to={`/classes/Neutral/allcards`}>
        <h2>Neutral</h2>
      </ClassInfo>
    </CardsByClassStyled>
  );
}
