import { Ship } from "./Ship.js";

export class Shot {
    _fleet;

    /**
     * @param {Ship[]} fleet
     */
    constructor(fleet) {
        this._fleet = fleet;
    }

    get fleet() {
        return this._fleet;
    }

    set fleet(value) {
        this._fleet = value;
    }

    createNew() {
        const shots = document.querySelectorAll("#my-enemy .battle-field-cell");
        shots.forEach(shot => {
            shot.addEventListener("click", this.handleShotNew);
        });
    }

    /**
     * @param event
     */
    handleShotNew = event => {
        // /**
        //  * @type {HTMLDivElement}
        //  */
        const shot = event.target;
        const shotX = +shot.attributes.getNamedItem("x").value;
        const shotY = +shot.attributes.getNamedItem("y").value;
        let isMiss = true;

        for (let i = 0; i < this.fleet.length; i++) {
            for (let j = 0; j < this.fleet[i].decks.length; j++) {
                if ((+this.fleet[i].decks[j].coordinate.x === +shotX) && (+this.fleet[i].decks[j].coordinate.y === +shotY)) {
                    this.fleet[i].decks[j].died = true;
                    this.fleet[i].countDiedDecks += 1;

                    isMiss = false;
                    shot.classList.add("wound");
                    event.stopPropagation();
                    shot.removeEventListener("click", this.handleShotNew);

                    const noAttackX = +this.fleet[i].decks[j].coordinate.x;
                    const noAttackY = +this.fleet[i].decks[j].coordinate.y;

                    this.renderCellNoAttack1(noAttackX, noAttackY);

                    const shipLength = this.fleet[i].decks.length;

                    if (shipLength === this.fleet[i].countDiedDecks) {
                        this.fleet[i].died = true;
                        const startX = this.fleet[i].decks[0].coordinate.x;
                        const startY = this.fleet[i].decks[0].coordinate.y;
                        const endX = this.fleet[i].decks[shipLength - 1].coordinate.x;
                        const endY = this.fleet[i].decks[shipLength - 1].coordinate.y;
                        this.renderCellNoAttack2(startX, startY, endX, endY);
                    }
                }
            }
        }

        if (isMiss) {
            shot.classList.add("miss");
            event.stopPropagation();
            shot.removeEventListener("click", this.handleShotNew);
        }
    };

    /**
     * @param {number} x
     * @param {number} y
     */
    renderCellNew(x, y) {
        const str = `#my-enemy .battle-field-cell[x^='${x}'][y^='${y}']`;
        const cell = document.querySelector(str);
        if (`${cell.attributes.getNamedItem("class").value}` === "battle-field-cell") {
            cell.classList.add("no-attack");
            cell.removeEventListener("click", this.handleShotNew);
        }
    }

    /**
     * @param {number} noAttackX
     * @param {number} noAttackY
     */
    renderCellNoAttack1(noAttackX, noAttackY) {
        if (noAttackX - 1 >= 0 && noAttackY - 1 >= 0) {
            this.renderCellNew(noAttackX - 1, noAttackY - 1);
        }
        if (noAttackX - 1 >= 0 && noAttackY + 1 < 12) {
            this.renderCellNew(noAttackX - 1, noAttackY + 1);
        }
        if (noAttackX + 1 < 12 && noAttackY - 1 >= 0) {
            this.renderCellNew(noAttackX + 1, noAttackY - 1);
        }
        if (noAttackX + 1 < 12 && noAttackY + 1 < 12) {
            this.renderCellNew(noAttackX + 1, noAttackY + 1);
        }
    }

    /**
     * @param {number} startX
     * @param {number} startY
     * @param {number} endX
     * @param {number} endY
     */
    renderCellNoAttack2(startX, startY, endX, endY) {
        if (startX === endX) {
            if (startY - 1 >= 0) {
                this.renderCellNew(startX, startY - 1);
            }
            if (endY + 1 < 12) {
                this.renderCellNew(endX, endY + 1);
            }
        }

        if (startY === endY) {
            if (startX - 1 >= 0) {
                this.renderCellNew(startX - 1, startY);
            }
            if (endX + 1 < 12) {
                this.renderCellNew(endX + 1, endY);
            }
        }
    }
}
