import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";
import Link from "next/link";

const Sets = ({ setInfo, groupInfo }) => {
  const wildSets = setInfo.map((cardSet) => (
    <Link href={`sets/${cardSet.slug}`} key={cardSet.slug}>
      <h1 className="text-xl font-uncial">{cardSet.name}</h1>
    </Link>
  ));
  const standardSets = setInfo
    .filter((cardSet) => groupInfo[10].cardSets.includes(cardSet.slug))
    .filter((cardSet) => !groupInfo[9].cardSets.includes(cardSet.slug))
    .map((cardSet) => (
      <Link href={`sets/${cardSet.slug}`}>
        <h1 className="text-xl font-uncial">{cardSet.name}</h1>
      </Link>
    ));
  return (
    <div className="min-h-screen bg-hBeige">
      <NavBar />
      <div>
        <h1 className="mt-10 mb-10 text-4xl text-center font-uncial">
          Standard Sets
        </h1>
        <div className="grid items-center grid-cols-2 gap-10 px-8 text-center md:grid-cols-6">
          {standardSets}
        </div>
      </div>
      <div>
        <h1 className="mt-16 mb-10 text-4xl text-center font-uncial">
          Wild Sets
        </h1>
        <div className="grid items-center grid-cols-2 gap-10 px-8 pb-10 text-center md:grid-cols-6">
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
