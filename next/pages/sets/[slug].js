import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";
import Image from "next/image";
import classCodes from "@/card-data/classes";

const GameSet = ({ setData }) => {
  const classCards = classCodes
    .map((gameClass) => [
      { name: gameClass.name },
      setData.filter((setCard) => gameClass.id == setCard.classId),
    ])
    .map((gameClass) => (
      <div>
        {gameClass[1].length > 1 && (
          <h1 className="font-uncial">{gameClass[0].name}</h1>
        )}
        <div className="flex flex-wrap">
          {gameClass[1].map((setCard) => (
            <Image
              src={`${setCard.image}`}
              width={200}
              height={200}
              key={setCard.slug}
            ></Image>
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
