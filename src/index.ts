import HTMLView from './view/HTMLView';
import Game from './model/Game';
import TicTacToe from './games/TickTacToe';

const game = new Game({
  playersList: ['player One', 'player Two'],
  strategy: new TicTacToe(),
  fieldSize: { x: 3, y: 3 },
});

const HTMLViewGame = new HTMLView(game);
HTMLViewGame.render('.main');
