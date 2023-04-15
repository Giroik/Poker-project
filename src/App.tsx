import React, { useCallback, useEffect, useReducer, useState } from "react";
import "./App.css";
import { getCardDeck, getRadndomInt } from "./lib/healpers/getCardDeck";
import Table from "./components/Table";
import { crupieLoop, handOver } from "./lib/crupie/useCrupie";
import { getStreet, streetCheck } from "./lib/healpers/street";
export type stateType = { deck: string[] };
type actionType = { card: string };

class DeckObject {
  coloda = getCardDeck();
  getCard = () => {
    this.coloda = this.coloda.slice(0, Number(this.coloda.length - 2));
    console.log(this.coloda);
  };
}

const deckObj = new DeckObject();

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

export const combNumber: { [index: string]: number } = {
  "Rojal flash": 1,
  "Street Flash": 2,
  Care: 3,
  "Full house": 4,
  Flash: 5,
  Street: 6,
  Set: 7,
  "To pare": 8,
  Pare: 9,
  "No combinations": 10,
};

function App() {
  // const [deck, setDeck] = useState<string[]>(getCardDeck());
  const [table, setTable] = useState<any>([]);
  const [hands, setHands] = useState<any>();
  const [step, setStep] = useState<number>(0);
  const [pot, setPot] = useState<any>({ Sum: 0 });
  const [inputValue, setInputValue] = useState<any>(100);

  let testDeck = ["9C", "8C", "7C", "5C", "AH"];
  let testHends = {
    "0": ["7S", "2C"],
    "1": ["2C", "JC"],
    "2": ["JH", "10S"],
    "3": ["5D", "KD"],
  };

  const [state, dispatch] = useReducer(reduser, {
    deck: getCardDeck(),
  });

  useEffect(() => {
    //console.log(state);
  }, [state]);

  const onClick = () => {
    deckObj.getCard();
    deckObj.getCard();
    deckObj.getCard();
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch({ card: "AH" });
        }}
      >
        Hello, it is me
      </button>
      <Table table={table} cards={hands} />
      <button onClick={onClick}>Crupie Loop</button>
      <br />
      <br />
      <button
        onClick={() => {
          setPot({ ...pot, Sum: pot.Sum + 100 });
        }}
      >
        Raise
      </button>
      <input
        type={"text"}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key == "ArrowUp") {
            setInputValue(Number(e.target.value) + 100);
          }
          if (e.key == "ArrowDown") {
            if (Number(e.target.value) - 100 >= 100) {
              setInputValue(Number(e.target.value) - 100);
            }
          }
        }}
      />
      <button>Call</button>
      <button>Check</button>
      <button>Fold</button>
    </div>
  );
}

export default App;
