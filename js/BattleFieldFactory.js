import { BattleField } from './BattleField.js';
import { Cell } from './Cell.js';

export class BattleFieldFactory {
    _lengthOnX;
    _lengthOnY;

    /**
     * @param {number} lengthOnX
     * @param {number} lengthOnY
     */
    constructor(lengthOnX, lengthOnY) {
        this._lengthOnX = lengthOnX;
        this._lengthOnY = lengthOnY;
    }

    build(lengthOnX, lengthOnY) {
        let cells = [];
        for (let i = 0; i < lengthOnX; i++) {
            for (let j = 0; j < lengthOnY; j++) {
                cells.push(new Cell(i, j));
            }
        }
        return new BattleField(cells);
    }

    buildDiv(num, strDiv) {
        let str = ``;
        for (let i = 0; i < num; i++) {
            str = str + strDiv;
        }
        return str;
    }

    buildClassInDiv(divRepeat) {
        return `<div class="${divRepeat}"></div>`;
    }

    render() {}
}
