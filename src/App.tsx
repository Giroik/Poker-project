import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import { getCardDeck } from "./lib/healpers/getCardDeck";
import Table from "./components/Table";
import { crupieLoop, handOver } from "./lib/crupie/useCrupie";
import { getStreet, streetCheck } from "./lib/healpers/street";
export type stateType = { deck: string[] };
type actionType = { card: string };

function reduser(state: stateType, action: actionType): stateType {
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
  console.log(streetCheck(testDeck, testHends["2"]));

  const [state, dispatch] = useReducer(reduser, {
    deck: getCardDeck(),
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

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
      <button
        onClick={() =>
          crupieLoop({
            step,
            setStep,
            hands,
            table,
            setTable,
            state,
            dispath: dispatch,
            setHands,
            pot,
            setPot,
          })
        }
      >
        Crupie Loop
      </button>
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
          console.log(e);
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          console.log(e);
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
