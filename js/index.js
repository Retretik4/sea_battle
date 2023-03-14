import { BattleFieldFactory } from "./BattleFieldFactory.js";
import { ElementBuilder } from "./ElementBuilder.js";
import { Config } from "./Config.js";
import { ShipFactory } from "./ShipFactory.js";

const config = new Config();
const elementBuilder = new ElementBuilder();
const mainContainer = document.querySelector("#main");

const battleFieldFactory = new BattleFieldFactory(mainContainer, config, elementBuilder);
battleFieldFactory.render("my");
battleFieldFactory.render("enemy");

const shipFactory = new ShipFactory();
shipFactory.build(4);
