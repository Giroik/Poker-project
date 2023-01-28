import React, { useEffect, useState } from "react";
import "./App.css";
import { getCardDeck } from "./lib/healpers/getCardDeck";
import Table from "./components/Table";
import { crupieLoop, handOver } from "./lib/crupie/useCrupie";

function App() {
  const [deck, setDeck] = useState<string[]>(getCardDeck());
  const [table, setTable] = useState<any>([]);
  const [hands, setHands] = useState<any>();
  const [step, setStep] = useState<number>(0);
  const [pot, setPot] = useState<any>({ Sum: 0 });
  const [inputValue, setInputValue] = useState<any>(100);

  useEffect(() => {
    console.log(pot);
  }, [pot]);

  return (
    <div className="App">
      <Table table={table} cards={hands} />
      <button
        onClick={() =>
          crupieLoop({
            step,
            setStep,
            hands,
            table,
            setTable,
            deck,
            setDeck,
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
