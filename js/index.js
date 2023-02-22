import { ShipFactory } from './ShipFactory.js';
import { BattleFieldRenderer } from './BattleFieldRenderer.js';
import { BattleField } from './BattleField.js';
import { Config } from './Config.js';

// Будет билдер, который будет строить поле(создавать ячейки и потом передавать их в конструктор при создании поля)

// battleFieldRenderer.render()

let config = new Config();

let shipFactory = new ShipFactory();

let ship = shipFactory.build(4);

console.log(ship);

let battleFieldRenderer = new BattleFieldRenderer();

let battleField = battleFieldRenderer.build(config.lengthOnX, config.lengthOnY);

console.log(battleField);
