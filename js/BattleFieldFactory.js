import { BattleField } from './BattleField.js';
import { Cell } from './Cell.js';
import { Config } from './Config.js';

export class BattleFieldFactory {
    _lengthOnX;
    _lengthOnY;
    _cellSize;

    /**
     * @param {number} lengthOnX
     * @param {number} lengthOnY
     * @param {number} cellSize
     */
    constructor(lengthOnX, lengthOnY, cellSize) {
        this._lengthOnX = lengthOnX;
        this._lengthOnY = lengthOnY;
        this._cellSize = cellSize;
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

    render(lengthOnX, lengthOnY, cellSize) {
        const divRepeat1 = `<div class="my-battle-field-abc-cell"></div>`;
        const divRepeat2 = `<div class="my-battle-field-num-cell"></div>`;
        const divRepeat3 = `<div class="my-battle-field-cell"></div>`;

        function buildDiv(num, strDiv) {
            let str = '';
            for (let i = 0; i < num; i++) {
                str = str + strDiv;
            }
            return str;
        }

        let mass = `<div class="my-battle-field" style="grid-template: repeat(${
            lengthOnX + 1
        }, ${cellSize}px) / repeat(${lengthOnY + 1}, ${cellSize}px)">`;

        mass =
            mass +
            `<div
                class="my-battle-field-abc"
                style="grid-template: repeat(1, ${cellSize}px) / repeat(${lengthOnY}, ${cellSize}px)"
            >`;
        mass = mass + buildDiv(lengthOnY, divRepeat1);
        mass = mass + `</div>`;

        mass =
            mass +
            `<div class="my-battle-field-num" style="grid-template: repeat(${lengthOnX}, ${cellSize}px) / repeat(1, ${cellSize}px)">`;
        mass = mass + buildDiv(lengthOnX, divRepeat2);
        mass = mass + `</div>`;

        mass =
            mass +
            `<div class="my-battle-field-allcell" style="grid-template: repeat(${lengthOnX}, ${cellSize}px) / repeat(${lengthOnY}, ${cellSize}px)">`;
        mass = mass + buildDiv(lengthOnX * lengthOnY, divRepeat3);
        mass = mass + `</div></div>`;

        return mass;
    }
}
