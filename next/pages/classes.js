import React from "react";
import NavBar from "@/components/navBar";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const Classes = ({ classData }) => {
  const classList = classData.map((gameClass) => (
    <Link href={`/classes/${gameClass.slug}`}>
      <li className="md:text-2xl">{gameClass.name}</li>
      {gameClass.slug !== "neutral" && (
        <Image
          width={300}
          height={300}
          src={`/class-logos/${gameClass.slug}.png`}
        ></Image>
      )}
    </Link>
  ));
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
      <div className="flex justify-center">
        <ul className="items-center inline-grid grid-cols-3 text-center gap-x-6 md:gap-x-14 gap-y-10 font-uncial">
          {classList}
        </ul>
      </div>
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
