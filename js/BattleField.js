export class BattleField {
    _cells = [];

    constructor(cells){
        this._cells = cells;
    }

    get cells() {
        return this._cells;
    }



    // /**
    //  * @param {Object} objectData
    //  */
    // run(objectData = {}){
    //     this._callback(objectData);
    // }
}
