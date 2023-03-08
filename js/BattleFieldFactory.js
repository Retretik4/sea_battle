import { BattleField } from './BattleField.js';
import { Config } from './Config.js';
import { Cell } from './Cell.js';
import {DivCreator} from "./DivCreator.js";

export class BattleFieldFactory {
    _config;
    _divCreator;

    /**
     * @param {DivCreator} divCreator
     * @param {Config} config
     */
    constructor(config, divCreator) {
        this._config = config;
        this._divCreator = divCreator;
    }

    get config() {
        return this._config;
    }

    get divCreator() {
        return this._divCreator;
    }

    /**
     * @params {selectors} idName
     */
    render(idName) {
        let cells = [];
        for(let i = 0; i < this.config.lengthOnX; i++) {
            for(let j = 0; j < this.config.lengthOnY; j++){
                cells.push(new Cell(i,j));
            }
        };
        let renderBattleField = (new BattleField(cells, this.divCreator, this.config)).render();

        let dd = document.createElement('div');
        dd.setAttribute('id', idName);
        dd.appendChild(renderBattleField);

        let elementBattleField = document.querySelector('#main');
        return elementBattleField.append(dd);
    }
}