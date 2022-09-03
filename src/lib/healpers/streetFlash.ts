import {getStreet} from "./street";
import {getCardNumber, getCardSimbol} from "./getCombination";


export function streetFlashCheck(tableCards: any, playerCards: any) {
    const card1 = getCardNumber(playerCards[0])
    const card2 = getCardNumber(playerCards[1])
    let result1: any = getStreet(tableCards, card1, card2)
    let combo:any=tableCards.concat(playerCards)
    let final: any = []
    for(let i=0;i<combo.length;i++)
    {
        for(let g=0;g<result1.length;g++)
        {
            if(getCardNumber(combo[i])===result1[g])
            {
                final.push(combo[i])
            }
        }
    }
    let simbol=0
    for(let i=1;i<final.length;i++)
    {
        if(getCardSimbol(final[i])===getCardSimbol(final[i-1]))
        {
            simbol++
        }
    }
    if(simbol>=4){
        return final
    }
    else{
        return false
    }


}