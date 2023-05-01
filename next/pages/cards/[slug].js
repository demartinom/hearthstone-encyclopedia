import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";

const SingleCard = ({ cardInfo }) => {
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get(
    `https://us.api.blizzard.com/hearthstone/cards/${context.params.slug}?locale=en_US&access_token=${process.env.API_TOKEN}`
  );
  return {
    props: { cardInfo: JSON.parse(JSON.stringify(res.data)) },
  };
}

export default SingleCard;
