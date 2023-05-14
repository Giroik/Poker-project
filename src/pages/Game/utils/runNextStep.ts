import cardsRecognition from "./cardsRecognition";
import {CrupiePropsType} from "./type";
import {deckObj} from "./Deck";

export function runNextStep(props: CrupiePropsType) {
    const {
        step,
        setStep,
        hands,
        table,
        setTable,
        setHands,
    } = props

    if (step == 0) {
        let data = [];
        for (let i = 0; i < 4; i++) {
            data.push([deckObj.getCard(), deckObj.getCard()]);
        }
        console.log(deckObj.getCard());
        setHands(data);
        setStep(1);
    }
    if (step === 1) {
        console.log("Blinds");
        let bank = {
            Sum: 0,
            ...Object.values(hands).map((hand) => {
                return {
                    hand,
                    steps: {blind: 0, preflop: 0, flop: 0, turn: 0, river: 0},
                };
            }),
        };

        setStep(2);
    } else if (step === 2) {
        console.log("Preflop");

        setStep(3);
    } else if (step === 3) {
        console.log("Flop");

        let data = [];
        for (let i = 0; i < 3; i++) {
            data.push(deckObj.getCard());
        }
        console.log(deckObj.getCard());
        setTable(data);

        setStep(4);
    } else if (step === 4) {
        console.log("Turn");

        setTable([...table, deckObj.getCard()]);

        setStep(5);
    } else if (step === 5) {
        console.log("River");
        setTable([...table, deckObj.getCard()]);

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
        deckObj.update();
        setStep(0);
    }
}
