import { BattleFieldFactory } from "./BattleFieldFactory.js";
import { Config } from "./Config.js";
import { ShipsArrange } from "./ShipsArrange.js";

const config = new Config();
const mainContainer = document.querySelector("#main");

const battleFieldFactory = new BattleFieldFactory(mainContainer, config);
battleFieldFactory.render("my");
battleFieldFactory.render("enemy");

const shipsArrange = new ShipsArrange(config);
const shipsMy = shipsArrange.buildShips();
shipsArrange.render("#my", shipsMy);

const shipsEnemy = shipsArrange.buildShips();
shipsArrange.render("#enemy", shipsEnemy);
