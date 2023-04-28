import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";
import Image from "next/image";

const SpecificClass = ({ classInfo }) => {
  let cardImages = classInfo
    .filter((gameCard) => !gameCard.copyOfCardId)
    // .filter((gameCard) => gameCard.cardTypeId != 4)
    .map((gameCard) => (
      <Image
        src={`${gameCard.image}`}
        width={200}
        height={200}
        alt="card"
      ></Image>
    ));
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
      <div className="grid grid-cols-5">{cardImages}</div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get(
    `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${context.params.slug}&set=standard&sort=manaCost:asc&collectible=1&pageSize=999&access_token=${process.env.API_TOKEN}`
  );
  return { props: { classInfo: JSON.parse(JSON.stringify(res.data.cards)) } };
}

export default SpecificClass;
