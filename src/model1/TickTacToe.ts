import Strategy from './Strategy';

class TicTacToe extends Strategy {
  getName = () :string => 'TicTacToe';

  checkWin = (board: number[][]) : number => {
    const size = board.length;
    return size - 1000;
  };
}

export default TicTacToe;
