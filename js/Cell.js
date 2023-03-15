import { ElementBuilder } from "./ElementBuilder.js";

export class Cell {
    _x;
    _y;
    _elementBuilder;

    /**
     * @param {number} x
     * @param {number} y
     * @param {ElementBuilder} elementBuilder
     */
    constructor(x, y, elementBuilder) {
        this._x = x;
        this._y = y;
        this._elementBuilder = elementBuilder;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get elementBuilder() {
        return this._elementBuilder;
    }

    /**
     * @returns {HTMLElement}
     */
    create() {
        const cell = this.elementBuilder
            .createElement()
            .setClassName("battle-field-cell")
            .build();
        cell.setAttribute("x", this.x);
        cell.setAttribute("y", this.y);
        return cell;
    }
}
