import Field from './Field';
import Event from '../utils/Event';
class Game {
    constructor(gameInfo, field = { size: { x: 1, y: 1 }, board: [] }, players = [], turn = 0, currentPlayerIndex = 0, isFinished = false, event = new Event()) {
        this.gameInfo = gameInfo;
        this.field = field;
        this.players = players;
        this.turn = turn;
        this.currentPlayerIndex = currentPlayerIndex;
        this.isFinished = isFinished;
        this.event = event;
        this.players = this.gameInfo.strategy.setPlayerToken(gameInfo.playersList);
        this.field = new Field(this.gameInfo.fieldSize);
        this.field.board = this.gameInfo.strategy.init(this.field.size.x, this.field.size.y, 0);
    }
    makeMove({ x, y }) {
        const isValid = this.gameInfo.strategy.isTurnValid(this.field.board, x, y, 0);
        if (!isValid) {
            return;
        }
        if (!this.isFinished) {
            this.event.trigger('update', { x, y, sign: this.players[this.currentPlayerIndex].sign });
            this.gameInfo.strategy.setValue(this.field.board, x, y, this.currentPlayerIndex);
        }
        const isPlayerWin = this.gameInfo.strategy.checkWin(this.field.board);
        const isCellsFulled = this.gameInfo.strategy.checkFullCells(this.field.board, 0);
        if (isCellsFulled)
            this.event.trigger('draw', 'no ones');
        if (isPlayerWin)
            this.event.trigger('win', this.players[this.currentPlayerIndex].name);
        if (isPlayerWin || isCellsFulled) {
            this.isFinished = true;
        }
        else {
            this.updateTurnAndNextPlayer();
        }
    }
    updateTurnAndNextPlayer() {
        this.currentPlayerIndex = (this.turn + 1) % this.players.length;
        this.turn += 1;
    }
    clearBoard(symbolThanTableFilled) {
        for (let i = 0; i < this.field.size.x; i += 1) {
            for (let j = 0; j < this.field.size.y; j += 1) {
                this.field.board[i][j] = symbolThanTableFilled;
            }
        }
        this.isFinished = false;
        this.turn = 0;
        this.currentPlayerIndex = 0;
    }
}
export default Game;
