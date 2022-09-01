import {cards} from "../constants/cards";
import {getPare} from "./pare";
import {getCardNumber} from "./getCombination";

export function toPareCheck(tableCards: any, playerCards: any) {
    const card1 = cards.indexOf(getCardNumber(playerCards[0])) > cards.indexOf(getCardNumber(playerCards[1])) ? getCardNumber(playerCards[0]) : getCardNumber(playerCards[1])
    const card2 = cards.indexOf(getCardNumber(playerCards[0])) < cards.indexOf(getCardNumber(playerCards[1])) ? getCardNumber(playerCards[0]) : getCardNumber(playerCards[1])
    let result = []


    getPare(tableCards, card2)[1] != "false" && result.push(card2)
    getPare(tableCards, card1)[1] != "false" && result.push(card1)

    return result.length == 2 ? result : "false"
}