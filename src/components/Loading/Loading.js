import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../images/round-logo.webp";
import { LoadingStyled } from "./Loading.styling";

export default function Loading() {
  return (
    <LoadingStyled>
      {/* <img src={logo} alt="" /> */}
      <LazyLoadImage src={logo} />
      <h1>Loading</h1>
    </LoadingStyled>
  );
}
