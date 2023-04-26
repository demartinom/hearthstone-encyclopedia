import React from "react";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-3 md:px-7 py-4 text-hlOrange bg-navBarBackground bg-cover md:text-xl font-uncial">
      <h3 className="w-20 md:w-auto">Hearthstone Encyclopedia</h3>
      <li className="flex justify-around w-36 md:w-auto gap-x-4 flex-wrap lg:gap-5">
        <ul>Sets</ul>
        <ul>Classes</ul>
        <ul>Search</ul>
        <ul>Favorites</ul>
      </li>
    </nav>
  );
};

export default NavBar;
