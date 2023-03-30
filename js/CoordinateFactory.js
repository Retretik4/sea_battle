import { Coordinate } from "./Coordinate.js";

export class CoordinateFactory {
    /**
     * @param {number} x
     * @param {number} y
     * @returns {Coordinate}
     */
    build(x, y) {
        return new Coordinate(x, y);
    }
}
