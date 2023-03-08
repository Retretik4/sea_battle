import {BattleFieldFactory} from "./BattleFieldFactory.js";
import {DivCreator} from "./DivCreator.js";
import {Config} from "./Config.js";

let config = new Config();
let divCreator = new DivCreator();

(new BattleFieldFactory(config, divCreator)).render('my');
(new BattleFieldFactory(config, divCreator)).render('enemy');
