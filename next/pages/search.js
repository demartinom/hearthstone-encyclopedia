import React, { useEffect } from "react";
import NavBar from "@/components/navBar";
import axios from "axios";

const Search = () => {
  useEffect(() => {
    axios
      .get("/api/search")
      .then((res) => console.log(res));
  }, []);
  return (
    <div>
      <NavBar />
    </div>
  );
};

export default Search;
