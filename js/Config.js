export class Config {
    _lengthOnX = 12;
    _lengthOnY = 12;
    _cellSize = 20;
    _deckCnt = 4;

    get lengthOnX() {
        return this._lengthOnX;
    }

    get lengthOnY() {
        return this._lengthOnY;
    }

    get cellSize() {
        return this._cellSize;
    }

    get deckCnt() {
        return this._deckCnt;
    }
}
