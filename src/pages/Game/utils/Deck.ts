import {getCardDeck, getRadndomInt} from "./getCardDeck";

class Deck {
    coloda = getCardDeck();
    getCard = () => {
        const index: number = getRadndomInt(this.coloda.length);
        const card = this.coloda[index];
        this.coloda = this.coloda.filter((colodaCard) => {
            if (colodaCard == card) {
                return false;
            }
            return true;
        });
        return card;
    };
    update = () => {
        this.coloda = getCardDeck();
    };
}

export const deckObj = new Deck();