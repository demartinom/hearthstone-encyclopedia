import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-3 md:px-7 py-4 text-hlOrange bg-navBarBackground bg-cover md:text-xl font-uncial">
      <Link href="/">
        <h3 className="w-20 md:w-auto">Hearthstone Encyclopedia</h3>
      </Link>
      <li className="flex justify-start w-36 md:w-auto gap-x-4 flex-wrap lg:gap-5">
        <Link href="/classes">
          <ul>Classes</ul>
        </Link>
        <Link href="/sets">
          <ul>Sets</ul>
        </Link>
        <Link href="/search">
          <ul>Search</ul>
        </Link>
        <ul>Favorites</ul>
      </li>
    </nav>
  );
};

export default NavBar;
