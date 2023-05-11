import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";
import Image from "next/image";
import classCodes from "@/card-data/classes";
import setCodes from "@/card-data/sets";
import rarityCodes from "@/card-data/rarities";
import { minionTypeCodes, spellCodes, cardTypeCodes } from "@/card-data/types";
import { useAppContext } from "@/state";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as outlineStar } from "@fortawesome/free-regular-svg-icons";

const SingleCard = ({ cardInfo, childrenData }) => {
  function dataConvert(cardData, infoId) {
    let convertedData = cardData.filter((dataInfo) => {
      return dataInfo.id == infoId;
    });
    return convertedData[0].name;
  }
  const { favorites, setFavorites } = useAppContext();
  function addToFavorites() {
    setFavorites((prevFavorites) => [...prevFavorites, cardInfo]);
  }
  function removeFromFavorites() {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((card) => card.slug !== cardInfo.slug)
    );
  }
  React.useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  const isFavorite = favorites.filter((card) => card.slug == cardInfo.slug);
  const childCards = childrenData.map((child) => (
    <Image src={child.image} height={250} width={250}></Image>
  ));
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
      <div className="flex justify-center md:mt-20">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src={cardInfo.image}
            width={400}
            height={400}
            alt="Card image"
          ></Image>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-uncial text-center text-5xl ">
                {cardInfo.name}
                {isFavorite.length == 0 ? (
                  <FontAwesomeIcon
                    icon={outlineStar}
                    size="2xs"
                    onClick={addToFavorites}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={solidStar}
                    size="2xs"
                    onClick={removeFromFavorites}
                  />
                )}
              </h1>
            </div>
            <div className="md:w-96">
              <p className="text-lg italic text-gray-700 mt-2">
                {cardInfo.flavorText}
              </p>
              <p
                className="text-xl mt-2 mb-10"
                dangerouslySetInnerHTML={{ __html: cardInfo.text }}
              ></p>
              <p className="text-lg">
                <b>Set</b>: {dataConvert(setCodes, cardInfo.cardSetId)}
              </p>
              <p className="text-lg">
                <b>Class</b>: {dataConvert(classCodes, cardInfo.classId)}
              </p>
              {(cardInfo.cardTypeId == 3 || cardInfo.cardTypeId == 39) && (
                <p className="text-lg">
                  <b>Card Type</b>:{" "}
                  {dataConvert(cardTypeCodes, cardInfo.cardTypeId)}
                </p>
              )}
              <p className="text-lg">
                <b>Rarity</b>: {dataConvert(rarityCodes, cardInfo.rarityId)}
              </p>
              {cardInfo.spellSchoolId && (
                <p className="text-lg">
                  <b>Spell School</b>:{" "}
                  {dataConvert(spellCodes, cardInfo.spellSchoolId)}
                </p>
              )}
              {cardInfo.minionTypeId && (
                <p className="text-lg">
                  <b>Minion Type</b>:{" "}
                  {dataConvert(minionTypeCodes, cardInfo.minionTypeId)}
                </p>
              )}

              {cardInfo.multiTypeIds && (
                <p className="text-lg">
                  <b>Secondary Minion Type</b>:{" "}
                  {dataConvert(minionTypeCodes, cardInfo.multiTypeIds)}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {childrenData.length > 0 && (
        <div className="ml-7">
          <h1 className="text-4xl font-uncial my-5">Related Cards</h1>
          <div className="flex md:gap-8 flex-wrap">{childCards}</div>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  let cardData = [];
  let childrenData = [];
  await axios
    .get(
      `https://us.api.blizzard.com/hearthstone/cards/${context.params.slug}?locale=en_US&access_token=${process.env.API_TOKEN}`
    )
    .then((res) => (cardData = res.data))
    .then(async () => {
      if (cardData.childIds) {
        for (let i = 0; i < cardData.childIds.length; i++) {
          let childRes = await axios.get(
            `https://us.api.blizzard.com/hearthstone/cards/${cardData.childIds[i]}?locale=en_US&access_token=${process.env.API_TOKEN}`
          );
          childrenData.push(childRes.data);
        }
      }
    });
  return {
    props: {
      cardInfo: JSON.parse(JSON.stringify(cardData)),
      childrenData: JSON.parse(
        JSON.stringify(childrenData.filter((card) => card.collectible == 0))
      ),
    },
  };
}

export default SingleCard;
