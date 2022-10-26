import React from "react";
import logo from "../../images/round-logo.png";
import { LoadingStyled } from "./Loading.styling";

export default function Loading() {
  return (
    <LoadingStyled>
      <img src={logo} alt="" />
      <h1>Loading</h1>
    </LoadingStyled>
  );
}
