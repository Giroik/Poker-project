import {cards} from "../constants/cards";
import {getCard, getCardDeck} from "./getCardDeck";
import {getPare} from "./pare";
import {getSet} from "./set";
import {checkFullHouse} from "./fullHouse";
import {getStreet, streetCheck} from "./street";
import {getFlash} from "./flash";
import {streetFlashCheck} from "./streetFlash";
import {rojalFlash} from "./rojalFlash";

const tableCards = ["5D", "13C", "10C", "11C", "12C"]
const playerCards = ["5C", "14C"]


export function getCardNumber(card: string) {
    return card.slice(0, card.length - 1)
}

export function getCardSimbol(card: string) {
    return card.slice(card.length - 1, card.length)
}

export function compareNumeric(a: number, b: number) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}


//////////////////////////////////
function getCombination() {
    console.log(rojalFlash(tableCards, playerCards))
}

export default getCombination


/*функции которые были заменены но имеют информационную ценность*/

/*const card1 = cardsValue[playerCards[0][0]] ?? playerCards[0][0]
    const card2 = cardsValue[playerCards[1][0]] ?? playerCards[1][0]*/