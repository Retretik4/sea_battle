import { ShipFactory } from "./ShipFactory.js";
import { Coordinate } from "./Coordinate.js";
import { CoordinateFactory } from "./CoordinateFactory.js";
import { Config } from "./Config.js";
import { Ship } from "./Ship.js";
import { DeckFactory } from "./DeckFactory.js";
import { Deck } from "./Deck.js";

export class Fleet {
    _config;
    _coordinateFactory;
    _deckFactory;
    _shipFactory;
    _control = [];

    /**
     * @param {Config} config
     * @param {CoordinateFactory} coordinateFactory
     * @param {DeckFactory} deckFactory
     * @param {ShipFactory} shipFactory
     */
    constructor(config, coordinateFactory, deckFactory, shipFactory) {
        this._config = config;
        this._coordinateFactory = coordinateFactory;
        this._deckFactory = deckFactory;
        this._shipFactory = shipFactory;
    }

    get config() {
        return this._config;
    }

    get control() {
        return this._control;
    }

    /**
     * @returns {Ship[]}
     */
    generate() {
        // Створюємо масив поля бою із координатами комірок
        for (let i = 0; i < this.config.lengthOnY; i++) {
            for (let j = 0; j < this.config.lengthOnX; j++) {
                this.control.push(this._coordinateFactory.build(i, j));
            }
        }

        const ships = [];
        const deckCnt = 4;
        let numShip = 0;

        for (let i = deckCnt; i > 0; i--) {
            numShip += 1;
            for (let j = 1; j <= numShip; j++) {
                const ship = this.generateShip(i);
                ships.push(ship);
                this.delOccupiedCoordinate(ship);
            }
        }

        return ships;
    }

    /**
     * @param {number} deckCnt
     * @returns {Ship}
     */
    generateShip(deckCnt) {
        let horizontal;
        let coordinate;
        let decks = [];

        do {
            horizontal = this.getRandomTrue();
            coordinate = this.control[this.getRandomNum(this.control.length)];
            // Перевірка: човен не повинен вилізти за межі поля бою
            while (this.isInvalidCoordinate(horizontal, coordinate, deckCnt)) {
                horizontal = this.getRandomTrue();
                coordinate = this.control[this.getRandomNum(this.control.length)];
            }

            decks = this.generateShipDecks(deckCnt, coordinate, horizontal);
        } while (decks.length === 0);

        return this._shipFactory.build(coordinate, deckCnt, horizontal);
    }

    /**
     * @param {boolean} horizontal
     * @param {Coordinate} coordinate
     * @param {number} deckCnt
     * @returns {boolean}
     */
    isInvalidCoordinate(horizontal, coordinate, deckCnt) {
        if (horizontal === true) {
            return coordinate.y > (this.config.lengthOnY - deckCnt);
        }
        return coordinate.x > (this.config.lengthOnX - deckCnt);
    }

    /**
     * @param {number} deckCnt
     * @param {Coordinate} coordinate
     * @param {boolean} horizontal
     * @returns {Deck[]}
     */
    generateShipDecks(deckCnt, coordinate, horizontal) {
        const decks = [];
        // Перевірка: човен не повинен налізти на вже існуючі
        if (horizontal === true) {
            for (let i = coordinate.y; i < coordinate.y + deckCnt; i++) {
                if (!(this.control.find(coord => coord.x === coordinate.x && coord.y === i))) {
                    return [];
                }
                decks.push(this._deckFactory.build(this._coordinateFactory.build(coordinate.x, i)));
            }
        } else {
            for (let i = coordinate.x; i < coordinate.x + deckCnt; i++) {
                if (!(this.control.find(coord => coord.x === i && coord.y === coordinate.y))) {
                    return [];
                }
                decks.push(this._deckFactory.build(this._coordinateFactory.build(i, coordinate.y)));
            }
        }

        return decks;
    }

    /**
     * @param {Ship} ship
     */
    delOccupiedCoordinate(ship) {
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
