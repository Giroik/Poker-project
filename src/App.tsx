import React, {useEffect, useMemo, useState} from 'react';
import './App.css';
import {getCard, getCardDeck} from "./lib/healpers/getCardDeck";
import Card from "./components/Card";
import Table from "./components/Table";
import {crupieLoop, useCrupie} from "./lib/crupie/useCrupie";
import getCombination from "./lib/healpers/getCombination";

function App() {
    const [deck, setDeck] = useState<string[]>(getCardDeck())
    const [table, setTable] = useState<any>([])

    const card2 = useMemo(() => getCard(deck, setDeck), [])
    const card1 = useMemo(() => getCard(deck, setDeck), [])
    const [hand1, setHand1] = useState<any>([card1, card2])


    const [hand, setHand] = useState<any>([])
    const [step, setStep] = useState<number>(1)
    // getCombination()
    const buttonHandler = () => {
        let newCard = getCard(deck, setDeck)

        setHand([...hand, newCard])
    }
    //const crupieLoop = useCrupie({step, setStep, table,setTable, deck, setDeck})

    return (
        <div className="App">
            <button onClick={buttonHandler}>Get card</button>
            <p>{hand.map((card: string) => <Card card={card}/>)}</p>
            <Table table={table}/>
            <button onClick={()=>crupieLoop({step, setStep, hand1, table, setTable, deck,setDeck})}>Crupie Loop</button>
        </div>
    );
}

export default App;
