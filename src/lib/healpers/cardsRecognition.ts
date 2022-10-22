import getCombination from "./getCombination";

function cardsRecognition(cards: any, table: string[]) {
  console.log(cards, table);

  Object.keys(cards).forEach((key: any) => {
    getCombination(cards[key], table);
  });
}
export default cardsRecognition;
