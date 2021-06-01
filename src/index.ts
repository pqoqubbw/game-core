import HTMLView from './view/HTMLView';
import Game from './model/Game';
import TicTacToe from './model/TickTacToe';

const game = new Game(
  ['player One', 'player Two'],
  new TicTacToe(),
  { x: 3, y: 3 },
);

const HTMLViewGame = new HTMLView(game);

HTMLViewGame.render('.main');

// Game({
//   players: ["1", "2"],
//   new TicTacToe(),
//   size: {x: 5, y: 8},
// })

// v = new HTMLView(game)

// v.render("#root");
