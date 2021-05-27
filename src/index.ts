import TicTacToe from './ticTacToe';
import FieldView from './view/field';
import PlayerView from './view/player';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const field = new FieldView(3, 3).renderField();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const players = new PlayerView(['X', 'O']).renderPlayer();

const cells = document.querySelectorAll('.cell');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tictac = new TicTacToe(cells).setHandleMove(cells);
