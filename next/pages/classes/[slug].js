import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";
import Image from "next/image";

const SpecificClass = ({ classInfo }) => {
  let cardImages = classInfo.map((gameClass) => (
    <Image
      src={`${gameClass.image}`}
      width={100}
      height={100}
      alt="card"
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
  const res = await axios.get(
    `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${context.params.slug}&collectible=1&pageSize=999&access_token=${process.env.API_TOKEN}`
  );
  return { props: { classInfo: JSON.parse(JSON.stringify(res.data.cards)) } };
}

export default SpecificClass;
