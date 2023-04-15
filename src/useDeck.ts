import { getCardDeck, getRadndomInt } from "./lib/healpers/getCardDeck";
import { useReducer } from "react";
export type stateType = { deck: string[] };
type actionType = { card: string };

function reduser(state: stateType, action: actionType): stateType {
  "  console.log(state.deck);";
  let newDeck = state.deck.filter((card) => {
    if (card == action.card) {
      return false;
    } else {
      return true;
    }
  });
  if (action.card == "newDeck") {
    return { deck: getCardDeck() };
  }

  return { deck: newDeck };
}

export function useDeck() {
  const [state, dispatch] = useReducer(reduser, {
    deck: getCardDeck(),
  });
  return () => {
    const index: number = getRadndomInt(state.deck.length);
    const card = state.deck.at(index);
    dispatch({ card } as any);
    console.log(state.deck);
    return card ?? "no card";
  };
}

export default useDeck;
