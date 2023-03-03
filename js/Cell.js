export class Cell {
    _x;
    _y;

    /**
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    render() {
        return `<div class="my-battle-field-cell"></div>`;
    }

    // /**
    //  * @param {Object} objectData
    //  */
    // run(objectData = {}){
    //     this._callback(objectData);
    // }
}
