import { BattleField } from './BattleField.js';
import { Cell } from './Cell.js';

export class BattleFieldRenderer {
  constructor() {}

  build(lengthOnX, lengthOnY) {
    let cells = [];
    for (let i = 0; i < lengthOnX; i++) {
      for (let j = 0; j < lengthOnY; j++) {
        cells.push(new Cell(i, j));
      }
    }
    return new BattleField(cells);
  }

  render(battleField) {
    // тут будет отрисовка верстки боевого поля
  }
}
