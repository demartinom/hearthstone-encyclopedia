import axios from "axios";

export default async (req, res) => {
  try {
    const returnedData = await axios.get(
      `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&textFilter=kalecgos&pageSize=20&access_token=${process.env.API_TOKEN}`
    );
    res.json({ data: returnedData.data });
  } catch (e) {
    console.log(e);
  }
};
