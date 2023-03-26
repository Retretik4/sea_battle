import { Deck } from "./Deck.js";

export class Ship {
    _decks = [];
    /**
     * @param {Deck[]} decks
     */
    constructor(decks) {
        this._decks = decks;
    }

    get decks() {
        return this._decks;
    }
}
