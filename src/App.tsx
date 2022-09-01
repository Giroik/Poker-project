import React, {useState} from 'react';
import cardsRecognition from "./lib/healpers/cardsRecognition";
import './App.css';
import {getCardDeck, getCard} from "./lib/healpers/getCardDeck";
import getCombination from "./lib/healpers/getCombination";
import Card from "./components/Card";

function App() {
  const [deck,setDeck]=useState(getCardDeck())
  const [hand, setHand]=useState<any>([])
  getCombination()
  const buttonHandler=()=>{
    let newCard=getCard(deck,setDeck)

    setHand([...hand,newCard])
  }

  return (
    <div className="App">
      <button onClick={buttonHandler}>Get card</button>
      <p>{hand.map((card:string)=><Card card={card}/>)}</p>
    </div>
  );
}

export default App;
