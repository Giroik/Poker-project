import { getCard, getCardDeck } from "../healpers/getCardDeck";
import { useMemo, useState } from "react";
import { tab } from "@testing-library/user-event/dist/tab";
import cardsRecognition from "../healpers/cardsRecognition";
import { cards } from "../constants/cards";
import { PlayerCard } from "../../components/PlayerCards/styles";
import PlayerCards from "../../components/PlayerCards";
import { stateType } from "../../App";

const stepsName = {
  1: "Blinds",
  2: "Preflop",
  3: "Flop",
  4: "Turn",
  5: "River",
  6: "Open",
};

export function crupieLoop({
  step,
  setStep,
  hands,
  table,
  setTable,
  state,
  dispath,
  setHands,
  pot,
  setPot,
}: {
  step: number;
  setStep: any;
  hands: any;
  table: string[];
  setTable: any;
  state: stateType;
  dispath: any;
  setHands: any;
  pot: any;
  setPot: any;
}) {
  if (step == 0) {
    setHands(handOver(4, state, dispath));
    setStep(1);
  }
  if (step === 1) {
    console.log("Blinds");
    let bank = {
      Sum: 0,
      ...Object.values(hands).map((hand) => {
        return {
          hand,
          steps: { blind: 0, preflop: 0, flop: 0, turn: 0, river: 0 },
        };
      }),
    };
    setPot(bank);

    console.log(bank);
    setStep(2);
  } else if (step === 2) {
    console.log("Preflop");

    setStep(3);
  } else if (step === 3) {
    console.log("Flop");
    //appendTable({table, setDeck, deck, setTable})
    setTable([
      getCard(state, dispath),
      getCard(state, dispath),
      getCard(state, dispath),
    ]);

    setStep(4);
  } else if (step === 4) {
    console.log("Turn");
    //appendTable({table, setDeck, deck, setTable})
    setTable([...table, getCard(state, dispath)]);

    setStep(5);
  } else if (step === 5) {
    console.log("River");
    //appendTable({table, setDeck, deck, setTable})
    setTable([...table, getCard(state, dispath)]);

    setStep(6);
  } else if (step === 6) {
    console.log("Open");
    cardsRecognition(hands, table);
    console.log("Раздать выйгрыш");
    setStep(7);
  } else if (step == 7) {
    console.log("Clear");
    setTable([]);
    setHands([]);
    dispath({ card: "newDeck" });
    setStep(0);
  }
}

function appendTable({ table, setDeck, deck, setTable }: any) {
  if (table?.length === 0) {
    setTable(["1", "2"]);
    console.log("hello Flop");
    for (let i = 0; i < 3; i++) {
      setTable([...table, getCard(deck, setDeck)]);
    }
  } else if (table?.length === 3 || table?.length === 4) {
    setTable([...table, getCard(deck, setDeck)]);
  }
}
export function handOver(players: number, state: stateType, dispath: any) {
  const hands: { [index: number]: string[] } = {};
  for (let i = 0; i < players; i++) {
    const card2 = getCard(state, dispath);
    const card1 = getCard(state, dispath);
    const hand = [card1, card2];
    hands[i] = hand;
  }
  return hands;
}

// export function useCrupie({
//   step,
//   setStep,
//   table,
//   setTable,
//   deck,
//   setDeck,
// }: {
//   step: number;
//   setStep: any;
//   table: string[];
//   setTable: any;
//   deck: string[];
//   setDeck: any;
// }) {
//   const card2 = useMemo(() => getCard(deck, setDeck), []);
//   const card1 = useMemo(() => getCard(deck, setDeck), []);
//   const [hand1, setHand1] = useState<any>([card1, card2]);
//   const hands = handOver(4, deck, setDeck);
//
//   return () =>
//     crupieLoop({ step, setStep, hands, table, setTable, deck, setDeck });
// }

/*
function getFlop()
{

}
function getTurn(){

}
function getRiver()
{

}*/
