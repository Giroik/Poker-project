import getCombination from "./getCombination";
import { combNumber } from "../../App";

function cardsRecognition(cards: any, table: string[]) {
  console.log(cards, table);
  let allComb: any = {};

  Object.keys(cards).forEach((key: any) => {
    //console.log("Player ", key, ":   ", getCombination(cards[key], table));
    allComb[key] = getCombination(cards[key], table);
  });

  let sortedComb: any = Object.entries(allComb)
    .filter(([key, value]) => {
      if (value == "no combinations") {
        return false;
      }

      return true;
    })
    .sort((itema: any, itemb: any) => {
      //console.log(itema);
      if (combNumber[itema[1].name] < combNumber[itemb[1].name]) {
        return -1;
      }
      if (combNumber[itema[1].name] > combNumber[itemb[1].name]) {
        return 1;
      }
      return 0;
    });
  //console.log(sortedComb);
  console.log(
    sortedComb.filter(([key, value]: any) => {
      if (value.name != sortedComb[0][1]?.name) {
        return false;
      }
      return true;
    })
  );
}
export default cardsRecognition;
