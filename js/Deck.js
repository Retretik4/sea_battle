export class Deck {
    _died;

    constructor(){
        this._died = false;
    }

    get isDied(){
        return this._died;
    }

    set died(died){
        this._died = died ;
    }

    // /**
    //  * @param {Object} objectData
    //  */
    // run(objectData = {}){
    //     this._callback(objectData);
    // }
}
