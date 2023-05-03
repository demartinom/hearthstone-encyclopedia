import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";

const GameSet = ({ setData }) => {
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
    </div>
  );
};

export async function getServerSideProps(context) {
  const setData = await axios.get(
    `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&set=${context.params.slug}&sort=groupByClass%3Aasc&pageSize=999&access_token=${process.env.API_TOKEN}`
  );
  return { props: { setData: JSON.parse(JSON.stringify(setData.data.cards)) } };
}

export default GameSet;
