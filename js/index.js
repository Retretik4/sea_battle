import { BattleFieldFactory } from "./BattleFieldFactory.js";
import { Config } from "./Config.js";
import { CoordinateFactory } from "./CoordinateFactory.js";
import { DeckFactory } from "./DeckFactory.js";
import { ShipFactory } from "./ShipFactory.js";
import { FleetRenderer } from "./FleetRenderer.js";
import { Fleet } from "./Fleet.js";

const config = new Config();
const mainContainer = document.querySelector("#main");

const battleFieldFactory = new BattleFieldFactory(mainContainer, config);
battleFieldFactory.render("my");
battleFieldFactory.render("enemy");

const coordinateFactory = new CoordinateFactory();
const deckFactory = new DeckFactory();
const shipFactory = new ShipFactory();

const fleet = new Fleet(config, coordinateFactory, deckFactory, shipFactory);
const fleetRenderer = new FleetRenderer();

const fleetMy = fleet.generate();
const fleetEnemy = fleet.generate();

fleetRenderer.render("#my", fleetMy);
fleetRenderer.render("#enemy", fleetEnemy);
