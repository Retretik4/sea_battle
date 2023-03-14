import { BattleFieldFactory } from "./BattleFieldFactory.js";
import { ElementBuilder } from "./ElementBuilder.js";
import { Config } from "./Config.js";

const config = new Config();
const elementBuilder = new ElementBuilder();
const mainContainer = document.querySelector("#main");

const battleFieldFactory = new BattleFieldFactory(mainContainer, config, elementBuilder);
battleFieldFactory.render("my");
battleFieldFactory.render("enemy");

/**
 * @param {number} startX
 * @param {number} startY
 * @param {number} numDeck
 * @param {boolean} horizontal
 */
function renderShip(startX, startY, numDeck, horizontal) {
    const elName = [];
    if (horizontal === true) {
        for (let i = startY; i < startY + numDeck; i++) {
            const str = `#my .battle-field-cell[x^='${startX}'][y^='${i}']`;
            elName.push(document.querySelector(str));
        }
    }
    if (horizontal === false) {
        for (let i = 0; i < numDeck; i++) {
            const str = `#my .battle-field-cell[x^='${startX}'][y^='${startY}']`;
            elName.push(document.querySelector(str));
        }
    }
    elName.forEach(elem => {
        elem.appendChild(elementBuilder
            .createElement()
            .setClassName("ship")
            .build());
    });
}

renderShip(0, 3, 4, true);
renderShip(1, 1, 3, false);
renderShip(7, 2, 3, false);
renderShip(2, 9, 3, true);
renderShip(7, 10, 2, false);
renderShip(6, 6, 1, true);
