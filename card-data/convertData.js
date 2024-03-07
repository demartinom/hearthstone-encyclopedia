export default function dataConvert(cardData, infoId) {
  const convertedData = cardData.find((dataInfo) => dataInfo.id == infoId);
  console.log(convertedData)
  return convertedData ? convertedData.name : "Unknown";
}
