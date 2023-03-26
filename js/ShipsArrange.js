import { ShipFactory } from "./ShipFactory.js";
import { Coordinate } from "./Coordinate.js";
import { Config } from "./Config.js";
import { Ship } from "./Ship.js";
import { Deck } from "./Deck.js";

export class ShipsArrange {
    _config;
    _control;
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

    set control(value) {
        this._control = value;
    }

    /**
     * @param {string} idPlayerName
     * @param {Ship[]} ships
     */
    render(idPlayerName, ships) {
        ships.forEach(ship => {
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
        this.control = [];
        // Створюємо масив поля бою із координатами комірок
        for (let i = 0; i < this.config.lengthOnY; i++) {
            for (let j = 0; j < this.config.lengthOnX; j++) {
                this.control.push(new Coordinate(i, j));
            }
        }

        const ships = [];
        let numShip = 0;

        for (let i = this.config.deckCnt; i > 0; i--) {
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
        let horizontal = this.generateRandomTrue();
        let coordinate = this.control[this.generateRandomNum(this.control.length)];
        let result = true;
        while (result) {
            // Перевірка: човен не повинен вилізти за межі поля бою
            while (((coordinate.x > this.config.lengthOnX - deckCnt) && horizontal === false) || (coordinate.y > this.config.lengthOnY - deckCnt && horizontal === true)) {
                horizontal = this.generateRandomTrue();
                coordinate = this.control[this.generateRandomNum(this.control.length)];
            }
            result = !this.buildDecks(deckCnt, coordinate, horizontal).length;
            if (result) {
                horizontal = this.generateRandomTrue();
                coordinate = this.control[this.generateRandomNum(this.control.length)];
            }
        }
        return (new ShipFactory()).build(this.buildDecks(deckCnt, coordinate, horizontal));
    }

    /**
     * @param {number} deckCnt
     * @param {Coordinate} coordinate
     * @param {boolean} horizontal
     * @returns {Deck[]}
     */
    buildDecks(deckCnt, coordinate, horizontal) {
        const decks = [];
        // Перевірка: човен не повинен налізти на вже існуючі
        if (horizontal === true) {
            for (let i = coordinate.y; i < coordinate.y + deckCnt; i++) {
                decks.push(new Deck(new Coordinate(coordinate.x, i)));
                if (!(this.control.find(coord => coord.x === coordinate.x && coord.y === i))) {
                    return [];
                }
            }
        }
        if (horizontal === false) {
            for (let j = coordinate.x; j < coordinate.x + deckCnt; j++) {
                decks.push(new Deck(new Coordinate(j, coordinate.y)));
                if (!(this.control.find(coord => coord.x === j && coord.y === coordinate.y))) {
                    return [];
                }
            }
        }
        return decks;
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
    generateRandomNum(maxNum) {
        return Math.floor(Math.random() * maxNum);
    }

    // Метод випадкового надання значення true/false
    /**
     * @returns {boolean}
     */
    generateRandomTrue() {
        return Math.floor(Math.random() * 2) !== 0;
    }
}
