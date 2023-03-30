import { Deck } from "./Deck.js";

export class Ship {
    _decks = [];

    constructor(decks) {
        this._decks = decks;
    }

    /**
     * @returns {Deck[]}
     */
    get decks() {
        return this._decks;
    }
}
