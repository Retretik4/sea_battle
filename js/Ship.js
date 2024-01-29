import { Deck } from "./Deck.js";

export class Ship {
    _decks = [];
    _died;
    _countDiedDecks = 0;

    /**
     * @param {Deck[]} decks
     */
    constructor(decks) {
        this._decks = decks;
        this._died = false;
    }

    /**
     * @returns {Deck[]}
     */
    get decks() {
        return this._decks;
    }

    get isDied() {
        return this._died;
    }

    set died(died) {
        this._died = died;
    }

    get countDiedDecks() {
        return this._countDiedDecks;
    }

    set countDiedDecks(value) {
        this._countDiedDecks = value;
    }
}
