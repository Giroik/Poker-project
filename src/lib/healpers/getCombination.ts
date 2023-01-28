import { pareCheck } from "./pare";
import { setCheck } from "./set";
import { checkFullHouse } from "./fullHouse";
import { streetCheck } from "./street";
import { flashCheck } from "./flash";
import { streetFlashCheck } from "./streetFlash";
import { rojalFlash } from "./rojalFlash";
import careCheck from "./care";
import { toPareCheck } from "./toPare";

const tableCards = ["5D", "13C", "10C", "11C", "12C"];
const playerCards = ["5C", "14C"];

export function getCardNumber(card: string) {
  return card.slice(0, card.length - 1);
}

export function getCardSimbol(card: string) {
  return card.slice(card.length - 1, card.length);
}

export function compareNumeric(a: number, b: number) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

//////////////////////////////////
function getCombination(hand: any, table: any) {
  const comb = {
    9: rojalFlash(table, hand),
    8: streetFlashCheck(table, hand),
    7: careCheck(table, hand),
    6: checkFullHouse(table, hand),
    5: flashCheck(table, hand),
    4: streetCheck(table, hand),
    3: setCheck(table, hand),
    2: toPareCheck(table, hand),
    1: pareCheck(table, hand),
  };

  console.log(comb);

  /*  console.log(rojalFlash(table, hand));
  console.log(streetFlashCheck(table, hand));
  console.log(careCheck(table, hand));
  console.log(checkFullHouse(table, hand));
  console.log(flashCheck(table, hand));
  console.log(streetCheck(table, hand));
  console.log(setCheck(table, hand));
  console.log(toPareCheck(table, hand));
  console.log(pareCheck(table, hand));*/
}

export default getCombination;

/*функции которые были заменены но имеют информационную ценность*/

/*const card1 = cardsValue[playerCards[0][0]] ?? playerCards[0][0]
    const card2 = cardsValue[playerCards[1][0]] ?? playerCards[1][0]*/
