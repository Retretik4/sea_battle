import { ShipFactory } from "./ShipFactory.js";
import { Coordinate } from "./Coordinate.js";
import { Config } from "./Config.js";

export class ShipsArrange {
    _config;
    /**
     * @param {Config} config
     */
    constructor(config) {
        this._config = config;
    }

    get config() {
        return this._config;
    }

    // /**
    //  * @param {number} x
    //  * @param {number} y
    //  */
    render() {
        let horizontal;
        let coordinate;
        // Функція надання випадкового числа від 0 до maxNum-1
        /**
         * @param {number} maxNum
         * @returns {number}
         */
        function randomNum(maxNum) {
            const randomNumber = Math.floor(Math.random() * maxNum);
            if (randomNumber === maxNum) {
                randomNum(maxNum);
            }
            return randomNumber;
        }
        // Функція випадкового надання значення true/false
        /**
         * @returns {boolean}
         */
        function randomTrue() {
            const randomNumTrue = Math.floor(Math.random() * 2);
            return randomNumTrue !== 0;
        }

        // Створюємо масив поля бою із координатами комірок
        const control = [];
        for (let ir = 0; ir < this.config.lengthOnY; ir++) {
            for (let jr = 0; jr < this.config.lengthOnX; jr++) {
                control.push(new Coordinate(ir, jr));
            }
        }

        // Функція відбракування із масиву поля боя координат, які не відповідають умовам
        // this.config.lengthOnX   this.config.lengthOnY
        /**
         * @param {number} deckNum
         * @returns {{Coordinate, boolean}[]}
         // * @returns {Coordinate}
         */
        function rejection(deckNum) {
            horizontal = randomTrue();
            coordinate = control[randomNum(control.length)];
            // Перевірка: човен не повинен вилізти за межі поля бою
            if (((coordinate.x > 12 - deckNum) && horizontal === false) || (coordinate.y > 12 - deckNum && horizontal === true)) {
                rejection(deckNum);
            }
            // Перевірка: човен не повинен налізти на вже існуючі
            if (horizontal === true) {
                const ja = coordinate.x;
                for (let ia = coordinate.y; ia < coordinate.y + deckNum; ia++) {
                    if (!(control.find(coord => coord.x === ja && coord.y === ia))) {
                        rejection(deckNum);
                    }
                }
            } else {
                const ib = coordinate.y;
                for (let jb = coordinate.x; jb < coordinate.x + deckNum; jb++) {
                    if (!(control.find(coord => coord.x === jb && coord.y === ib))) {
                        rejection(deckNum);
                    }
                }
            }

            const result = [];
            result.push(coordinate);
            result.push(horizontal);

            // Видалення із масива поля бою координат човна і комірок навколо нього
            if (horizontal === true) {
                for (let ic = coordinate.y - 1; ic < coordinate.y + deckNum + 1; ic++) {
                    for (let jc = coordinate.x - 1; jc <= coordinate.x + 1; jc++) {
                        if (control.find(coord => coord.x === jc && coord.y === ic)) {
                            control.splice(control.findIndex(coord => coord.x === jc && coord.y === ic), 1);
                        }
                    }
                }
            } else {
                for (let ie = coordinate.y - 1; ie <= coordinate.y + 1; ie++) {
                    for (let je = coordinate.x - 1; je < coordinate.x + deckNum + 1; je++) {
                        if (control.find(coord => coord.x === je && coord.y === ie)) {
                            control.splice(control.findIndex(coord => coord.x === je && coord.y === ie), 1);
                        }
                    }
                }
            }
            return result;
        }

        const shipsMy = [];
        const deckCnt = 4;
        let numShip = 0;

        for (let ii = deckCnt; ii > 0; ii--) {
            numShip += 1;
            for (let jj = 1; jj <= numShip; jj++) {
                const result = rejection(ii);
                const [coordinate1, horizontal1] = result;
                shipsMy.push(new ShipFactory().build(coordinate1, ii, horizontal1));
            }
        }

        const playerName = "#my";
        shipsMy.forEach(ship => {
            ship.decks.forEach(deck => {
                const str = `${playerName} .battle-field-cell[x^='${deck.coordinate.x}'][y^='${deck.coordinate.y}']`;
                document.querySelector(str).appendChild(deck.create());
            });
        });
    }
}
