import { cards, suit } from "../constants/cards";

export function getCardDeck() {
  let deck: string[] = [];
  suit.forEach((suitItem) => {
    cards.forEach((number) => {
      deck.push(number + suitItem);
    });
  });
  return deck;
}

export function getRadndomInt(max: number) {
  return Math.floor(Math.random() * max);
}

