import { BattleFieldFactory } from "./BattleFieldFactory.js";
import { Config } from "./Config.js";
import { ShipsArrange } from "./ShipsArrange.js";

const config = new Config();
const mainContainer = document.querySelector("#main");

const battleFieldFactory = new BattleFieldFactory(mainContainer, config);
battleFieldFactory.render("my");
battleFieldFactory.render("enemy");

// const shipFactory = new ShipFactory();
// const ship = shipFactory.build(new Coordinate(4, 3), 4, true);

const shipsArrange = new ShipsArrange(config);
shipsArrange.render();
