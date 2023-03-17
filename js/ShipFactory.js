import { Ship } from "./Ship.js";
import { Deck } from "./Deck.js";
import { Coordinate } from "./Coordinate.js";

export class ShipFactory {
    /**
     * @param {Coordinate} coordinate
     * @param {number} deckCnt
     * @param {boolean} horizontal
     * @returns {Ship}
     */
    build(coordinate, deckCnt, horizontal) {
        const decks = [];
        if (horizontal === true) {
            for (let i = coordinate.y; i < coordinate.y + deckCnt; i++) {
                decks.push(new Deck(new Coordinate(coordinate.x, i)));
            }
        }
        if (horizontal === false) {
            for (let i = coordinate.x; i < coordinate.x + deckCnt; i++) {
                decks.push(new Deck(new Coordinate(i, coordinate.y)));
            }
        }
        return new Ship(decks);
    }
}
