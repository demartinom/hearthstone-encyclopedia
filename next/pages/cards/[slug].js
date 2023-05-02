import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";
import Image from "next/image";
import classCodes from "@/card-data/classes";
import setCodes from "@/card-data/sets";
import rarityCodes from "@/card-data/rarities";
import minionTypeCodes from "@/card-data/minionTypes";
import spellCodes from "@/card-data/spellTypes";

const SingleCard = ({ cardInfo }) => {
  function dataConvert(cardData, infoId) {
    let convertedData = cardData.filter((dataInfo) => {
      return dataInfo.id == infoId;
    });
    return convertedData[0].name;
  }
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
      <div className="flex justify-center mt-20">
        <div className="flex items-center">
          <Image
            src={cardInfo.image}
            width={400}
            height={400}
            alt="Card image"
          ></Image>
          <div>
            <h1>{cardInfo.name}</h1>
            <p>Set: {dataConvert(setCodes, cardInfo.cardSetId)}</p>
            <p>Class: {dataConvert(classCodes, cardInfo.classId)}</p>
            <p>Rarity: {dataConvert(rarityCodes, cardInfo.rarityId)}</p>
            {cardInfo.spellSchoolId && (
              <p>
                Spell School: {dataConvert(spellCodes, cardInfo.spellSchoolId)}
              </p>
            )}
            {cardInfo.minionTypeId && (
              <p>
                Minion Type:{" "}
                {dataConvert(minionTypeCodes, cardInfo.minionTypeId)}
              </p>
            )}
            {cardInfo.multiTypeIds && (
              <p>
                Secondary Minion Type:{" "}
                {dataConvert(minionTypeCodes, cardInfo.multiTypeIds)}
              </p>
            )}
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
