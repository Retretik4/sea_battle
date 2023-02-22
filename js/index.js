import {ShipFactory} from "./ShipFactory.js";
import {BattleFieldRenderer} from "./BattleFieldRenderer.js";

let battleFieldRenderer = new BattleFieldRenderer();

// Будет билдер, который будет строить поле(создавать ячейки и потом передавать их в конструктор при создании поля)

// battleFieldRenderer.render()

let shipFactory = new ShipFactory();

let ship = shipFactory.build(4);

console.log(ship);
