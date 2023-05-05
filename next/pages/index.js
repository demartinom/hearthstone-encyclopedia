import React from "react";
import axios from "axios";
import NavBar from "@/components/navBar";
import Image from "next/image";
import Link from "next/link";

export default function Home({ test }) {
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
      <div className="flex flex-col items-center pt-8 md:pt-20 gap-6 font-uncial text-center text-hBrown">
        <Image
          className="drop-shadow-xl"
          src="/logo.png"
          width={325}
          height={325}
        ></Image>
        <h1 className="text-5xl lg:text-6xl">Hearthstone Encyclopedia</h1>
        <h3 className="text-xl md:text-3xl px-10 md:px-48">
          Here you can find a database of all cards found within the game of
          Hearthstone produced by Blizzard Entertainment.
        </h3>
        <li className="flex px-2 md:gap-5 md:text-2xl">
          <Link href="/classes">
            <ul>Search by Class</ul>
          </Link>
          <Link href="/sets">
            <ul>Search by Set</ul>
          </Link>
          <Link href="/search">
            <ul>Search all cards</ul>
          </Link>
          <ul>See your favorites</ul>
        </li>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  let res = await axios.post(
    `https://us.battle.net/oauth/token?grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
  );
  process.env.API_TOKEN = res.data.access_token;
  return { props: { test: "" } };
}
