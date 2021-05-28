// import Field from './field';
// import Player from './player';
// import TicTacToe from './ticTacToe';
// import FieldView from './view/field';
// import PlayerView from './view/player';

import Field from './field';
import Game from './model/Game';
import Player from './player';

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// // const field = new FieldView(3, 3).renderField();

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const fieldView = new FieldView(3, 4).renderField();
// const players = new PlayerView(['X', 'O']).renderPlayer();
// const cells = document.querySelectorAll('.cell');

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const tictac = new TicTacToe();

// // //////////////

// // const field = new Field({ x: 3, y: 4 });

// // const playerArray = [new Player({ value: 'X' }), new Player({ value: 'Y' })];
// // console.log(playerArray);

// // const game = new Game({
// //   field: new Field({ x: 3, y: 4 }),
// //   players: [new Player({ value: 'X' }), new Player({ value: 'Y' })],
// //   Strategy: TicTacToe,
// // });

// // new HTMLGameView({game});

// // //

// class Game {
//   constructor({ field, players, Strategy }) {
//     this.strategy = new Strategy({
//       field,
//       players,
//       game: this,
//     });
//   }
// }

// // class GameView {
// //     ...,

// //     cell.onClick(() => {
// //         this.field.setValue({x, y, "x"});
// //     });
// // }

const game1 = new Game({
  field: new Field({ x: 3, y: 3 }),
  players: [new Player({ value: 'O' }), new Player({ value: 'R' })],
  Strategy: 'TicTacToe',
});

game1.init();

console.log(game1);

