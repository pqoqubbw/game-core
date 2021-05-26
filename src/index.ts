// import Field from './field/index';

import TicTacToe from './ticTacToe/ticTacToe';
import FieldView from './view/field';

const game = new FieldView(9, 9).initField();

const cells = document.querySelectorAll('.cell');

const modal = new TicTacToe(cells).play('x');

