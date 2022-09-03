import {getCard, getCardDeck} from "../healpers/getCardDeck";
import {useState} from "react";
import {tab} from "@testing-library/user-event/dist/tab";
const stepsName={
    1:"Blinds",
    2:"Preflop",
    3:"Flop",
    4:"Turn",
    5:"River",
    6:"Open"
}

function crupieLoop(step:any,setStep:any,hand1:any,table:any){
    if(step===1)
    {
        console.log("Blinds")
        setStep(2)
    }
    else if(step===2)
    {
        console.log("Preflop")
        console.log(hand1)
        setStep(3)
    }
    else if(step===3)
    {
        console.log("Flop")
        console.log(table)
        setStep(4)
    }
    else if(step===4)
    {
        console.log("Turn")
        console.log(table)
        setStep(5)
    }
    else if(step===5)
    {
        console.log("River")
        console.log(table)
        setStep(6)
    }
    else if(step===6)
    {
        console.log("Open")
        console.log(table)
    }

}
export function useCrupie(deck:any,setDeck:any)
{
    console.log("123")
    // const [deck,setDeck]=useState<string[]>(getCardDeck())
    //let card1=getCard(deck,setDeck)
    let card2=getCard(deck,setDeck)
    const [hand1,setHand1]=useState(["card1","card2"])
    const [table,setTable]=useState<any>([])
    const [step,setStep]=useState<number>(1)
    /*if(table.length===0)
    {
        for(let i=0;i<3;i++)
        {
            setTable([...table,getCard(deck,setDeck)])
        }
    }
    else if(table.length===3||table.length===4)
    {
        setTable([...table,getCard(deck,setDeck)])
    }*/

    return ()=>crupieLoop(step,setStep,hand1,table)
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
