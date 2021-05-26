// import TicTacToe from '../ticTacToe/ticTacToe';
import FieldView from '../view/field';

class Service {
  constructor(
    public view: any = new FieldView(3, 3).initField(),
    // public model: any = new TicTacToe(),
  ) { }
}

export default Service;
