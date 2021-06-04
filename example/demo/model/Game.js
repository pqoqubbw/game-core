import Field from './Field.js';
import Event from '../utils/Event.js';
class Game {
    constructor(gameInfo, field = { size: { x: 1, y: 1 }, board: [] }, players = [], turn = 0, currentPlayerIndex = 0, isFinished = false, on = new Event()) {
        this.gameInfo = gameInfo;
        this.field = field;
        this.players = players;
        this.turn = turn;
        this.currentPlayerIndex = currentPlayerIndex;
        this.isFinished = isFinished;
        this.on = on;
        this.players = this.gameInfo.strategy.setPlayerToken(gameInfo.playersList);
        this.field = new Field(this.gameInfo.fieldSize);
        this.field.board = this.gameInfo.strategy.init(this.field.size.x, this.field.size.y);
    }
    makeMove({ x, y }) {
        const isValid = this.gameInfo.strategy.isTurnValid(this.field.board, x, y);
        if (!isValid) {
            return;
        }
        if (!this.isFinished) {
            this.on.trigger('update', { x, y, sign: this.players[this.currentPlayerIndex].sign });
            this.gameInfo.strategy.setValue(this.field.board, x, y, this.currentPlayerIndex);
        }
        const isPlayerWin = this.gameInfo.strategy.checkWin(this.field.board);
        const isCellsFulled = this.gameInfo.strategy.checkFullCells(this.field.board);
        if (isCellsFulled)
            this.on.trigger('draw', 'no ones');
        if (isPlayerWin)
            this.on.trigger('win', this.players[this.currentPlayerIndex].name);
        if (isPlayerWin || isCellsFulled) {
            this.isFinished = true;
            this.clearBoard();
        }
        else {
            this.updateTurnAndNextPlayer();
        }
    }
    updateTurnAndNextPlayer() {
        this.currentPlayerIndex = (this.turn + 1) % this.players.length;
        this.turn += 1;
    }
    clearBoard() {
        for (let i = 0; i < this.field.size.x; i += 1) {
            for (let j = 0; j < this.field.size.y; j += 1) {
                this.field.board[i][j] = 0;
            }
        }
        this.isFinished = false;
        this.turn = 0;
        this.currentPlayerIndex = 0;
    }
}
export default Game;
