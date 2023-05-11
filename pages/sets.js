import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";
import Link from "next/link";

const Sets = ({ setInfo, groupInfo }) => {
  const standardSets = setInfo
    .filter((cardSet) => groupInfo[9].cardSets.includes(cardSet.slug))
    .map((cardSet) => (
      <Link href={`sets/${cardSet.slug}`}>
        <h1 className="font-uncial text-xl">{cardSet.name}</h1>
      </Link>
    ));
  const wildSets = setInfo
    .filter((cardSet) => groupInfo[10].cardSets.includes(cardSet.slug))
    .filter((cardSet) => !groupInfo[9].cardSets.includes(cardSet.slug))
    .map((cardSet) => (
      <Link href={`sets/${cardSet.slug}`}>
        <h1 className="font-uncial text-xl">{cardSet.name}</h1>
      </Link>
    ));
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
      <div>
        <h1 className="font-uncial text-center mt-10 mb-10 text-4xl">
          Standard Sets
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center items-center px-8">
          {standardSets}
        </div>
      </div>
      <div>
        <h1 className="font-uncial text-center mb-10 mt-16 text-4xl">
          Wild Sets
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center items-center px-8 pb-10">
          {wildSets}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const [setInfoRes, groupInfoRes] = await Promise.all([
    axios.get(
      `https://us.api.blizzard.com/hearthstone/metadata/sets?locale=en_US&access_token=${process.env.API_TOKEN}`
    ),
    axios.get(
      `https://us.api.blizzard.com/hearthstone/metadata/setGroups?locale=en_US&access_token=${process.env.API_TOKEN}`
    ),
  ]);
  return {
    props: {
      setInfo: JSON.parse(JSON.stringify(setInfoRes.data)),
      groupInfo: JSON.parse(JSON.stringify(groupInfoRes.data)),
    },
  };
}

export default Sets;
