import { cards, suit } from "../constants/cards";
import { useState } from "react";
import { stateType } from "../../App";

export function getCardDeck() {
  let deck: string[] = [];
  suit.forEach((suitItem) => {
    cards.forEach((number) => {
      deck.push(number + suitItem);
    });
  });
  return deck;
}

function getRadndomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function getCard(state: stateType, dispath: any) {
  const index: number = getRadndomInt(state.deck.length);
  const card = state.deck.at(index);
  dispath({ card });
  return card ?? "no card";
}
