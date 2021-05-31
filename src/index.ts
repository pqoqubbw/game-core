import Field from './Field';
import Game from './controller/Game';
import Player from './model/Player';
import TicTacToe from './model/TickTacToe';
import HTMLGameView from './view/HTMLGameView';

const game = new Game(
  [new Player('player One', 'X'), new Player('player Two', 'O')],
  new TicTacToe(),
  new Field({ x: 3, y: 3 }),
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const view = new HTMLGameView(game);
