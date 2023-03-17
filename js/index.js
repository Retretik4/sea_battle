import { BattleFieldFactory } from "./BattleFieldFactory.js";
import { Config } from "./Config.js";
import { ShipFactory } from "./ShipFactory.js";
import { Coordinate } from "./Coordinate.js";

const config = new Config();
const mainContainer = document.querySelector("#main");

const battleFieldFactory = new BattleFieldFactory(mainContainer, config);
battleFieldFactory.render("my");
battleFieldFactory.render("enemy");

const shipFactory = new ShipFactory(new Coordinate(4, 3));
const ship = shipFactory.build(4, true);

const playerName = "#my";
ship.decks.forEach(deck => {
    const str = `${playerName} .battle-field-cell[x^='${deck.coordinate.x}'][y^='${deck.coordinate.y}']`;
    document.querySelector(str).appendChild(deck.create());
});
