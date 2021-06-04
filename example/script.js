import { Game, TicTacToe, HTMLView } from './demo/index.js';

const game = new Game({
    playersList: ['PlayerOne', 'PlayerTwo'],
    strategy: new TicTacToe(),
    fieldSize: { x: 3, y: 3 },
});

const HTMLGameView = new HTMLView(game);
HTMLGameView.render('.main')
