import { Coordinate } from "./Coordinate.js";
import { ElementBuilder } from "./ElementBuilder.js";

export class Deck {
    _died;
    _coordinate;
    /**
     * @param {Coordinate} coordinate
     */
    constructor(coordinate) {
        this._died = false;
        this._coordinate = coordinate;
    }

    get isDied() {
        return this._died;
    }

    get coordinate() {
        return this._coordinate;
    }

    set died(died) {
        this._died = died;
    }

    /**
     * @returns {HTMLElement}
     */
    create() {
        const cell = ElementBuilder
            .createElement()
            .setClassName("deck")
            .build();
        cell.setAttribute("x", this.coordinate.x);
        cell.setAttribute("y", this.coordinate.y);
        return cell;
    }
}
