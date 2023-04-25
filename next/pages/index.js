import React from "react";
import axios from "axios";

export default function Home({ test }) {
  return <div></div>;
}

export async function getServerSideProps() {
  axios.post(
    `https://us.battle.net/oauth/token?grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
  );
  return { props: { test: "" } };
}
