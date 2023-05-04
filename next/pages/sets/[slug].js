import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";
import Image from "next/image";

const GameSet = ({ setData }) => {
  const cardImages = setData.map((setCard) => (
    <Image
      src={`${setCard.image}`}
      width={200}
      height={200}
      key={setCard.slug}
    ></Image>
  ));
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
      {cardImages}
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
