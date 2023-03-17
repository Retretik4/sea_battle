import { ElementBuilder } from "./ElementBuilder.js";
import { Coordinate } from "./Coordinate.js";

export class Cell {
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
     * @returns {HTMLElement}
     */
    create() {
        const cell = ElementBuilder
            .createElement()
            .setClassName("battle-field-cell")
            .build();
        cell.setAttribute("x", this.coordinate.x);
        cell.setAttribute("y", this.coordinate.y);
        return cell;
    }
}
