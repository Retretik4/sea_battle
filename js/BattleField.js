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

  render() {
    return '<div class="battleField"></div>';
  }

  // /**
  //  * @param {Object} objectData
  //  */
  // run(objectData = {}){
  //     this._callback(objectData);
  // }
}
