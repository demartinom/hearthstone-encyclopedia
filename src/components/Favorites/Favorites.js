import React from "react";

export default function Favorites(props) {
  if (props.favorites === "") {
    return <h1>No favorites yet!</h1>;
  } else {
    return <div></div>;
  }
}
