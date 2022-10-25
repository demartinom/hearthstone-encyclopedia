import React from "react";
import { Link } from "react-router-dom";
import { ClassList, CardsByClassStyled } from "./CardsByClass.styled";
import { classArray } from "../../classObject";

export default function CardsByClass(props) {
  const classesList = classArray.map((gameClass) => (
    <Link to={`/classes/${gameClass.name}/allcards`} key={gameClass}>
      <h2>{gameClass.name}</h2>
      <img src={gameClass.logo} alt="" />
    </Link>
  ));
  return (
    <CardsByClassStyled>
      <h1>Discover cards by class</h1>
      <ClassList>{classesList}</ClassList>
    </CardsByClassStyled>
  );
}
