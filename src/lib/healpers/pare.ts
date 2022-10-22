import { cards } from "../constants/cards";
import { getCardNumber } from "./getCombination";

export function getPare(tableCards: any, card: string) {
  let result = "false";
  tableCards.forEach((tCard: string) => {
    if (getCardNumber(tCard) == card) {
      result = card;
    }
  });

  return [result, result];
}

//////////PareCheck////////////

export function pareCheck(tableCards: any, playerCards: any) {
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
  //let result = ["false", "false"];
  if (getCardNumber(playerCards[0]) == getCardNumber(playerCards[1])) {
    return playerCards[0].slice(0, playerCards[0].length - 1);
  }
  if (!getPare(tableCards, card1).includes("false")) {
    return getPare(tableCards, card1);
  }
  if (!getPare(tableCards, card2).includes("false")) {
    return getPare(tableCards, card2);
  }
}
