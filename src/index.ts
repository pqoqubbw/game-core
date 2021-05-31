import Field from './Field';
import Game from './controller1/Game';
import Player from './model1/Player';
import TicTacToe from './model1/TickTacToe';
// import FourInTheRow from './model1/FourInTheRow';

const game = new Game(
  [new Player('Ata', 'X'), new Player('DZ', 'Y'), new Player('Denis', 'D')],
  new TicTacToe(),
  new Field({ x: 4, y: 4 }),
);

game.init();

console.log(game);
