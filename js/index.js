import { ShipFactory } from './ShipFactory.js';
import { BattleFieldFactory } from './BattleFieldFactory.js';
import { BattleField } from './BattleField.js';
import { Config } from './Config.js';
import { Cell } from './Cell.js';

// Будет билдер, который будет строить поле(создавать ячейки и потом передавать их в конструктор при создании поля)

let config = new Config();

let shipFactory = new ShipFactory();

let ship = shipFactory.build(4);

console.log(ship);

let battleFieldFactory = new BattleFieldFactory();

let battleFieldBuild = battleFieldFactory.build(
    config.lengthOnX,
    config.lengthOnY
);

console.log(battleFieldBuild);

let cell = new Cell();
let battleField = new BattleField();

let elementButtleField = document.querySelector('#my');
elementButtleField.innerHTML = battleField.render(config.lengthOnX, config.lengthOnY, config.cellSize);

let d1 = document.querySelector('div.my-battle-field-abc');
d1.innerHTML = battleFieldFactory.buildDiv(
    config.lengthOnY,
    battleFieldFactory.buildClassInDiv('my-battle-field-abc-cell')
);

let d2 = document.querySelector('div.my-battle-field-num');
d2.innerHTML = battleFieldFactory.buildDiv(
    config.lengthOnX,
    battleFieldFactory.buildClassInDiv('my-battle-field-num-cell')
);

let d3 = document.querySelector('div.my-battle-field-allcell');
d3.innerHTML = battleFieldFactory.buildDiv(
    config.lengthOnX * config.lengthOnY,
    cell.render()
);
