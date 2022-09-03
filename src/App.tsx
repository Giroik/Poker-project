import React, {useState} from 'react';
import './App.css';
import {getCard, getCardDeck} from "./lib/healpers/getCardDeck";
import Card from "./components/Card";
import Table from "./components/Table";
import {useCrupie} from "./lib/crupie/useCrupie";

function App() {
    const [deck, setDeck] = useState(getCardDeck())
    const [hand, setHand] = useState<any>([])
    //getCombination()
    const buttonHandler = () => {
        let newCard = getCard(deck, setDeck)

        setHand([...hand, newCard])
    }
    const crupieLoop = useCrupie(deck, setDeck)

    return (
        <div className="App">
            {/*<button onClick={buttonHandler}>Get card</button>*/}
            <p>{hand.map((card: string) => <Card card={card}/>)}</p>
            <Table/>
            {/*<button onClick={crupieLoop}>Crupie Loop</button>*/}
        </div>
    );
}

export default App;
