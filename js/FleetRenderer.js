import { Ship } from "./Ship.js";

export class FleetRenderer {
    /**
     * @param {string} idPlayerName
     * @param {Ship[]} ships
     */
    render(idPlayerName, ships) {
        ships.forEach(ship => {
            ship.decks.forEach(deck => {
                const str = `${idPlayerName} .battle-field-cell[x^='${deck.coordinate.x}'][y^='${deck.coordinate.y}']`;
                document.querySelector(str).appendChild(deck.create());
            });
        });
    }
}
