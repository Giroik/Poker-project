import {getSet} from "./set";
import {getPare} from "./pare";
import {getCardNumber} from "./getCombination";

export function checkFullHouse(tableCards: any, playerCards: any) {
    const card1 = getCardNumber(playerCards[0])
    const card2 = getCardNumber(playerCards[1])
    let result: any = getSet(tableCards, card1,card2)
    const filterTableCards=tableCards.filter((card:string)=>getCardNumber(card)!==result[0])
    const handCard=card1===result[0]?card2:card1
    let result2:any=getPare(filterTableCards,handCard)
    if (result.length>2 && result2[0]!="false")
    {
        return result.concat(result2)
    }

    return false

}