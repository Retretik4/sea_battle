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
        let isWound = false;
        console.log(this.fleet);

        for (let i = 0; i < this.fleet.length; i++) {
            for (let j = 0; j < this.fleet[i].decks.length; j++) {
                if ((+this.fleet[i].decks[j].coordinate.x === +shotX) && (+this.fleet[i].decks[j].coordinate.y === +shotY)) {
                    this.fleet[i].decks[j].died = true;
                    this.fleet[i].countDiedDecks += 1;

                    isWound = true;
                    shot.classList.add("wound");
                    event.stopPropagation();
                    shot.removeEventListener("click", this.handleShotNew);

                    const noAttackX = +this.fleet[i].decks[j].coordinate.x;
                    const noAttackY = +this.fleet[i].decks[j].coordinate.y;

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

                    if (this.fleet[i].decks.length === this.fleet[i].countDiedDecks) {
                        this.fleet[i].died = true;
                        const shipLength = this.fleet[i].decks.length;
                        const startX = this.fleet[i].decks[0].coordinate.x;
                        const startY = this.fleet[i].decks[0].coordinate.y;
                        const endX = this.fleet[i].decks[shipLength - 1].coordinate.x;
                        const endY = this.fleet[i].decks[shipLength - 1].coordinate.y;

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
            }
        }

        if (!isWound) {
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

    // create() {
    //     const shots = document.querySelectorAll("#enemy .battle-field-cell");
    //     shots.forEach(shot => {
    //         shot.addEventListener("click", this.handleShot);
    //     });
    //
    //     const decks = document.querySelectorAll("#enemy .deck");
    //     decks.forEach(deck => {
    //         deck.addEventListener("click", this.handleShotDeck);
    //     });
    //     // console.log("11111");
    //     // console.log(this.fleet[0].decks[0].coordinate);
    // }

    // /**
    //  * @param event
    //  */
    // handleShot(event) {
    //     /**
    //      * @type {HTMLDivElement}
    //      */
    //     // console.log(event);
    //     const shot = event.target;
    //     // console.log(shot);
    //     shot.classList.add("miss");
    //     // shot.classList.remove("battle-field-cell");
    //     event.stopPropagation();
    //     shot.removeEventListener("click", this.handleShot);
    //     // console.log("handleShot");
    //     // console.log(shot);
    // }
    //
    // /**
    //  * @param event
    //  */
    // handleShotDeck = event => {
    //     // /**
    //     //  * @type {HTMLDivElement}
    //     //  */
    //     const shot = event.target;
    //     shot.classList.add("wound");
    //     event.stopPropagation();
    //     shot.removeEventListener("click", this.handleShotDeck);
    //     shot.parentElement.removeEventListener("click", this.handleShot);
    //
    //     const shotX = +shot.attributes.getNamedItem("x").value;
    //     const shotY = +shot.attributes.getNamedItem("y").value;
    //
    //     console.log(this.fleet);
    //
    //     for (let i = 0; i < this.fleet.length; i++) {
    //         for (let j = 0; j < this.fleet[i].decks.length; j++) {
    //             if ((+this.fleet[i].decks[j].coordinate.x === +shotX) && (+this.fleet[i].decks[j].coordinate.y === +shotY)) {
    //                 this.fleet[i].decks[j].died = true;
    //                 this.fleet[i].countDiedDecks += 1;
    //                 if (this.fleet[i].decks.length === this.fleet[i].countDiedDecks) {
    //                     this.fleet[i].died = true;
    //                 }
    //             }
    //         }
    //     }
    // };

    //     this.fleet.forEach(decks => {
    //         decks.forEach(deck => {
    //             if (deck.find(coordinate => +coordinate.x === +shotX && +coordinate.y === +shotY)) {
    //                 this.fleet.decks.died = true;
    //             }
    //         });
    //     });
    //
    //     for (let i = shotY - 1; i < shotY + 2; i + 2) {
    //         for (let j = shotX - 1; j < shotX + 2; j + 2) {
    //             if (j > 0 && j < 11 && i > 0 && i < 11) {
    //                 this.renderCell(j, i);
    //             }
    //         }
    //     }

    // /**
    //  * @param {number} x
    //  * @param {number} y
    //  */
    // renderCell(x, y) {
    //     const str = `#enemy .battle-field-cell[x^='${x}'][y^='${y}']`;
    //     const cell = document.querySelector(str);
    //     if (`${cell.attributes.getNamedItem("class").value}` === "battle-field-cell") {
    //         cell.classList.add("no-attack");
    //         cell.removeEventListener("click", this.handleShot);
    //     }
    // }
}
