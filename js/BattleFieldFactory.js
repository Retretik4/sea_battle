import { BattleField } from "./BattleField.js";
import { Config } from "./Config.js";
import { Cell } from "./Cell.js";
import { ElementBuilder } from "./ElementBuilder.js";

export class BattleFieldFactory {
    _mainContainer;
    _config;
    _elementBuilder;

    /**
     * @param {HTMLElement} mainContainer
     * @param {Config} config
     * @param {ElementBuilder} elementBuilder
     */
    constructor(mainContainer, config, elementBuilder) {
        this._mainContainer = mainContainer;
        this._config = config;
        this._elementBuilder = elementBuilder;
    }

    get mainContainer() {
        return this._mainContainer;
    }

    get config() {
        return this._config;
    }

    get elementBuilder() {
        return this._elementBuilder;
    }

    /**
     * @param {string} playerName
     */
    render(playerName) {
        const cells = [];
        for (let i = 0; i < this.config.lengthOnY; i++) {
            for (let j = 0; j < this.config.lengthOnX; j++) {
                cells.push(new Cell(i, j, this.elementBuilder));
            }
        }
        const battleField = (new BattleField(cells, this.elementBuilder, this.config)).create();

        const elementPlayerName = this.elementBuilder
            .createElement()
            .setIdName(playerName)
            .build();

        elementPlayerName.appendChild(battleField);
        this.mainContainer.append(elementPlayerName);
    }
}
