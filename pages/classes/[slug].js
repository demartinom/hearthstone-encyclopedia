import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const SpecificClass = ({ standardCards, wildCards, playClass }) => {
  let standardImages = standardCards.map((gameCard) => (
    <Link href={`/cards/${gameCard.slug}`}>
      <Image
        src={`${gameCard.image}`}
        width={250}
        height={250}
        alt="card"
      ></Image>
    </Link>
  ));
  let wildImages = wildCards
    .filter((gameCard) => !gameCard.copyOfCardId)
    .map((gameCard) => (
      <Link href={`/cards/${gameCard.slug}`}>
        <Image
          src={`${gameCard.image}`}
          width={240}
          height={240}
          alt="card"
        ></Image>
      </Link>
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
      <h1 className="text-5xl md:text-7xl font-uncial text-center my-7">
        {currentClass}
      </h1>
      <div className="flex justify-center gap-4">
        <button
          className="bg-hBlue hover:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={() => {
            setCurrentCards("standard");
          }}
        >
          Standard Cards
        </button>
        <button
          className="bg-hBlue hover:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={() => {
            setCurrentCards("wild");
          }}
        >
          All Cards
        </button>
      </div>
      <div className="flex justify-center">
        {currentCards == "standard" ? (
          <div className="inline-grid md:gap-5 grid-cols-2 md:grid-cols-5">
            {standardImages}
          </div>
        ) : (
          <div className="inline-grid md:gap-7 grid-cols-2 md:grid-cols-5">
            {wildImages}
          </div>
        )}
      </div>
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
