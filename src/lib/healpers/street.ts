import { cards, cardsValue } from "../constants/cards";
import { compareNumeric, getCardNumber } from "./getCombination";

export function streetCheck(tableCards: any, playerCards: any) {
  let card1 =
    cards.indexOf(getCardNumber(playerCards[0])) >
    cards.indexOf(getCardNumber(playerCards[1]))
      ? getCardNumber(playerCards[0])
      : getCardNumber(playerCards[1]);
  let card2 =
    cards.indexOf(getCardNumber(playerCards[0])) <
    cards.indexOf(getCardNumber(playerCards[1]))
      ? getCardNumber(playerCards[0])
      : getCardNumber(playerCards[1]);

  if (Object.keys(cardsValue).includes(card1)) {
    card1 = cardsValue[card1];
  }
  if (Object.keys(cardsValue).includes(card2)) {
    card1 = cardsValue[card2];
  }
  console.log(Object.keys(cardsValue));
  return getStreet(tableCards, card1, card2);
}

//////////getStreet/////////////
export function getStreet(tableCards: any, card1: any, card2: any) {
  let all: any = [];
  tableCards.forEach((tCard: string) => {
    all.push(Number(getCardNumber(tCard)));
  });
  all.push(Number(card1), Number(card2));
  all.sort(compareNumeric);
  let result: any = [];
  all = all.filter((item: number, index: number) => {
    return all.indexOf(item) == index;
  });
  console.log(all);
  if (all.length < 5) {
    return result;
  }
  for (let i = all.length - 1; i < 0; i--) {
    if (result.length < 5) {
      if (all[i] - all[i - 1] == 1) {
        result.push(all[i]);
      } else {
        result = [];
        result.push(all[i]);
      }

      /*else {
        if (all[i - 1] - all[i] == -1) {
          result.push(all[i]);
        } else {
          result = [];
        }
      }*/
    }
  }
  // if (result.length < 5) {
  //   if (all[all.length - 2] - all[all.length - 1] == -1) {
  //     result.push(all[all.length - 1]);
  //   }
  // }
  if (result.length != 5) {
    result = [];
  }
  return result;
}
