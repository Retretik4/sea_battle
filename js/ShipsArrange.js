import { ShipFactory } from "./ShipFactory.js";
import { Coordinate } from "./Coordinate.js";
import { Config } from "./Config.js";
import { Ship } from "./Ship.js";

export class ShipsArrange {
    _config;
    _control = [];
    /**
     * @param {Config} config
     */
    constructor(config) {
        this._config = config;
    }

    get config() {
        return this._config;
    }

    get control() {
        return this._control;
    }

    /**
     * @param {string} idPlayerName
     * @param {Ship[]} shipsAll
     */
    render(idPlayerName, shipsAll) {
        shipsAll.forEach(ship => {
            ship.decks.forEach(deck => {
                const str = `${idPlayerName} .battle-field-cell[x^='${deck.coordinate.x}'][y^='${deck.coordinate.y}']`;
                document.querySelector(str).appendChild(deck.create());
            });
        });
    }

    /**
     * @returns {Ship[]}
     */
    buildShips() {
        // Створюємо масив поля бою із координатами комірок
        for (let i = 0; i < this.config.lengthOnY; i++) {
            for (let j = 0; j < this.config.lengthOnX; j++) {
                this.control.push(new Coordinate(i, j));
            }
        }

        const ships = [];
        const deckCnt = 4;
        let numShip = 0;

        for (let i = deckCnt; i > 0; i--) {
            numShip += 1;
            for (let j = 1; j <= numShip; j++) {
                const ship = this.checkBuildShip(i);
                ships.push(ship);
                this.delBusyCoordinate(ship);
            }
        }
        return ships;
    }

    // Метод відбракування із масиву поля боя координат, які не відповідають умовам
    /**
     * @param {number} deckCnt
     * @returns {Ship}
     */
    checkBuildShip(deckCnt) {
        let horizontal = this.getRandomTrue();
        let coordinate = this.control[this.getRandomNum(this.control.length)];
        let result = true;
        while (result) {
            // Перевірка: човен не повинен вилізти за межі поля бою
            while (((coordinate.x > this.config.lengthOnX - deckCnt) && horizontal === false) || (coordinate.y > this.config.lengthOnY - deckCnt && horizontal === true)) {
                horizontal = this.getRandomTrue();
                coordinate = this.control[this.getRandomNum(this.control.length)];
            }
            result = this.checkCoordinate(deckCnt, coordinate, horizontal);
            if (result) {
                horizontal = this.getRandomTrue();
                coordinate = this.control[this.getRandomNum(this.control.length)];
            }
        }
        return (new ShipFactory()).build(coordinate, deckCnt, horizontal);
    }

    /**
     * @param {number} deckCnt
     * @param {Coordinate} coordinate
     * @param {boolean} horizontal
     * @returns {boolean}
     */
    checkCoordinate(deckCnt, coordinate, horizontal) {
        // Перевірка: човен не повинен налізти на вже існуючі
        if (horizontal === true) {
            for (let i = coordinate.y; i < coordinate.y + deckCnt; i++) {
                if (!(this.control.find(coord => coord.x === coordinate.x && coord.y === i))) {
                    return true;
                }
            }
        }
        if (horizontal === false) {
            for (let j = coordinate.x; j < coordinate.x + deckCnt; j++) {
                if (!(this.control.find(coord => coord.x === j && coord.y === coordinate.y))) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * @param {Ship} ship
     * @returns {Coordinate[]}
     */
    delBusyCoordinate(ship) {
        // Видалення із масива поля бою координат човна і комірок навколо нього
        ship.decks.forEach(deck => {
            for (let i = deck.coordinate.y - 1; i < deck.coordinate.y + 2; i++) {
                for (let j = deck.coordinate.x - 1; j < deck.coordinate.x + 2; j++) {
                    if (this.control.find(coordinate => coordinate.x === j && coordinate.y === i)) {
                        this.control.splice(this.control.findIndex(coordinate => coordinate.x === j && coordinate.y === i), 1);
                    }
                }
            }
        });
        return this.control;
    }

    // Метод надання випадкового числа від 0 до maxNum-1
    /**
     * @param {number} maxNum
     * @returns {number}
     */
    getRandomNum(maxNum) {
        return Math.floor(Math.random() * maxNum);
    }

    // Метод випадкового надання значення true/false
    /**
     * @returns {boolean}
     */
    getRandomTrue() {
        return Math.floor(Math.random() * 2) !== 0;
    }
}
