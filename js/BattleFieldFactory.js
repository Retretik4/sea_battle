import { BattleField } from './BattleField.js';
import { Config } from './Config.js';
import { Cell } from './Cell.js';
import {ElementBuilder} from "./ElementBuilder.js";

export class BattleFieldFactory {
    _id;
    _config;
    _elementBuilder;

    /**
     * @param {string} id
     * @param {Config} config
     * @param {ElementBuilder} elementBuilder
     */
    constructor(id, config, elementBuilder) {
        this._id = id;
        this._config = config;
        this._elementBuilder = elementBuilder;
    }

    get id() {
        return document.querySelector(this._id);
    }

    get config() {
        return this._config;
    }

    get elementBuilder() {
        return this._elementBuilder;
    }

    render(idName) {
        let cells = [];
        for(let i = 0; i < this.config.lengthOnY; i++) {
            for(let j = 0; j < this.config.lengthOnX; j++){
                cells.push(new Cell(i,j, this.elementBuilder));
            }
        }
        let renderBattleField = (new BattleField(cells, this.elementBuilder, this.config)).render();

        let battleFieldId = this.elementBuilder
            .createElement()
            .setIdName(idName)
            .build();

        battleFieldId.appendChild(renderBattleField);

        let elementBattleField = this.id;
        elementBattleField.append(battleFieldId);
    }
}