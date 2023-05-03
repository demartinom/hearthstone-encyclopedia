import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";

const Sets = ({ setInfo, groupInfo }) => {
  const standardSets = setInfo
    .filter((cardSet) => groupInfo[9].cardSets.includes(cardSet.slug))
    .map((cardSet) => <h1 className="font-uncial">{cardSet.name}</h1>);
  const wildSets = setInfo
    .filter((cardSet) => groupInfo[10].cardSets.includes(cardSet.slug))
    .filter((cardSet) => !groupInfo[9].cardSets.includes(cardSet.slug))
    .map((cardSet) => <h1 className="font-uncial">{cardSet.name}</h1>);
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
      <div>
        <h1 className="font-uncial text-center mb-5 text-2xl">Standard Sets</h1>
        <div className="flex flex-wrap gap-10 justify-center px-4">
          {" "}
          {standardSets}
        </div>
      </div>
      <div>
        <h1 className="font-uncial text-center mb-5 mt-5 text-2xl">
          Wild Sets
        </h1>
        <div className="flex flex-wrap gap-10 justify-center px-4">
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
