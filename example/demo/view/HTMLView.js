import Event from '../utils/Event.js';
import FieldView from './FieldView.js';
import PlayerView from './PlayerView.js';
class HTMLView {
    constructor(game, view = new FieldView(game.field.size.x, game.field.size.y), players = new PlayerView(), on = new Event()) {
        this.game = game;
        this.view = view;
        this.players = players;
        this.on = on;
        this.view.on.subscribe('move', ({ x, y }) => this.game.makeMove({ x, y }));
        this.game.on.subscribe('update', ({ x, y, sign }) => this.view.updateCell({ x, y, sign }));
        this.game.on.subscribe('win', (winner) => this.view.showWin(winner));
        this.game.on.subscribe('draw', (winner) => this.view.showWin(winner));
    }
    render(idElement) {
        this.view.renderField(idElement, 'table-bordered');
        this.players.renderPlayer(this.game.players, '.main');
        const buttonElement = document.createElement('button');
        buttonElement.innerHTML = 'start new game';
        buttonElement.onclick = () => {
            this.view.clearField();
            this.game.clearBoard();
        };
        document.body.appendChild(buttonElement);
    }
}
export default HTMLView;
