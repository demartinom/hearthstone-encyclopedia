import React from "react";
import NavBar from "@/components/navBar";
import { useAppContext } from "@/state";
import Image from "next/image";
import Link from "next/link";

const Favorites = () => {
  const { favorites, setFavorites } = useAppContext();
  const favoritesList = favorites.map((card) => (
    <Link href={`/cards/${card.slug}`}>
      <Image src={card.image} width={250} height={250}></Image>
    </Link>
  ));
  return (
    <div className="bg-hBeige min-h-screen">
      <NavBar />
      {favoritesList}
    </div>
  );
};

export default Favorites;
