import { Cell } from "./Cell.js";
import { ElementBuilder } from "./ElementBuilder.js";
import { Config } from "./Config.js";

export class BattleField {
    _cells = [];
    _config;
    _elementBuilder;

    /**
     * @param {Cell[]} cells
     * @param {ElementBuilder} elementBuilder
     * @param {Config} config
     */
    constructor(cells, elementBuilder, config) {
        this._cells = cells;
        this._config = config;
        this._elementBuilder = elementBuilder;
    }

    get cells() {
        return this._cells;
    }

    get config() {
        return this._config;
    }

    get elementBuilder() {
        return this._elementBuilder;
    }

    /**
     * @returns {HTMLElement}
     */
    create() {
        const cssText = `grid-template: repeat(${this.config.lengthOnY + 1}, ${this.config.cellSize}px) / repeat(${this.config.lengthOnX + 1}, ${this.config.cellSize}px)`;
        const battleField = this.elementBuilder
            .createElement()
            .setClassName("battle-field")
            .setCssText(cssText)
            .build();

        const cssTextAbc = `grid-template: repeat(1, ${this.config.cellSize}px) / repeat(${this.config.lengthOnX}, ${this.config.cellSize}px)`;
        const battleFieldAbc = this.elementBuilder
            .createElement()
            .setClassName("battle-field-abc")
            .setCssText(cssTextAbc)
            .build();
        for (let i = 0; i < this.config.lengthOnX; i++) {
            battleFieldAbc.appendChild(this.elementBuilder
                .createElement()
                .setClassName("battle-field-abc-cell")
                .build());
        }

        const cssTextNum = `grid-template: repeat(${this.config.lengthOnY}, ${this.config.cellSize}px) / repeat(1, ${this.config.cellSize}px`;
        const battleFieldNum = this.elementBuilder
            .createElement()
            .setClassName("battle-field-num")
            .setCssText(cssTextNum)
            .build();
        for (let i = 0; i < this.config.lengthOnY; i++) {
            battleFieldNum.appendChild(this.elementBuilder
                .createElement()
                .setClassName("battle-field-num-cell")
                .build());
        }

        const cssTextCell = `grid-template: repeat(${this.config.lengthOnY}, ${this.config.cellSize}px) / repeat(${this.config.lengthOnX}, ${this.config.cellSize}px)`;
        const battleFieldCells = this.elementBuilder
            .createElement()
            .setClassName("battle-field-allcell")
            .setCssText(cssTextCell)
            .build();
        this.cells.forEach(/** @param {Cell} cell */cell => {
            battleFieldCells.appendChild(cell.create());
        });

        battleField.appendChild(battleFieldAbc);
        battleField.appendChild(battleFieldNum);
        battleField.appendChild(battleFieldCells);
        return battleField;
    }
}
