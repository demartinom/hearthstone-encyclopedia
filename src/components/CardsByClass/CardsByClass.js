import React from "react";
import { Link } from "react-router-dom";
import { ClassList, CardsByClassStyled } from "./CardsByClass.styled";

export default function CardsByClass(props) {
  const classesList = props.classes.map((gameClass) => (
    <Link to={`/classes/${gameClass}/allcards`} key={gameClass}>
      <h2>{gameClass}</h2>
    </Link>
  ));
  return (
    <CardsByClassStyled>
      <h1>Discover cards by class</h1>
      <ClassList>{classesList}</ClassList>
    </CardsByClassStyled>
  );
}
