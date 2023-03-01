import { ShipFactory } from './ShipFactory.js';
import { BattleFieldFactory } from './BattleFieldFactory.js';
import { BattleField } from './BattleField.js';
import { Config } from './Config.js';
import { Cell } from './Cell.js';

// Будет билдер, который будет строить поле(создавать ячейки и потом передавать их в конструктор при создании поля)

// battleFieldRenderer.render()

let config = new Config();

let shipFactory = new ShipFactory();

let ship = shipFactory.build(4);

console.log(ship);

let battleFieldFactory = new BattleFieldFactory();

let battleField = battleFieldFactory.build(config.lengthOnX, config.lengthOnY);

console.log(battleField);

let cell = new Cell();
let battleFieldAll = new BattleField();

// let der = (document.body.innerHTML = 'Привет');

// let der1 = document.createElement('span');
// let battleFieldRender = (document.body.innerHTML = battleFieldAll.render());

// const content = element.innerHTML;
// element.innerHTML = htmlString;

let mainElement = document.querySelector('#main');
mainElement.innerHTML = battleFieldAll.render();

let battleFieldFactory1 = new BattleFieldFactory();
let elementButtleField = document.querySelector('#my');
elementButtleField.innerHTML = battleFieldFactory1.render(
    config.lengthOnX,
    config.lengthOnY,
    config.cellSize
);
