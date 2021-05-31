import Field from './Field';
import Game from './controller1/Game';
import Player from './model1/Player';
import TicTacToe from './model1/TickTacToe';

const game = new Game(
  [new Player('player One', 'X'), new Player('player Two', 'O')],
  new TicTacToe(),
  new Field({ x: 3, y: 3 }),
);

// const view = new HTMLGameView(game);

game.init();
