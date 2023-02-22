import {Ship} from "./Ship.js";
import {Deck} from "./Deck.js";

export class ShipFactory {

    constructor(){
    }

    /**
     * @param {number} deckCnt
     */
    build(deckCnt){
        let decks = [];
        for (let i = 0; i < deckCnt; i++ ) {
            decks.push(new Deck());
        }

        return new Ship(decks);
    }
}
