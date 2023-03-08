import {Cell} from "./Cell.js";
import {DivCreator} from "./DivCreator.js";
import {Config} from "./Config.js";

export class BattleField {
    _cells = [];
    _config;
    _divCreator;

    /**
     * @param {*[]} cells
     * @param {DivCreator} divCreator
     * @param {Config} config
     */
    constructor(cells, divCreator, config) {
        this._cells = cells;
        this._config = config;
        this._divCreator = divCreator;
    }

    get cells() {
        return this._cells;
    }

    get config() {
        return this._config;
    }

    get divCreator() {
        return this._divCreator;
    }

    /**
     * @returns {HTMLElement}
     */
    render() {

        let battleField = this.divCreator.createDivClassname("battle-field", 'grid-template: repeat(' + (this.config.lengthOnY + 1) + ', ' + this.config.cellSize + 'px) / repeat(' + (this.config.lengthOnX + 1) + ', ' + this.config.cellSize + 'px)');

        let battleFieldAbc = this.divCreator.createDivClassname("battle-field-abc", 'grid-template: repeat(1, ' + this.config.cellSize + 'px) / repeat(' + this.config.lengthOnX + ', ' + this.config.cellSize + 'px)');
        for (let i=0; i<this.config.lengthOnX; i++) {
            battleFieldAbc.appendChild(this.divCreator.createDivClassname("battle-field-abc-cell"));
        }

        let battleFieldNum = this.divCreator.createDivClassname("battle-field-num", 'grid-template: repeat(' + this.config.lengthOnY + ', ' + this.config.cellSize + 'px) / repeat(1, ' + this.config.cellSize + 'px');
        for (let i=0; i<this.config.lengthOnY; i++) {
            battleFieldNum.appendChild(this.divCreator.createDivClassname("battle-field-num-cell"));
        }

        let battleFieldCells = this.divCreator.createDivClassname("battle-field-allcell", 'grid-template: repeat(' + this.config.lengthOnY + ', ' + this.config.cellSize + 'px) / repeat(' + this.config.lengthOnX + ', ' + this.config.cellSize + 'px)');
        this.cells.forEach(/** @param {Cell} cell */(cell) => {
            battleFieldCells.appendChild(cell.render());
        });

        battleField.appendChild(battleFieldAbc);
        battleField.appendChild(battleFieldNum);
        battleField.appendChild(battleFieldCells);
        return battleField;
    }
}
