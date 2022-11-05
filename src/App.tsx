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
  const [bank, setBank] = useState<any>();

  useEffect(() => {
    console.log(bank);
  }, [bank]);

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
            bank,
            setBank,
          })
        }
      >
        Crupie Loop
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          console.log(bank);

          setBank({ ...bank, Sum: bank.Sum + 100 });
          //bank["0"];

          //bank?.["0"]?.steps?.blind && bank?.["0"]?.steps?.blind = 100;
        }}
      >
        Raise
      </button>
      <button>Call</button>
      <button>Check</button>
      <button>Fold</button>
    </div>
  );
}

export default App;
