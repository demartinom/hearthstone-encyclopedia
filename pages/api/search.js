import axios from "axios";

export default async (req, res) => {
  try {
    const returnedData = await axios.get(
      `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&textFilter=${req.query.name}&pageSize=999&access_token=${process.env.API_TOKEN}`
    );
    res.send(returnedData.data.cards);
  } catch (e) {
    console.log(e);
  }
};
