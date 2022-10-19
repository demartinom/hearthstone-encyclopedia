import React from "react";
import { options } from "../../API-Options";

export default function SpecificCard() {
React.useEffect(()=>{
  fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/loatheb", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
},[])
  return <div></div>;
}
