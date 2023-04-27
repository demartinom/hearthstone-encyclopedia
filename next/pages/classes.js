import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const Classes = ({ classData }) => {
  const classList = classData.map((gameClass) => (
    <Link href={`/classes/${gameClass.slug}`}>
      <li>{gameClass.name}</li>
      {gameClass.slug !== "neutral" && (
        <Image
          width={100}
          height={100}
          src={`/class-logos/${gameClass.slug}.png`}
        ></Image>
      )}
    </Link>
  ));
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
      <ul className="items-center inline-grid grid-cols-3 text-center gap-6 font-uncial">
        {classList}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const res = await axios.get(
    `https://us.api.blizzard.com/hearthstone/metadata/classes?locale=en_US&access_token=${process.env.API_TOKEN}`
  );
  return { props: { classData: JSON.parse(JSON.stringify(res.data)) } };
}

export default Classes;
