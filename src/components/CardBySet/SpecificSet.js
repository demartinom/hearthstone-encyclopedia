import React from "react";
import { options } from "../../API-Options";
import { useParams } from "react-router-dom";

export default function SpecificSet() {
  const { set } = useParams();
  React.useEffect(() => {
    fetch(
      `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${set}?collectible=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  });
  return <div></div>;
}
