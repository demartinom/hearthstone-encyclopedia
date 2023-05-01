import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";
import Image from "next/image";

const SingleCard = ({ cardInfo }) => {
  console.log(cardInfo.text);
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
      <div className="flex justify-center mt-20">
        <div className="flex items-center">
          <Image src={cardInfo.image} width={400} height={400} alt='Card image'></Image>
          <div>
            <h1>{cardInfo.name}</h1>
            <p dangerouslySetInnerHTML={{ __html: cardInfo.text }}></p>
          </div>
        </div>
      </div>
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
