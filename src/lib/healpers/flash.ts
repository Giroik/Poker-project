import {getCardSimbol} from "./getCombination";

export function flashCheck(tableCards: any, playerCards: any) {
    const card1 = getCardSimbol(playerCards[0])
    const card2 = getCardSimbol(playerCards[1])
    let result: any = []
    return getFlash(card1, card2, tableCards)
}

///////////getFlash/////////////////////////
export function getFlash(card1: any, card2: any, tableCards: any) {
    let result: any = []
    let final: any = []
    let simbols: any = ["D", "S", "C", "H"]
    let tellSume = 0
    result.push(card1, card2)
    tableCards.forEach((card: any) => {
        result.push(getCardSimbol(card))
    })
    for (let i = 0; i < 4; i++) {
        for (let g = 0; g < result.length; g++) {
            if (final.length < 5) {
                if (simbols[i] == result[g]) {
                    final.push(result[g])
                }
                if (g == 6 && final.length < 5) {
                    final = []
                }
            }
        }
    }
    return final.sort()

}
