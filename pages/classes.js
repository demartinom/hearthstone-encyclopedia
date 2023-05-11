import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const Classes = ({ classData }) => {
  const classList = classData.map((gameClass) => (
    <Link href={`/classes/${gameClass.slug}`} key={gameClass.id}>
      <li className="md:text-2xl">{gameClass.name}</li>
      {gameClass.slug !== "neutral" && (
        <Image
          width={250}
          height={250}
          src={`/class-logos/${gameClass.slug}.png`}
          alt={`${gameClass.name} logo`}
        ></Image>
      )}
    </Link>
  ));
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
      <h1 className="text-center font-uncial mt-6 text-4xl md:text-5xl">
        Choose a class
      </h1>
      <div className="flex justify-center mt-10">
        <ul className="items-center inline-grid grid-cols-3 text-center gap-x-6 md:gap-x-14 gap-y-7 font-uncial">
          {classList}
        </ul>
      </div>
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
