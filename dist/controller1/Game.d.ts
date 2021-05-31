import Player from '../model1/Player';
import Strategy from '../model1/Strategy';
import Field from '../Field';
import FieldView from '../view/FieldView';
import Event from '../Event';
declare class Game {
    players: Player[];
    strategy: Strategy;
    field: Field;
    view?: FieldView;
    board: number[][];
    currentPlayerIndex: number;
    turn: number;
    isFinished: boolean;
    winnedId: number;
    updateCellEvent: Event;
    constructor(players: Player[], strategy: Strategy, field: Field);
    init(): void;
    makeMove(x: number, y: number): void;
    updateTurnAndNextPlayer(): void;
}
export default Game;
