import React from "react";
import axios from "axios";
import NavBar from "@/components/navBar";

export default function Home({ test }) {
  return (
    <>
      <NavBar />
    </>
  );
}

export async function getServerSideProps() {
  axios.post(
    `https://us.battle.net/oauth/token?grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
  );
  return { props: { test: "" } };
}
