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
            <h1 className="font-uncial text-5xl">{cardInfo.name}</h1>
            <div className="w-96">
              <p className="text-xl italic">{cardInfo.flavorText}</p>
              <p
                className="text-xl mb-5"
                dangerouslySetInnerHTML={{ __html: cardInfo.text }}
              ></p>
              <p className="text-lg">
                Set: {dataConvert(setCodes, cardInfo.cardSetId)}
              </p>
              <p className="text-lg">
                Class: {dataConvert(classCodes, cardInfo.classId)}
              </p>
              <p className="text-lg">
                Rarity: {dataConvert(rarityCodes, cardInfo.rarityId)}
              </p>
              {cardInfo.spellSchoolId && (
                <p className="text-lg">
                  Spell School:{" "}
                  {dataConvert(spellCodes, cardInfo.spellSchoolId)}
                </p>
              )}
              {cardInfo.minionTypeId && (
                <p className="text-lg">
                  Minion Type:{" "}
                  {dataConvert(minionTypeCodes, cardInfo.minionTypeId)}
                </p>
              )}
              {cardInfo.multiTypeIds && (
                <p className="text-lg">
                  Secondary Minion Type:{" "}
                  {dataConvert(minionTypeCodes, cardInfo.multiTypeIds)}
                </p>
              )}
            </div>
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
