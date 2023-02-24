export class Ship {
    _decks = [];

    // /**
    //  * @param {Object} objectData
    //  */
    constructor(decks) {
        this._decks = decks;
    }

    get decks() {
        return this._decks;
    }
}
