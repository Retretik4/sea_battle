import { Ship } from "./Ship.js";
import { Deck } from "./Deck.js";
import { Coordinate } from "./Coordinate.js";

export class ShipFactory {
    _coordinate;
    /**
     * @param {Coordinate} coordinate
     */
    constructor(coordinate) {
        this._coordinate = coordinate;
    }

    get coordinate() {
        return this._coordinate;
    }

    /**
     * @param {number} deckCnt
     * @param {boolean} horizontal
     * @returns {Ship}
     */
    build(deckCnt, horizontal) {
        const decks = [];
        if (horizontal === true) {
            for (let i = this.coordinate.y; i < this.coordinate.y + deckCnt; i++) {
                decks.push(new Deck(new Coordinate(this.coordinate.x, i)));
            }
        }
        if (horizontal === false) {
            for (let i = this.coordinate.x; i < this.coordinate.x + deckCnt; i++) {
                decks.push(new Deck(new Coordinate(i, this.coordinate.y)));
            }
        }
        return new Ship(decks);
    }
}
