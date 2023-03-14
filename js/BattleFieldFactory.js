import { BattleField } from "./BattleField.js";
import { Config } from "./Config.js";
import { Cell } from "./Cell.js";
import { ElementBuilder } from "./ElementBuilder.js";
import { Coordinate } from "./Coordinate.js";

export class BattleFieldFactory {
    _mainContainer;
    _config;

    /**
     * @param {HTMLElement} mainContainer
     * @param {Config} config
     */
    constructor(mainContainer, config) {
        this._mainContainer = mainContainer;
        this._config = config;
    }

    get mainContainer() {
        return this._mainContainer;
    }

    get config() {
        return this._config;
    }

    /**
     * @param {string} playerName
     */
    render(playerName) {
        const cells = [];
        for (let i = 0; i < this.config.lengthOnY; i++) {
            for (let j = 0; j < this.config.lengthOnX; j++) {
                cells.push(new Cell(new Coordinate(i, j)));
            }
        }
        const battleField = (new BattleField(cells, this.config)).create();

        const elementPlayerName = ElementBuilder
            .createElement()
            .setIdName(playerName)
            .build();

        elementPlayerName.appendChild(battleField);
        this.mainContainer.append(elementPlayerName);
    }
}
