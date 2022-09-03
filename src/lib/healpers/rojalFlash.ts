import {streetFlashCheck} from "./streetFlash";
import {getCardNumber} from "./getCombination";

export function rojalFlash(tableCards: any, playerCards: any)
{
    let result=streetFlashCheck(tableCards, playerCards)

    if(result.length==5)
    {
        for(let i=0;i<result.length;i++)
        {
            if(getCardNumber(result[i])=="14")
            {
                return result
            }
        }
    }
}