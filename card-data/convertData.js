export default function dataConvert(cardData, infoId) {
  let convertedData = cardData.filter((dataInfo) => {
    return dataInfo.id == infoId;
  });
  return convertedData.name;
}
