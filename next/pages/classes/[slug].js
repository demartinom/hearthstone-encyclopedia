import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";
import Image from "next/image";

const SpecificClass = ({ standardCards, wildCards, playClass }) => {
  let standardImages = standardCards.map((gameCard) => (
    <Image
      src={`${gameCard.image}`}
      width={200}
      height={200}
      alt="card"
    ></Image>
  ));
  let wildImages = wildCards
    .filter((gameCard) => !gameCard.copyOfCardId)
    .map((gameCard) => (
      <Image
        src={`${gameCard.image}`}
        width={200}
        height={200}
        alt="card"
      ></Image>
    ));
  const currentClass =
    playClass == "deathknight"
      ? "Death Knight"
      : playClass == "demonhunter"
      ? "Demon Hunter"
      : `${playClass[0].toUpperCase()}${playClass.substring(1)}`;
  const [currentCards, setCurrentCards] = React.useState("standard");
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
      <h1>{currentClass}</h1>
      {currentCards == "standard" ? (
        <div className="grid grid-cols-5">{standardImages}</div>
      ) : (
        <div className="grid grid-cols-5">{wildImages}</div>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const standard = await axios.get(
    `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${context.params.slug}&set=standard&sort=manaCost:asc&collectible=1&pageSize=999&access_token=${process.env.API_TOKEN}`
  );
  const wild = await axios.get(
    `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${context.params.slug}&set=wild&sort=manaCost:asc&collectible=1&pageSize=999&access_token=${process.env.API_TOKEN}`
  );
  return {
    props: {
      standardCards: JSON.parse(JSON.stringify(standard.data.cards)),
      wildCards: JSON.parse(JSON.stringify(wild.data.cards)),
      playClass: JSON.parse(JSON.stringify(context.params.slug)),
    },
  };
}

export default SpecificClass;
