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
        let cell = document.createElement('div');
        cell.classList.add("battle-field-cell");
        cell.setAttribute('x', this.x);
        cell.setAttribute('y', this.y);
        return cell;
    }
}
