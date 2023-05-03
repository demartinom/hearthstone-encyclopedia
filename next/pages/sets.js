import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";

const Sets = ({ setInfo }) => {
  const setNames = setInfo.map((cardSet) => <h1>{cardSet.name}</h1>);
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
      {setNames}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios.get(
    `https://us.api.blizzard.com/hearthstone/metadata/sets?locale=en_US&access_token=${process.env.API_TOKEN}`
  );
  return {
    props: {
      setInfo: JSON.parse(JSON.stringify(res.data)),
    },
  };
}

export default Sets;
