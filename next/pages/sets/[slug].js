import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";
import Image from "next/image";
import classCodes from "@/card-data/classes";
import Link from "next/link";

const GameSet = ({ setData }) => {
  const classCards = classCodes
    .map((gameClass) => [
      { name: gameClass.name },
      setData.filter((setCard) => gameClass.id == setCard.classId),
    ])
    .map((gameClass) => (
      <div className="flex flex-col items-center">
        {gameClass[1].length > 1 && (
          <h1 className="font-uncial text-center text-5xl mt-16">
            {gameClass[0].name}
          </h1>
        )}
        <div className="inline-grid grid-cols-6">
          {gameClass[1].map((setCard) => (
            <Link href={`/cards/${setCard.slug}`}>
              <Image
                src={`${setCard.image}`}
                width={225}
                height={225}
                key={setCard.slug}
              ></Image>
            </Link>
          ))}
        </div>
      </div>
    ));
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
      {classCards}
    </div>
  );
};

export async function getServerSideProps(context) {
  const setData = await axios.get(
    `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&set=${context.params.slug}&sort=groupByClass:asc,manaCost:asc&pageSize=999&access_token=${process.env.API_TOKEN}`
  );
  return { props: { setData: JSON.parse(JSON.stringify(setData.data.cards)) } };
}

export default GameSet;
