import {BattleFieldFactory} from "./BattleFieldFactory.js";
import {ElementBuilder} from "./ElementBuilder.js";
import {Config} from "./Config.js";

let config = new Config();
let elementBuilder = new ElementBuilder();

let battleFieldFactory = new BattleFieldFactory('#main', config, elementBuilder);
battleFieldFactory.render('my');
battleFieldFactory.render('enemy');
