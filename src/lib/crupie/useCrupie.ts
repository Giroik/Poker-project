import {getCard, getCardDeck} from "../healpers/getCardDeck";
import {useMemo, useState} from "react";
import {tab} from "@testing-library/user-event/dist/tab";

const stepsName = {
    1: "Blinds",
    2: "Preflop",
    3: "Flop",
    4: "Turn",
    5: "River",
    6: "Open"
}

export function crupieLoop({step, setStep, hand1, table,setTable, deck, setDeck}:{step:number, setStep:any,hand1:string[],table:string[],setTable:any, deck:string[], setDeck:any}) {
    console.log(table)

    if (step === 1) {
        console.log("Blinds")
        setStep(2)
    } else if (step === 2) {
        console.log("Preflop")
        console.log(hand1)
        setStep(3)
    } else if (step === 3) {
        console.log("Flop")
        //appendTable({table, setDeck, deck, setTable})
        setTable([ getCard(deck, setDeck), getCard(deck, setDeck), getCard(deck, setDeck)])

        console.log(table)
        setStep(4)
    } else if (step === 4) {
        console.log("Turn")
        //appendTable({table, setDeck, deck, setTable})
        setTable([...table, getCard(deck, setDeck)])
        console.log(table)
        setStep(5)
    } else if (step === 5) {
        console.log("River")
        //appendTable({table, setDeck, deck, setTable})
        setTable([...table, getCard(deck, setDeck)])
        console.log(table)
        setStep(6)
    } else if (step === 6) {
        console.log("Open")
        console.log(table)
    }

}

function appendTable({table, setDeck, deck, setTable}: any) {
    if (table?.length === 0) {
        setTable(["1","2"])
        console.log("hello Flop")
        for (let i = 0; i < 3; i++) {
            setTable([...table, getCard(deck, setDeck)])
        }
    } else if (table?.length === 3 || table?.length === 4) {
        setTable([...table, getCard(deck, setDeck)])
    }
}

export function useCrupie({step, setStep, table,setTable, deck, setDeck}:{step:number, setStep:any,table:string[],setTable:any, deck:string[], setDeck:any}) {
    const card2 = useMemo(() => getCard(deck, setDeck), [])
    const card1 = useMemo(() => getCard(deck, setDeck), [])
    const [hand1, setHand1] = useState<any>([card1, card2])

    return () => crupieLoop({step, setStep, hand1, table, setTable, deck,setDeck})
}


/*
function getFlop()
{

}
function getTurn(){

}
function getRiver()
{

}*/
