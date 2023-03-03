export class BattleField {
    _cells = [];

    constructor(cells) {
        this._cells = cells;
    }

    get cells() {
        return this._cells;
    }
    // нарисовать блок-рамку для поля, где будут располагаться ячейки
    // и по бокам цифры и буквы

    render(lengthOnX, lengthOnY, cellSize) {
        return `
        <div class="my-battle-field" style="grid-template: repeat(${
            lengthOnX + 1
        }, ${cellSize}px) / repeat(${lengthOnY + 1}, ${cellSize}px)">
        <div class="my-battle-field-abc" style="grid-template: repeat(1, ${cellSize}px) / repeat(${lengthOnY}, ${cellSize}px)"></div>
        <div class="my-battle-field-num" style="grid-template: repeat(${lengthOnX}, ${cellSize}px) / repeat(1, ${cellSize}px)"></div>
        <div class="my-battle-field-allcell" style="grid-template: repeat(${lengthOnX}, ${cellSize}px) / repeat(${lengthOnY}, ${cellSize}px)"></div>
        </div>`;
    }

    // /**
    //  * @param {Object} objectData
    //  */
    // run(objectData = {}){
    //     this._callback(objectData);
    // }
}
