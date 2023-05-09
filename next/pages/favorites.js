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
      {favorites.length == 0 && (
        <div>
          <h1 className="font-uncial text-5xl text-center mt-32">
            No Favorites Yet!
          </h1>
        </div>
      )}
      {favorites.length > 0 && (
        <div>
          <h1 className="font-uncial text-5xl text-center mt-8">
            Your Favorites
          </h1>
          <div className="inline-grid md:gap-5 grid-cols-2 md:grid-cols-5">
            {favoritesList}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
