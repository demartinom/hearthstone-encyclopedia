import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";

const Classes = ({ classData }) => {
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios.get(
    `https://us.api.blizzard.com/hearthstone/metadata/classes?locale=en_US&access_token=${process.env.API_TOKEN}`
  );
  return { props: { classData: JSON.parse(JSON.stringify(res.data)) } };
}

export default Classes;
