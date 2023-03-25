import { BattleFieldFactory } from "./BattleFieldFactory.js";
import { Config } from "./Config.js";
import { ShipsArrange } from "./ShipsArrange.js";

const config = new Config();
const mainContainer = document.querySelector("#main");

const battleFieldFactory = new BattleFieldFactory(mainContainer, config);
battleFieldFactory.render("my");
battleFieldFactory.render("enemy");

const shipsArrangeMy = new ShipsArrange(config);
const shipsMy = shipsArrangeMy.buildShips();
shipsArrangeMy.render("#my", shipsMy);

const shipsArrangeEnemy = new ShipsArrange(config);
const shipsEnemy = shipsArrangeEnemy.buildShips();
shipsArrangeEnemy.render("#enemy", shipsEnemy);
