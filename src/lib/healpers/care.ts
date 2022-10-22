import { cards } from "../constants/cards";
import { getSet } from "./set";
import { getCardNumber } from "./getCombination";

function careCheck(tableCards: any, playerCards: any) {
  const card1 =
    cards.indexOf(getCardNumber(playerCards[0])) >
    cards.indexOf(getCardNumber(playerCards[1]))
      ? getCardNumber(playerCards[0])
      : getCardNumber(playerCards[1]);
  const card2 =
    cards.indexOf(getCardNumber(playerCards[0])) <
    cards.indexOf(getCardNumber(playerCards[1]))
      ? getCardNumber(playerCards[0])
      : getCardNumber(playerCards[1]);
  let result: any = [];
  result = result.concat(getSet(tableCards, card1, card2));
  return result.length >= 4 ? result : "false";
}
export default careCheck;
