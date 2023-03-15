import { Ship } from "./Ship.js";
import { Deck } from "./Deck.js";

export class ShipFactory {
    /**
     * @param {number} deckCnt
     * @returns {Ship}
     */
    build(deckCnt) {
        const decks = [];
        for (let i = 0; i < deckCnt; i++) {
            decks.push(new Deck());
        }
        return new Ship(decks);
    }
}
