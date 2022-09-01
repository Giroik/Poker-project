import {cards} from "../constants/cards";
import {getCardNumber} from "./getCombination";

export function setCheck(tableCards: any, playerCards: any) {
    const card1 = cards.indexOf(getCardNumber(playerCards[0])) > cards.indexOf(getCardNumber(playerCards[1])) ? getCardNumber(playerCards[0]) : getCardNumber(playerCards[1])
    const card2 = cards.indexOf(getCardNumber(playerCards[0])) < cards.indexOf(getCardNumber(playerCards[1])) ? getCardNumber(playerCards[0]) : getCardNumber(playerCards[1])
    let result: any = []
    result = result.concat(getSet(tableCards, card1, card2))
    return result.length >= 3 ? result : "false"
}

/////////////getSet//////////
export function getSet(tableCards: any, card1: string, card2: string) {
    let result1: any = [card1]
    let result2: any = [card2]
    tableCards.forEach((tCard: string) => {
        if (result2.length < 4 && result1.length < 4) {
            if (card1 != card2) {
                getCardNumber(tCard) == card1 && result1.push(card1)
                getCardNumber(tCard) == card2 && result2.push(card2)
            } else {
                getCardNumber(tCard) == card1 && result1.push(card1)
            }
        }
    })
    card1 == card2 && result1.push(card2)
    if (result1.length == result2.length && result2.length == 3) {
        return Number(card1) > Number(card2) ? result1 : result2
    }
    return result1.length > result2.length ? result1 : result2
}