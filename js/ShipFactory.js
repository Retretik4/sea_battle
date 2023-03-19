import { Ship } from "./Ship.js";
import { Deck } from "./Deck.js";

export class ShipFactory {
    /**
     * @param {Deck[]} decks
     * @returns {Ship}
     */
    build(decks) {
        return new Ship(decks);
    }
}
