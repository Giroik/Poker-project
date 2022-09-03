import {cards, suit} from "../constants/cards";
import {useState} from "react";

export function getCardDeck()
{
    let deck:string[]=[]
    suit.forEach((suitItem)=>{
        cards.forEach((number)=>{
           deck.push(number+suitItem)
        })
    })
    return deck
}

function getRadndomInt(max:number)
{
    return Math.floor(Math.random()*max)
}

export function getCard(deck:string[],setDeck:any)
{
    const index:number=getRadndomInt(deck.length)
    setDeck(deck.filter((card)=>{
        return card!=deck.at(index)
    }))
    return deck.at(index)
}
