import Strategy from './Strategy';
declare class FourInTheRow extends Strategy {
    checkWin(board: [[number]]): number;
}
export default FourInTheRow;
