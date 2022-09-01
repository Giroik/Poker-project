import {cards} from "../constants/cards";
import {getStreet} from "./street";
import {getFlash} from "./flash";
import {getCardNumber, getCardSimbol} from "./getCombination";

function streetFlashCheck(tableCards: any, playerCards: any) {
    const card1 = getCardNumber(playerCards[0])
    const card2 = getCardNumber(playerCards[1])
    const card11 = getCardSimbol(playerCards[0])
    const card22 = getCardSimbol(playerCards[1])
    let result1: any = getStreet(tableCards, card1, card2)
    if(result1!=[])
    {

    }
    let result2: any = getFlash(card11, card22, tableCards)
    let final: any = []

    return final
}