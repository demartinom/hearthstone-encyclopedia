import React from "react";
import axios from "axios";
import NavBar from "@/components/navBar";
import Image from "next/image";

export default function Home({ test }) {
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
      <div className="flex flex-col items-center py-12 px-16 md:px-48 md:py-20 gap-6 font-uncial text-center text-hBrown">
        <Image
          className="drop-shadow-xl"
          src="/logo.png"
          width={325}
          height={325}
        ></Image>
        <h1 className="text-5xl md:text-6xl">Hearthstone Encyclopedia</h1>
        <h3 className="text-xl md:text-3xl">
          Here you can find a database of all cards found within the game of
          Hearthstone produced by Blizzard Entertainment.
        </h3>
        <li className="flex gap-3 md:gap-5">
          <ul>Search by Class</ul>
          <ul>Search by Set</ul>
          <ul>Search all cards</ul>
          <ul>See your favorites</ul>
        </li>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  axios.post(
    `https://us.battle.net/oauth/token?grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
  );
  return { props: { test: "" } };
}
