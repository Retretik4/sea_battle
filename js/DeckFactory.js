import { Coordinate } from "./Coordinate.js";
import { Deck } from "./Deck.js";

export class DeckFactory {
    /**
     * @param {Coordinate} coordinate
     * @returns {Deck}
     */
    build(coordinate) {
        return new Deck(coordinate);
    }
}
